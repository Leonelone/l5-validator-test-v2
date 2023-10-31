export default class ArrayValidator {
  constructor() {
    this.depthValue = 0;
  }

  isValid(data, depth = 0) {
    if (!Array.isArray(data)) {
      return false;
    }
    if (depth > this.depthValue) {
      return false;
    }
    let isValid = true;
    data.forEach((item) => {
      if (Array.isArray(item)) {
        if (!this.isValid(item, depth + 1)) {
          isValid = false;
        }
      }
    });
    return isValid;
  }

  maxDepth(newValue) {
    this.depthValue = newValue;
    return this;
  }
}
