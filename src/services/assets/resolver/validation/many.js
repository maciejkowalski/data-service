const { input, output } = require('./schema/many');
const { AppError } = require('../../../../errorHandling');
const validate = require('../../../../utils/validate');

// validateInput :: Options -> Boolean
const validateInput = validate(input, (error, value) =>
  AppError.Validation('Input validation failed', {
    resolver: 'assetsMany',
    error,
    value,
  })
);

// validateResult :: Result -> Boolean
const validateResult = validate(output, (error, value) =>
  AppError.Resolver('Result validation failed', {
    resolver: 'assetsMany',
    value,
    error,
  })
);

module.exports = {
  validateInput,
  validateResult,
};
