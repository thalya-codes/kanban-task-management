export class HttpError extends Error {
  status;

  constructor(message: string, statusCode: number) {
    super(message);
    this.status = statusCode;
  }
}
