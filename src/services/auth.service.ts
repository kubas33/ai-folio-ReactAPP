import axios, { AxiosResponse } from "axios"
import { LoginForm } from "../pages/Login";
import { RegisterForm } from "../pages/Register";

export interface Credentials {
    id:number | null;
    name:string| null;
    email:string| null;
    token: {
        accessToken:string| null;
        expiresAt: string| null;
        updatedAt: string| null;
        revoked: boolean| null;
    }
}

const login = (data: LoginForm): Promise<AxiosResponse<Credentials>> => {
    return axios.post<Credentials>(`${process.env.REACT_APP_API_URL}/auth/login`, data)
}

const register = (data: RegisterForm): Promise<AxiosResponse<Credentials>> => {
    return axios.post<Credentials>(`${process.env.REACT_APP_API_URL}/auth/register`, data)
}

export const AuthService = {
    login,
    register
}