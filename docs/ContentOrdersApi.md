# FlotiqUserApi.ContentOrdersApi

All URIs are relative to *https://api.flotiq.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**batchCreateOrders**](ContentOrdersApi.md#batchCreateOrders) | **POST** /api/v1/content/orders/batch | 
[**createOrders**](ContentOrdersApi.md#createOrders) | **POST** /api/v1/content/orders | 
[**deleteOrders**](ContentOrdersApi.md#deleteOrders) | **DELETE** /api/v1/content/orders/{id} | 
[**getOrders**](ContentOrdersApi.md#getOrders) | **GET** /api/v1/content/orders/{id} | 
[**getRemovedOrders**](ContentOrdersApi.md#getRemovedOrders) | **GET** /api/v1/content/orders/removed | 
[**listOrders**](ContentOrdersApi.md#listOrders) | **GET** /api/v1/content/orders | 
[**updateOrders**](ContentOrdersApi.md#updateOrders) | **PUT** /api/v1/content/orders/{id} | 



## batchCreateOrders

> BatchResponse batchCreateOrders(opts)



Allows you to create or create and update up to 100 objects of Orders type. &lt;br /&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://apidoc.flotiq.com/?url&#x3D;https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Finternal%2Fopen-api-schema.json%3Fauth_token%3D47bb663461da2a8f375f997e71cd3dbc#%2FContent: Orders%2FbatchCreateOrders&#39;&gt;&lt;code&gt;Try it out&lt;/code&gt;&lt;a&gt;

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentOrdersApi();
let opts = {
  'updateExisting': false, // Boolean | Overwrite existing objects
  'ordersWithoutInternal': [{"id":"orders-1","user":[{"dataUrl":"/api/v1/content/user/user-1","type":"internal"}],"status":"weryfikacja","service":[{"dataUrl":"/api/v1/content/service/service-1","type":"internal"}],"pictures":[{"dataUrl":"/api/v1/content/_media/_media-1","type":"internal"}],"quantity":0,"craftsman":[{"dataUrl":"/api/v1/content/craftsmen/craftsmen-1","type":"internal"}],"description":"description","masterpiece":[{"dataUrl":"/api/v1/content/masterpieces/masterpieces-1","type":"internal"}]},{"id":"orders-2","user":[{"dataUrl":"/api/v1/content/user/user-1","type":"internal"}],"status":"weryfikacja","service":[{"dataUrl":"/api/v1/content/service/service-1","type":"internal"}],"pictures":[{"dataUrl":"/api/v1/content/_media/_media-1","type":"internal"}],"quantity":0,"craftsman":[{"dataUrl":"/api/v1/content/craftsmen/craftsmen-1","type":"internal"}],"description":"description","masterpiece":[{"dataUrl":"/api/v1/content/masterpieces/masterpieces-1","type":"internal"}]}] // [OrdersWithoutInternal] | 
};
apiInstance.batchCreateOrders(opts, (error, data, response) => {
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
 **ordersWithoutInternal** | [**[OrdersWithoutInternal]**](OrdersWithoutInternal.md)|  | [optional] 

### Return type

[**BatchResponse**](BatchResponse.md)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createOrders

> Orders createOrders(opts)



Allows you to create object of Orders type. Please mind, that you are responsible for generating a unique object ID yourself.&lt;br /&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://apidoc.flotiq.com/?url&#x3D;https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Finternal%2Fopen-api-schema.json%3Fauth_token%3D47bb663461da2a8f375f997e71cd3dbc#%2FContent: Orders%2FcreateOrders&#39;&gt;&lt;code&gt;Try it out&lt;/code&gt;&lt;a&gt;

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentOrdersApi();
let opts = {
  'ordersWithoutInternal': {"id":"orders-1","user":[{"dataUrl":"/api/v1/content/user/user-1","type":"internal"}],"status":"weryfikacja","service":[{"dataUrl":"/api/v1/content/service/service-1","type":"internal"}],"pictures":[{"dataUrl":"/api/v1/content/_media/_media-1","type":"internal"}],"quantity":0,"craftsman":[{"dataUrl":"/api/v1/content/craftsmen/craftsmen-1","type":"internal"}],"description":"description","masterpiece":[{"dataUrl":"/api/v1/content/masterpieces/masterpieces-1","type":"internal"}]} // OrdersWithoutInternal | 
};
apiInstance.createOrders(opts, (error, data, response) => {
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
 **ordersWithoutInternal** | [**OrdersWithoutInternal**](OrdersWithoutInternal.md)|  | [optional] 

### Return type

[**Orders**](Orders.md)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteOrders

> deleteOrders(id)



Removes Orders object.&lt;br /&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://apidoc.flotiq.com/?url&#x3D;https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Finternal%2Fopen-api-schema.json%3Fauth_token%3D47bb663461da2a8f375f997e71cd3dbc#%2FContent: Orders%2FdeleteOrders&#39;&gt;&lt;code&gt;Try it out&lt;/code&gt;&lt;a&gt;

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentOrdersApi();
let id = "id_example"; // String | ContentObject identifier
apiInstance.deleteOrders(id, (error, data, response) => {
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


## getOrders

> Orders getOrders(id, opts)



Returns all information about Orders object. &lt;br /&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://apidoc.flotiq.com/?url&#x3D;https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Finternal%2Fopen-api-schema.json%3Fauth_token%3D47bb663461da2a8f375f997e71cd3dbc#%2FContent: Orders%2FgetOrders&#39;&gt;&lt;code&gt;Try it out&lt;/code&gt;&lt;a&gt;

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentOrdersApi();
let id = "id_example"; // String | ContentObject identifier
let opts = {
  'hydrate': 0 // Number | Should hydrate relations of object, for now only one level of hydration is possible
};
apiInstance.getOrders(id, opts, (error, data, response) => {
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

[**Orders**](Orders.md)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRemovedOrders

> [String] getRemovedOrders(opts)



Get ids of removed Orders objects. &lt;br /&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://apidoc.flotiq.com/?url&#x3D;https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Finternal%2Fopen-api-schema.json%3Fauth_token%3D47bb663461da2a8f375f997e71cd3dbc#%2FContent: Orders%2FgetRemovedOrders&#39;&gt;&lt;code&gt;Try it out&lt;/code&gt;&lt;a&gt;

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentOrdersApi();
let opts = {
  'deletedAfter': "deletedAfter_example" // String | Date from which ids of removed objects should be returned
};
apiInstance.getRemovedOrders(opts, (error, data, response) => {
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


## listOrders

> OrdersList listOrders(opts)



List objects of Orders type. &lt;br /&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://apidoc.flotiq.com/?url&#x3D;https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Finternal%2Fopen-api-schema.json%3Fauth_token%3D47bb663461da2a8f375f997e71cd3dbc#%2FContent: Orders%2FlistOrders&#39;&gt;&lt;code&gt;Try it out&lt;/code&gt;&lt;a&gt;

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentOrdersApi();
let opts = {
  'page': 1, // Number | Listing page number, 1-based
  'limit': 20, // Number | Page limit
  'orderBy': internal.updatedAt, // String | Order by field
  'orderDirection': asc, // String | Order direction
  'hydrate': 0, // Number | Should hydrate relations of object, for now only one level of hydration is possible
  'filters': {"slug":{"type":"contains","filter":"test"},"title":{"type":"contains","filter":"test"}} // String | List filters
};
apiInstance.listOrders(opts, (error, data, response) => {
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

[**OrdersList**](OrdersList.md)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateOrders

> Orders updateOrders(id, opts)



Allows update of the Orders object, it has to have all fields, as this operation overwrites the object. All properties  not included in the payload will be lost. &lt;br /&gt;&lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://apidoc.flotiq.com/?url&#x3D;https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Finternal%2Fopen-api-schema.json%3Fauth_token%3D47bb663461da2a8f375f997e71cd3dbc#%2FContent: Orders%2FupdateOrders&#39;&gt;&lt;code&gt;Try it out&lt;/code&gt;&lt;a&gt;

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.ContentOrdersApi();
let id = "id_example"; // String | ContentObject identifier
let opts = {
  'ordersWithoutInternal': {"id":"orders-1","user":[{"dataUrl":"/api/v1/content/user/user-1","type":"internal"}],"status":"weryfikacja","service":[{"dataUrl":"/api/v1/content/service/service-1","type":"internal"}],"pictures":[{"dataUrl":"/api/v1/content/_media/_media-1","type":"internal"}],"quantity":0,"craftsman":[{"dataUrl":"/api/v1/content/craftsmen/craftsmen-1","type":"internal"}],"description":"description","masterpiece":[{"dataUrl":"/api/v1/content/masterpieces/masterpieces-1","type":"internal"}]} // OrdersWithoutInternal | 
};
apiInstance.updateOrders(id, opts, (error, data, response) => {
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
 **ordersWithoutInternal** | [**OrdersWithoutInternal**](OrdersWithoutInternal.md)|  | [optional] 

### Return type

[**Orders**](Orders.md)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

