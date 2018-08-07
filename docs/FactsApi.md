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

### Example
```javascript
var FacternApi = require('factern_api');
var defaultClient = FacternApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FacternApi.FactsApi();
var opts = {
  'login': "login_example", // String | 
  'representing': "representing_example", // String | 
  'createMemberRequest': new FacternApi.CreateMemberRequest() // CreateMemberRequest | 
};
apiInstance.addMember(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

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

### Example
```javascript
var FacternApi = require('factern_api');
var defaultClient = FacternApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FacternApi.FactsApi();
var opts = {
  'login': "login_example", // String | 
  'representing': "representing_example", // String | 
  'createBidRequest': new FacternApi.CreateBidRequest() // CreateBidRequest | 
};
apiInstance.bid(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

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

### Example
```javascript
var FacternApi = require('factern_api');
var defaultClient = FacternApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FacternApi.FactsApi();
var opts = {
  'login': "login_example", // String | 
  'representing': "representing_example", // String | 
  'deleteRequest': new FacternApi.DeleteRequest() // DeleteRequest | 
};
apiInstance.callDelete(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

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

### Example
```javascript
var FacternApi = require('factern_api');
var defaultClient = FacternApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FacternApi.FactsApi();
var opts = {
  'login': "login_example", // String | 
  'representing': "representing_example", // String | 
  'createAliasRequest': new FacternApi.CreateAliasRequest() // CreateAliasRequest | 
};
apiInstance.createAlias(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

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

### Example
```javascript
var FacternApi = require('factern_api');
var defaultClient = FacternApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FacternApi.FactsApi();
var opts = {
  'login': "login_example", // String | 
  'representing': "representing_example", // String | 
  'createApplicationRequest': new FacternApi.CreateApplicationRequest() // CreateApplicationRequest | 
};
apiInstance.createApplication(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

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

### Example
```javascript
var FacternApi = require('factern_api');
var defaultClient = FacternApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FacternApi.FactsApi();
var opts = {
  'login': "login_example", // String | 
  'representing': "representing_example", // String | 
  'createDomainRequest': new FacternApi.CreateDomainRequest() // CreateDomainRequest | 
};
apiInstance.createDomain(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

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

### Example
```javascript
var FacternApi = require('factern_api');
var defaultClient = FacternApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FacternApi.FactsApi();
var opts = {
  'login': "login_example", // String | 
  'representing': "representing_example", // String | 
  'createEntityRequest': new FacternApi.CreateEntityRequest() // CreateEntityRequest | 
};
apiInstance.createEntity(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

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

### Example
```javascript
var FacternApi = require('factern_api');
var defaultClient = FacternApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FacternApi.FactsApi();
var opts = {
  'login': "login_example", // String | 
  'representing': "representing_example", // String | 
  'createFieldRequest': new FacternApi.CreateFieldRequest() // CreateFieldRequest | 
};
apiInstance.createField(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

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

### Example
```javascript
var FacternApi = require('factern_api');
var defaultClient = FacternApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FacternApi.FactsApi();
var opts = {
  'login': "login_example", // String | 
  'representing': "representing_example", // String | 
  'createFilterRequest': new FacternApi.CreateFilterRequest() // CreateFilterRequest | 
};
apiInstance.createFilter(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

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

### Example
```javascript
var FacternApi = require('factern_api');
var defaultClient = FacternApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FacternApi.FactsApi();
var opts = {
  'login': "login_example", // String | 
  'representing': "representing_example", // String | 
  'createGroupRequest': new FacternApi.CreateGroupRequest() // CreateGroupRequest | 
};
apiInstance.createGroup(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

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

### Example
```javascript
var FacternApi = require('factern_api');
var defaultClient = FacternApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FacternApi.FactsApi();
var opts = {
  'login': "login_example", // String | 
  'representing': "representing_example", // String | 
  'createInformationRequest': new FacternApi.CreateInformationRequest() // CreateInformationRequest | 
};
apiInstance.createInformation(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

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

### Example
```javascript
var FacternApi = require('factern_api');
var defaultClient = FacternApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FacternApi.FactsApi();
var opts = {
  'login': "login_example", // String | 
  'representing': "representing_example", // String | 
  'createInterfaceRequest': new FacternApi.CreateInterfaceRequest() // CreateInterfaceRequest | 
};
apiInstance.createInterface(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

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

### Example
```javascript
var FacternApi = require('factern_api');
var defaultClient = FacternApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FacternApi.FactsApi();
var opts = {
  'login': "login_example", // String | 
  'representing': "representing_example", // String | 
  'createLabelListRequest': new FacternApi.CreateLabelListRequest() // CreateLabelListRequest | 
};
apiInstance.createLabelList(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

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

### Example
```javascript
var FacternApi = require('factern_api');
var defaultClient = FacternApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FacternApi.FactsApi();
var opts = {
  'login': "login_example", // String | 
  'representing': "representing_example", // String | 
  'createLoginRequest': new FacternApi.CreateLoginRequest() // CreateLoginRequest | 
};
apiInstance.createLogin(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

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

### Example
```javascript
var FacternApi = require('factern_api');
var defaultClient = FacternApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FacternApi.FactsApi();
var opts = {
  'login': "login_example", // String | 
  'representing': "representing_example", // String | 
  'createMirrorRequest': new FacternApi.CreateMirrorRequest() // CreateMirrorRequest | 
};
apiInstance.createMirror(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

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

### Example
```javascript
var FacternApi = require('factern_api');
var defaultClient = FacternApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FacternApi.FactsApi();
var opts = {
  'login': "login_example", // String | 
  'representing': "representing_example", // String | 
  'createPriceRequest': new FacternApi.CreatePriceRequest() // CreatePriceRequest | 
};
apiInstance.createPrice(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

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

### Example
```javascript
var FacternApi = require('factern_api');
var defaultClient = FacternApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FacternApi.FactsApi();
var opts = {
  'login': "login_example", // String | 
  'representing': "representing_example", // String | 
  'createScopeRequest': new FacternApi.CreateScopeRequest() // CreateScopeRequest | 
};
apiInstance.createScope(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

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

### Example
```javascript
var FacternApi = require('factern_api');
var defaultClient = FacternApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FacternApi.FactsApi();
var opts = {
  'login': "login_example", // String | 
  'representing': "representing_example", // String | 
  'addStatementRequest': new FacternApi.AddStatementRequest() // AddStatementRequest | 
};
apiInstance.createStatement(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

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

### Example
```javascript
var FacternApi = require('factern_api');
var defaultClient = FacternApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FacternApi.FactsApi();
var opts = {
  'login': "login_example", // String | 
  'representing': "representing_example", // String | 
  'createTemplateRequest': new FacternApi.CreateTemplateRequest() // CreateTemplateRequest | 
};
apiInstance.createTemplate(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

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

### Example
```javascript
var FacternApi = require('factern_api');
var defaultClient = FacternApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FacternApi.FactsApi();
var opts = {
  'login': "login_example", // String | 
  'representing': "representing_example", // String | 
  'nodeIdRequest': new FacternApi.NodeIdRequest() // NodeIdRequest | 
};
apiInstance.deleteNode(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

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

### Example
```javascript
var FacternApi = require('factern_api');
var defaultClient = FacternApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FacternApi.FactsApi();
var opts = {
  'login': "login_example", // String | 
  'representing': "representing_example", // String | 
  'describeRequest': new FacternApi.DescribeRequest() // DescribeRequest | 
};
apiInstance.describe(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

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

### Example
```javascript
var FacternApi = require('factern_api');
var defaultClient = FacternApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FacternApi.FactsApi();
var opts = {
  'login': "login_example", // String | 
  'representing': "representing_example", // String | 
  'nodeIdRequest': new FacternApi.NodeIdRequest() // NodeIdRequest | 
};
apiInstance.history(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

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

### Example
```javascript
var FacternApi = require('factern_api');
var defaultClient = FacternApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FacternApi.FactsApi();
var opts = {
  'login': "login_example", // String | 
  'representing': "representing_example", // String | 
  'addLabelRequest': new FacternApi.AddLabelRequest() // AddLabelRequest | 
};
apiInstance.label(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

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

### Example
```javascript
var FacternApi = require('factern_api');
var defaultClient = FacternApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FacternApi.FactsApi();
var opts = {
  'login': "login_example", // String | 
  'representing': "representing_example", // String | 
  'nodeIdRequest': new FacternApi.NodeIdRequest() // NodeIdRequest | 
};
apiInstance.obliterate(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

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

### Example
```javascript
var FacternApi = require('factern_api');
var defaultClient = FacternApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FacternApi.FactsApi();
var opts = {
  'login': "login_example", // String | 
  'representing': "representing_example", // String | 
  'createPermissionRequest': new FacternApi.CreatePermissionRequest() // CreatePermissionRequest | 
};
apiInstance.permission(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

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

### Example
```javascript
var FacternApi = require('factern_api');
var defaultClient = FacternApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FacternApi.FactsApi();
var opts = {
  'login': "login_example", // String | 
  'representing': "representing_example", // String | 
  'readRequest': new FacternApi.ReadRequest() // ReadRequest | 
};
apiInstance.read(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

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

### Example
```javascript
var FacternApi = require('factern_api');
var defaultClient = FacternApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FacternApi.FactsApi();
var opts = {
  'login': "login_example", // String | 
  'representing': "representing_example", // String | 
  'readInformationRequest': new FacternApi.ReadInformationRequest() // ReadInformationRequest | 
};
apiInstance.readInformation(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

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

### Example
```javascript
var FacternApi = require('factern_api');
var defaultClient = FacternApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FacternApi.FactsApi();
var opts = {
  'login': "login_example", // String | 
  'representing': "representing_example", // String | 
  'replaceFieldRequest': new FacternApi.ReplaceFieldRequest() // ReplaceFieldRequest | 
};
apiInstance.replaceInformation(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

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

### Example
```javascript
var FacternApi = require('factern_api');
var defaultClient = FacternApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FacternApi.FactsApi();
var opts = {
  'login': "login_example", // String | 
  'representing': "representing_example", // String | 
  'nodeIdRequest': new FacternApi.NodeIdRequest() // NodeIdRequest | 
};
apiInstance.requestPermission(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

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

### Example
```javascript
var FacternApi = require('factern_api');
var defaultClient = FacternApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FacternApi.FactsApi();
var opts = {
  'login': "login_example", // String | 
  'representing': "representing_example", // String | 
  'resetLoginCredentialsRequest': new FacternApi.ResetLoginCredentialsRequest() // ResetLoginCredentialsRequest | 
};
apiInstance.resetLogin(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

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

### Example
```javascript
var FacternApi = require('factern_api');
var defaultClient = FacternApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FacternApi.FactsApi();
var opts = {
  'login': "login_example", // String | 
  'representing': "representing_example", // String | 
  'searchAliasRequest': new FacternApi.SearchAliasRequest() // SearchAliasRequest | 
};
apiInstance.searchAlias(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

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

### Example
```javascript
var FacternApi = require('factern_api');
var defaultClient = FacternApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FacternApi.FactsApi();
var opts = {
  'login': "login_example", // String | 
  'representing': "representing_example", // String | 
  'searchEntityRequest': new FacternApi.SearchEntityRequest() // SearchEntityRequest | 
};
apiInstance.searchEntity(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

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

### Example
```javascript
var FacternApi = require('factern_api');
var defaultClient = FacternApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FacternApi.FactsApi();
var opts = {
  'login': "login_example", // String | 
  'representing': "representing_example", // String | 
  'settleAccountRequest': new FacternApi.SettleAccountRequest() // SettleAccountRequest | 
};
apiInstance.settleAccount(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

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

### Example
```javascript
var FacternApi = require('factern_api');
var defaultClient = FacternApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FacternApi.FactsApi();
var opts = {
  'login': "login_example", // String | 
  'representing': "representing_example", // String | 
  'updateApplicationRequest': new FacternApi.UpdateApplicationRequest() // UpdateApplicationRequest | 
};
apiInstance.updateApplication(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

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

### Example
```javascript
var FacternApi = require('factern_api');
var defaultClient = FacternApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FacternApi.FactsApi();
var opts = {
  'login': "login_example", // String | 
  'representing': "representing_example", // String | 
  'updateStatusRequest': new FacternApi.UpdateStatusRequest() // UpdateStatusRequest | 
};
apiInstance.updateStatus(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

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

### Example
```javascript
var FacternApi = require('factern_api');
var defaultClient = FacternApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FacternApi.FactsApi();
var opts = {
  'login': "login_example", // String | 
  'representing': "representing_example", // String | 
  'createWatchRequest': new FacternApi.CreateWatchRequest() // CreateWatchRequest | 
};
apiInstance.watch(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

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

### Example
```javascript
var FacternApi = require('factern_api');
var defaultClient = FacternApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new FacternApi.FactsApi();
var opts = {
  'login': "login_example", // String | 
  'representing': "representing_example", // String | 
  'writeRequest': new FacternApi.WriteRequest() // WriteRequest | 
};
apiInstance.write(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

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

