
'use strict';

const FacternClient = require('../dist/factern-client-bundle');
const superagent = require('superagent');
const assert = require('assert');
const randomstring = require('randomstring');

const LOGIN = '000000007468435AED4A078972FE3A4E4F53B6F4FB90751D';

var ApiClient;
var FactsApi;

before(() => {

  return new Promise((resolve, reject) => {
    ApiClient = FacternClient.ApiClient.instance;
    const OAuth2 = ApiClient.authentications['OAuth2'];

    superagent
      .post('https://factern-test.eu.auth0.com/oauth/token')
      .set('Content-Type', 'application/json')
      .send({
        client_id: "iGqdQKPPvrt52GiBRk6DqFwGHWTV5o9y",
        client_secret: process.env.FACTERN_CLIENT_SECRET,
        audience: "https://api.factern.com",
        grant_type: "client_credentials"
      })
      .end((err, res) => {
        if (err) {
          reject(err);
        } else {
          OAuth2.accessToken = res.body.access_token;
          FactsApi  = new FacternClient.FactsApi();
          resolve();
        }
      }
    );
  });
});

describe('Create Entity', function() {

  describe('Create Basic Entities', function() {

    it('should create two entities using promises', function(done) {
      Promise.all([
        callFacternEndpointPromise(FactsApi.createEntity.bind(FactsApi), new FacternClient.CreateNamedRequest()),
        callFacternEndpointPromise(FactsApi.createEntity.bind(FactsApi), FacternClient.CreateNamedRequest.constructFromObject({
          name: randomstring.generate(20)
        }))
      ]).then(function(result) {
          assert.equal(2, result.length);
          for (var i = 0; i < result.length; ++i) {
            verifyEntity(result[i].data);
          }
          assert.ok(result[0].data.name === undefined);
          assert.ok(result[1].data.name !== undefined);
          done();
        },
        (err) => done(err));
    });

  });

});

describe('Fields', function() {

  it('should create a field', function(done) {
    callFacternEndpointPromise(FactsApi.createEntity.bind(FactsApi), new FacternClient.CreateNamedRequest())
    .then((entityResponse) => {
      verifyEntity(entityResponse.data);
      const parentId = entityResponse.data.nodeId;
      callFacternEndpointPromise(FactsApi.createField.bind(FactsApi), FacternClient.CreateFieldRequest.constructFromObject({
        parentId: parentId,
        name: randomstring.generate(10)
      }))
      .then((fieldResponse) => {
        verifyField(fieldResponse.data);
        done();
      },
      (err) => done(err));
    },
    (err) => done(err));
  });

  it('should write to a field', function(done) {
    callFacternEndpointPromise(FactsApi.createEntity.bind(FactsApi), new FacternClient.CreateNamedRequest())
    .then((entityResponse) => {
      verifyEntity(entityResponse.data);
      const parentId = entityResponse.data.nodeId;
      const fieldName = randomstring.generate(10);
      callFacternEndpointPromise(FactsApi.createField.bind(FactsApi), FacternClient.CreateFieldRequest.constructFromObject({
        parentId: parentId,
        name: fieldName
      }))
      .then((fieldResponse) => {
        assert.ok(fieldResponse.response.ok);
        verifyField(fieldResponse.data);
        const fieldId = fieldResponse.data.nodeId;
        const inlineTemplate = [];
        const values = [];
        inlineTemplate.push(fieldId);
        values.push(randomstring.generate(10));
        callFacternEndpointPromise(FactsApi.write.bind(FactsApi), FacternClient.WriteRequest.constructFromObject({
          nodeId: parentId,
          template: [ fieldId ],
          values: [ randomstring.generate(10) ]
        }))
        .then((writeResponse) => {
          const nodes = writeResponse.data;
          for (var i = 0; i < nodes.length; ++i) {
            assert.ok(writeResponse.response.ok);
            verifyFields(nodes[i], ['fieldId', 'nodeId', 'children']);
          }
          done();
        },
        (err) => done(err));
      },
      (err) => done(err));
    },
    (err) => done(err));
  });
});

describe('Create Member', function() {
  it('should create a member of a group', function(done) {
    Promise.all([
      callFacternEndpointPromise(FactsApi.createEntity.bind(FactsApi), new FacternClient.CreateNamedRequest()),
      callFacternEndpointPromise(FactsApi.createEntity.bind(FactsApi), new FacternClient.CreateNamedRequest()),
      callFacternEndpointPromise(FactsApi.createEntity.bind(FactsApi), new FacternClient.CreateNamedRequest())
    ])
    .then((responseData) => {
      for (var i = 0; i < responseData.length; ++i) {
        assert.ok(responseData[i].response.ok);
      }
      const entityId1 = responseData[0].data.nodeId;
      const entityId2 = responseData[1].data.nodeId;
      const entityId3 = responseData[2].data.nodeId;
      callFacternEndpointPromise(FactsApi.createGroup.bind(FactsApi), FacternClient.CreateGroupRequest.constructFromObject({
        memberFactType: 'Entity',
        memberIds: [ entityId1, entityId2 ],
        name: randomstring.generate(10)
      }))
      .then((groupResponse) => {
        assert.ok(groupResponse.response.ok);
        const groupId = groupResponse.data.nodeId;
        callFacternEndpointPromise(FactsApi.addMember.bind(FactsApi), FacternClient.CreateMemberRequest.constructFromObject({
          parentId: groupId,
          memberId: entityId3
        }))
        .then((addMemberResponse) => {
          assert.ok(addMemberResponse.response.ok);
          done();
        });
      },
      (err) => done(err));
    },
    (err) => done(err));
  })
});

describe('Create Bid', function() {
  it('should create a bid', function(done) {
    callFacternEndpointPromise(FactsApi.createEntity.bind(FactsApi), new FacternClient.CreateNamedRequest())
    .then((responseData) => {
      assert.ok(responseData.response.ok);
      const entityId = responseData.data.nodeId;

      const request = FacternClient.CreatePriceRequest.constructFromObject({
        targetNodeId: entityId,
        type: 'Fixed',
        policy: {
          actions: []
        },
        priceDetails: {
          value: 100
        }
      });
      /* Hack due to price request using permission policy document without required effect */
      delete request.policy.effect;
      /* Hack due to a quirk in the way the policy document tries to convert the enum */
      request.policy.actions = [ FacternClient.PermissionAction.Read ];

      callFacternEndpointPromise(FactsApi.createPrice.bind(FactsApi), request)
      .then((createPriceResponse) => {
        assert.ok(createPriceResponse.response.ok);
        const priceNodeId = createPriceResponse.data.nodeId;
        callFacternEndpointPromise(FactsApi.bid.bind(FactsApi), new FacternClient.CreateBidRequest(priceNodeId))
        .then((createBidResponse) => {
          assert.ok(createBidResponse.response.ok);
          done();
        },
        (err) => done(err));
      },
      (err) => done(err));
    },
    (err) => done(err));
  })
});

describe('Create Alias', function() {
  it('should create an alias', function(done) {
    callFacternEndpointPromise(FactsApi.createEntity.bind(FactsApi), new FacternClient.CreateNamedRequest())
    .then((responseData) => {
      assert.ok(responseData.response.ok);
      const nodeId = responseData.data.nodeId;
      callFacternEndpointPromise(FactsApi.createAlias.bind(FactsApi), FacternClient.CreateAliasRequest.constructFromObject({
        local: false,
        name: randomstring.generate(10),
        targetNodeId: nodeId
      }))
      .then((aliasResponseData) => {
        assert.ok(aliasResponseData.response.ok);
        done();
      },
      (err) => done(err))
    },
    (err) => done(err));
  })
});

describe('Create Application', function() {
  it('should create an application', function(done) {
    callFacternEndpointPromise(FactsApi.createApplication.bind(FactsApi), FacternClient.CreateApplicationRequest.constructFromObject({
      name: randomstring.generate(10)
    }))
    .then((responseData) => {
      assert.ok(responseData.response.ok);
      done();
    },
    (err) => done(err));
  })
});

describe('Create Domain', function() {
  it('should create a domain', function(done) {
    callFacternEndpointPromise(FactsApi.createDomain.bind(FactsApi), FacternClient.CreateDomainRequest.constructFromObject({
      addFact: { url: 'https://example.com/add' },
      getFact: { url: 'https://example.com/get' },
      queryFacts: { url: 'https://example.com/query' },
      name: randomstring.generate(10)
    }))
    .then((responseData) => {
      assert.ok(responseData.response.ok);
      done();
    }, (err) => {
      done(err);
    });
  })
});

describe('Create Filter', function() {
  it('should create a filter', function(done) {
    callFacternEndpointPromise(FactsApi.createEntity.bind(FactsApi), new FacternClient.CreateNamedRequest())
    .then((responseData) => {
      assert.ok(responseData.response.ok);
      done();
    }, (err) => {
      done(err);
    });
  })
});

describe('Create Group', function() {
  it('should create a group with members', function(done) {
    Promise.all([
      callFacternEndpointPromise(FactsApi.createEntity.bind(FactsApi), FacternClient.CreateNamedRequest.constructFromObject({})),
      callFacternEndpointPromise(FactsApi.createEntity.bind(FactsApi), FacternClient.CreateNamedRequest.constructFromObject({}))
    ])
    .then((responseData) => {
      for (var i = 0; i < responseData.length; ++i) {
        assert.ok(responseData[i].response.ok);
      }
      const entityId1 = responseData[0].data.nodeId;
      const entityId2 = responseData[1].data.nodeId;
      callFacternEndpointPromise(FactsApi.createGroup.bind(FactsApi), FacternClient.CreateGroupRequest.constructFromObject({
        memberFactType: 'Entity',
        memberIds: [ entityId1, entityId2 ],
        name: randomstring.generate(10)
      }))
      .then((groupResponse) => {
        assert.ok(groupResponse.response.ok);
        done();
      },
      (err) => done(err));
    },
    (err) => done(err));
  })
});

describe('Create Information', function() {
  it('should create an information node', function(done) {
    callFacternEndpointPromise(FactsApi.createEntity.bind(FactsApi), new FacternClient.CreateNamedRequest())
    .then((responseData) => {
      assert.ok(responseData.response.ok);
      const parentId = responseData.data.nodeId;
      callFacternEndpointPromise(FactsApi.createField.bind(FactsApi), FacternClient.CreateFieldRequest.constructFromObject({
        parentId: parentId,
        name: randomstring.generate(10)
      }))
      .then((createFieldResponse) => {
        assert.ok(createFieldResponse.response.ok);
        const fieldId = createFieldResponse.data.nodeId;
        callFacternEndpointPromise(FactsApi.createInformation.bind(FactsApi), FacternClient.CreateInformationRequest.constructFromObject({
          parentId: parentId,
          fieldId: fieldId,
          data: randomstring.generate(10)
        }))
        .then((createInformationResponse) => {
          assert.ok(createInformationResponse.response.ok);
          done();
        },
        (err) => done(err));
      },
      (err) => done(err));
    },
    (err) => done(err));
  })
});

describe('Create Interface', function() {
  it('should create an interface', function(done) {
    callFacternEndpointPromise(FactsApi.createInterface.bind(FactsApi), FacternClient.CreateInterfaceRequest.constructFromObject({
      addData: { url: 'https://example.com/add' },
      getData: { url: 'https://example.com/get' },
      deleteData: { url: 'https://example.com/delete' },
      name: randomstring.generate(10)
    }))
    .then((responseData) => {
      assert.ok(responseData.response.ok);
      done();
    }, (err) => {
      done(err);
    });
  })
});

describe('Create Label List', function() {
  it('should create a label list', function(done) {
    callFacternEndpointPromise(FactsApi.createLabelList.bind(FactsApi), FacternClient.CreateLabelListRequest.constructFromObject({
      name: randomstring.generate(10),
      members: [
        randomstring.generate(10),
        randomstring.generate(10)
      ]
    }))
    .then((responseData) => {
      assert.ok(responseData.response.ok);
      done();
    }, (err) => {
      done(err);
    });
  })
});

describe('Create Mirror', function() {
  it('should create a mirror', function(done) {
    Promise.all([
      callFacternEndpointPromise(FactsApi.createEntity.bind(FactsApi), new FacternClient.CreateNamedRequest()),
      callFacternEndpointPromise(FactsApi.createEntity.bind(FactsApi), new FacternClient.CreateNamedRequest())
    ])
    .then((responseData) => {
      assert.ok(responseData[0].response.ok);
      assert.ok(responseData[1].response.ok);
      const srcEntityId = responseData[0].data.nodeId;
      const targetEntityId = responseData[1].data.nodeId;
      callFacternEndpointPromise(FactsApi.createField.bind(FactsApi), FacternClient.CreateFieldRequest.constructFromObject({
        parentId: srcEntityId,
        uniqueByParent: true,
        name: randomstring.generate(10)
      }))
      .then((fieldCreateResponse) => {
        assert.ok(fieldCreateResponse.response.ok);
        const fieldId = fieldCreateResponse.data.nodeId;
        Promise.all([
          callFacternEndpointPromise(FactsApi.createInformation.bind(FactsApi), FacternClient.CreateInformationRequest.constructFromObject({
            parentId: srcEntityId,
            fieldId: fieldId,
            data: randomstring.generate(10)
          })),
          callFacternEndpointPromise(FactsApi.createTemplate.bind(FactsApi), FacternClient.CreateTemplateRequest.constructFromObject({
            name: randomstring.generate(10),
            memberIds: [ fieldId ]
          }))
        ]).then((createResponse) => {
          assert.ok(createResponse[0].response.ok);
          assert.ok(createResponse[1].response.ok);
          const templateId = createResponse[1].data.nodeId;
          callFacternEndpointPromise(FactsApi.createMirror.bind(FactsApi), FacternClient.CreateMirrorRequest.constructFromObject({
            sourceNodeId: srcEntityId,
            destinationNodeId: targetEntityId,
            templateId: templateId
          }))
          .then((createMirrorResponse) => {
            assert.ok(createMirrorResponse.response.ok);
            done();
          },
          (err) => done(err));
        },
        (err) => done(err));
      },
      (err) => done(err));
    },
    (err) => done(err));
  })
});

describe('Create Price', function() {
  it('should create a price', function(done) {
    callFacternEndpointPromise(FactsApi.createEntity.bind(FactsApi), new FacternClient.CreateNamedRequest())
    .then((responseData) => {
      assert.ok(responseData.response.ok);
      const entityId = responseData.data.nodeId;

      const request = FacternClient.CreatePriceRequest.constructFromObject({
        targetNodeId: entityId,
        type: 'Fixed',
        policy: {
          actions: []
        },
        priceDetails: {
          value: 100
        }
      });
      /* Hack due to price request using permission policy document without required effect */
      delete request.policy.effect;
      /* Hack due to a quirk in the way the policy document tries to convert the enum */
      request.policy.actions = [ FacternClient.PermissionAction.Read ];

      callFacternEndpointPromise(FactsApi.createPrice.bind(FactsApi), request)
      .then((createPriceResponse) => {
        assert.ok(createPriceResponse.response.ok);
        done();
      },
      (err) => done(err));
    },
    (err) => done(err));
  })
});

describe('Create Scope', function() {
  it('should create a scope', function(done) {
    callFacternEndpointPromise(FactsApi.createEntity.bind(FactsApi), new FacternClient.CreateNamedRequest())
    .then((responseData) => {
      assert.ok(responseData.response.ok);
      const nodeId = responseData.data.nodeId;
      Promise.all([
        callFacternEndpointPromise(FactsApi.createField.bind(FactsApi), FacternClient.CreateFieldRequest.constructFromObject({
          parentId: nodeId,
          name: randomstring.generate(10)
        })),
        callFacternEndpointPromise(FactsApi.createField.bind(FactsApi), FacternClient.CreateFieldRequest.constructFromObject({
          parentId: nodeId,
          name: randomstring.generate(10)
        }))
      ]).then((createFieldsResponse) => {
        assert.ok(createFieldsResponse[0].response.ok);
        assert.ok(createFieldsResponse[1].response.ok);
        const field1 = createFieldsResponse[0].data.nodeId;
        const field2 = createFieldsResponse[1].data.nodeId;
        callFacternEndpointPromise(FactsApi.createTemplate.bind(FactsApi), FacternClient.CreateTemplateRequest.constructFromObject({
          name: randomstring.generate(10),
          memberIds: [ field1, field2 ]
        }))
        .then((createTemplateResponse) => {
          assert.ok(createTemplateResponse.response.ok);
          const templateId = createTemplateResponse.data.nodeId;
          callFacternEndpointPromise(FactsApi.createScope.bind(FactsApi), FacternClient.CreateScopeRequest.constructFromObject({
            name: randomstring.generate(10),
            templateIds: [ templateId ]
          }))
          .then((createScopeResponse) => {
            assert.ok(createScopeResponse.response.ok);
            done();
          },
          (err) => done(err));
        },
        (err) => done(err));
      },
      (err) => done(err));
    },
    (err) => done(err));
  })
});

describe('Create Statement', function() {
  it('should create a statement', function(done) {
    callFacternEndpointPromise(FactsApi.createEntity.bind(FactsApi), new FacternClient.CreateNamedRequest())
    .then((responseData) => {
      assert.ok(responseData.response.ok);
      const nodeId = responseData.data.nodeId;
      Promise.all([
        callFacternEndpointPromise(FactsApi.createApplication.bind(FactsApi), FacternClient.CreateApplicationRequest.constructFromObject({
          name: randomstring.generate(10)
        })),
        callFacternEndpointPromise(FactsApi.createField.bind(FactsApi), FacternClient.CreateFieldRequest.constructFromObject({
          parentId: nodeId,
          name: randomstring.generate(10)
        })),
        callFacternEndpointPromise(FactsApi.createField.bind(FactsApi), FacternClient.CreateFieldRequest.constructFromObject({
          parentId: nodeId,
          name: randomstring.generate(10)
        }))
      ]).then((createFieldsResponse) => {
        assert.ok(createFieldsResponse[0].response.ok);
        assert.ok(createFieldsResponse[1].response.ok);
        assert.ok(createFieldsResponse[2].response.ok);
        const appNodeId = createFieldsResponse[0].data.nodeId;
        const field1 = createFieldsResponse[1].data.nodeId;
        const field2 = createFieldsResponse[2].data.nodeId;
        callFacternEndpointPromise(FactsApi.createTemplate.bind(FactsApi), FacternClient.CreateTemplateRequest.constructFromObject({
          name: randomstring.generate(10),
          memberIds: [ field1, field2 ]
        }))
        .then((createTemplateResponse) => {
          assert.ok(createTemplateResponse.response.ok);
          const templateId = createTemplateResponse.data.nodeId;
          callFacternEndpointPromise(FactsApi.createScope.bind(FactsApi), FacternClient.CreateScopeRequest.constructFromObject({
            name: randomstring.generate(10),
            templateIds: [ templateId ]
          }))
          .then((createScopeResponse) => {
            assert.ok(createScopeResponse.response.ok);
            const scopeId = createScopeResponse.data.nodeId;
            callFacternEndpointPromise(FactsApi.createStatement.bind(FactsApi), FacternClient.AddStatementRequest.constructFromObject({
              targetNodeId: appNodeId,
              actionId: 'frn:predicate:factern:requiresScope',
              actionQualifierId: scopeId
            }))
            .then((createStatementResponse) => {
              assert.ok(createStatementResponse.response.ok);
              done();
            },
            (err) => done(err));
          },
          (err) => done(err));
        },
        (err) => done(err));
      },
      (err) => done(err));
    },
    (err) => done(err));
  })
});

describe('Create Template', function() {
  it('should create a template', function(done) {
    callFacternEndpointPromise(FactsApi.createEntity.bind(FactsApi), new FacternClient.CreateNamedRequest())
    .then((responseData) => {
      assert.ok(responseData.response.ok);
      const nodeId = responseData.data.nodeId;
      Promise.all([
        callFacternEndpointPromise(FactsApi.createField.bind(FactsApi), FacternClient.CreateFieldRequest.constructFromObject({
          parentId: nodeId,
          name: randomstring.generate(10)
        })),
        callFacternEndpointPromise(FactsApi.createField.bind(FactsApi), FacternClient.CreateFieldRequest.constructFromObject({
          parentId: nodeId,
          name: randomstring.generate(10)
        }))
      ]).then((createFieldsResponse) => {
        assert.ok(createFieldsResponse[0].response.ok);
        assert.ok(createFieldsResponse[1].response.ok);
        const field1 = createFieldsResponse[0].data.nodeId;
        const field2 = createFieldsResponse[1].data.nodeId;
        callFacternEndpointPromise(FactsApi.createTemplate.bind(FactsApi), FacternClient.CreateTemplateRequest.constructFromObject({
          name: randomstring.generate(10),
          memberIds: [ field1, field2 ]
        }))
        .then((createTemplateResponse) => {
          assert.ok(createTemplateResponse.response.ok);
          done();
        },
        (err) => done(err));
      },
      (err) => done(err));
    },
    (err) => done(err));
  })
});

describe('Delete Node', function() {
  it('should delete a node', function(done) {
    callFacternEndpointPromise(FactsApi.createEntity.bind(FactsApi), new FacternClient.CreateNamedRequest())
    .then((responseData) => {
      assert.ok(responseData.response.ok);
      callFacternEndpointPromise(FactsApi.deleteNode.bind(FactsApi), FacternClient.NodeIdRequest.constructFromObject({
        nodeId: responseData.data.nodeId
      }))
      .then((deleteResponse) => {
        assert.ok(deleteResponse.response.ok);
        done();
      });
    }, (err) => {
      done(err);
    });
  })
});

describe('Delete', function() {
  it('should delete', function(done) {
    callFacternEndpointPromise(FactsApi.createEntity.bind(FactsApi), new FacternClient.CreateNamedRequest())
    .then((responseData) => {
      assert.ok(responseData.response.ok);
      const parentId = responseData.data.nodeId;
      callFacternEndpointPromise(FactsApi.createField.bind(FactsApi), FacternClient.CreateFieldRequest.constructFromObject({
        parentId: parentId,
        name: randomstring.generate(10)
      }))
      .then((createFieldResponse) => {
        assert.ok(createFieldResponse.response.ok);
        const fieldId = createFieldResponse.data.nodeId;
        callFacternEndpointPromise(FactsApi.createInformation.bind(FactsApi), FacternClient.CreateInformationRequest.constructFromObject({
          parentId: parentId,
          fieldId: fieldId,
          data: randomstring.generate(10)
        }))
        .then((createInformationResponse) => {
          assert.ok(createInformationResponse.response.ok);
          const informationNodeId = createInformationResponse.data.nodeId;
          callFacternEndpointPromise(FactsApi.callDelete.bind(FactsApi), FacternClient.DeleteRequest.constructFromObject({
            nodeId: parentId,
            template: [ fieldId ]
          }))
          .then((deleteResponse) => {
            assert.ok(deleteResponse.response.ok);
            assert.equal(1, deleteResponse.data.items.length);
            assert.equal(200, deleteResponse.data.items[0].status);
            done();
          },
          (err) => done(err));
        },
        (err) => done(err));
      },
      (err) => done(err));
    },
    (err) => done(err));
  })
});

describe('Describe', function() {
  it('should do a describe on a node', function(done) {
    callFacternEndpointPromise(FactsApi.createEntity.bind(FactsApi), new FacternClient.CreateNamedRequest())
    .then((responseData) => {
      assert.ok(responseData.response.ok);
      const nodeId = responseData.data.nodeId;
      callFacternEndpointPromise(FactsApi.describe.bind(FactsApi), FacternClient.DescribeRequest.constructFromObject({
        nodeId: nodeId
      }))
      .then((describeResponse) => {
        assert.ok(describeResponse.response.ok);
        assert.ok(describeResponse.data.node !== undefined);
        assert.ok(describeResponse.data.children !== undefined);
        assert.ok(describeResponse.data.children.nodes !== undefined);
        assert.equal(0, describeResponse.data.children.nodes.length);
        done();
      },
      (err) => done(err));
    },
    (err) => done(err));
  })
});

describe('History', function() {
  it('should get the history of a node', function(done) {
    callFacternEndpointPromise(FactsApi.createEntity.bind(FactsApi), new FacternClient.CreateNamedRequest())
    .then((responseData) => {
      assert.ok(responseData.response.ok);
      const nodeId = responseData.data.nodeId;
      callFacternEndpointPromise(FactsApi.history.bind(FactsApi), FacternClient.NodeIdRequest.constructFromObject({
        nodeId: nodeId
      }))
      .then((historyResponse) => {
        assert.ok(historyResponse.response.ok);
        assert.ok(historyResponse.data.nodes !== undefined);
        assert.equal(1, historyResponse.data.nodes.length);
        done();
      });
    }, (err) => {
      done(err);
    });
  })
});

describe('Label a Node', function() {
  it('should label a node', function(done) {
    Promise.all([
      callFacternEndpointPromise(FactsApi.createEntity.bind(FactsApi), FacternClient.CreateNamedRequest.constructFromObject({})),
      callFacternEndpointPromise(FactsApi.createLabelList.bind(FactsApi), FacternClient.CreateLabelListRequest.constructFromObject({
        name: randomstring.generate(10),
        members: [
          randomstring.generate(10),
          randomstring.generate(10)
        ]
      }))
    ])
    .then((responseData) => {
      assert.ok(responseData[0].response.ok);
      assert.ok(responseData[1].response.ok);
      const nodeId = responseData[0].data.nodeId;
      const labelNodeId = responseData[1].data.members[0].nodeId;
      callFacternEndpointPromise(FactsApi.label.bind(FactsApi), FacternClient.AddLabelRequest.constructFromObject({
        targetNodeId: nodeId,
        labelId: labelNodeId
      }))
      .then((addLabelResponse) => {
        assert.ok(addLabelResponse.response.ok);
        done();
      },
      (err) => done(err));
    },
    (err) => done(err));
  })
});

describe('Obliterating Information Nodes', function() {
  it('should obliterate an information node', function(done) {
    callFacternEndpointPromise(FactsApi.createEntity.bind(FactsApi), new FacternClient.CreateNamedRequest())
    .then((responseData) => {
      assert.ok(responseData.response.ok);
      const parentId = responseData.data.nodeId;
      callFacternEndpointPromise(FactsApi.createField.bind(FactsApi), FacternClient.CreateFieldRequest.constructFromObject({
        parentId: parentId,
        name: randomstring.generate(10)
      }))
      .then((createFieldResponse) => {
        assert.ok(createFieldResponse.response.ok);
        const fieldId = createFieldResponse.data.nodeId;
        callFacternEndpointPromise(FactsApi.createInformation.bind(FactsApi), FacternClient.CreateInformationRequest.constructFromObject({
          parentId: parentId,
          fieldId: fieldId,
          data: randomstring.generate(10)
        }))
        .then((createInformationResponse) => {
          assert.ok(createInformationResponse.response.ok);
          const infoNodeId = createInformationResponse.data.nodeId;
          callFacternEndpointPromise(FactsApi.obliterate.bind(FactsApi), FacternClient.NodeIdRequest.constructFromObject({
            nodeId: infoNodeId
          }))
          .then((obliterateResponse) => {
            assert.ok(obliterateResponse.response.ok);
            assert.equal(infoNodeId, obliterateResponse.data.nodeId);
            done();
          },
          (err) => done(err));
        },
        (err) => done(err));
      },
      (err) => done(err));
    },
    (err) => done(err));
  })
});

describe('Create Permission', function() {
  it('should create a permission', function(done) {
    callFacternEndpointPromise(FactsApi.createEntity.bind(FactsApi), new FacternClient.CreateNamedRequest())
    .then((responseData) => {
      assert.ok(responseData.response.ok);
      const entityId = responseData.data.nodeId;

      const policy = new FacternClient.PermissionPolicyDocument(
        FacternClient.PermissionEffect.Allow,
        []
      );
      policy.actions = [ FacternClient.PermissionAction.Read ];
      const policyRequest = new FacternClient.CreatePermissionRequest(policy, entityId);

      callFacternEndpointPromise(FactsApi.permission.bind(FactsApi), policyRequest)
      .then((createPermissionResponse) => {
        assert.ok(createPermissionResponse.response.ok);
        done();
      },
      (err) => done(err));
    },
    (err) => done(err));
  })
});

describe('Updating Application', function() {
  it('should update application', function(done) {
    callFacternEndpointPromise(FactsApi.createApplication.bind(FactsApi), FacternClient.CreateApplicationRequest.constructFromObject({
      name: randomstring.generate(10)
    }))
    .then((responseData) => {
      assert.ok(responseData.response.ok);
      const appNodeId = responseData.data.nodeId;
      callFacternEndpointPromise(FactsApi.updateApplication.bind(FactsApi), FacternClient.UpdateApplicationRequest.constructFromObject({
        nodeId: appNodeId
      }))
      .then((updateApplicationResponse) => {
        assert.ok(updateApplicationResponse.response.ok);
        done();
      });
    }, (err) => {
      done(err);
    });
  })
});

describe('Search For Alias', function() {
  it('should search for and find a node by alias', function(done) {
    callFacternEndpointPromise(FactsApi.createEntity.bind(FactsApi), new FacternClient.CreateNamedRequest())
    .then((responseData) => {
      assert.ok(responseData.response.ok);
      const nodeId = responseData.data.nodeId;
      const aliasName = randomstring.generate(50);
      callFacternEndpointPromise(FactsApi.createAlias.bind(FactsApi), FacternClient.CreateAliasRequest.constructFromObject({
        local: false,
        name: aliasName,
        targetNodeId: nodeId
      }))
      .then((createAliasResponse) => {
        assert.ok(createAliasResponse.response.ok);
        callFacternEndpointPromise(FactsApi.searchAlias.bind(FactsApi), FacternClient.SearchAliasRequest.constructFromObject({
          name: aliasName
        }))
        .then((searchAliasResponse) => {
          assert.ok(searchAliasResponse.response.ok);
          assert.ok(searchAliasResponse.data.exists);
          done();
        },
        (err) => done(err));
      },
      (err) => done(err));
    },
    (err) => done(err));
  })
});

describe('Search For Entity', function() {
  it('should search for and find an entity', function(done) {
    callFacternEndpointPromise(FactsApi.createEntity.bind(FactsApi), new FacternClient.CreateNamedRequest())
    .then((responseData) => {
      assert.ok(responseData.response.ok);
      const parentId = responseData.data.nodeId;
      callFacternEndpointPromise(FactsApi.createField.bind(FactsApi), FacternClient.CreateFieldRequest.constructFromObject({
        parentId: parentId,
        searchable: true,
        name: randomstring.generate(10)
      }))
      .then((createFieldResponse) => {
        assert.ok(createFieldResponse.response.ok);
        const fieldId = createFieldResponse.data.nodeId;
        const data = randomstring.generate(20);
        Promise.all([
          callFacternEndpointPromise(FactsApi.createInformation.bind(FactsApi), FacternClient.CreateInformationRequest.constructFromObject({
            parentId: parentId,
            fieldId: fieldId,
            data: data
          })),
          wait(2000)
        ])
        .then((createInformationResponse) => {
          assert.ok(createInformationResponse[0].response.ok);
          callFacternEndpointPromise(FactsApi.searchEntity.bind(FactsApi), FacternClient.SearchEntityRequest.constructFromObject({
            operator: FacternClient.SearchEntityRequest.OperatorEnum.equals,
            term: data,
            fieldId: fieldId,
            maxResults: 5
          }))
          .then((searchEntityResponse) => {
            assert.ok(searchEntityResponse.response.ok);
            assert.equal(1, searchEntityResponse.data.nodes.length);
            done();
          },
          (err) => done(err));
        },
        (err) => done(err));
      },
      (err) => done(err));
    },
    (err) => done(err));
  })
});

describe('Enabling/Disabling Nodes', function() {
  it('should enable and disable nodes', function(done) {
    Promise.all([
      callFacternEndpointPromise(FactsApi.createEntity.bind(FactsApi), new FacternClient.CreateNamedRequest()),
      callFacternEndpointPromise(FactsApi.createEntity.bind(FactsApi), new FacternClient.CreateNamedRequest()),
      callFacternEndpointPromise(FactsApi.createField.bind(FactsApi), FacternClient.CreateFieldRequest.constructFromObject({
        name: randomstring.generate(50),
        uniqueByParent: true
      }))
    ])
    .then((responseData) => {
      assert.ok(responseData[0].response.ok);
      assert.ok(responseData[1].response.ok);
      assert.ok(responseData[2].response.ok);
      const srcEntityId = responseData[0].data.nodeId;
      const targetEntityId = responseData[1].data.nodeId;
      const fieldId = responseData[2].data.nodeId;
      const data = randomstring.generate(20);
      Promise.all([
        callFacternEndpointPromise(FactsApi.createTemplate.bind(FactsApi), FacternClient.CreateTemplateRequest.constructFromObject({
          name: randomstring.generate(50),
          memberIds: [ fieldId ]
        })),
        callFacternEndpointPromise(FactsApi.createInformation.bind(FactsApi), FacternClient.CreateInformationRequest.constructFromObject({
          parentId: srcEntityId,
          fieldId: fieldId,
          data: data
        }))
      ])
      .then((createInfoResponse) => {
        assert.ok(createInfoResponse[0].response.ok);
        assert.ok(createInfoResponse[1].response.ok);
        const templateId = createInfoResponse[0].data.nodeId;
        callFacternEndpointPromise(FactsApi.createMirror.bind(FactsApi), FacternClient.CreateMirrorRequest.constructFromObject({
          sourceNodeId: srcEntityId,
          destinationNodeId: targetEntityId,
          templateId: templateId
        }))
        .then((createMirrorResponse) => {
          assert.ok(createMirrorResponse.response.ok);
          const mirrorId = createMirrorResponse.data.nodeId;
          callFacternEndpointPromise(FactsApi.updateStatus.bind(FactsApi), FacternClient.UpdateStatusRequest.constructFromObject({
            status: FacternClient.UpdateStatusRequest.StatusEnum.disabled,
            nodeId: mirrorId
          }))
          .then((updateStatusResponse) => {
            assert.ok(updateStatusResponse.response.ok);
            done();
          },
          (err) => done(err));
        },
        (err) => done(err));
      },
      (err) => done(err));
    },
    (err) => done(err));
  })
});

describe('Create Watch Trigger', function() {
  it('should create a watch trigger', function(done) {
    callFacternEndpointPromise(FactsApi.createEntity.bind(FactsApi), new FacternClient.CreateNamedRequest())
    .then((responseData) => {
      assert.ok(responseData.response.ok);
      const entityId = responseData.data.nodeId;
      callFacternEndpointPromise(FactsApi.watch.bind(FactsApi), new FacternClient.CreateWatchRequest(entityId))
      .then((createWatchResponse) => {
        assert.ok(createWatchResponse.response.ok);
        done();
      },
      (err) => done(err));
    },
    (err) => done(err));
  })
});

describe('Writing by Template', function() {
  it('should write an info node by template', function(done) {
    Promise.all([
      callFacternEndpointPromise(FactsApi.createEntity.bind(FactsApi), new FacternClient.CreateNamedRequest()),
      callFacternEndpointPromise(FactsApi.createField.bind(FactsApi), FacternClient.CreateFieldRequest.constructFromObject({
        name: randomstring.generate(20)
      }))
    ])
    .then((responseData) => {
      assert.ok(responseData[0].response.ok);
      assert.ok(responseData[1].response.ok);
      const entityId = responseData[0].data.nodeId;
      const fieldId = responseData[1].data.nodeId;
      const data = randomstring.generate(20)
      callFacternEndpointPromise(FactsApi.write.bind(FactsApi), FacternClient.WriteRequest.constructFromObject({
        nodeId: entityId,
        template: [ fieldId ],
        values: [ data ]
      }))
      .then((writeResponse) => {
        assert.ok(writeResponse.response.ok);
        done();
      },
      (err) => done(err));
    },
    (err) => done(err));
  })
});

function callFacternEndpointPromise(endpoint, body) {
  return endpoint({
    login: LOGIN,
    representing: LOGIN,
    body: body
  });
}

function wait(millis) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, millis);
  });
}

function createEntity(name, callback) {
  const body = {};
  if (name !== undefined) {
    body['name'] = name;
  }

  FactsApi.createEntity({
    login: LOGIN,
    representing: LOGIN,
    body: body
  }, function(err, data, response) {
    if (callback) {
      callback(err, data, response);
    }
  });
}

function verifyEntity(entity) {
  verifyFields(entity, ['name', 'timestamp', 'nodeId', 'agent', 'batchId', 'factType', 'parentId']);

  assert.equal('Entity', entity.factType);
}

function verifyField(field) {
  verifyFields(field, ['name', 'timestamp', 'nodeId', 'agent', 'batchId', 'factType', 'parentId']);

  assert.equal('Field', field.factType);
}

function verifyFields(obj, fields) {
  for (var i = 0; i < fields.length; ++i) {
    assert.ok(obj.hasOwnProperty(fields[i]));
  }
}
