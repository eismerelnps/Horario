import { useNavigate } from "react-router-dom";

export const LoginScreen = () => {
  const handleLogin = () => {
    navigate("/", {
      replace: true,
    });
  };
  const navigate = useNavigate();

  return (
    <div className="container w-50">
    <form>
      <div className="mb-3 ">
        <label for="username" className="form-label">
          Nombre de usuario:
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          aria-describedby="emailHelp"
        ></input>
      </div>
      <div class="mb-3">
        <label for="passwordInput" class="form-label">
        Contraseña:
        </label>

        <input type="password" class="form-control" id="passwordInput" />
      </div>
      {/** 
      <div id="emailHelp" className="form-text">
          Utilize un contraseña segura
        </div>
*/}
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">
          Mantenerme registrado
        </label>
      </div>
      <button type="submit" class="btn btn-primary" onClick={handleLogin}>
        Entrar
      </button>
    </form>
    </div>
  );
};
