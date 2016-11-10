/**
 * Forge SDK
 * The Forge Platform contains an expanding collection of web service components that can be used with Autodesk cloud-based products or your own technologies. Take advantage of Autodesk’s expertise in design and engineering.
 *
 * OpenAPI spec version: 0.1.0
 * Contact: forge.help@autodesk.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = (function() {
  'use strict';

  var ApiClient = require('../ApiClient');



  /**
   * The JobPayloadInput model module.
   * @module model/JobPayloadInput
   * @version 0.2.2
   */

   /**
    * Constructs a <code>JobPayloadInput</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/JobPayloadInput} obj Optional instance to populate.
    * @return {module:model/JobPayloadInput} The populated <code>JobPayloadInput</code> instance.
    */
  var constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
  
      if (data.hasOwnProperty('urn')) {
        obj['urn'] = ApiClient.convertToType(data['urn'], 'String');
      }
      if (data.hasOwnProperty('compressedUrn')) {
        obj['compressedUrn'] = ApiClient.convertToType(data['compressedUrn'], 'Boolean');
      }
      if (data.hasOwnProperty('rootFilename')) {
        obj['rootFilename'] = ApiClient.convertToType(data['rootFilename'], 'String');
      }
    }
    return obj;
  };

  /**
   * Constructs a new <code>JobPayloadInput</code>.
   * Group of inputs
   * @alias module:model/JobPayloadInput
   * @class
   * @param urn {String} The design URN; returned when uploading the file to Forge The URN needs to be [Base64 (URL Safe) encoded](https://developer.autodesk.com/en/docs/model-derivative/v2/reference/http/job-POST/#id3). 
   * @param {Object} theData The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobPayloadInput} obj Optional instance to populate.
   */
  var exports = function(urn, theData, obj) {
    var _this = this;

    _this['urn'] = urn;



    return constructFromObject(theData, obj);
  };

  /**
   * Constructs a <code>JobPayloadInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobPayloadInput} obj Optional instance to populate.
   * @return {module:model/JobPayloadInput} The populated <code>JobPayloadInput</code> instance.
   */
  exports.constructFromObject = constructFromObject;

  /**
   * The design URN; returned when uploading the file to Forge The URN needs to be [Base64 (URL Safe) encoded](https://developer.autodesk.com/en/docs/model-derivative/v2/reference/http/job-POST/#id3). 
   * @member {String} urn
   */
  exports.prototype['urn'] = undefined;
  /**
   * Set this to `true` if the source file is compressed. If set to `true`, you need to define the `rootFilename`.
   * @member {Boolean} compressedUrn
   * @default false
   */
  exports.prototype['compressedUrn'] = false;
  /**
   * The root filename of the compressed file. Mandatory if the `compressedUrn` is set to `true`.
   * @member {String} rootFilename
   */
  exports.prototype['rootFilename'] = undefined;



  return exports;
}());


