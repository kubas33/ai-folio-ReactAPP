import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface AuthState {
    email: string | null,
    name: string | null,
    token : string | null,
}

const initialState : AuthState = {
    email: null,
    name: null,
    token: null,

}

export const authSlice = createSlice(
{
    name: 'auth',
    initialState: initialState,
    reducers: {
        authorize: (state: AuthState, action: PayloadAction<AuthState>) =>
        {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.token = action.payload.token;

            localStorage.setItem('AUTH_DATA', JSON.stringify(state));
        },
        logout: (state) => {
            state.name = null;
            state.email = null;
            state.token = null;

            localStorage.removeItem('AUTH_DATA');
        },
        initFromLocalStorage: (state) => {
            const data: string|null =localStorage.getItem("AUTH_DATA");
            if (data != null) {
                const payload: AuthState = JSON.parse(data);
                state.name = payload.name;
                state.email = payload.email;
                state.token = payload.token;
            }
        }
    }
})

export const {
    authorize,
    logout,
    initFromLocalStorage
} = authSlice.actions

export default authSlice.reducer;