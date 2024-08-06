import { Link, useNavigate, useLocation } from "react-router-dom"


export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = async () => {
        await fetch("/logout");
        navigate("/login")
    }

    //conditionally show logout button on these paths
    const showLogout = ["/account", "/createAccount", "/editAccount"].includes(location.pathname);

    return (
        <>
            <Link to="/">
                <button>ThriveTribe</button>            
            </Link>
            <Link to="/about">
                <button>About</button>            
            </Link>
            <Link to="/therapy101">
                <button>Therapy 101</button>            
            </Link>
            <Link to="/types">
                <button>Types of Therapy</button>            
            </Link>
            <Link to="/quiz">
                <button>Take The Quiz</button>            
            </Link>
            <Link to="/providers">
                <button>Find A Therapist</button>            
            </Link>
            <Link to="/blog">
                <button>Blog</button>            
            </Link>
            <Link to="/portal">
                <button>Therapist Portal</button>            
            </Link>
            {showLogout && (
                <button onClick={handleLogout}>Logout</button>
            )}
        </>
    )
}