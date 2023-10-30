export default class StringValidator {
  validators = [(value) => typeof (value) === 'string'];

  startsFromUpperCase() {
    this.validators.push((value) => /^[A-Z]/.test(value));
    return this;
  }

  length(expectedLength) {
    this.validators.push((value) => value.length === expectedLength);
    return this;
  }

  hasExclamation() {
    this.validators.push((value) => value.includes('!'));
    return this;
  }

  isValid(value) {
    const validations = this.validators.map((validator) => validator(value));
    return !validations.includes(false);
  }
}
