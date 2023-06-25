import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { userService } from 'services/UserService';

export const initialState = {
    users: [],
};

export const getUsers = createAsyncThunk(
    'users/getUsers',
    async (_, thunkAPI) => {
        try {
            const result = await userService.fetchUsers();
            return { users: result };
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue(null);
        }
    }
);

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.users = action.payload.users;
        });
    }
});

export const usersReducer = userSlice.reducer;
export const usersActions = userSlice.actions;
export const usersThunk = { getUsers };
