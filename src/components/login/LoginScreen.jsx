import { useNavigate } from "react-router-dom";

export const LoginScreen = () => {
  const handleLogin = () => {
    navigate('/', {
      replace: true
    });
  };
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
