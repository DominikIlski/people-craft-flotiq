# FlotiqUserApi.MediaApi

All URIs are relative to *https://api.flotiq.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMedia**](MediaApi.md#getMedia) | **GET** /image/{width_height}/{key} | 
[**postMedia**](MediaApi.md#postMedia) | **POST** /api/media | 



## getMedia

> getMedia(widthHeight, key)



Get single media file

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.MediaApi();
let widthHeight = "'0x0'"; // String | Expected format: WIDTHxHEIGHT, for example 750x200. Width of the image, or 0 when the file is not an image or it should have original uploaded width, or it should be scaled proportionally with height specified. Height of the image, or 0 when the file is not an image or it should have original uploaded height, or it should be scaled proportionally with width specified
let key = "key_example"; // String | Key of the file, it is made from id and extension, e.g. _media-4564.jpg for image with id _media-4564 and jpg extension
apiInstance.getMedia(widthHeight, key, (error, data, response) => {
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
 **widthHeight** | **String**| Expected format: WIDTHxHEIGHT, for example 750x200. Width of the image, or 0 when the file is not an image or it should have original uploaded width, or it should be scaled proportionally with height specified. Height of the image, or 0 when the file is not an image or it should have original uploaded height, or it should be scaled proportionally with width specified | [default to &#39;0x0&#39;]
 **key** | **String**| Key of the file, it is made from id and extension, e.g. _media-4564.jpg for image with id _media-4564 and jpg extension | 

### Return type

null (empty response body)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## postMedia

> postMedia(file, type, opts)



Endpoint for media files upload

### Example

```javascript
import FlotiqUserApi from 'flotiq_user_api';
let defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
let HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new FlotiqUserApi.MediaApi();
let file = "/path/to/file"; // File | File to upload
let type = "type_example"; // String | Type of file image|file
let opts = {
  'save': 0 // Number | Should file be saved to databese on upload: 0|1
};
apiInstance.postMedia(file, type, opts, (error, data, response) => {
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
 **file** | **File**| File to upload | 
 **type** | **String**| Type of file image|file | 
 **save** | **Number**| Should file be saved to databese on upload: 0|1 | [optional] [default to 0]

### Return type

null (empty response body)

### Authorization

[HeaderApiKeyAuth](../README.md#HeaderApiKeyAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: Not defined

