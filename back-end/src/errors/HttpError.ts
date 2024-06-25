export class HttpError extends Error {
  status;
  type;

  constructor(message: string, code: number, type?: string) {
    super(message);
    this.status = code;
    this.type = type;
  }
}
