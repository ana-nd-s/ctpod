export interface LoginRequest {
  phone: string;
  countryCode: number;
}

export interface LoginResponse {
  status: string;
  message: string;
  statusCode: number;
}

export interface VerifyOtpRequest {
  phone: string;
  otp: string;
}

export interface UserAuthData {
  _id: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
  accessToken: string;
  refreshToken: string;
}
export interface VerifyOtpResponse {
  code: string;
  status: string;
  message: string;
  statusCode: number;
  data: UserAuthData;
}
