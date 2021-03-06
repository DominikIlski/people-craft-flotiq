# flotiq_user_api

FlotiqUserApi - JavaScript client for flotiq_user_api
## Getting started

 This is your Flotiq User API that allows you to access your data through the Content API that you defined.

 ### Access to data

 There are several methods that you can use to access your data:
 * Live API docs - available via <code>Try it out</code> button available next to each endpoint 
 * Copying example code on the right side of each endpoint
 * By downloading the SDKs available in mulitple languages.
 * By downloading the Postman collection and importing it into Postman.


 Each of these methods is described in length in the [user documentation](https://flotiq.com/docs/).

 ### Authorization

 In order to make use of the provided documentation, example code, SDKs and so on - you will need to pull out your API key. We recommend that you start with the ReadOnly API Key which will allow you to make all the `GET` requests but will error-out when you try to modify content. Please remember to replace the key for `POST`, `PUT` and `DELETE` calls.

 It's also possible to use scoped API keys - you can create those in the API keys section of the Flotiq user interface. This will allow you to create a key that only authorizes access to a specific content type (or a set of content types, if you choose so). Read more about how to use and create API keys in the [API keys documentation](https://flotiq.com/docs/API/).

 ## Object access

 Once you define a Content Type it will become available in your Content API as a set of endpoints that will allow you to work with objects:

 * create
 * list
 * update
 * delete
 * batch create
 * retrieve single object.

### Hydration

 When you build Content Types that have relation to others your objects will optionally support hydration of related entities. The endpoints that support object retrieval accept a `hydrate` parameter, which can be used to easily fetch hydrated objects. Since this breaks the standard REST concepts - it's not enabled by default, but it's a very handy feature that allows to reduce the amount of HTTP requests sent over the wire and we strongly recommend to use it.
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 2.0.1
- Package version: 2.0.1
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://flotiq.com](https://flotiq.com)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install flotiq_user_api --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your flotiq_user_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var FlotiqUserApi = require('flotiq_user_api');

var defaultClient = FlotiqUserApi.ApiClient.instance;
// Configure API key authorization: HeaderApiKeyAuth
var HeaderApiKeyAuth = defaultClient.authentications['HeaderApiKeyAuth'];
HeaderApiKeyAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//HeaderApiKeyAuth.apiKeyPrefix['X-AUTH-TOKEN'] = "Token"

var api = new FlotiqUserApi.ContentCraftsmenApi()
var opts = {
  'updateExisting': false, // {Boolean} Overwrite existing objects
  'craftsmenWithoutInternal': [{"id":"craftsmen-1","name":"name","photos":[{"dataUrl":"/api/v1/content/_media/_media-1","type":"internal"}],"surname":"surname","location":{"lat":0,"lon":0},"description":"description","phonenumber":0,"workshopname":"workshopname"},{"id":"craftsmen-2","name":"name","photos":[{"dataUrl":"/api/v1/content/_media/_media-1","type":"internal"}],"surname":"surname","location":{"lat":0,"lon":0},"description":"description","phonenumber":0,"workshopname":"workshopname"}] // {[CraftsmenWithoutInternal]} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.batchCreateCraftsmen(opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.flotiq.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*FlotiqUserApi.ContentCraftsmenApi* | [**batchCreateCraftsmen**](docs/ContentCraftsmenApi.md#batchCreateCraftsmen) | **POST** /api/v1/content/craftsmen/batch | 
*FlotiqUserApi.ContentCraftsmenApi* | [**createCraftsmen**](docs/ContentCraftsmenApi.md#createCraftsmen) | **POST** /api/v1/content/craftsmen | 
*FlotiqUserApi.ContentCraftsmenApi* | [**deleteCraftsmen**](docs/ContentCraftsmenApi.md#deleteCraftsmen) | **DELETE** /api/v1/content/craftsmen/{id} | 
*FlotiqUserApi.ContentCraftsmenApi* | [**getCraftsmen**](docs/ContentCraftsmenApi.md#getCraftsmen) | **GET** /api/v1/content/craftsmen/{id} | 
*FlotiqUserApi.ContentCraftsmenApi* | [**getRemovedCraftsmen**](docs/ContentCraftsmenApi.md#getRemovedCraftsmen) | **GET** /api/v1/content/craftsmen/removed | 
*FlotiqUserApi.ContentCraftsmenApi* | [**listCraftsmen**](docs/ContentCraftsmenApi.md#listCraftsmen) | **GET** /api/v1/content/craftsmen | 
*FlotiqUserApi.ContentCraftsmenApi* | [**updateCraftsmen**](docs/ContentCraftsmenApi.md#updateCraftsmen) | **PUT** /api/v1/content/craftsmen/{id} | 
*FlotiqUserApi.ContentMasterpiecesApi* | [**batchCreateMasterpieces**](docs/ContentMasterpiecesApi.md#batchCreateMasterpieces) | **POST** /api/v1/content/masterpieces/batch | 
*FlotiqUserApi.ContentMasterpiecesApi* | [**createMasterpieces**](docs/ContentMasterpiecesApi.md#createMasterpieces) | **POST** /api/v1/content/masterpieces | 
*FlotiqUserApi.ContentMasterpiecesApi* | [**deleteMasterpieces**](docs/ContentMasterpiecesApi.md#deleteMasterpieces) | **DELETE** /api/v1/content/masterpieces/{id} | 
*FlotiqUserApi.ContentMasterpiecesApi* | [**getMasterpieces**](docs/ContentMasterpiecesApi.md#getMasterpieces) | **GET** /api/v1/content/masterpieces/{id} | 
*FlotiqUserApi.ContentMasterpiecesApi* | [**getRemovedMasterpieces**](docs/ContentMasterpiecesApi.md#getRemovedMasterpieces) | **GET** /api/v1/content/masterpieces/removed | 
*FlotiqUserApi.ContentMasterpiecesApi* | [**listMasterpieces**](docs/ContentMasterpiecesApi.md#listMasterpieces) | **GET** /api/v1/content/masterpieces | 
*FlotiqUserApi.ContentMasterpiecesApi* | [**updateMasterpieces**](docs/ContentMasterpiecesApi.md#updateMasterpieces) | **PUT** /api/v1/content/masterpieces/{id} | 
*FlotiqUserApi.ContentMediaApi* | [**batchCreateMedia**](docs/ContentMediaApi.md#batchCreateMedia) | **POST** /api/v1/content/_media/batch | 
*FlotiqUserApi.ContentMediaApi* | [**createMedia**](docs/ContentMediaApi.md#createMedia) | **POST** /api/v1/content/_media | 
*FlotiqUserApi.ContentMediaApi* | [**deleteMedia**](docs/ContentMediaApi.md#deleteMedia) | **DELETE** /api/v1/content/_media/{id} | 
*FlotiqUserApi.ContentMediaApi* | [**getMedia**](docs/ContentMediaApi.md#getMedia) | **GET** /api/v1/content/_media/{id} | 
*FlotiqUserApi.ContentMediaApi* | [**getRemovedMedia**](docs/ContentMediaApi.md#getRemovedMedia) | **GET** /api/v1/content/_media/removed | 
*FlotiqUserApi.ContentMediaApi* | [**listMedia**](docs/ContentMediaApi.md#listMedia) | **GET** /api/v1/content/_media | 
*FlotiqUserApi.ContentMediaApi* | [**updateMedia**](docs/ContentMediaApi.md#updateMedia) | **PUT** /api/v1/content/_media/{id} | 
*FlotiqUserApi.ContentOrdersApi* | [**batchCreateOrders**](docs/ContentOrdersApi.md#batchCreateOrders) | **POST** /api/v1/content/orders/batch | 
*FlotiqUserApi.ContentOrdersApi* | [**createOrders**](docs/ContentOrdersApi.md#createOrders) | **POST** /api/v1/content/orders | 
*FlotiqUserApi.ContentOrdersApi* | [**deleteOrders**](docs/ContentOrdersApi.md#deleteOrders) | **DELETE** /api/v1/content/orders/{id} | 
*FlotiqUserApi.ContentOrdersApi* | [**getOrders**](docs/ContentOrdersApi.md#getOrders) | **GET** /api/v1/content/orders/{id} | 
*FlotiqUserApi.ContentOrdersApi* | [**getRemovedOrders**](docs/ContentOrdersApi.md#getRemovedOrders) | **GET** /api/v1/content/orders/removed | 
*FlotiqUserApi.ContentOrdersApi* | [**listOrders**](docs/ContentOrdersApi.md#listOrders) | **GET** /api/v1/content/orders | 
*FlotiqUserApi.ContentOrdersApi* | [**updateOrders**](docs/ContentOrdersApi.md#updateOrders) | **PUT** /api/v1/content/orders/{id} | 
*FlotiqUserApi.ContentServiceApi* | [**batchCreateService**](docs/ContentServiceApi.md#batchCreateService) | **POST** /api/v1/content/service/batch | 
*FlotiqUserApi.ContentServiceApi* | [**createService**](docs/ContentServiceApi.md#createService) | **POST** /api/v1/content/service | 
*FlotiqUserApi.ContentServiceApi* | [**deleteService**](docs/ContentServiceApi.md#deleteService) | **DELETE** /api/v1/content/service/{id} | 
*FlotiqUserApi.ContentServiceApi* | [**getRemovedService**](docs/ContentServiceApi.md#getRemovedService) | **GET** /api/v1/content/service/removed | 
*FlotiqUserApi.ContentServiceApi* | [**getService**](docs/ContentServiceApi.md#getService) | **GET** /api/v1/content/service/{id} | 
*FlotiqUserApi.ContentServiceApi* | [**listService**](docs/ContentServiceApi.md#listService) | **GET** /api/v1/content/service | 
*FlotiqUserApi.ContentServiceApi* | [**updateService**](docs/ContentServiceApi.md#updateService) | **PUT** /api/v1/content/service/{id} | 
*FlotiqUserApi.ContentUserApi* | [**batchCreateUser**](docs/ContentUserApi.md#batchCreateUser) | **POST** /api/v1/content/user/batch | 
*FlotiqUserApi.ContentUserApi* | [**createUser**](docs/ContentUserApi.md#createUser) | **POST** /api/v1/content/user | 
*FlotiqUserApi.ContentUserApi* | [**deleteUser**](docs/ContentUserApi.md#deleteUser) | **DELETE** /api/v1/content/user/{id} | 
*FlotiqUserApi.ContentUserApi* | [**getRemovedUser**](docs/ContentUserApi.md#getRemovedUser) | **GET** /api/v1/content/user/removed | 
*FlotiqUserApi.ContentUserApi* | [**getUser**](docs/ContentUserApi.md#getUser) | **GET** /api/v1/content/user/{id} | 
*FlotiqUserApi.ContentUserApi* | [**listUser**](docs/ContentUserApi.md#listUser) | **GET** /api/v1/content/user | 
*FlotiqUserApi.ContentUserApi* | [**updateUser**](docs/ContentUserApi.md#updateUser) | **PUT** /api/v1/content/user/{id} | 
*FlotiqUserApi.GraphQLApi* | [**graphQL**](docs/GraphQLApi.md#graphQL) | **POST** /api/graphql | 
*FlotiqUserApi.GraphQLApi* | [**graphQLSchema**](docs/GraphQLApi.md#graphQLSchema) | **GET** /api/graphql/schema | 
*FlotiqUserApi.InternalApi* | [**deleteContentDefinition**](docs/InternalApi.md#deleteContentDefinition) | **DELETE** /api/v1/internal/contenttype/{id} | 
*FlotiqUserApi.InternalApi* | [**getContentDefinition**](docs/InternalApi.md#getContentDefinition) | **GET** /api/v1/internal/contenttype/{id} | 
*FlotiqUserApi.InternalApi* | [**getContentDefinitions**](docs/InternalApi.md#getContentDefinitions) | **GET** /api/v1/internal/contenttype | 
*FlotiqUserApi.InternalApi* | [**postContentDefinition**](docs/InternalApi.md#postContentDefinition) | **POST** /api/v1/internal/contenttype | 
*FlotiqUserApi.InternalApi* | [**putContentDefinition**](docs/InternalApi.md#putContentDefinition) | **PUT** /api/v1/internal/contenttype/{id} | 
*FlotiqUserApi.MediaApi* | [**getMedia**](docs/MediaApi.md#getMedia) | **GET** /image/{width_height}/{key} | 
*FlotiqUserApi.MediaApi* | [**postMedia**](docs/MediaApi.md#postMedia) | **POST** /api/media | 
*FlotiqUserApi.SearchAPIApi* | [**search**](docs/SearchAPIApi.md#search) | **GET** /api/v1/search | 


## Documentation for Models

 - [FlotiqUserApi.AbstractContentTypeMetaDefinition](docs/AbstractContentTypeMetaDefinition.md)
 - [FlotiqUserApi.AbstractContentTypeSchemaDefinition](docs/AbstractContentTypeSchemaDefinition.md)
 - [FlotiqUserApi.AbstractContentTypeSchemaDefinitionInternal](docs/AbstractContentTypeSchemaDefinitionInternal.md)
 - [FlotiqUserApi.AbstractContentTypeSchemaDefinitionWithoutInternal](docs/AbstractContentTypeSchemaDefinitionWithoutInternal.md)
 - [FlotiqUserApi.AbstractPropertiesConfig](docs/AbstractPropertiesConfig.md)
 - [FlotiqUserApi.AbstractPropertiesConfigValidation](docs/AbstractPropertiesConfigValidation.md)
 - [FlotiqUserApi.BatchResponse](docs/BatchResponse.md)
 - [FlotiqUserApi.BatchResponseErrors](docs/BatchResponseErrors.md)
 - [FlotiqUserApi.BatchResponseErrors1](docs/BatchResponseErrors1.md)
 - [FlotiqUserApi.ContentTypeDefinitionSchema](docs/ContentTypeDefinitionSchema.md)
 - [FlotiqUserApi.ContentTypeListResponse](docs/ContentTypeListResponse.md)
 - [FlotiqUserApi.ContentTypeListResponseAllOf](docs/ContentTypeListResponseAllOf.md)
 - [FlotiqUserApi.Craftsmen](docs/Craftsmen.md)
 - [FlotiqUserApi.CraftsmenList](docs/CraftsmenList.md)
 - [FlotiqUserApi.CraftsmenListAllOf](docs/CraftsmenListAllOf.md)
 - [FlotiqUserApi.CraftsmenWithoutInternal](docs/CraftsmenWithoutInternal.md)
 - [FlotiqUserApi.CraftsmenWithoutInternalAllOf](docs/CraftsmenWithoutInternalAllOf.md)
 - [FlotiqUserApi.CraftsmenWithoutInternalAllOfLocation](docs/CraftsmenWithoutInternalAllOfLocation.md)
 - [FlotiqUserApi.DataSource](docs/DataSource.md)
 - [FlotiqUserApi.InlineObject](docs/InlineObject.md)
 - [FlotiqUserApi.InlineObject1](docs/InlineObject1.md)
 - [FlotiqUserApi.Masterpieces](docs/Masterpieces.md)
 - [FlotiqUserApi.MasterpiecesList](docs/MasterpiecesList.md)
 - [FlotiqUserApi.MasterpiecesListAllOf](docs/MasterpiecesListAllOf.md)
 - [FlotiqUserApi.MasterpiecesWithoutInternal](docs/MasterpiecesWithoutInternal.md)
 - [FlotiqUserApi.MasterpiecesWithoutInternalAllOf](docs/MasterpiecesWithoutInternalAllOf.md)
 - [FlotiqUserApi.Media](docs/Media.md)
 - [FlotiqUserApi.MediaList](docs/MediaList.md)
 - [FlotiqUserApi.MediaListAllOf](docs/MediaListAllOf.md)
 - [FlotiqUserApi.MediaWithoutInternal](docs/MediaWithoutInternal.md)
 - [FlotiqUserApi.MediaWithoutInternalAllOf](docs/MediaWithoutInternalAllOf.md)
 - [FlotiqUserApi.Orders](docs/Orders.md)
 - [FlotiqUserApi.OrdersList](docs/OrdersList.md)
 - [FlotiqUserApi.OrdersListAllOf](docs/OrdersListAllOf.md)
 - [FlotiqUserApi.OrdersWithoutInternal](docs/OrdersWithoutInternal.md)
 - [FlotiqUserApi.OrdersWithoutInternalAllOf](docs/OrdersWithoutInternalAllOf.md)
 - [FlotiqUserApi.SearchResponse](docs/SearchResponse.md)
 - [FlotiqUserApi.SearchResponseAllOf](docs/SearchResponseAllOf.md)
 - [FlotiqUserApi.SearchResponseAllOfData](docs/SearchResponseAllOfData.md)
 - [FlotiqUserApi.SearchResponseAllOfSummary](docs/SearchResponseAllOfSummary.md)
 - [FlotiqUserApi.Service](docs/Service.md)
 - [FlotiqUserApi.ServiceList](docs/ServiceList.md)
 - [FlotiqUserApi.ServiceListAllOf](docs/ServiceListAllOf.md)
 - [FlotiqUserApi.ServiceWithoutInternal](docs/ServiceWithoutInternal.md)
 - [FlotiqUserApi.ServiceWithoutInternalAllOf](docs/ServiceWithoutInternalAllOf.md)
 - [FlotiqUserApi.SystemListProperties](docs/SystemListProperties.md)
 - [FlotiqUserApi.User](docs/User.md)
 - [FlotiqUserApi.UserList](docs/UserList.md)
 - [FlotiqUserApi.UserListAllOf](docs/UserListAllOf.md)
 - [FlotiqUserApi.UserWithoutInternal](docs/UserWithoutInternal.md)
 - [FlotiqUserApi.UserWithoutInternalAllOf](docs/UserWithoutInternalAllOf.md)


## Documentation for Authorization



### HeaderApiKeyAuth


- **Type**: API key
- **API key parameter name**: X-AUTH-TOKEN
- **Location**: HTTP header

