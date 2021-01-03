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
import AbstractContentTypeSchemaDefinition from './AbstractContentTypeSchemaDefinition';
import AbstractContentTypeSchemaDefinitionInternal from './AbstractContentTypeSchemaDefinitionInternal';
import DataSource from './DataSource';
import MasterpiecesWithoutInternalAllOf from './MasterpiecesWithoutInternalAllOf';

/**
 * The Masterpieces model module.
 * @module model/Masterpieces
 * @version 2.0.1
 */
class Masterpieces {
    /**
     * Constructs a new <code>Masterpieces</code>.
     * @alias module:model/Masterpieces
     * @implements module:model/AbstractContentTypeSchemaDefinition
     * @implements module:model/MasterpiecesWithoutInternalAllOf
     * @param id {String} Unique ID of the object, must be generated by the user
     * @param name {String} Nazwa arcydzieła
     * @param price {String} 
     */
    constructor(id, name, price) { 
        AbstractContentTypeSchemaDefinition.initialize(this, id);MasterpiecesWithoutInternalAllOf.initialize(this);
        Masterpieces.initialize(this, id, name, price);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name, price) { 
        obj['id'] = id;
        obj['name'] = name;
        obj['price'] = price;
    }

    /**
     * Constructs a <code>Masterpieces</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Masterpieces} obj Optional instance to populate.
     * @return {module:model/Masterpieces} The populated <code>Masterpieces</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Masterpieces();
            AbstractContentTypeSchemaDefinition.constructFromObject(data, obj);
            MasterpiecesWithoutInternalAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('internal')) {
                obj['internal'] = AbstractContentTypeSchemaDefinitionInternal.constructFromObject(data['internal']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'String');
            }
            if (data.hasOwnProperty('photos')) {
                obj['photos'] = ApiClient.convertToType(data['photos'], [DataSource]);
            }
            if (data.hasOwnProperty('craftsman')) {
                obj['craftsman'] = ApiClient.convertToType(data['craftsman'], [DataSource]);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Unique ID of the object, must be generated by the user
 * @member {String} id
 */
Masterpieces.prototype['id'] = undefined;

/**
 * @member {module:model/AbstractContentTypeSchemaDefinitionInternal} internal
 */
Masterpieces.prototype['internal'] = undefined;

/**
 * Nazwa arcydzieła
 * @member {String} name
 */
Masterpieces.prototype['name'] = undefined;

/**
 * @member {String} price
 */
Masterpieces.prototype['price'] = undefined;

/**
 * @member {Array.<module:model/DataSource>} photos
 */
Masterpieces.prototype['photos'] = undefined;

/**
 * @member {Array.<module:model/DataSource>} craftsman
 */
Masterpieces.prototype['craftsman'] = undefined;

/**
 * @member {String} description
 */
Masterpieces.prototype['description'] = undefined;


// Implement AbstractContentTypeSchemaDefinition interface:
/**
 * Unique ID of the object, must be generated by the user
 * @member {String} id
 */
AbstractContentTypeSchemaDefinition.prototype['id'] = undefined;
/**
 * @member {module:model/AbstractContentTypeSchemaDefinitionInternal} internal
 */
AbstractContentTypeSchemaDefinition.prototype['internal'] = undefined;
// Implement MasterpiecesWithoutInternalAllOf interface:
/**
 * Nazwa arcydzieła
 * @member {String} name
 */
MasterpiecesWithoutInternalAllOf.prototype['name'] = undefined;
/**
 * @member {String} price
 */
MasterpiecesWithoutInternalAllOf.prototype['price'] = undefined;
/**
 * @member {Array.<module:model/DataSource>} photos
 */
MasterpiecesWithoutInternalAllOf.prototype['photos'] = undefined;
/**
 * @member {Array.<module:model/DataSource>} craftsman
 */
MasterpiecesWithoutInternalAllOf.prototype['craftsman'] = undefined;
/**
 * @member {String} description
 */
MasterpiecesWithoutInternalAllOf.prototype['description'] = undefined;




export default Masterpieces;

