import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Credentials } from "../services/auth.service";
import { DateTime } from "luxon";


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
        restoreUserFromLocalStorage: (state) => {
            const data: string|null =localStorage.getItem("AUTH_DATA");
            if (data != null) {
                const currentUser: Credentials = JSON.parse(data);
                if (currentUser.token.expiresAt != null) {
                    const tokenExpireDate = DateTime.fromISO(currentUser.token.expiresAt);

                    const now = DateTime.now();
                    if (now > tokenExpireDate)
                    return;

                    state.id = currentUser.id;
                    state.name = currentUser.name;
                    state.email = currentUser.email;
                    state.token = currentUser.token;

                }
            } else {
                console.log("Brak danych w local storage.");
            }
        }
    }
})

export const authActions = authSlice.actions;

export default authSlice.reducer;