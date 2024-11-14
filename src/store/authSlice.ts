import {PayloadAction, createSlice} from '@reduxjs/toolkit';

interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

interface AuthState {
  isAuthenticated: boolean;
  accessToken: string | null;
  refreshToken: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  accessToken: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthToken: (state, action: PayloadAction<AuthTokens>) => {
      state.isAuthenticated = !state.isAuthenticated;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.accessToken;
    },
    clearAuthToken: state => {
      (state.accessToken = null),
        (state.refreshToken = null),
        (state.isAuthenticated = false);
    },
  },
});

export const {setAuthToken, clearAuthToken} = authSlice.actions;
export default authSlice.reducer;
