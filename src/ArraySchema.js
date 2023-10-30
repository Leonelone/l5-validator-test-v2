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
    for (const item of data) {
      if (Array.isArray(item)) {
        if (!this.isValid(item, depth + 1)) {
          return false;
        }
      }
    }
    return true;
  }

  maxDepth(newValue) {
    this.depthValue = newValue;
    return this;
  }
}
