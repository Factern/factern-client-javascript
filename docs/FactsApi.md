
# FacternApi.FactsApi

All URIs are relative to *https://api.factern.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addMember**](FactsApi.md#addMember) | **POST** /createmember | Create Member
[**bid**](FactsApi.md#bid) | **POST** /createbid | Create Bid
[**callDelete**](FactsApi.md#callDelete) | **POST** /delete | Deleting
[**createAlias**](FactsApi.md#createAlias) | **POST** /createalias | Create Alias
[**createApplication**](FactsApi.md#createApplication) | **POST** /createapplication | Create Application
[**createDomain**](FactsApi.md#createDomain) | **POST** /createdomain | Create Domain
[**createEntity**](FactsApi.md#createEntity) | **POST** /createentity | Create Entity
[**createField**](FactsApi.md#createField) | **POST** /createfield | Create Field
[**createFilter**](FactsApi.md#createFilter) | **POST** /createfilter | Create Filter
[**createGroup**](FactsApi.md#createGroup) | **POST** /creategroup | Create Group
[**createInformation**](FactsApi.md#createInformation) | **POST** /createinformation | Create Information
[**createInterface**](FactsApi.md#createInterface) | **POST** /createinterface | Create Interface
[**createLabelList**](FactsApi.md#createLabelList) | **POST** /createlabellist | Create Label List
[**createLogin**](FactsApi.md#createLogin) | **POST** /createlogin | Create Login
[**createMirror**](FactsApi.md#createMirror) | **POST** /createmirror | Create Mirror
[**createPrice**](FactsApi.md#createPrice) | **POST** /createprice | Create Price
[**createScope**](FactsApi.md#createScope) | **POST** /createscope | Create Scope
[**createStatement**](FactsApi.md#createStatement) | **POST** /createstatement | Create Statement
[**createTemplate**](FactsApi.md#createTemplate) | **POST** /createtemplate | Create Template
[**deleteNode**](FactsApi.md#deleteNode) | **POST** /deletenode | Delete Node
[**describe**](FactsApi.md#describe) | **POST** /describe | Describe
[**history**](FactsApi.md#history) | **POST** /history | History
[**label**](FactsApi.md#label) | **POST** /label | Label a Node
[**obliterate**](FactsApi.md#obliterate) | **POST** /obliterate | Obliterating Information Nodes
[**permission**](FactsApi.md#permission) | **POST** /permission | Create Permission
[**read**](FactsApi.md#read) | **POST** /read | Reading
[**readInformation**](FactsApi.md#readInformation) | **POST** /readinformation | Read Information
[**replaceInformation**](FactsApi.md#replaceInformation) | **POST** /replaceinformation | Replace
[**requestPermission**](FactsApi.md#requestPermission) | **POST** /requestpermission | Request Permission
[**resetLogin**](FactsApi.md#resetLogin) | **POST** /resetlogin | Changing Login Password
[**searchAlias**](FactsApi.md#searchAlias) | **POST** /searchalias | Search For Alias
[**searchEntity**](FactsApi.md#searchEntity) | **POST** /searchentity | Search For Entity
[**settleAccount**](FactsApi.md#settleAccount) | **POST** /settleaccount | Settle Account
[**updateApplication**](FactsApi.md#updateApplication) | **POST** /updateapplication | Resetting Application Secret
[**updateStatus**](FactsApi.md#updateStatus) | **POST** /updatestatus | Enabling/Disabling Nodes
[**watch**](FactsApi.md#watch) | **POST** /watch | Create Watch Trigger
[**write**](FactsApi.md#write) | **POST** /write | Writing by Template


<a name="addMember"></a>
# **addMember**
> CreateMemberResponse addMember(opts)

Create Member

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**|  | [optional] 
 **representing** | **String**|  | [optional] 
 **createMemberRequest** | [**CreateMemberRequest**](CreateMemberRequest.md)|  | [optional] 

### Return type

[**CreateMemberResponse**](CreateMemberResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bid"></a>
# **bid**
> StandardNodeResponse bid(opts)

Create Bid

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**|  | [optional] 
 **representing** | **String**|  | [optional] 
 **createBidRequest** | [**CreateBidRequest**](CreateBidRequest.md)|  | [optional] 

### Return type

[**StandardNodeResponse**](StandardNodeResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="callDelete"></a>
# **callDelete**
> DeleteResponse callDelete(opts)

Deleting

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**|  | [optional] 
 **representing** | **String**|  | [optional] 
 **deleteRequest** | [**DeleteRequest**](DeleteRequest.md)|  | [optional] 

### Return type

[**DeleteResponse**](DeleteResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createAlias"></a>
# **createAlias**
> CreateAliasResponse createAlias(opts)

Create Alias

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**|  | [optional] 
 **representing** | **String**|  | [optional] 
 **createAliasRequest** | [**CreateAliasRequest**](CreateAliasRequest.md)|  | [optional] 

### Return type

[**CreateAliasResponse**](CreateAliasResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createApplication"></a>
# **createApplication**
> CreateApplicationResponse createApplication(opts)

Create Application

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**|  | [optional] 
 **representing** | **String**|  | [optional] 
 **createApplicationRequest** | [**CreateApplicationRequest**](CreateApplicationRequest.md)|  | [optional] 

### Return type

[**CreateApplicationResponse**](CreateApplicationResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createDomain"></a>
# **createDomain**
> CreateDomainResponse createDomain(opts)

Create Domain

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**|  | [optional] 
 **representing** | **String**|  | [optional] 
 **createDomainRequest** | [**CreateDomainRequest**](CreateDomainRequest.md)|  | [optional] 

### Return type

[**CreateDomainResponse**](CreateDomainResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createEntity"></a>
# **createEntity**
> CreateEntityResponse createEntity(opts)

Create Entity

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**|  | [optional] 
 **representing** | **String**|  | [optional] 
 **createEntityRequest** | [**CreateEntityRequest**](CreateEntityRequest.md)|  | [optional] 

### Return type

[**CreateEntityResponse**](CreateEntityResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createField"></a>
# **createField**
> CreateFieldResponse createField(opts)

Create Field

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**|  | [optional] 
 **representing** | **String**|  | [optional] 
 **createFieldRequest** | [**CreateFieldRequest**](CreateFieldRequest.md)|  | [optional] 

### Return type

[**CreateFieldResponse**](CreateFieldResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createFilter"></a>
# **createFilter**
> CreateFilterResponse createFilter(opts)

Create Filter

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**|  | [optional] 
 **representing** | **String**|  | [optional] 
 **createFilterRequest** | [**CreateFilterRequest**](CreateFilterRequest.md)|  | [optional] 

### Return type

[**CreateFilterResponse**](CreateFilterResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createGroup"></a>
# **createGroup**
> CreateGroupResponse createGroup(opts)

Create Group

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**|  | [optional] 
 **representing** | **String**|  | [optional] 
 **createGroupRequest** | [**CreateGroupRequest**](CreateGroupRequest.md)|  | [optional] 

### Return type

[**CreateGroupResponse**](CreateGroupResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createInformation"></a>
# **createInformation**
> CreateInformationResponse createInformation(opts)

Create Information

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**|  | [optional] 
 **representing** | **String**|  | [optional] 
 **createInformationRequest** | [**CreateInformationRequest**](CreateInformationRequest.md)|  | [optional] 

### Return type

[**CreateInformationResponse**](CreateInformationResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createInterface"></a>
# **createInterface**
> CreateInterfaceResponse createInterface(opts)

Create Interface

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**|  | [optional] 
 **representing** | **String**|  | [optional] 
 **createInterfaceRequest** | [**CreateInterfaceRequest**](CreateInterfaceRequest.md)|  | [optional] 

### Return type

[**CreateInterfaceResponse**](CreateInterfaceResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createLabelList"></a>
# **createLabelList**
> CreateLabelListResponse createLabelList(opts)

Create Label List

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**|  | [optional] 
 **representing** | **String**|  | [optional] 
 **createLabelListRequest** | [**CreateLabelListRequest**](CreateLabelListRequest.md)|  | [optional] 

### Return type

[**CreateLabelListResponse**](CreateLabelListResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createLogin"></a>
# **createLogin**
> CreateLoginResponse createLogin(opts)

Create Login

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**|  | [optional] 
 **representing** | **String**|  | [optional] 
 **createLoginRequest** | [**CreateLoginRequest**](CreateLoginRequest.md)|  | [optional] 

### Return type

[**CreateLoginResponse**](CreateLoginResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createMirror"></a>
# **createMirror**
> CreateMirrorResponse createMirror(opts)

Create Mirror

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**|  | [optional] 
 **representing** | **String**|  | [optional] 
 **createMirrorRequest** | [**CreateMirrorRequest**](CreateMirrorRequest.md)|  | [optional] 

### Return type

[**CreateMirrorResponse**](CreateMirrorResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createPrice"></a>
# **createPrice**
> CreatePriceResponse createPrice(opts)

Create Price

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**|  | [optional] 
 **representing** | **String**|  | [optional] 
 **createPriceRequest** | [**CreatePriceRequest**](CreatePriceRequest.md)|  | [optional] 

### Return type

[**CreatePriceResponse**](CreatePriceResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createScope"></a>
# **createScope**
> CreateScopeResponse createScope(opts)

Create Scope

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**|  | [optional] 
 **representing** | **String**|  | [optional] 
 **createScopeRequest** | [**CreateScopeRequest**](CreateScopeRequest.md)|  | [optional] 

### Return type

[**CreateScopeResponse**](CreateScopeResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createStatement"></a>
# **createStatement**
> AddStatementResponse createStatement(opts)

Create Statement

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**|  | [optional] 
 **representing** | **String**|  | [optional] 
 **addStatementRequest** | [**AddStatementRequest**](AddStatementRequest.md)|  | [optional] 

### Return type

[**AddStatementResponse**](AddStatementResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createTemplate"></a>
# **createTemplate**
> CreateTemplateResponse createTemplate(opts)

Create Template

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**|  | [optional] 
 **representing** | **String**|  | [optional] 
 **createTemplateRequest** | [**CreateTemplateRequest**](CreateTemplateRequest.md)|  | [optional] 

### Return type

[**CreateTemplateResponse**](CreateTemplateResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteNode"></a>
# **deleteNode**
> StandardNodeResponse deleteNode(opts)

Delete Node

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**|  | [optional] 
 **representing** | **String**|  | [optional] 
 **nodeIdRequest** | [**NodeIdRequest**](NodeIdRequest.md)|  | [optional] 

### Return type

[**StandardNodeResponse**](StandardNodeResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="describe"></a>
# **describe**
> DescribeResponse describe(opts)

Describe

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**|  | [optional] 
 **representing** | **String**|  | [optional] 
 **describeRequest** | [**DescribeRequest**](DescribeRequest.md)|  | [optional] 

### Return type

[**DescribeResponse**](DescribeResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="history"></a>
# **history**
> NodeListing history(opts)

History

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**|  | [optional] 
 **representing** | **String**|  | [optional] 
 **nodeIdRequest** | [**NodeIdRequest**](NodeIdRequest.md)|  | [optional] 

### Return type

[**NodeListing**](NodeListing.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="label"></a>
# **label**
> AddLabelResponse label(opts)

Label a Node

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**|  | [optional] 
 **representing** | **String**|  | [optional] 
 **addLabelRequest** | [**AddLabelRequest**](AddLabelRequest.md)|  | [optional] 

### Return type

[**AddLabelResponse**](AddLabelResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="obliterate"></a>
# **obliterate**
> StandardNodeResponse obliterate(opts)

Obliterating Information Nodes

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**|  | [optional] 
 **representing** | **String**|  | [optional] 
 **nodeIdRequest** | [**NodeIdRequest**](NodeIdRequest.md)|  | [optional] 

### Return type

[**StandardNodeResponse**](StandardNodeResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="permission"></a>
# **permission**
> CreatePermissionResponse permission(opts)

Create Permission

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**|  | [optional] 
 **representing** | **String**|  | [optional] 
 **createPermissionRequest** | [**CreatePermissionRequest**](CreatePermissionRequest.md)|  | [optional] 

### Return type

[**CreatePermissionResponse**](CreatePermissionResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="read"></a>
# **read**
> ReadResponse read(opts)

Reading

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**|  | [optional] 
 **representing** | **String**|  | [optional] 
 **readRequest** | [**ReadRequest**](ReadRequest.md)|  | [optional] 

### Return type

[**ReadResponse**](ReadResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="readInformation"></a>
# **readInformation**
> ReadInformationResponse readInformation(opts)

Read Information

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**|  | [optional] 
 **representing** | **String**|  | [optional] 
 **readInformationRequest** | [**ReadInformationRequest**](ReadInformationRequest.md)|  | [optional] 

### Return type

[**ReadInformationResponse**](ReadInformationResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="replaceInformation"></a>
# **replaceInformation**
> Information replaceInformation(opts)

Replace

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**|  | [optional] 
 **representing** | **String**|  | [optional] 
 **replaceFieldRequest** | [**ReplaceFieldRequest**](ReplaceFieldRequest.md)|  | [optional] 

### Return type

[**Information**](Information.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="requestPermission"></a>
# **requestPermission**
> StandardNodeResponse requestPermission(opts)

Request Permission

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**|  | [optional] 
 **representing** | **String**|  | [optional] 
 **nodeIdRequest** | [**NodeIdRequest**](NodeIdRequest.md)|  | [optional] 

### Return type

[**StandardNodeResponse**](StandardNodeResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="resetLogin"></a>
# **resetLogin**
> ResetLoginResponse resetLogin(opts)

Changing Login Password

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**|  | [optional] 
 **representing** | **String**|  | [optional] 
 **resetLoginCredentialsRequest** | [**ResetLoginCredentialsRequest**](ResetLoginCredentialsRequest.md)|  | [optional] 

### Return type

[**ResetLoginResponse**](ResetLoginResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchAlias"></a>
# **searchAlias**
> SearchAliasResponse searchAlias(opts)

Search For Alias

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**|  | [optional] 
 **representing** | **String**|  | [optional] 
 **searchAliasRequest** | [**SearchAliasRequest**](SearchAliasRequest.md)|  | [optional] 

### Return type

[**SearchAliasResponse**](SearchAliasResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchEntity"></a>
# **searchEntity**
> EntityListResponse searchEntity(opts)

Search For Entity

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**|  | [optional] 
 **representing** | **String**|  | [optional] 
 **searchEntityRequest** | [**SearchEntityRequest**](SearchEntityRequest.md)|  | [optional] 

### Return type

[**EntityListResponse**](EntityListResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="settleAccount"></a>
# **settleAccount**
> SettleAccountResponse settleAccount(opts)

Settle Account

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**|  | [optional] 
 **representing** | **String**|  | [optional] 
 **settleAccountRequest** | [**SettleAccountRequest**](SettleAccountRequest.md)|  | [optional] 

### Return type

[**SettleAccountResponse**](SettleAccountResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateApplication"></a>
# **updateApplication**
> UpdateApplicationResponse updateApplication(opts)

Resetting Application Secret

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**|  | [optional] 
 **representing** | **String**|  | [optional] 
 **updateApplicationRequest** | [**UpdateApplicationRequest**](UpdateApplicationRequest.md)|  | [optional] 

### Return type

[**UpdateApplicationResponse**](UpdateApplicationResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateStatus"></a>
# **updateStatus**
> StandardNodeResponse updateStatus(opts)

Enabling/Disabling Nodes

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**|  | [optional] 
 **representing** | **String**|  | [optional] 
 **updateStatusRequest** | [**UpdateStatusRequest**](UpdateStatusRequest.md)|  | [optional] 

### Return type

[**StandardNodeResponse**](StandardNodeResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="watch"></a>
# **watch**
> CreateWatchResponse watch(opts)

Create Watch Trigger

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**|  | [optional] 
 **representing** | **String**|  | [optional] 
 **createWatchRequest** | [**CreateWatchRequest**](CreateWatchRequest.md)|  | [optional] 

### Return type

[**CreateWatchResponse**](CreateWatchResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="write"></a>
# **write**
> WriteResponse write(opts)

Writing by Template

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**|  | [optional] 
 **representing** | **String**|  | [optional] 
 **writeRequest** | [**WriteRequest**](WriteRequest.md)|  | [optional] 

### Return type

[**WriteResponse**](WriteResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

