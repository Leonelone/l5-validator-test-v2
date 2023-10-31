import StringValidator from './StringSchema.js';
import ArrayValidator from './ArraySchema.js';
import ObjectValidator from './ObjectSchema.js';

export default class Validator {
  static string() {
    return new StringValidator();
  }

  static array() {
    return new ArrayValidator();
  }

  static object() {
    return new ObjectValidator();
  }
}
