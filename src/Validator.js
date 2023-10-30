import StringValidator from "./StringSchema.js";
import ArrayValidator from "./ArraySchema.js";
import ObjectValidator from "./ObjectSchema.js";

export default class Validator {
  string() {
    return new StringValidator();
  }

  array() {
    return new ArrayValidator();
  }

  object() {
    return new ObjectValidator();
  }
}
