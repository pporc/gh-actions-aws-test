export const handler = async () => {
  const response = {
        statusCode: 200,
        body: JSON.stringify('Hello AWS'),
    };
    return response;
}