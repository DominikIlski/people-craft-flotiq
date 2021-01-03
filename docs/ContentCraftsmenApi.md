# FlotiqUserApi.ContentCraftsmenApi

All URIs are relative to *https://api.flotiq.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**batchCreateCraftsmen**](ContentCraftsmenApi.md#batchCreateCraftsmen) | **POST** /api/v1/content/craftsmen/batch | 
[**createCraftsmen**](ContentCraftsmenApi.md#createCraftsmen) | **POST** /api/v1/content/craftsmen | 
[**deleteCraftsmen**](ContentCraftsmenApi.md#deleteCraftsmen) | **DELETE** /api/v1/content/craftsmen/{id} | 
[**getCraftsmen**](ContentCraftsmenApi.md#getCraftsmen) | **GET** /api/v1/content/craftsmen/{id} | 
[**getRemovedCraftsmen**](ContentCraftsmenApi.md#getRemovedCraftsmen) | **GET** /api/v1/content/craftsmen/removed | 
[**listCraftsmen**](ContentCraftsmenApi.md#listCraftsmen) | **GET** /api/v1/content/craftsmen | 
[**updateCraftsmen**](ContentCraftsmenApi.md#updateCraftsmen) | **PUT** /api/v1/content/craftsmen/{id} | 



## batchCreateCraftsmen

> BatchResponse batchCreateCraftsmen(opts)



Allows you to create or create and update up to 100 objects of Craftsmen type. &lt;br /&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://apidoc.flotiq.com/?url&#x3D;https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Finternal%2Fopen-api-schema.json%3Fauth_token%3D47bb663461da2a8f375f997e71cd3dbc#%2FContent: Craftsmen%2FbatchCreateCraftsmen&#39;&gt;&lt;code&gt;Try it out&lt;/code&gt;&lt;a&gt;

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentCraftsmenApi();
let opts = {
  'updateExisting': false, // Boolean | Overwrite existing objects
  'craftsmenWithoutInternal': [{"id":"craftsmen-1","name":"name","photos":[{"dataUrl":"/api/v1/content/_media/_media-1","type":"internal"}],"surname":"surname","location":{"lat":0,"lon":0},"description":"description","phonenumber":0,"workshopname":"workshopname"},{"id":"craftsmen-2","name":"name","photos":[{"dataUrl":"/api/v1/content/_media/_media-1","type":"internal"}],"surname":"surname","location":{"lat":0,"lon":0},"description":"description","phonenumber":0,"workshopname":"workshopname"}] // [CraftsmenWithoutInternal] | 
};
apiInstance.batchCreateCraftsmen(opts, (error, data, response) => {
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
 **craftsmenWithoutInternal** | [**[CraftsmenWithoutInternal]**](CraftsmenWithoutInternal.md)|  | [optional] 

### Return type

[**BatchResponse**](BatchResponse.md)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createCraftsmen

> Craftsmen createCraftsmen(opts)



Allows you to create object of Craftsmen type. Please mind, that you are responsible for generating a unique object ID yourself.&lt;br /&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://apidoc.flotiq.com/?url&#x3D;https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Finternal%2Fopen-api-schema.json%3Fauth_token%3D47bb663461da2a8f375f997e71cd3dbc#%2FContent: Craftsmen%2FcreateCraftsmen&#39;&gt;&lt;code&gt;Try it out&lt;/code&gt;&lt;a&gt;

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentCraftsmenApi();
let opts = {
  'craftsmenWithoutInternal': {"id":"craftsmen-1","name":"name","photos":[{"dataUrl":"/api/v1/content/_media/_media-1","type":"internal"}],"surname":"surname","location":{"lat":0,"lon":0},"description":"description","phonenumber":0,"workshopname":"workshopname"} // CraftsmenWithoutInternal | 
};
apiInstance.createCraftsmen(opts, (error, data, response) => {
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
 **craftsmenWithoutInternal** | [**CraftsmenWithoutInternal**](CraftsmenWithoutInternal.md)|  | [optional] 

### Return type

[**Craftsmen**](Craftsmen.md)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteCraftsmen

> deleteCraftsmen(id)



Removes Craftsmen object.&lt;br /&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://apidoc.flotiq.com/?url&#x3D;https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Finternal%2Fopen-api-schema.json%3Fauth_token%3D47bb663461da2a8f375f997e71cd3dbc#%2FContent: Craftsmen%2FdeleteCraftsmen&#39;&gt;&lt;code&gt;Try it out&lt;/code&gt;&lt;a&gt;

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentCraftsmenApi();
let id = "id_example"; // String | ContentObject identifier
apiInstance.deleteCraftsmen(id, (error, data, response) => {
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


## getCraftsmen

> Craftsmen getCraftsmen(id, opts)



Returns all information about Craftsmen object. &lt;br /&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://apidoc.flotiq.com/?url&#x3D;https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Finternal%2Fopen-api-schema.json%3Fauth_token%3D47bb663461da2a8f375f997e71cd3dbc#%2FContent: Craftsmen%2FgetCraftsmen&#39;&gt;&lt;code&gt;Try it out&lt;/code&gt;&lt;a&gt;

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentCraftsmenApi();
let id = "id_example"; // String | ContentObject identifier
let opts = {
  'hydrate': 0 // Number | Should hydrate relations of object, for now only one level of hydration is possible
};
apiInstance.getCraftsmen(id, opts, (error, data, response) => {
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

[**Craftsmen**](Craftsmen.md)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRemovedCraftsmen

> [String] getRemovedCraftsmen(opts)



Get ids of removed Craftsmen objects. &lt;br /&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://apidoc.flotiq.com/?url&#x3D;https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Finternal%2Fopen-api-schema.json%3Fauth_token%3D47bb663461da2a8f375f997e71cd3dbc#%2FContent: Craftsmen%2FgetRemovedCraftsmen&#39;&gt;&lt;code&gt;Try it out&lt;/code&gt;&lt;a&gt;

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentCraftsmenApi();
let opts = {
  'deletedAfter': "deletedAfter_example" // String | Date from which ids of removed objects should be returned
};
apiInstance.getRemovedCraftsmen(opts, (error, data, response) => {
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


## listCraftsmen

> CraftsmenList listCraftsmen(opts)



List objects of Craftsmen type. &lt;br /&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://apidoc.flotiq.com/?url&#x3D;https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Finternal%2Fopen-api-schema.json%3Fauth_token%3D47bb663461da2a8f375f997e71cd3dbc#%2FContent: Craftsmen%2FlistCraftsmen&#39;&gt;&lt;code&gt;Try it out&lt;/code&gt;&lt;a&gt;

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentCraftsmenApi();
let opts = {
  'page': 1, // Number | Listing page number, 1-based
  'limit': 20, // Number | Page limit
  'orderBy': internal.updatedAt, // String | Order by field
  'orderDirection': asc, // String | Order direction
  'hydrate': 0, // Number | Should hydrate relations of object, for now only one level of hydration is possible
  'filters': {"slug":{"type":"contains","filter":"test"},"title":{"type":"contains","filter":"test"}} // String | List filters
};
apiInstance.listCraftsmen(opts, (error, data, response) => {
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

[**CraftsmenList**](CraftsmenList.md)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateCraftsmen

> Craftsmen updateCraftsmen(id, opts)



Allows update of the Craftsmen object, it has to have all fields, as this operation overwrites the object. All properties  not included in the payload will be lost. &lt;br /&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://apidoc.flotiq.com/?url&#x3D;https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Finternal%2Fopen-api-schema.json%3Fauth_token%3D47bb663461da2a8f375f997e71cd3dbc#%2FContent: Craftsmen%2FupdateCraftsmen&#39;&gt;&lt;code&gt;Try it out&lt;/code&gt;&lt;a&gt;

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentCraftsmenApi();
let id = "id_example"; // String | ContentObject identifier
let opts = {
  'craftsmenWithoutInternal': {"id":"craftsmen-1","name":"name","photos":[{"dataUrl":"/api/v1/content/_media/_media-1","type":"internal"}],"surname":"surname","location":{"lat":0,"lon":0},"description":"description","phonenumber":0,"workshopname":"workshopname"} // CraftsmenWithoutInternal | 
};
apiInstance.updateCraftsmen(id, opts, (error, data, response) => {
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
 **craftsmenWithoutInternal** | [**CraftsmenWithoutInternal**](CraftsmenWithoutInternal.md)|  | [optional] 

### Return type

[**Craftsmen**](Craftsmen.md)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

