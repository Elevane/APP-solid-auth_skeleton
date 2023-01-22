export interface User {
  Email: string;
  Password: string;
}

export interface CreateUserRequest extends User {
  Username: string;
}

export interface LoginUserRequest extends User {
  GoogleToken: string;
}
