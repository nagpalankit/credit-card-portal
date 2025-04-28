export const formatErrorMessages = (errors: {
    userName?: string[] | undefined;
    cardNumber?: string[] | undefined;
    cardLimit?: string[] | undefined;
}) => {
  return Object.entries(errors)
    .flatMap(([key, messages]: any) =>
      messages.map((message) => `${message}`)
    )
};
