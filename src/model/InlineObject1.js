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

/**
 * The InlineObject1 model module.
 * @module model/InlineObject1
 * @version 2.0.1
 */
class InlineObject1 {
    /**
     * Constructs a new <code>InlineObject1</code>.
     * @alias module:model/InlineObject1
     * @param file {File} File to upload
     * @param type {module:model/InlineObject1.TypeEnum} Type of file image|file
     */
    constructor(file, type) { 
        
        InlineObject1.initialize(this, file, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, file, type) { 
        obj['file'] = file;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>InlineObject1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject1} obj Optional instance to populate.
     * @return {module:model/InlineObject1} The populated <code>InlineObject1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject1();

            if (data.hasOwnProperty('file')) {
                obj['file'] = ApiClient.convertToType(data['file'], File);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('save')) {
                obj['save'] = ApiClient.convertToType(data['save'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * File to upload
 * @member {File} file
 */
InlineObject1.prototype['file'] = undefined;

/**
 * Type of file image|file
 * @member {module:model/InlineObject1.TypeEnum} type
 */
InlineObject1.prototype['type'] = undefined;

/**
 * Should file be saved to databese on upload: 0|1
 * @member {Number} save
 * @default 0
 */
InlineObject1.prototype['save'] = 0;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
InlineObject1['TypeEnum'] = {

    /**
     * value: "image"
     * @const
     */
    "image": "image",

    /**
     * value: "file"
     * @const
     */
    "file": "file"
};



export default InlineObject1;

