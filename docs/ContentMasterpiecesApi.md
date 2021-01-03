# FlotiqUserApi.ContentMasterpiecesApi

All URIs are relative to *https://api.flotiq.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**batchCreateMasterpieces**](ContentMasterpiecesApi.md#batchCreateMasterpieces) | **POST** /api/v1/content/masterpieces/batch | 
[**createMasterpieces**](ContentMasterpiecesApi.md#createMasterpieces) | **POST** /api/v1/content/masterpieces | 
[**deleteMasterpieces**](ContentMasterpiecesApi.md#deleteMasterpieces) | **DELETE** /api/v1/content/masterpieces/{id} | 
[**getMasterpieces**](ContentMasterpiecesApi.md#getMasterpieces) | **GET** /api/v1/content/masterpieces/{id} | 
[**getRemovedMasterpieces**](ContentMasterpiecesApi.md#getRemovedMasterpieces) | **GET** /api/v1/content/masterpieces/removed | 
[**listMasterpieces**](ContentMasterpiecesApi.md#listMasterpieces) | **GET** /api/v1/content/masterpieces | 
[**updateMasterpieces**](ContentMasterpiecesApi.md#updateMasterpieces) | **PUT** /api/v1/content/masterpieces/{id} | 



## batchCreateMasterpieces

> BatchResponse batchCreateMasterpieces(opts)



Allows you to create or create and update up to 100 objects of Masterpieces type. &lt;br /&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://apidoc.flotiq.com/?url&#x3D;https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Finternal%2Fopen-api-schema.json%3Fauth_token%3D47bb663461da2a8f375f997e71cd3dbc#%2FContent: Masterpieces%2FbatchCreateMasterpieces&#39;&gt;&lt;code&gt;Try it out&lt;/code&gt;&lt;a&gt;

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentMasterpiecesApi();
let opts = {
  'updateExisting': false, // Boolean | Overwrite existing objects
  'masterpiecesWithoutInternal': [{"id":"masterpieces-1","name":"name","price":"price","photos":[{"dataUrl":"/api/v1/content/_media/_media-1","type":"internal"}],"craftsman":[{"dataUrl":"/api/v1/content/craftsmen/craftsmen-1","type":"internal"}],"description":"description"},{"id":"masterpieces-2","name":"name","price":"price","photos":[{"dataUrl":"/api/v1/content/_media/_media-1","type":"internal"}],"craftsman":[{"dataUrl":"/api/v1/content/craftsmen/craftsmen-1","type":"internal"}],"description":"description"}] // [MasterpiecesWithoutInternal] | 
};
apiInstance.batchCreateMasterpieces(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateExisting** | **Boolean**| Overwrite existing objects | [optional] [default to false]
 **masterpiecesWithoutInternal** | [**[MasterpiecesWithoutInternal]**](MasterpiecesWithoutInternal.md)|  | [optional] 

### Return type

[**BatchResponse**](BatchResponse.md)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createMasterpieces

> Masterpieces createMasterpieces(opts)



Allows you to create object of Masterpieces type. Please mind, that you are responsible for generating a unique object ID yourself.&lt;br /&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://apidoc.flotiq.com/?url&#x3D;https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Finternal%2Fopen-api-schema.json%3Fauth_token%3D47bb663461da2a8f375f997e71cd3dbc#%2FContent: Masterpieces%2FcreateMasterpieces&#39;&gt;&lt;code&gt;Try it out&lt;/code&gt;&lt;a&gt;

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentMasterpiecesApi();
let opts = {
  'masterpiecesWithoutInternal': {"id":"masterpieces-1","name":"name","price":"price","photos":[{"dataUrl":"/api/v1/content/_media/_media-1","type":"internal"}],"craftsman":[{"dataUrl":"/api/v1/content/craftsmen/craftsmen-1","type":"internal"}],"description":"description"} // MasterpiecesWithoutInternal | 
};
apiInstance.createMasterpieces(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **masterpiecesWithoutInternal** | [**MasterpiecesWithoutInternal**](MasterpiecesWithoutInternal.md)|  | [optional] 

### Return type

[**Masterpieces**](Masterpieces.md)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteMasterpieces

> deleteMasterpieces(id)



Removes Masterpieces object.&lt;br /&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://apidoc.flotiq.com/?url&#x3D;https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Finternal%2Fopen-api-schema.json%3Fauth_token%3D47bb663461da2a8f375f997e71cd3dbc#%2FContent: Masterpieces%2FdeleteMasterpieces&#39;&gt;&lt;code&gt;Try it out&lt;/code&gt;&lt;a&gt;

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentMasterpiecesApi();
let id = "id_example"; // String | ContentObject identifier
apiInstance.deleteMasterpieces(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ContentObject identifier | 

### Return type

null (empty response body)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getMasterpieces

> Masterpieces getMasterpieces(id, opts)



Returns all information about Masterpieces object. &lt;br /&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://apidoc.flotiq.com/?url&#x3D;https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Finternal%2Fopen-api-schema.json%3Fauth_token%3D47bb663461da2a8f375f997e71cd3dbc#%2FContent: Masterpieces%2FgetMasterpieces&#39;&gt;&lt;code&gt;Try it out&lt;/code&gt;&lt;a&gt;

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentMasterpiecesApi();
let id = "id_example"; // String | ContentObject identifier
let opts = {
  'hydrate': 0 // Number | Should hydrate relations of object, for now only one level of hydration is possible
};
apiInstance.getMasterpieces(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ContentObject identifier | 
 **hydrate** | **Number**| Should hydrate relations of object, for now only one level of hydration is possible | [optional] [default to 0]

### Return type

[**Masterpieces**](Masterpieces.md)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRemovedMasterpieces

> [String] getRemovedMasterpieces(opts)



Get ids of removed Masterpieces objects. &lt;br /&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://apidoc.flotiq.com/?url&#x3D;https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Finternal%2Fopen-api-schema.json%3Fauth_token%3D47bb663461da2a8f375f997e71cd3dbc#%2FContent: Masterpieces%2FgetRemovedMasterpieces&#39;&gt;&lt;code&gt;Try it out&lt;/code&gt;&lt;a&gt;

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentMasterpiecesApi();
let opts = {
  'deletedAfter': "deletedAfter_example" // String | Date from which ids of removed objects should be returned
};
apiInstance.getRemovedMasterpieces(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deletedAfter** | **String**| Date from which ids of removed objects should be returned | [optional] 

### Return type

**[String]**

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listMasterpieces

> MasterpiecesList listMasterpieces(opts)



List objects of Masterpieces type. &lt;br /&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://apidoc.flotiq.com/?url&#x3D;https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Finternal%2Fopen-api-schema.json%3Fauth_token%3D47bb663461da2a8f375f997e71cd3dbc#%2FContent: Masterpieces%2FlistMasterpieces&#39;&gt;&lt;code&gt;Try it out&lt;/code&gt;&lt;a&gt;

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentMasterpiecesApi();
let opts = {
  'page': 1, // Number | Listing page number, 1-based
  'limit': 20, // Number | Page limit
  'orderBy': internal.updatedAt, // String | Order by field
  'orderDirection': asc, // String | Order direction
  'hydrate': 0, // Number | Should hydrate relations of object, for now only one level of hydration is possible
  'filters': {"slug":{"type":"contains","filter":"test"},"title":{"type":"contains","filter":"test"}} // String | List filters
};
apiInstance.listMasterpieces(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Listing page number, 1-based | [optional] [default to 1]
 **limit** | **Number**| Page limit | [optional] [default to 20]
 **orderBy** | **String**| Order by field | [optional] [default to &#39;internal.createdAt&#39;]
 **orderDirection** | **String**| Order direction | [optional] [default to &#39;asc&#39;]
 **hydrate** | **Number**| Should hydrate relations of object, for now only one level of hydration is possible | [optional] [default to 0]
 **filters** | **String**| List filters | [optional] [default to &#39;{}&#39;]

### Return type

[**MasterpiecesList**](MasterpiecesList.md)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateMasterpieces

> Masterpieces updateMasterpieces(id, opts)



Allows update of the Masterpieces object, it has to have all fields, as this operation overwrites the object. All properties  not included in the payload will be lost. &lt;br /&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://apidoc.flotiq.com/?url&#x3D;https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Finternal%2Fopen-api-schema.json%3Fauth_token%3D47bb663461da2a8f375f997e71cd3dbc#%2FContent: Masterpieces%2FupdateMasterpieces&#39;&gt;&lt;code&gt;Try it out&lt;/code&gt;&lt;a&gt;

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentMasterpiecesApi();
let id = "id_example"; // String | ContentObject identifier
let opts = {
  'masterpiecesWithoutInternal': {"id":"masterpieces-1","name":"name","price":"price","photos":[{"dataUrl":"/api/v1/content/_media/_media-1","type":"internal"}],"craftsman":[{"dataUrl":"/api/v1/content/craftsmen/craftsmen-1","type":"internal"}],"description":"description"} // MasterpiecesWithoutInternal | 
};
apiInstance.updateMasterpieces(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ContentObject identifier | 
 **masterpiecesWithoutInternal** | [**MasterpiecesWithoutInternal**](MasterpiecesWithoutInternal.md)|  | [optional] 

### Return type

[**Masterpieces**](Masterpieces.md)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

