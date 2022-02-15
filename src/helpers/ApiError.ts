class ApiError extends Error {
	public status: any;

  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

export default ApiError;
