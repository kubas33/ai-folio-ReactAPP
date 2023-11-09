import { useSelector } from "react-redux";
import { Credentials } from "../../services/auth.service";
import { RootState } from "../../store/store";
import { PropsWithChildren } from 'react';
import { Navigate, useLocation } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

// Komponent RequireAuth sprawdza, czy użytkownik jest zalogowany przed renderowaniem zawartości
const RequireAuth = ({ children }: PropsWithChildren<any>) => {
    const { email }: Credentials = useSelector((state: RootState) => state.auth);
    const location = useLocation();
    const toast = useToast();

    console.log('amail', email);

    // Jeżeli użytkownik nie jest zalogowany, wyświetl komunikat i przekieruj na stronę logowania
    if (email === null) {
        toast({
            title: 'You must be logged in',
            description: 'You must be logged in to access this page',
            status: 'error',
            duration: 5000,
            isClosable: true,
            position: 'top',
        });
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // Jeżeli użytkownik jest zalogowany, renderuj zawartość
    return (
        <>
            {children}
        </>
    );
}

export default RequireAuth;