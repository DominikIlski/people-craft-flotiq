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
import DataSource from './DataSource';

/**
 * The OrdersWithoutInternalAllOf model module.
 * @module model/OrdersWithoutInternalAllOf
 * @version 2.0.1
 */
class OrdersWithoutInternalAllOf {
    /**
     * Constructs a new <code>OrdersWithoutInternalAllOf</code>.
     * @alias module:model/OrdersWithoutInternalAllOf
     */
    constructor() { 
        
        OrdersWithoutInternalAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrdersWithoutInternalAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrdersWithoutInternalAllOf} obj Optional instance to populate.
     * @return {module:model/OrdersWithoutInternalAllOf} The populated <code>OrdersWithoutInternalAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrdersWithoutInternalAllOf();

            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], [DataSource]);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('service')) {
                obj['service'] = ApiClient.convertToType(data['service'], [DataSource]);
            }
            if (data.hasOwnProperty('pictures')) {
                obj['pictures'] = ApiClient.convertToType(data['pictures'], [DataSource]);
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('craftsman')) {
                obj['craftsman'] = ApiClient.convertToType(data['craftsman'], [DataSource]);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('masterpiece')) {
                obj['masterpiece'] = ApiClient.convertToType(data['masterpiece'], [DataSource]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/DataSource>} user
 */
OrdersWithoutInternalAllOf.prototype['user'] = undefined;

/**
 * @member {String} status
 */
OrdersWithoutInternalAllOf.prototype['status'] = undefined;

/**
 * @member {Array.<module:model/DataSource>} service
 */
OrdersWithoutInternalAllOf.prototype['service'] = undefined;

/**
 * @member {Array.<module:model/DataSource>} pictures
 */
OrdersWithoutInternalAllOf.prototype['pictures'] = undefined;

/**
 * @member {Number} quantity
 */
OrdersWithoutInternalAllOf.prototype['quantity'] = undefined;

/**
 * @member {Array.<module:model/DataSource>} craftsman
 */
OrdersWithoutInternalAllOf.prototype['craftsman'] = undefined;

/**
 * @member {String} description
 */
OrdersWithoutInternalAllOf.prototype['description'] = undefined;

/**
 * @member {Array.<module:model/DataSource>} masterpiece
 */
OrdersWithoutInternalAllOf.prototype['masterpiece'] = undefined;






export default OrdersWithoutInternalAllOf;

