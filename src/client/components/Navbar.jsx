import { Link } from "react-router-dom"


export default function Navbar() {
    return (
        <>
            <Link to="/">
                <button>ThriveTribe</button>            
            </Link>
            <Link to="/about">
                <button>About</button>            
            </Link>
            <Link to="/blog">
                <button>Blog</button>            
            </Link>
            <Link to="/providers">
                <button>Find A Therapist</button>            
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
        </>
    )
}