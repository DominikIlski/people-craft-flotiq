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

import ApiClient from '../ApiClient';
import AbstractContentTypeSchemaDefinitionWithoutInternal from './AbstractContentTypeSchemaDefinitionWithoutInternal';
import DataSource from './DataSource';
import UserWithoutInternalAllOf from './UserWithoutInternalAllOf';

/**
 * The UserWithoutInternal model module.
 * @module model/UserWithoutInternal
 * @version 2.0.1
 */
class UserWithoutInternal {
    /**
     * Constructs a new <code>UserWithoutInternal</code>.
     * @alias module:model/UserWithoutInternal
     * @implements module:model/AbstractContentTypeSchemaDefinitionWithoutInternal
     * @implements module:model/UserWithoutInternalAllOf
     * @param id {String} Unique ID of the object, must be generated by the user
     * @param name {String} 
     * @param surname {String} 
     */
    constructor(id, name, surname) { 
        AbstractContentTypeSchemaDefinitionWithoutInternal.initialize(this, id);UserWithoutInternalAllOf.initialize(this);
        UserWithoutInternal.initialize(this, id, name, surname);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name, surname) { 
        obj['id'] = id;
        obj['name'] = name;
        obj['surname'] = surname;
    }

    /**
     * Constructs a <code>UserWithoutInternal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserWithoutInternal} obj Optional instance to populate.
     * @return {module:model/UserWithoutInternal} The populated <code>UserWithoutInternal</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserWithoutInternal();
            AbstractContentTypeSchemaDefinitionWithoutInternal.constructFromObject(data, obj);
            UserWithoutInternalAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('photo')) {
                obj['photo'] = ApiClient.convertToType(data['photo'], [DataSource]);
            }
            if (data.hasOwnProperty('surname')) {
                obj['surname'] = ApiClient.convertToType(data['surname'], 'String');
            }
            if (data.hasOwnProperty('phoneNumber')) {
                obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
            }
            if (data.hasOwnProperty('followedcraftsmen')) {
                obj['followedcraftsmen'] = ApiClient.convertToType(data['followedcraftsmen'], [DataSource]);
            }
            if (data.hasOwnProperty('followedmasterpieces')) {
                obj['followedmasterpieces'] = ApiClient.convertToType(data['followedmasterpieces'], [DataSource]);
            }
        }
        return obj;
    }


}

/**
 * Unique ID of the object, must be generated by the user
 * @member {String} id
 */
UserWithoutInternal.prototype['id'] = undefined;

/**
 * @member {String} name
 */
UserWithoutInternal.prototype['name'] = undefined;

/**
 * @member {Array.<module:model/DataSource>} photo
 */
UserWithoutInternal.prototype['photo'] = undefined;

/**
 * @member {String} surname
 */
UserWithoutInternal.prototype['surname'] = undefined;

/**
 * @member {String} phoneNumber
 */
UserWithoutInternal.prototype['phoneNumber'] = undefined;

/**
 * @member {Array.<module:model/DataSource>} followedcraftsmen
 */
UserWithoutInternal.prototype['followedcraftsmen'] = undefined;

/**
 * @member {Array.<module:model/DataSource>} followedmasterpieces
 */
UserWithoutInternal.prototype['followedmasterpieces'] = undefined;


// Implement AbstractContentTypeSchemaDefinitionWithoutInternal interface:
/**
 * Unique ID of the object, must be generated by the user
 * @member {String} id
 */
AbstractContentTypeSchemaDefinitionWithoutInternal.prototype['id'] = undefined;
// Implement UserWithoutInternalAllOf interface:
/**
 * @member {String} name
 */
UserWithoutInternalAllOf.prototype['name'] = undefined;
/**
 * @member {Array.<module:model/DataSource>} photo
 */
UserWithoutInternalAllOf.prototype['photo'] = undefined;
/**
 * @member {String} surname
 */
UserWithoutInternalAllOf.prototype['surname'] = undefined;
/**
 * @member {String} phoneNumber
 */
UserWithoutInternalAllOf.prototype['phoneNumber'] = undefined;
/**
 * @member {Array.<module:model/DataSource>} followedcraftsmen
 */
UserWithoutInternalAllOf.prototype['followedcraftsmen'] = undefined;
/**
 * @member {Array.<module:model/DataSource>} followedmasterpieces
 */
UserWithoutInternalAllOf.prototype['followedmasterpieces'] = undefined;




export default UserWithoutInternal;

