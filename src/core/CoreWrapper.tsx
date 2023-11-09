import { PropsWithChildren, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/authSlice.ts";
import { FullScreenLoader } from "../components/FullScreenLoader.tsx";
import axios from "axios";
import { RootState } from "../store/store.ts";





export const CoreWrapper = ({ children }: PropsWithChildren) => {
    const dispatch = useDispatch();
    const { token } = useSelector((state: RootState) => state.auth);
    const [isAppLoading, setIsAppLoading] = useState(true);

    axios.interceptors.request.use(function (config) {
        // Do something before request is sent
        if (token) {

        }
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });
    // Wczytanie usera z localstorage przy starcie aplikacji
    useEffect(() => {
        // W bootstrap możemy zrobić rzeczy które powinny wykonać się
        // nim aplikacja wstanie, np. pobranie aktualnego usera, ustawienie języka itd
        const bootstrap = () => {
            dispatch(authActions.restoreUserFromLocalStorage());
        };

        bootstrap();
        setIsAppLoading(false);
    }, []);

    if (isAppLoading) {
        return (
            <FullScreenLoader></FullScreenLoader>
        )
    }

    return (
        <>{children}</>
    )
}