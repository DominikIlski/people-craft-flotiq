# FlotiqUserApi.SearchAPIApi

All URIs are relative to *https://api.flotiq.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**search**](SearchAPIApi.md#search) | **GET** /api/v1/search | 



## search

> SearchResponse search(opts)



The Flotiq API provides a powerful search engine, which is a wrapper for ElasticSearch queries. We tried to balance between resembling the ES API (for those, who already know it) and keeping it simple and cohesive with Flotiq API. This endpoint provides means for querying content objects that match a set of criteria, with options for:   * limiting search to specific Content Types,  * limit search to specific fields,  * weighting fields to modify results scoring,  * aggregating results by fields.   You can find more information about the Search API in the [Search API docs](https://flotiq.com/docs/API/search/).

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.SearchAPIApi();
let opts = {
  'q': "''", // String | Query
  'fields': ["null"], // [String] | Search only in selected fields.
  'page': "'1'", // String | Listing page number, 1-based
  'limit': "'20'", // String | Page limit
  'orderBy': "''", // String | Order by field
  'orderDirection': "'asc'", // String | Order direction
  'contentType': ["null"], // [String] | Restrict search to content types set
  'aggregateBy': ["null"], // [String] | Field to aggregate results direction
  'filters': {"public":true}, // Object | Filter by object properties. Expected format: filters[property1]=value1&filters[property2]=value2
  'postFilters': {"public":true}, // Object | Filter by object properties. Use it when you want aggregated counts without filters applied. Expected format: post_filters[property1]=value1&post_filters[property2]=value2
  'geoFilters': {"location":"geo_distance,1.50km,40.1,-19.2"} // Object | Filter by object geolocation properties. Example value: geo_filters[location]=geo_distance,1.50km,40.1,-19.2 (filter name, distance, latitude, longitude). For more information see ElasticSearch docs. Only geo_distance query is supported.
};
apiInstance.search(opts, (error, data, response) => {
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
 **q** | **String**| Query | [optional] [default to &#39;&#39;]
 **fields** | [**[String]**](String.md)| Search only in selected fields. | [optional] 
 **page** | **String**| Listing page number, 1-based | [optional] [default to &#39;1&#39;]
 **limit** | **String**| Page limit | [optional] [default to &#39;20&#39;]
 **orderBy** | **String**| Order by field | [optional] [default to &#39;&#39;]
 **orderDirection** | **String**| Order direction | [optional] [default to &#39;asc&#39;]
 **contentType** | [**[String]**](String.md)| Restrict search to content types set | [optional] 
 **aggregateBy** | [**[String]**](String.md)| Field to aggregate results direction | [optional] 
 **filters** | [**Object**](.md)| Filter by object properties. Expected format: filters[property1]&#x3D;value1&amp;filters[property2]&#x3D;value2 | [optional] 
 **postFilters** | [**Object**](.md)| Filter by object properties. Use it when you want aggregated counts without filters applied. Expected format: post_filters[property1]&#x3D;value1&amp;post_filters[property2]&#x3D;value2 | [optional] 
 **geoFilters** | [**Object**](.md)| Filter by object geolocation properties. Example value: geo_filters[location]&#x3D;geo_distance,1.50km,40.1,-19.2 (filter name, distance, latitude, longitude). For more information see ElasticSearch docs. Only geo_distance query is supported. | [optional] 

### Return type

[**SearchResponse**](SearchResponse.md)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

