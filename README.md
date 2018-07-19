# @factern/factern-client
[![Build Status](https://travis-ci.org/Factern/factern-client-javascript.svg?branch=master)](https://travis-ci.org/Factern/factern-client-javascript)

## Javascript Client for Factern API

- API version: 2.0.0

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install @factern/factern-client --save
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var FacternApi = require('@factern/factern-client');

var defaultClient = FacternApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = "YOUR ACCESS TOKEN"

var api = new FacternApi.FactsApi()

var opts = {
  'login': "login_example", // {String}
  'representing': "representing_example", // {String}
  'body': new FacternApi.CreateMemberRequest() // {CreateMemberRequest}
};
api.addMember(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
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

 - [FacternApi.Account](https://github.com/Factern/factern-client-javascript/blob/master/docs/Account.md)
 - [FacternApi.Agent](https://github.com/Factern/factern-client-javascript/blob/master/docs/Agent.md)
 - [FacternApi.AliasNode](https://github.com/Factern/factern-client-javascript/blob/master/docs/AliasNode.md)
 - [FacternApi.ApiEndpoint](https://github.com/Factern/factern-client-javascript/blob/master/docs/ApiEndpoint.md)
 - [FacternApi.ApplicationNode](https://github.com/Factern/factern-client-javascript/blob/master/docs/ApplicationNode.md)
 - [FacternApi.BaseRequest](https://github.com/Factern/factern-client-javascript/blob/master/docs/BaseRequest.md)
 - [FacternApi.BaseResponse](https://github.com/Factern/factern-client-javascript/blob/master/docs/BaseResponse.md)
 - [FacternApi.BidNode](https://github.com/Factern/factern-client-javascript/blob/master/docs/BidNode.md)
 - [FacternApi.Cost](https://github.com/Factern/factern-client-javascript/blob/master/docs/Cost.md)
 - [FacternApi.DescribeResponse](https://github.com/Factern/factern-client-javascript/blob/master/docs/DescribeResponse.md)
 - [FacternApi.DomainNode](https://github.com/Factern/factern-client-javascript/blob/master/docs/DomainNode.md)
 - [FacternApi.EntityListResponse](https://github.com/Factern/factern-client-javascript/blob/master/docs/EntityListResponse.md)
 - [FacternApi.EntityNode](https://github.com/Factern/factern-client-javascript/blob/master/docs/EntityNode.md)
 - [FacternApi.FactCount](https://github.com/Factern/factern-client-javascript/blob/master/docs/FactCount.md)
 - [FacternApi.FieldNode](https://github.com/Factern/factern-client-javascript/blob/master/docs/FieldNode.md)
 - [FacternApi.FieldStoreValues](https://github.com/Factern/factern-client-javascript/blob/master/docs/FieldStoreValues.md)
 - [FacternApi.FilterNode](https://github.com/Factern/factern-client-javascript/blob/master/docs/FilterNode.md)
 - [FacternApi.FilterStatement](https://github.com/Factern/factern-client-javascript/blob/master/docs/FilterStatement.md)
 - [FacternApi.GasCost](https://github.com/Factern/factern-client-javascript/blob/master/docs/GasCost.md)
 - [FacternApi.GroupNode](https://github.com/Factern/factern-client-javascript/blob/master/docs/GroupNode.md)
 - [FacternApi.HttpHeader](https://github.com/Factern/factern-client-javascript/blob/master/docs/HttpHeader.md)
 - [FacternApi.InformationListResponse](https://github.com/Factern/factern-client-javascript/blob/master/docs/InformationListResponse.md)
 - [FacternApi.InformationNode](https://github.com/Factern/factern-client-javascript/blob/master/docs/InformationNode.md)
 - [FacternApi.InterfaceNode](https://github.com/Factern/factern-client-javascript/blob/master/docs/InterfaceNode.md)
 - [FacternApi.LabelListMemberNode](https://github.com/Factern/factern-client-javascript/blob/master/docs/LabelListMemberNode.md)
 - [FacternApi.LabelListNode](https://github.com/Factern/factern-client-javascript/blob/master/docs/LabelListNode.md)
 - [FacternApi.LabelStatement](https://github.com/Factern/factern-client-javascript/blob/master/docs/LabelStatement.md)
 - [FacternApi.ListCriteria](https://github.com/Factern/factern-client-javascript/blob/master/docs/ListCriteria.md)
 - [FacternApi.LoginNode](https://github.com/Factern/factern-client-javascript/blob/master/docs/LoginNode.md)
 - [FacternApi.MemberNode](https://github.com/Factern/factern-client-javascript/blob/master/docs/MemberNode.md)
 - [FacternApi.MirrorNode](https://github.com/Factern/factern-client-javascript/blob/master/docs/MirrorNode.md)
 - [FacternApi.NamedNode](https://github.com/Factern/factern-client-javascript/blob/master/docs/NamedNode.md)
 - [FacternApi.NodeListing](https://github.com/Factern/factern-client-javascript/blob/master/docs/NodeListing.md)
 - [FacternApi.PermissionAction](https://github.com/Factern/factern-client-javascript/blob/master/docs/PermissionAction.md)
 - [FacternApi.PermissionEffect](https://github.com/Factern/factern-client-javascript/blob/master/docs/PermissionEffect.md)
 - [FacternApi.PermissionNode](https://github.com/Factern/factern-client-javascript/blob/master/docs/PermissionNode.md)
 - [FacternApi.PermissionPolicyDocument](https://github.com/Factern/factern-client-javascript/blob/master/docs/PermissionPolicyDocument.md)
 - [FacternApi.PriceDetails](https://github.com/Factern/factern-client-javascript/blob/master/docs/PriceDetails.md)
 - [FacternApi.PriceNode](https://github.com/Factern/factern-client-javascript/blob/master/docs/PriceNode.md)
 - [FacternApi.ReadItem](https://github.com/Factern/factern-client-javascript/blob/master/docs/ReadItem.md)
 - [FacternApi.ReadResponse](https://github.com/Factern/factern-client-javascript/blob/master/docs/ReadResponse.md)
 - [FacternApi.ReadStatusItem](https://github.com/Factern/factern-client-javascript/blob/master/docs/ReadStatusItem.md)
 - [FacternApi.ScopeNode](https://github.com/Factern/factern-client-javascript/blob/master/docs/ScopeNode.md)
 - [FacternApi.SearchAliasResponse](https://github.com/Factern/factern-client-javascript/blob/master/docs/SearchAliasResponse.md)
 - [FacternApi.SettleAccountResponse](https://github.com/Factern/factern-client-javascript/blob/master/docs/SettleAccountResponse.md)
 - [FacternApi.StandardNode](https://github.com/Factern/factern-client-javascript/blob/master/docs/StandardNode.md)
 - [FacternApi.StandardNodeResponse](https://github.com/Factern/factern-client-javascript/blob/master/docs/StandardNodeResponse.md)
 - [FacternApi.StatementStatement](https://github.com/Factern/factern-client-javascript/blob/master/docs/StatementStatement.md)
 - [FacternApi.Summary](https://github.com/Factern/factern-client-javascript/blob/master/docs/Summary.md)
 - [FacternApi.TemplateNode](https://github.com/Factern/factern-client-javascript/blob/master/docs/TemplateNode.md)
 - [FacternApi.TokenPayment](https://github.com/Factern/factern-client-javascript/blob/master/docs/TokenPayment.md)
 - [FacternApi.WatchEventNode](https://github.com/Factern/factern-client-javascript/blob/master/docs/WatchEventNode.md)
 - [FacternApi.WatchNode](https://github.com/Factern/factern-client-javascript/blob/master/docs/WatchNode.md)
 - [FacternApi.WriteItem](https://github.com/Factern/factern-client-javascript/blob/master/docs/WriteItem.md)
 - [FacternApi.WriteResponse](https://github.com/Factern/factern-client-javascript/blob/master/docs/WriteResponse.md)
 - [FacternApi.AddLabelRequest](https://github.com/Factern/factern-client-javascript/blob/master/docs/AddLabelRequest.md)
 - [FacternApi.AddLabelResponse](https://github.com/Factern/factern-client-javascript/blob/master/docs/AddLabelResponse.md)
 - [FacternApi.AddStatementRequest](https://github.com/Factern/factern-client-javascript/blob/master/docs/AddStatementRequest.md)
 - [FacternApi.AddStatementResponse](https://github.com/Factern/factern-client-javascript/blob/master/docs/AddStatementResponse.md)
 - [FacternApi.Alias](https://github.com/Factern/factern-client-javascript/blob/master/docs/Alias.md)
 - [FacternApi.Application](https://github.com/Factern/factern-client-javascript/blob/master/docs/Application.md)
 - [FacternApi.Bid](https://github.com/Factern/factern-client-javascript/blob/master/docs/Bid.md)
 - [FacternApi.CreateAliasRequest](https://github.com/Factern/factern-client-javascript/blob/master/docs/CreateAliasRequest.md)
 - [FacternApi.CreateAliasResponse](https://github.com/Factern/factern-client-javascript/blob/master/docs/CreateAliasResponse.md)
 - [FacternApi.CreateApplicationResponse](https://github.com/Factern/factern-client-javascript/blob/master/docs/CreateApplicationResponse.md)
 - [FacternApi.CreateBidRequest](https://github.com/Factern/factern-client-javascript/blob/master/docs/CreateBidRequest.md)
 - [FacternApi.CreateBidResponse](https://github.com/Factern/factern-client-javascript/blob/master/docs/CreateBidResponse.md)
 - [FacternApi.CreateChildRequest](https://github.com/Factern/factern-client-javascript/blob/master/docs/CreateChildRequest.md)
 - [FacternApi.CreateDomainResponse](https://github.com/Factern/factern-client-javascript/blob/master/docs/CreateDomainResponse.md)
 - [FacternApi.CreateEntityResponse](https://github.com/Factern/factern-client-javascript/blob/master/docs/CreateEntityResponse.md)
 - [FacternApi.CreateFieldResponse](https://github.com/Factern/factern-client-javascript/blob/master/docs/CreateFieldResponse.md)
 - [FacternApi.CreateFilterResponse](https://github.com/Factern/factern-client-javascript/blob/master/docs/CreateFilterResponse.md)
 - [FacternApi.CreateGroupResponse](https://github.com/Factern/factern-client-javascript/blob/master/docs/CreateGroupResponse.md)
 - [FacternApi.CreateInformationResponse](https://github.com/Factern/factern-client-javascript/blob/master/docs/CreateInformationResponse.md)
 - [FacternApi.CreateInterfaceResponse](https://github.com/Factern/factern-client-javascript/blob/master/docs/CreateInterfaceResponse.md)
 - [FacternApi.CreateLabelListResponse](https://github.com/Factern/factern-client-javascript/blob/master/docs/CreateLabelListResponse.md)
 - [FacternApi.CreateLoginRequest](https://github.com/Factern/factern-client-javascript/blob/master/docs/CreateLoginRequest.md)
 - [FacternApi.CreateLoginResponse](https://github.com/Factern/factern-client-javascript/blob/master/docs/CreateLoginResponse.md)
 - [FacternApi.CreateMemberResponse](https://github.com/Factern/factern-client-javascript/blob/master/docs/CreateMemberResponse.md)
 - [FacternApi.CreateMirrorRequest](https://github.com/Factern/factern-client-javascript/blob/master/docs/CreateMirrorRequest.md)
 - [FacternApi.CreateMirrorResponse](https://github.com/Factern/factern-client-javascript/blob/master/docs/CreateMirrorResponse.md)
 - [FacternApi.CreatePermissionRequest](https://github.com/Factern/factern-client-javascript/blob/master/docs/CreatePermissionRequest.md)
 - [FacternApi.CreatePermissionResponse](https://github.com/Factern/factern-client-javascript/blob/master/docs/CreatePermissionResponse.md)
 - [FacternApi.CreatePriceRequest](https://github.com/Factern/factern-client-javascript/blob/master/docs/CreatePriceRequest.md)
 - [FacternApi.CreatePriceResponse](https://github.com/Factern/factern-client-javascript/blob/master/docs/CreatePriceResponse.md)
 - [FacternApi.CreateScopeResponse](https://github.com/Factern/factern-client-javascript/blob/master/docs/CreateScopeResponse.md)
 - [FacternApi.CreateTemplateResponse](https://github.com/Factern/factern-client-javascript/blob/master/docs/CreateTemplateResponse.md)
 - [FacternApi.CreateWatchRequest](https://github.com/Factern/factern-client-javascript/blob/master/docs/CreateWatchRequest.md)
 - [FacternApi.CreateWatchResponse](https://github.com/Factern/factern-client-javascript/blob/master/docs/CreateWatchResponse.md)
 - [FacternApi.DeleteRequest](https://github.com/Factern/factern-client-javascript/blob/master/docs/DeleteRequest.md)
 - [FacternApi.DescribeRequest](https://github.com/Factern/factern-client-javascript/blob/master/docs/DescribeRequest.md)
 - [FacternApi.Domain](https://github.com/Factern/factern-client-javascript/blob/master/docs/Domain.md)
 - [FacternApi.Entity](https://github.com/Factern/factern-client-javascript/blob/master/docs/Entity.md)
 - [FacternApi.Field](https://github.com/Factern/factern-client-javascript/blob/master/docs/Field.md)
 - [FacternApi.Filter](https://github.com/Factern/factern-client-javascript/blob/master/docs/Filter.md)
 - [FacternApi.Group](https://github.com/Factern/factern-client-javascript/blob/master/docs/Group.md)
 - [FacternApi.Information](https://github.com/Factern/factern-client-javascript/blob/master/docs/Information.md)
 - [FacternApi.Label](https://github.com/Factern/factern-client-javascript/blob/master/docs/Label.md)
 - [FacternApi.LabelList](https://github.com/Factern/factern-client-javascript/blob/master/docs/LabelList.md)
 - [FacternApi.LabelListMember](https://github.com/Factern/factern-client-javascript/blob/master/docs/LabelListMember.md)
 - [FacternApi.Login](https://github.com/Factern/factern-client-javascript/blob/master/docs/Login.md)
 - [FacternApi.Member](https://github.com/Factern/factern-client-javascript/blob/master/docs/Member.md)
 - [FacternApi.Mirror](https://github.com/Factern/factern-client-javascript/blob/master/docs/Mirror.md)
 - [FacternApi.ModelInterface](https://github.com/Factern/factern-client-javascript/blob/master/docs/ModelInterface.md)
 - [FacternApi.NodeIdRequest](https://github.com/Factern/factern-client-javascript/blob/master/docs/NodeIdRequest.md)
 - [FacternApi.Permission](https://github.com/Factern/factern-client-javascript/blob/master/docs/Permission.md)
 - [FacternApi.Price](https://github.com/Factern/factern-client-javascript/blob/master/docs/Price.md)
 - [FacternApi.ReadRequest](https://github.com/Factern/factern-client-javascript/blob/master/docs/ReadRequest.md)
 - [FacternApi.ReplaceFieldRequest](https://github.com/Factern/factern-client-javascript/blob/master/docs/ReplaceFieldRequest.md)
 - [FacternApi.ResetLoginCredentialsRequest](https://github.com/Factern/factern-client-javascript/blob/master/docs/ResetLoginCredentialsRequest.md)
 - [FacternApi.ResetLoginResponse](https://github.com/Factern/factern-client-javascript/blob/master/docs/ResetLoginResponse.md)
 - [FacternApi.Scope](https://github.com/Factern/factern-client-javascript/blob/master/docs/Scope.md)
 - [FacternApi.SearchAliasRequest](https://github.com/Factern/factern-client-javascript/blob/master/docs/SearchAliasRequest.md)
 - [FacternApi.SearchEntityRequest](https://github.com/Factern/factern-client-javascript/blob/master/docs/SearchEntityRequest.md)
 - [FacternApi.SettleAccountRequest](https://github.com/Factern/factern-client-javascript/blob/master/docs/SettleAccountRequest.md)
 - [FacternApi.Statement](https://github.com/Factern/factern-client-javascript/blob/master/docs/Statement.md)
 - [FacternApi.Template](https://github.com/Factern/factern-client-javascript/blob/master/docs/Template.md)
 - [FacternApi.UpdateApplicationRequest](https://github.com/Factern/factern-client-javascript/blob/master/docs/UpdateApplicationRequest.md)
 - [FacternApi.UpdateApplicationResponse](https://github.com/Factern/factern-client-javascript/blob/master/docs/UpdateApplicationResponse.md)
 - [FacternApi.Watch](https://github.com/Factern/factern-client-javascript/blob/master/docs/Watch.md)
 - [FacternApi.WatchEvent](https://github.com/Factern/factern-client-javascript/blob/master/docs/WatchEvent.md)
 - [FacternApi.WriteRequest](https://github.com/Factern/factern-client-javascript/blob/master/docs/WriteRequest.md)
 - [FacternApi.CreateInformationRequest](https://github.com/Factern/factern-client-javascript/blob/master/docs/CreateInformationRequest.md)
 - [FacternApi.CreateMemberRequest](https://github.com/Factern/factern-client-javascript/blob/master/docs/CreateMemberRequest.md)
 - [FacternApi.CreateNamedRequest](https://github.com/Factern/factern-client-javascript/blob/master/docs/CreateNamedRequest.md)
 - [FacternApi.UpdateStatusRequest](https://github.com/Factern/factern-client-javascript/blob/master/docs/UpdateStatusRequest.md)
 - [FacternApi.CreateApplicationRequest](https://github.com/Factern/factern-client-javascript/blob/master/docs/CreateApplicationRequest.md)
 - [FacternApi.CreateDomainRequest](https://github.com/Factern/factern-client-javascript/blob/master/docs/CreateDomainRequest.md)
 - [FacternApi.CreateFieldRequest](https://github.com/Factern/factern-client-javascript/blob/master/docs/CreateFieldRequest.md)
 - [FacternApi.CreateFilterRequest](https://github.com/Factern/factern-client-javascript/blob/master/docs/CreateFilterRequest.md)
 - [FacternApi.CreateGroupRequest](https://github.com/Factern/factern-client-javascript/blob/master/docs/CreateGroupRequest.md)
 - [FacternApi.CreateInDomainRequest](https://github.com/Factern/factern-client-javascript/blob/master/docs/CreateInDomainRequest.md)
 - [FacternApi.CreateInterfaceRequest](https://github.com/Factern/factern-client-javascript/blob/master/docs/CreateInterfaceRequest.md)
 - [FacternApi.CreateLabelListRequest](https://github.com/Factern/factern-client-javascript/blob/master/docs/CreateLabelListRequest.md)
 - [FacternApi.CreateScopeRequest](https://github.com/Factern/factern-client-javascript/blob/master/docs/CreateScopeRequest.md)
 - [FacternApi.CreateTemplateRequest](https://github.com/Factern/factern-client-javascript/blob/master/docs/CreateTemplateRequest.md)


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


License
-------

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


Disclaimer
----------

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
