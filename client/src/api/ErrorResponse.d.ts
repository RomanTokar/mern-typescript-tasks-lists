type ErrorElement = {
  message: string,
  param: string,
}

export interface ErrorResponse {
  error?: {
    message: string
    errors: Array<ErrorElement>
  }
}