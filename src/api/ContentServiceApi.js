/**
 * Flotiq User API
 * ## Getting started   This is your Flotiq User API that allows you to access your data through the Content API that you defined.   ### Access to data   There are several methods that you can use to access your data:  * Live API docs - available via <code>Try it out</code> button available next to each endpoint   * Copying example code on the right side of each endpoint  * By downloading the SDKs available in mulitple languages.  * By downloading the Postman collection and importing it into Postman.    Each of these methods is described in length in the [user documentation](https://flotiq.com/docs/).   ### Authorization   In order to make use of the provided documentation, example code, SDKs and so on - you will need to pull out your API key. We recommend that you start with the ReadOnly API Key which will allow you to make all the `GET` requests but will error-out when you try to modify content. Please remember to replace the key for `POST`, `PUT` and `DELETE` calls.   It's also possible to use scoped API keys - you can create those in the API keys section of the Flotiq user interface. This will allow you to create a key that only authorizes access to a specific content type (or a set of content types, if you choose so). Read more about how to use and create API keys in the [API keys documentation](https://flotiq.com/docs/API/).   ## Object access   Once you define a Content Type it will become available in your Content API as a set of endpoints that will allow you to work with objects:   * create  * list  * update  * delete  * batch create  * retrieve single object.  ### Hydration   When you build Content Types that have relation to others your objects will optionally support hydration of related entities. The endpoints that support object retrieval accept a `hydrate` parameter, which can be used to easily fetch hydrated objects. Since this breaks the standard REST concepts - it's not enabled by default, but it's a very handy feature that allows to reduce the amount of HTTP requests sent over the wire and we strongly recommend to use it.
 *
 * The version of the OpenAPI document: 2.0.1
 * Contact: hello@flotiq.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import BatchResponse from '../model/BatchResponse';
import Service from '../model/Service';
import ServiceList from '../model/ServiceList';
import ServiceWithoutInternal from '../model/ServiceWithoutInternal';

/**
* ContentService service.
* @module api/ContentServiceApi
* @version 2.0.1
*/
export default class ContentServiceApi {

    /**
    * Constructs a new ContentServiceApi. 
    * @alias module:api/ContentServiceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the batchCreateService operation.
     * @callback module:api/ContentServiceApi~batchCreateServiceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BatchResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Allows you to create or create and update up to 100 objects of Service type. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Finternal%2Fopen-api-schema.json%3Fauth_token%3D47bb663461da2a8f375f997e71cd3dbc#%2FContent: Service%2FbatchCreateService'><code>Try it out</code><a>
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.updateExisting Overwrite existing objects (default to false)
     * @param {Array.<module:model/ServiceWithoutInternal>} opts.serviceWithoutInternal 
     * @param {module:api/ContentServiceApi~batchCreateServiceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BatchResponse}
     */
    batchCreateService(opts, callback) {
      opts = opts || {};
      let postBody = opts['serviceWithoutInternal'];

      let pathParams = {
      };
      let queryParams = {
        'updateExisting': opts['updateExisting']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['HeaderApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = BatchResponse;
      return this.apiClient.callApi(
        '/api/v1/content/service/batch', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createService operation.
     * @callback module:api/ContentServiceApi~createServiceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Service} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Allows you to create object of Service type. Please mind, that you are responsible for generating a unique object ID yourself.<br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Finternal%2Fopen-api-schema.json%3Fauth_token%3D47bb663461da2a8f375f997e71cd3dbc#%2FContent: Service%2FcreateService'><code>Try it out</code><a>
     * @param {Object} opts Optional parameters
     * @param {module:model/ServiceWithoutInternal} opts.serviceWithoutInternal 
     * @param {module:api/ContentServiceApi~createServiceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Service}
     */
    createService(opts, callback) {
      opts = opts || {};
      let postBody = opts['serviceWithoutInternal'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['HeaderApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Service;
      return this.apiClient.callApi(
        '/api/v1/content/service', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteService operation.
     * @callback module:api/ContentServiceApi~deleteServiceCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Removes Service object.<br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Finternal%2Fopen-api-schema.json%3Fauth_token%3D47bb663461da2a8f375f997e71cd3dbc#%2FContent: Service%2FdeleteService'><code>Try it out</code><a>
     * @param {String} id ContentObject identifier
     * @param {module:api/ContentServiceApi~deleteServiceCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteService(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteService");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['HeaderApiKeyAuth'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1/content/service/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getRemovedService operation.
     * @callback module:api/ContentServiceApi~getRemovedServiceCallback
     * @param {String} error Error message, if any.
     * @param {Array.<String>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get ids of removed Service objects. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Finternal%2Fopen-api-schema.json%3Fauth_token%3D47bb663461da2a8f375f997e71cd3dbc#%2FContent: Service%2FgetRemovedService'><code>Try it out</code><a>
     * @param {Object} opts Optional parameters
     * @param {String} opts.deletedAfter Date from which ids of removed objects should be returned
     * @param {module:api/ContentServiceApi~getRemovedServiceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<String>}
     */
    getRemovedService(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'deletedAfter': opts['deletedAfter']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['HeaderApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ['String'];
      return this.apiClient.callApi(
        '/api/v1/content/service/removed', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getService operation.
     * @callback module:api/ContentServiceApi~getServiceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Service} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all information about Service object. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Finternal%2Fopen-api-schema.json%3Fauth_token%3D47bb663461da2a8f375f997e71cd3dbc#%2FContent: Service%2FgetService'><code>Try it out</code><a>
     * @param {String} id ContentObject identifier
     * @param {Object} opts Optional parameters
     * @param {Number} opts.hydrate Should hydrate relations of object, for now only one level of hydration is possible (default to 0)
     * @param {module:api/ContentServiceApi~getServiceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Service}
     */
    getService(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getService");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'hydrate': opts['hydrate']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['HeaderApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Service;
      return this.apiClient.callApi(
        '/api/v1/content/service/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listService operation.
     * @callback module:api/ContentServiceApi~listServiceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List objects of Service type. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Finternal%2Fopen-api-schema.json%3Fauth_token%3D47bb663461da2a8f375f997e71cd3dbc#%2FContent: Service%2FlistService'><code>Try it out</code><a>
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Listing page number, 1-based (default to 1)
     * @param {Number} opts.limit Page limit (default to 20)
     * @param {String} opts.orderBy Order by field (default to 'internal.createdAt')
     * @param {String} opts.orderDirection Order direction (default to 'asc')
     * @param {Number} opts.hydrate Should hydrate relations of object, for now only one level of hydration is possible (default to 0)
     * @param {String} opts.filters List filters (default to '{}')
     * @param {module:api/ContentServiceApi~listServiceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceList}
     */
    listService(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'page': opts['page'],
        'limit': opts['limit'],
        'order_by': opts['orderBy'],
        'order_direction': opts['orderDirection'],
        'hydrate': opts['hydrate'],
        'filters': opts['filters']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['HeaderApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ServiceList;
      return this.apiClient.callApi(
        '/api/v1/content/service', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateService operation.
     * @callback module:api/ContentServiceApi~updateServiceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Service} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Allows update of the Service object, it has to have all fields, as this operation overwrites the object. All properties  not included in the payload will be lost. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Finternal%2Fopen-api-schema.json%3Fauth_token%3D47bb663461da2a8f375f997e71cd3dbc#%2FContent: Service%2FupdateService'><code>Try it out</code><a>
     * @param {String} id ContentObject identifier
     * @param {Object} opts Optional parameters
     * @param {module:model/ServiceWithoutInternal} opts.serviceWithoutInternal 
     * @param {module:api/ContentServiceApi~updateServiceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Service}
     */
    updateService(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['serviceWithoutInternal'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateService");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['HeaderApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Service;
      return this.apiClient.callApi(
        '/api/v1/content/service/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
