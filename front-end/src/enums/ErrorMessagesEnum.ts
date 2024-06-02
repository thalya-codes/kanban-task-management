enum ErrorMessagesEnum {
  INVALID_EMAIL_FORMAT = 'The given e-mail has invalid format',
  NON_STANDARD_PASSWORD = "The given password don't correspond the minimum requirements. Please check the info mark for more info.",
  EMPTY_FIELD = 'This field cannot be empty',
}

export const { INVALID_EMAIL_FORMAT, NON_STANDARD_PASSWORD, EMPTY_FIELD } =
  ErrorMessagesEnum;
