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
import CraftsmenWithoutInternalAllOf from './CraftsmenWithoutInternalAllOf';
import CraftsmenWithoutInternalAllOfLocation from './CraftsmenWithoutInternalAllOfLocation';
import DataSource from './DataSource';

/**
 * The CraftsmenWithoutInternal model module.
 * @module model/CraftsmenWithoutInternal
 * @version 2.0.1
 */
class CraftsmenWithoutInternal {
    /**
     * Constructs a new <code>CraftsmenWithoutInternal</code>.
     * @alias module:model/CraftsmenWithoutInternal
     * @implements module:model/AbstractContentTypeSchemaDefinitionWithoutInternal
     * @implements module:model/CraftsmenWithoutInternalAllOf
     * @param id {String} Unique ID of the object, must be generated by the user
     * @param name {String} Imię rzemieślnika
     * @param surname {String} Nazwisko rzemieślnika
     * @param location {module:model/CraftsmenWithoutInternalAllOfLocation} 
     * @param workshopname {String} Nazwa zakładu rzemieślniczego
     */
    constructor(id, name, surname, location, workshopname) { 
        AbstractContentTypeSchemaDefinitionWithoutInternal.initialize(this, id);CraftsmenWithoutInternalAllOf.initialize(this);
        CraftsmenWithoutInternal.initialize(this, id, name, surname, location, workshopname);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name, surname, location, workshopname) { 
        obj['id'] = id;
        obj['name'] = name;
        obj['surname'] = surname;
        obj['location'] = location;
        obj['workshopname'] = workshopname;
    }

    /**
     * Constructs a <code>CraftsmenWithoutInternal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CraftsmenWithoutInternal} obj Optional instance to populate.
     * @return {module:model/CraftsmenWithoutInternal} The populated <code>CraftsmenWithoutInternal</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CraftsmenWithoutInternal();
            AbstractContentTypeSchemaDefinitionWithoutInternal.constructFromObject(data, obj);
            CraftsmenWithoutInternalAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('photos')) {
                obj['photos'] = ApiClient.convertToType(data['photos'], [DataSource]);
            }
            if (data.hasOwnProperty('surname')) {
                obj['surname'] = ApiClient.convertToType(data['surname'], 'String');
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = CraftsmenWithoutInternalAllOfLocation.constructFromObject(data['location']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('phonenumber')) {
                obj['phonenumber'] = ApiClient.convertToType(data['phonenumber'], 'Number');
            }
            if (data.hasOwnProperty('workshopname')) {
                obj['workshopname'] = ApiClient.convertToType(data['workshopname'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Unique ID of the object, must be generated by the user
 * @member {String} id
 */
CraftsmenWithoutInternal.prototype['id'] = undefined;

/**
 * Imię rzemieślnika
 * @member {String} name
 */
CraftsmenWithoutInternal.prototype['name'] = undefined;

/**
 * @member {Array.<module:model/DataSource>} photos
 */
CraftsmenWithoutInternal.prototype['photos'] = undefined;

/**
 * Nazwisko rzemieślnika
 * @member {String} surname
 */
CraftsmenWithoutInternal.prototype['surname'] = undefined;

/**
 * @member {module:model/CraftsmenWithoutInternalAllOfLocation} location
 */
CraftsmenWithoutInternal.prototype['location'] = undefined;

/**
 * Opis zakładu rzemieślniczego
 * @member {String} description
 */
CraftsmenWithoutInternal.prototype['description'] = undefined;

/**
 * @member {Number} phonenumber
 */
CraftsmenWithoutInternal.prototype['phonenumber'] = undefined;

/**
 * Nazwa zakładu rzemieślniczego
 * @member {String} workshopname
 */
CraftsmenWithoutInternal.prototype['workshopname'] = undefined;


// Implement AbstractContentTypeSchemaDefinitionWithoutInternal interface:
/**
 * Unique ID of the object, must be generated by the user
 * @member {String} id
 */
AbstractContentTypeSchemaDefinitionWithoutInternal.prototype['id'] = undefined;
// Implement CraftsmenWithoutInternalAllOf interface:
/**
 * Imię rzemieślnika
 * @member {String} name
 */
CraftsmenWithoutInternalAllOf.prototype['name'] = undefined;
/**
 * @member {Array.<module:model/DataSource>} photos
 */
CraftsmenWithoutInternalAllOf.prototype['photos'] = undefined;
/**
 * Nazwisko rzemieślnika
 * @member {String} surname
 */
CraftsmenWithoutInternalAllOf.prototype['surname'] = undefined;
/**
 * @member {module:model/CraftsmenWithoutInternalAllOfLocation} location
 */
CraftsmenWithoutInternalAllOf.prototype['location'] = undefined;
/**
 * Opis zakładu rzemieślniczego
 * @member {String} description
 */
CraftsmenWithoutInternalAllOf.prototype['description'] = undefined;
/**
 * @member {Number} phonenumber
 */
CraftsmenWithoutInternalAllOf.prototype['phonenumber'] = undefined;
/**
 * Nazwa zakładu rzemieślniczego
 * @member {String} workshopname
 */
CraftsmenWithoutInternalAllOf.prototype['workshopname'] = undefined;




export default CraftsmenWithoutInternal;

