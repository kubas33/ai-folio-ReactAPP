import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Credentials } from "../services/auth.service";


const initialState : Credentials = {
    id: null,
    email: null,
    name: null,
    token: {
        accessToken: null,
        expiresAt: null,
        updatedAt: null,
        revoked: null,
    }

}

export const authSlice = createSlice(
{
    name: 'auth',
    initialState: initialState,
    reducers: {
        authorize: (state: Credentials, action: PayloadAction<Credentials>) =>
        {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.token = action.payload.token;

            localStorage.setItem('AUTH_DATA', JSON.stringify(state));
        },
        logout: (state) => {
            state.id = null;
            state.name = null;
            state.email = null;
            state.token = {
                accessToken: null,
                expiresAt: null,
                updatedAt: null,
                revoked: null,
            }

            localStorage.removeItem('AUTH_DATA');
        },
        initFromLocalStorage: (state) => {
            const data: string|null =localStorage.getItem("AUTH_DATA");
            if (data != null) {
                const payload: Credentials = JSON.parse(data);

                state.id = payload.id;
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