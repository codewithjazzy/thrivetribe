import { useNavigate } from "react-router-dom";
import { FormInput } from "../components/Forms";

export default function SignUp(){
    const navigate = useNavigate();


    const handleGoogleSignup = () => {
        window.location.href = "/auth/google";
    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        const response = await fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password, confirmPassword })
        });

        if (response.ok) {
            navigate("/createAccount")
        } else {
            console.log("Signup failed");
        }
    };


    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <FormInput type="email" id="emailInput" name="email" label="Email" required/>
                <FormInput type="password" id="passwordInput" name="password" label="Password" required/>
                <FormInput type="confirmPassword" id="confirmPassword" name="confirmPassword" label="Confirm Password" required/>
                
                <button type="submit">Create Account</button>
            </form>

            <button onClick={handleGoogleSignup}>Signup with Google</button>
        </div>
    );
}