import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

// Define the shape of the data
interface UserProfile {
  id: number;
  name: string;
  email: string;
}

interface UserState {
  profile: UserProfile | null;
  users: UserProfile[]; // Store the list of users
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  profile: null,
  users: [],
  loading: false,
  error: null,
};

// Async thunk for signup
export const signupAsync = createAsyncThunk(
  "user/signup",
  async (
    {
      fullName,
      username,
      email,
      phoneNumber,
      gender,
      status,
      dob,
      role,
      country,
      state,
      city,
      postalCode,
      streetAddress,
      residentialArea,
      profileImage,
    }: {
      fullName: string;
      username: string;
      email: string;
      phoneNumber: string;
      gender: string;
      status: string;
      dob: string;
      role: string;
      country: string;
      state: string;
      city: string;
      postalCode: string;
      streetAddress: string;
      residentialArea: string;
      profileImage: any; // Profile image object
    },
    { rejectWithValue }
  ) => {
    const formData = new FormData();

    // Append all the other user data
    formData.append("fullName", fullName);
    formData.append("username", username);
    formData.append("email", email);
    formData.append("phoneNumber", phoneNumber);
    formData.append("gender", gender);
    formData.append("status", status);
    formData.append("dob", dob);
    formData.append("role", role);
    formData.append("country", country);
    formData.append("state", state);
    formData.append("city", city);
    formData.append("postalCode", postalCode);
    formData.append("streetAddress", streetAddress);
    formData.append("residentialArea", residentialArea);

    // Handle profile image upload (if provided)
    if (profileImage && profileImage.fileList?.[0]?.originFileObj) {
      formData.append("profileImage", profileImage.fileList[0].originFileObj);
    }

    try {
      const response = await axiosInstance.post("/signup", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Important for file upload
        },
      });
      console.log("Signup response:", response.data); // Log the response for debugging
      return response.data; // Assuming response contains user profile or success data
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Signup failed");
    }
  }
);

export const fetchUsersAsync = createAsyncThunk(
  "user/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/users"); // Fetch users from API
      return response.data.users; // Assuming the API returns an object with a `users` array
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Failed to fetch users");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchUserStart: (state) => {
      state.loading = true;
    },
    fetchUserSuccess: (state, action: PayloadAction<UserProfile>) => {
      state.loading = false;
      state.profile = action.payload;
    },
    fetchUserFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupAsync.fulfilled, (state, action: PayloadAction<UserProfile>) => {
        state.loading = false;
        state.profile = action.payload; // Store the user profile after successful signup
      })
      .addCase(signupAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string; // Handle signup failure
      });
    builder
      .addCase(fetchUsersAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsersAsync.fulfilled, (state, action: PayloadAction<UserProfile[]>) => {
        state.loading = false;
        state.users = action.payload; // Store the list of users
      })
      .addCase(fetchUsersAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string; // Handle fetch failure
      });
  },
});

export const { fetchUserStart, fetchUserSuccess, fetchUserFailure } = userSlice.actions;
export { signupAsync as signup };
export { fetchUsersAsync as fetchUsers };
export default userSlice.reducer;
