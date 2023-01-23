export interface User {
  Email: string;
  Password: string;
}

export interface CreateUserRequest extends User {
  Username: string;
}

export interface GoogleLoginUserRequest {
  Email: string;
  Username: string;
  GoogleToken: string;
}
export interface LoginUserRequest extends User {}

export interface AuthenticatedUser {
  Username: string;
  Id: number;
  Email: string;
  Token: string;
}
