import { PropsWithChildren } from "react"
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Credentials } from "../../services/auth.service";


const IsAuth = ({ children }: PropsWithChildren<any>) => {
    const { email }: Credentials = useSelector((state: RootState) => state.auth);
    return (
        <>
            {email !== null && children}
        </>
    )
}

export default IsAuth