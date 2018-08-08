# @factern/factern-client
[![Build Status](https://travis-ci.org/Factern/factern-client-javascript.svg?branch=master)](https://travis-ci.org/Factern/factern-client-javascript)

## Javascript Client for Factern API

API version: 2.0.0

## Installation

### npm

```shell
npm install @factern/factern-client --save
```

## Getting Started

Once you've installed the client, you can get started with this snippet:

```javascript
var FacternApi = require('@factern/factern-client');

var defaultClient = FacternApi.ApiClient.instance;

var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = "YOUR ACCESS TOKEN";

var api = new FacternApi.FactsApi();

// Example usage of the client to create a named entity
api.addEntity({
    login: "Your login ID",
    representing: "Your representing ID",
    body: new FacternApi.CreateEntityRequest({
        name: "example-entity"
    })
}).then(function(response) {
    console.log(`Node ID: ${response.data.nodeId}`);
}, function(error) {
    console.error(error);
});
```

## Documentation for API Endpoints

All URIs are relative to *https://api.factern.com/v2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*FacternApi.FactsApi* | [**addMember**](https://github.com/Factern/factern-client-javascript/blob/master/docs/FactsApi.md#addMember) | **POST** /createmember | Create Member
*FacternApi.FactsApi* | [**bid**](https://github.com/Factern/factern-client-javascript/blob/master/docs/FactsApi.md#bid) | **POST** /createbid | Create Bid
*FacternApi.FactsApi* | [**callDelete**](https://github.com/Factern/factern-client-javascript/blob/master/docs/FactsApi.md#callDelete) | **POST** /delete | Deleting
*FacternApi.FactsApi* | [**createAlias**](https://github.com/Factern/factern-client-javascript/blob/master/docs/FactsApi.md#createAlias) | **POST** /createalias | Create Alias
*FacternApi.FactsApi* | [**createApplication**](https://github.com/Factern/factern-client-javascript/blob/master/docs/FactsApi.md#createApplication) | **POST** /createapplication | Create Application
*FacternApi.FactsApi* | [**createDomain**](https://github.com/Factern/factern-client-javascript/blob/master/docs/FactsApi.md#createDomain) | **POST** /createdomain | Create Domain
*FacternApi.FactsApi* | [**createEntity**](https://github.com/Factern/factern-client-javascript/blob/master/docs/FactsApi.md#createEntity) | **POST** /createentity | Create Entity
*FacternApi.FactsApi* | [**createField**](https://github.com/Factern/factern-client-javascript/blob/master/docs/FactsApi.md#createField) | **POST** /createfield | Create Field
*FacternApi.FactsApi* | [**createFilter**](https://github.com/Factern/factern-client-javascript/blob/master/docs/FactsApi.md#createFilter) | **POST** /createfilter | Create Filter
*FacternApi.FactsApi* | [**createGroup**](https://github.com/Factern/factern-client-javascript/blob/master/docs/FactsApi.md#createGroup) | **POST** /creategroup | Create Group
*FacternApi.FactsApi* | [**createInformation**](https://github.com/Factern/factern-client-javascript/blob/master/docs/FactsApi.md#createInformation) | **POST** /createinformation | Create Information
*FacternApi.FactsApi* | [**createInterface**](https://github.com/Factern/factern-client-javascript/blob/master/docs/FactsApi.md#createInterface) | **POST** /createinterface | Create Interface
*FacternApi.FactsApi* | [**createLabelList**](https://github.com/Factern/factern-client-javascript/blob/master/docs/FactsApi.md#createLabelList) | **POST** /createlabellist | Create Label List
*FacternApi.FactsApi* | [**createLogin**](https://github.com/Factern/factern-client-javascript/blob/master/docs/FactsApi.md#createLogin) | **POST** /createlogin | Create Login
*FacternApi.FactsApi* | [**createMirror**](https://github.com/Factern/factern-client-javascript/blob/master/docs/FactsApi.md#createMirror) | **POST** /createmirror | Create Mirror
*FacternApi.FactsApi* | [**createPrice**](https://github.com/Factern/factern-client-javascript/blob/master/docs/FactsApi.md#createPrice) | **POST** /createprice | Create Price
*FacternApi.FactsApi* | [**createScope**](https://github.com/Factern/factern-client-javascript/blob/master/docs/FactsApi.md#createScope) | **POST** /createscope | Create Scope
*FacternApi.FactsApi* | [**createStatement**](https://github.com/Factern/factern-client-javascript/blob/master/docs/FactsApi.md#createStatement) | **POST** /createstatement | Create Statement
*FacternApi.FactsApi* | [**createTemplate**](https://github.com/Factern/factern-client-javascript/blob/master/docs/FactsApi.md#createTemplate) | **POST** /createtemplate | Create Template
*FacternApi.FactsApi* | [**deleteNode**](https://github.com/Factern/factern-client-javascript/blob/master/docs/FactsApi.md#deleteNode) | **POST** /deletenode | Delete Node
*FacternApi.FactsApi* | [**describe**](https://github.com/Factern/factern-client-javascript/blob/master/docs/FactsApi.md#describe) | **POST** /describe | Describe
*FacternApi.FactsApi* | [**history**](https://github.com/Factern/factern-client-javascript/blob/master/docs/FactsApi.md#history) | **POST** /history | History
*FacternApi.FactsApi* | [**label**](https://github.com/Factern/factern-client-javascript/blob/master/docs/FactsApi.md#label) | **POST** /label | Label a Node
*FacternApi.FactsApi* | [**obliterate**](https://github.com/Factern/factern-client-javascript/blob/master/docs/FactsApi.md#obliterate) | **POST** /obliterate | Obliterating Information Nodes
*FacternApi.FactsApi* | [**permission**](https://github.com/Factern/factern-client-javascript/blob/master/docs/FactsApi.md#permission) | **POST** /permission | Create Permission
*FacternApi.FactsApi* | [**read**](https://github.com/Factern/factern-client-javascript/blob/master/docs/FactsApi.md#read) | **POST** /read | Reading
*FacternApi.FactsApi* | [**readInformation**](https://github.com/Factern/factern-client-javascript/blob/master/docs/FactsApi.md#readInformation) | **POST** /readinformation | Read Information
*FacternApi.FactsApi* | [**replaceInformation**](https://github.com/Factern/factern-client-javascript/blob/master/docs/FactsApi.md#replaceInformation) | **POST** /replaceinformation | Replace
*FacternApi.FactsApi* | [**requestPermission**](https://github.com/Factern/factern-client-javascript/blob/master/docs/FactsApi.md#requestPermission) | **POST** /requestpermission | Request Permission
*FacternApi.FactsApi* | [**resetLogin**](https://github.com/Factern/factern-client-javascript/blob/master/docs/FactsApi.md#resetLogin) | **POST** /resetlogin | Changing Login Password
*FacternApi.FactsApi* | [**searchAlias**](https://github.com/Factern/factern-client-javascript/blob/master/docs/FactsApi.md#searchAlias) | **POST** /searchalias | Search For Alias
*FacternApi.FactsApi* | [**searchEntity**](https://github.com/Factern/factern-client-javascript/blob/master/docs/FactsApi.md#searchEntity) | **POST** /searchentity | Search For Entity
*FacternApi.FactsApi* | [**settleAccount**](https://github.com/Factern/factern-client-javascript/blob/master/docs/FactsApi.md#settleAccount) | **POST** /settleaccount | Settle Account
*FacternApi.FactsApi* | [**updateApplication**](https://github.com/Factern/factern-client-javascript/blob/master/docs/FactsApi.md#updateApplication) | **POST** /updateapplication | Resetting Application Secret
*FacternApi.FactsApi* | [**updateStatus**](https://github.com/Factern/factern-client-javascript/blob/master/docs/FactsApi.md#updateStatus) | **POST** /updatestatus | Enabling/Disabling Nodes
*FacternApi.FactsApi* | [**watch**](https://github.com/Factern/factern-client-javascript/blob/master/docs/FactsApi.md#watch) | **POST** /watch | Create Watch Trigger
*FacternApi.FactsApi* | [**write**](https://github.com/Factern/factern-client-javascript/blob/master/docs/FactsApi.md#write) | **POST** /write | Writing by Template


## Documentation for Models

 - [FacternApi.Account](docs/Account.md)
 - [FacternApi.AddLabelRequest](docs/AddLabelRequest.md)
 - [FacternApi.AddLabelResponse](docs/AddLabelResponse.md)
 - [FacternApi.AddStatementRequest](docs/AddStatementRequest.md)
 - [FacternApi.AddStatementResponse](docs/AddStatementResponse.md)
 - [FacternApi.Agent](docs/Agent.md)
 - [FacternApi.Alias](docs/Alias.md)
 - [FacternApi.AliasNode](docs/AliasNode.md)
 - [FacternApi.ApiEndpoint](docs/ApiEndpoint.md)
 - [FacternApi.Application](docs/Application.md)
 - [FacternApi.ApplicationNode](docs/ApplicationNode.md)
 - [FacternApi.BaseRequest](docs/BaseRequest.md)
 - [FacternApi.BaseResponse](docs/BaseResponse.md)
 - [FacternApi.Bid](docs/Bid.md)
 - [FacternApi.BidNode](docs/BidNode.md)
 - [FacternApi.Cost](docs/Cost.md)
 - [FacternApi.CreateAliasRequest](docs/CreateAliasRequest.md)
 - [FacternApi.CreateAliasResponse](docs/CreateAliasResponse.md)
 - [FacternApi.CreateApplicationRequest](docs/CreateApplicationRequest.md)
 - [FacternApi.CreateApplicationResponse](docs/CreateApplicationResponse.md)
 - [FacternApi.CreateBidRequest](docs/CreateBidRequest.md)
 - [FacternApi.CreateBidResponse](docs/CreateBidResponse.md)
 - [FacternApi.CreateChildRequest](docs/CreateChildRequest.md)
 - [FacternApi.CreateDomainRequest](docs/CreateDomainRequest.md)
 - [FacternApi.CreateDomainResponse](docs/CreateDomainResponse.md)
 - [FacternApi.CreateEntityRequest](docs/CreateEntityRequest.md)
 - [FacternApi.CreateEntityResponse](docs/CreateEntityResponse.md)
 - [FacternApi.CreateFieldRequest](docs/CreateFieldRequest.md)
 - [FacternApi.CreateFieldResponse](docs/CreateFieldResponse.md)
 - [FacternApi.CreateFilterRequest](docs/CreateFilterRequest.md)
 - [FacternApi.CreateFilterResponse](docs/CreateFilterResponse.md)
 - [FacternApi.CreateGroupRequest](docs/CreateGroupRequest.md)
 - [FacternApi.CreateGroupResponse](docs/CreateGroupResponse.md)
 - [FacternApi.CreateInformationRequest](docs/CreateInformationRequest.md)
 - [FacternApi.CreateInformationResponse](docs/CreateInformationResponse.md)
 - [FacternApi.CreateInterfaceRequest](docs/CreateInterfaceRequest.md)
 - [FacternApi.CreateInterfaceResponse](docs/CreateInterfaceResponse.md)
 - [FacternApi.CreateLabelListRequest](docs/CreateLabelListRequest.md)
 - [FacternApi.CreateLabelListResponse](docs/CreateLabelListResponse.md)
 - [FacternApi.CreateLoginRequest](docs/CreateLoginRequest.md)
 - [FacternApi.CreateLoginResponse](docs/CreateLoginResponse.md)
 - [FacternApi.CreateMemberRequest](docs/CreateMemberRequest.md)
 - [FacternApi.CreateMemberResponse](docs/CreateMemberResponse.md)
 - [FacternApi.CreateMirrorRequest](docs/CreateMirrorRequest.md)
 - [FacternApi.CreateMirrorResponse](docs/CreateMirrorResponse.md)
 - [FacternApi.CreateNamedRequest](docs/CreateNamedRequest.md)
 - [FacternApi.CreatePermissionRequest](docs/CreatePermissionRequest.md)
 - [FacternApi.CreatePermissionResponse](docs/CreatePermissionResponse.md)
 - [FacternApi.CreatePriceRequest](docs/CreatePriceRequest.md)
 - [FacternApi.CreatePriceResponse](docs/CreatePriceResponse.md)
 - [FacternApi.CreateScopeRequest](docs/CreateScopeRequest.md)
 - [FacternApi.CreateScopeResponse](docs/CreateScopeResponse.md)
 - [FacternApi.CreateTemplateRequest](docs/CreateTemplateRequest.md)
 - [FacternApi.CreateTemplateResponse](docs/CreateTemplateResponse.md)
 - [FacternApi.CreateWatchRequest](docs/CreateWatchRequest.md)
 - [FacternApi.CreateWatchResponse](docs/CreateWatchResponse.md)
 - [FacternApi.DeleteRequest](docs/DeleteRequest.md)
 - [FacternApi.DeleteResponse](docs/DeleteResponse.md)
 - [FacternApi.DeletedItem](docs/DeletedItem.md)
 - [FacternApi.DeletedStatusItem](docs/DeletedStatusItem.md)
 - [FacternApi.DescribeRequest](docs/DescribeRequest.md)
 - [FacternApi.DescribeResponse](docs/DescribeResponse.md)
 - [FacternApi.Domain](docs/Domain.md)
 - [FacternApi.DomainNode](docs/DomainNode.md)
 - [FacternApi.Entity](docs/Entity.md)
 - [FacternApi.EntityListResponse](docs/EntityListResponse.md)
 - [FacternApi.EntityNode](docs/EntityNode.md)
 - [FacternApi.ExternalDataUsage](docs/ExternalDataUsage.md)
 - [FacternApi.FactCount](docs/FactCount.md)
 - [FacternApi.Field](docs/Field.md)
 - [FacternApi.FieldNode](docs/FieldNode.md)
 - [FacternApi.FieldStoreValues](docs/FieldStoreValues.md)
 - [FacternApi.Filter](docs/Filter.md)
 - [FacternApi.FilterNode](docs/FilterNode.md)
 - [FacternApi.FilterStatement](docs/FilterStatement.md)
 - [FacternApi.GasCost](docs/GasCost.md)
 - [FacternApi.Group](docs/Group.md)
 - [FacternApi.GroupNode](docs/GroupNode.md)
 - [FacternApi.HttpHeader](docs/HttpHeader.md)
 - [FacternApi.Information](docs/Information.md)
 - [FacternApi.InformationListResponse](docs/InformationListResponse.md)
 - [FacternApi.InformationNode](docs/InformationNode.md)
 - [FacternApi.InterfaceNode](docs/InterfaceNode.md)
 - [FacternApi.Label](docs/Label.md)
 - [FacternApi.LabelList](docs/LabelList.md)
 - [FacternApi.LabelListMember](docs/LabelListMember.md)
 - [FacternApi.LabelListMemberNode](docs/LabelListMemberNode.md)
 - [FacternApi.LabelListNode](docs/LabelListNode.md)
 - [FacternApi.LabelStatement](docs/LabelStatement.md)
 - [FacternApi.ListCriteria](docs/ListCriteria.md)
 - [FacternApi.Login](docs/Login.md)
 - [FacternApi.LoginNode](docs/LoginNode.md)
 - [FacternApi.Member](docs/Member.md)
 - [FacternApi.MemberNode](docs/MemberNode.md)
 - [FacternApi.Mirror](docs/Mirror.md)
 - [FacternApi.MirrorNode](docs/MirrorNode.md)
 - [FacternApi.ModelInterface](docs/ModelInterface.md)
 - [FacternApi.NamedNode](docs/NamedNode.md)
 - [FacternApi.NodeIdRequest](docs/NodeIdRequest.md)
 - [FacternApi.NodeListing](docs/NodeListing.md)
 - [FacternApi.Permission](docs/Permission.md)
 - [FacternApi.PermissionAction](docs/PermissionAction.md)
 - [FacternApi.PermissionEffect](docs/PermissionEffect.md)
 - [FacternApi.PermissionNode](docs/PermissionNode.md)
 - [FacternApi.PermissionPolicyDocument](docs/PermissionPolicyDocument.md)
 - [FacternApi.Price](docs/Price.md)
 - [FacternApi.PriceDetails](docs/PriceDetails.md)
 - [FacternApi.PriceNode](docs/PriceNode.md)
 - [FacternApi.ReadInformationRequest](docs/ReadInformationRequest.md)
 - [FacternApi.ReadInformationResponse](docs/ReadInformationResponse.md)
 - [FacternApi.ReadItem](docs/ReadItem.md)
 - [FacternApi.ReadRequest](docs/ReadRequest.md)
 - [FacternApi.ReadResponse](docs/ReadResponse.md)
 - [FacternApi.ReadStatusItem](docs/ReadStatusItem.md)
 - [FacternApi.ReplaceFieldRequest](docs/ReplaceFieldRequest.md)
 - [FacternApi.ResetLoginCredentialsRequest](docs/ResetLoginCredentialsRequest.md)
 - [FacternApi.ResetLoginResponse](docs/ResetLoginResponse.md)
 - [FacternApi.Scope](docs/Scope.md)
 - [FacternApi.ScopeNode](docs/ScopeNode.md)
 - [FacternApi.SearchAliasRequest](docs/SearchAliasRequest.md)
 - [FacternApi.SearchAliasResponse](docs/SearchAliasResponse.md)
 - [FacternApi.SearchEntityRequest](docs/SearchEntityRequest.md)
 - [FacternApi.Searches](docs/Searches.md)
 - [FacternApi.SettleAccountRequest](docs/SettleAccountRequest.md)
 - [FacternApi.SettleAccountResponse](docs/SettleAccountResponse.md)
 - [FacternApi.StandardNode](docs/StandardNode.md)
 - [FacternApi.StandardNodeResponse](docs/StandardNodeResponse.md)
 - [FacternApi.Statement](docs/Statement.md)
 - [FacternApi.StatementStatement](docs/StatementStatement.md)
 - [FacternApi.Summary](docs/Summary.md)
 - [FacternApi.Template](docs/Template.md)
 - [FacternApi.TemplateNode](docs/TemplateNode.md)
 - [FacternApi.TokenPayment](docs/TokenPayment.md)
 - [FacternApi.TransformElement](docs/TransformElement.md)
 - [FacternApi.UpdateApplicationRequest](docs/UpdateApplicationRequest.md)
 - [FacternApi.UpdateApplicationResponse](docs/UpdateApplicationResponse.md)
 - [FacternApi.UpdateStatusRequest](docs/UpdateStatusRequest.md)
 - [FacternApi.Watch](docs/Watch.md)
 - [FacternApi.WatchEvent](docs/WatchEvent.md)
 - [FacternApi.WatchEventNode](docs/WatchEventNode.md)
 - [FacternApi.WatchNode](docs/WatchNode.md)
 - [FacternApi.WriteItem](docs/WriteItem.md)
 - [FacternApi.WriteRequest](docs/WriteRequest.md)
 - [FacternApi.WriteResponse](docs/WriteResponse.md)


## Documentation for Authorization


### OAuth2

- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: https://factern-test.eu.auth0.com/oauth/token
- **Scopes**: 
  - profile: Grants read and write access to administrative information
  - openid: Grants read and write access to administrative information
  - email: Grants read and write access to administrative information
  - phone: Grants write access
  - address: Grants read access


# License

MIT License

Copyright (c) 2018 Factern

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

# Disclaimer

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
