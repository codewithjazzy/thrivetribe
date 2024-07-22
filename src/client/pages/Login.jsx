
export default function Login(){
    const handleGoogleLogin = () => {
        window.location.href = "/auth/google";
    }
    
    return (
        <div>
            <h2>Login</h2>
            <button onClick={handleGoogleLogin}>Sign in with Google</button>
            <form>
                <label htmlFor="emailInput">Email</label>
                <input type="email" id="emailInput" name="email" required />
                <label htmlFor="passwordInput">Password</label>
                <input type="password" id="passwordInput" name="password" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}