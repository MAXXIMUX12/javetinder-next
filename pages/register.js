import "../styles/register.css";

export default function Register() {
  return (
    <div className="container">
      <div>
        <h1 className="titulo">JaveTinder</h1>
      </div>

      <form className="form">
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Confirm Password" required />
        <input type="date" placeholder="Enter your Birthdate" required />

        <div className="terms">
          <input type="checkbox" id="terms" required />
          <label htmlFor="terms">I accept the terms & conditions</label>
        </div>

        <button type="submit" className="btn">REGISTER</button>

        <p className="login-text">
          Have an account? Click here to <a href="/register">Log-in</a>
        </p>
      </form>

      <p className="footer">By Juan Manuel & Isabella</p>
    </div>
  );
}
