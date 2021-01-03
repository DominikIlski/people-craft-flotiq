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
import User from '../model/User';
import UserList from '../model/UserList';
import UserWithoutInternal from '../model/UserWithoutInternal';

/**
* ContentUser service.
* @module api/ContentUserApi
* @version 2.0.1
*/
export default class ContentUserApi {

    /**
    * Constructs a new ContentUserApi. 
    * @alias module:api/ContentUserApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the batchCreateUser operation.
     * @callback module:api/ContentUserApi~batchCreateUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BatchResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Allows you to create or create and update up to 100 objects of User type. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Finternal%2Fopen-api-schema.json%3Fauth_token%3D47bb663461da2a8f375f997e71cd3dbc#%2FContent: User%2FbatchCreateUser'><code>Try it out</code><a>
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.updateExisting Overwrite existing objects (default to false)
     * @param {Array.<module:model/UserWithoutInternal>} opts.userWithoutInternal 
     * @param {module:api/ContentUserApi~batchCreateUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BatchResponse}
     */
    batchCreateUser(opts, callback) {
      opts = opts || {};
      let postBody = opts['userWithoutInternal'];

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
        '/api/v1/content/user/batch', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createUser operation.
     * @callback module:api/ContentUserApi~createUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Allows you to create object of User type. Please mind, that you are responsible for generating a unique object ID yourself.<br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Finternal%2Fopen-api-schema.json%3Fauth_token%3D47bb663461da2a8f375f997e71cd3dbc#%2FContent: User%2FcreateUser'><code>Try it out</code><a>
     * @param {Object} opts Optional parameters
     * @param {module:model/UserWithoutInternal} opts.userWithoutInternal 
     * @param {module:api/ContentUserApi~createUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    createUser(opts, callback) {
      opts = opts || {};
      let postBody = opts['userWithoutInternal'];

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
      let returnType = User;
      return this.apiClient.callApi(
        '/api/v1/content/user', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUser operation.
     * @callback module:api/ContentUserApi~deleteUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Removes User object.<br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Finternal%2Fopen-api-schema.json%3Fauth_token%3D47bb663461da2a8f375f997e71cd3dbc#%2FContent: User%2FdeleteUser'><code>Try it out</code><a>
     * @param {String} id ContentObject identifier
     * @param {module:api/ContentUserApi~deleteUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteUser(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteUser");
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
        '/api/v1/content/user/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getRemovedUser operation.
     * @callback module:api/ContentUserApi~getRemovedUserCallback
     * @param {String} error Error message, if any.
     * @param {Array.<String>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get ids of removed User objects. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Finternal%2Fopen-api-schema.json%3Fauth_token%3D47bb663461da2a8f375f997e71cd3dbc#%2FContent: User%2FgetRemovedUser'><code>Try it out</code><a>
     * @param {Object} opts Optional parameters
     * @param {String} opts.deletedAfter Date from which ids of removed objects should be returned
     * @param {module:api/ContentUserApi~getRemovedUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<String>}
     */
    getRemovedUser(opts, callback) {
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
        '/api/v1/content/user/removed', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getUser operation.
     * @callback module:api/ContentUserApi~getUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all information about User object. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Finternal%2Fopen-api-schema.json%3Fauth_token%3D47bb663461da2a8f375f997e71cd3dbc#%2FContent: User%2FgetUser'><code>Try it out</code><a>
     * @param {String} id ContentObject identifier
     * @param {Object} opts Optional parameters
     * @param {Number} opts.hydrate Should hydrate relations of object, for now only one level of hydration is possible (default to 0)
     * @param {module:api/ContentUserApi~getUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    getUser(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getUser");
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
      let returnType = User;
      return this.apiClient.callApi(
        '/api/v1/content/user/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listUser operation.
     * @callback module:api/ContentUserApi~listUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List objects of User type. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Finternal%2Fopen-api-schema.json%3Fauth_token%3D47bb663461da2a8f375f997e71cd3dbc#%2FContent: User%2FlistUser'><code>Try it out</code><a>
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Listing page number, 1-based (default to 1)
     * @param {Number} opts.limit Page limit (default to 20)
     * @param {String} opts.orderBy Order by field (default to 'internal.createdAt')
     * @param {String} opts.orderDirection Order direction (default to 'asc')
     * @param {Number} opts.hydrate Should hydrate relations of object, for now only one level of hydration is possible (default to 0)
     * @param {String} opts.filters List filters (default to '{}')
     * @param {module:api/ContentUserApi~listUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserList}
     */
    listUser(opts, callback) {
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
      let returnType = UserList;
      return this.apiClient.callApi(
        '/api/v1/content/user', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateUser operation.
     * @callback module:api/ContentUserApi~updateUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Allows update of the User object, it has to have all fields, as this operation overwrites the object. All properties  not included in the payload will be lost. <br /><a target='_blank' href='https://apidoc.flotiq.com/?url=https%3A%2F%2Fapi.flotiq.com%2Fapi%2Fv1%2Finternal%2Fopen-api-schema.json%3Fauth_token%3D47bb663461da2a8f375f997e71cd3dbc#%2FContent: User%2FupdateUser'><code>Try it out</code><a>
     * @param {String} id ContentObject identifier
     * @param {Object} opts Optional parameters
     * @param {module:model/UserWithoutInternal} opts.userWithoutInternal 
     * @param {module:api/ContentUserApi~updateUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    updateUser(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['userWithoutInternal'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateUser");
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
      let returnType = User;
      return this.apiClient.callApi(
        '/api/v1/content/user/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}