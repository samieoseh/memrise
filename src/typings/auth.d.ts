export interface SignupPayload {
  displayName: string;
  email: string;
  password: string;
}

export interface SigninPayload {
  email: string;
  password: string;
}
