import {
  LoginRequest,
  LoginResponse,
  VerifyOtpRequest,
  VerifyOtpResponse,
} from 'types/auth';

import {postData} from './apiService';

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  return postData<LoginResponse, LoginRequest>(
    '/auth/login_or_register',
    data,
    false,
  );
};

export const resendOtp = async (data: LoginRequest): Promise<LoginResponse> => {
  return postData<LoginResponse, LoginRequest>('/auth/resend_otp', data, false);
};

export const verifyOtp = async (
  data: VerifyOtpRequest,
): Promise<VerifyOtpResponse> => {
  return postData<VerifyOtpResponse, VerifyOtpRequest>(
    '/auth/verify_otp',
    data,
    false,
  );
};
