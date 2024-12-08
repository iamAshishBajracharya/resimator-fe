import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

interface User {
  id: number;
  name: string;
  role: string;
}

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  user: User | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

// Initial state
const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  user: null,
  status: "idle",
  error: null,
};

// Async thunk for login
export const loginAsync = createAsyncThunk(
  "auth/login",
  async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/login", { email, password });
      console.log("Login response:", response.data); // Log the response for debugging
      // Save token and user in localStorage
      // localStorage.setItem("authToken", response.data.token);
      // localStorage.setItem("user", JSON.stringify(response.data.user));
      return response.data; // Assuming response contains `{ token, user }`
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Login failed");
    }
  }
);

// Auth slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
      localStorage.removeItem("jwtToken");
      localStorage.removeItem("user");
    },
    setAuthToken: (state, action: PayloadAction<string>) => {
    
      state.token = action.payload;
      state.isAuthenticated = true;
    },
    setUser: (state, action: PayloadAction<any>) => {
      console.log('$action', action)
      state.user = action.payload;
    },
    initializeAuthState: (state) => {
      const token = localStorage.getItem("jwt");
      const user = localStorage.getItem("user");

      if (token && user) {
        state.token = token;
        state.user = JSON.parse(user);
        state.isAuthenticated = true;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loginAsync.fulfilled, (state, action: PayloadAction<{ token: string; user: User }>) => {
        state.status = "succeeded";
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export const { logout, setAuthToken, setUser, initializeAuthState } = authSlice.actions;
export { loginAsync as login }; 
export default authSlice.reducer;
