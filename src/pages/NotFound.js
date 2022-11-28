import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    setTimeout(() => {
        navigate("/")
    }, 1000)
    return <h1>Page Not Found</h1>
}

export default NotFound;
