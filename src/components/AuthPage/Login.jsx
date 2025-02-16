import { useEffect, useRef, useState } from "react";
//import "./LoginPage.css";
// import logo from "./to-do-icon.png";
import { login } from "../../services/api";
//import Alert from "../UI/Alert";
import { useNavigate } from "react-router-dom";
import Registro from "./Registro";

const LoginPage = ({ onLogin, userData }) => {
  const inputUserNameRef = useRef();
  const inputPassRef = useRef();

  const navigateTo = useNavigate();

  const [btnDisabled, setBtnDisabled] = useState(true);
  const [btnText, setBtnText] = useState("Iniciar sesión");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [classMessage, setClassMessage] = useState("");

  useEffect(() => {
    if (userData) {
      navigateTo("/Dashboard");
    }
  }, [userData]);

  const _onHandleClick = async () => {
    try {
      setBtnDisabled(true);
      setBtnText("Enviando ...");
      const response = await login(
        inputUserNameRef.current.value,
        inputPassRef.current.value
      );

      setClassMessage("alert-success");
      setAlertMessage("Inicio de sesion correcto");
      setShowAlert(true);

      setTimeout(() => {
        onLogin(response);
      }, 2000);
    } catch (error) {
      setClassMessage("alert-danger");
      setAlertMessage(error);
      setShowAlert(true);
    } finally {
      setBtnDisabled(false);
      setBtnText("Iniciar sesión");
    }
  };

  const _onHandleChange = () => {
    if (
      inputUserNameRef.current.value.length > 0 &&
      inputPassRef.current.value.length > 0
    ) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  };

  return (
    <div className="login-container">
      <div className="text-center logo-container">
        {/* <img src={logo} width="70" alt="Logo" /> */}
      </div>
      <h1 className="text-center">Sign in</h1>
      <p className="text-center">
        Log in by entering your email address and password.
      </p>
      <form>
        {/* {showAlert ? (
          <Alert classColor={classMessage} message={alertMessage} />
        ) : (
          ""
        )} */}
        <div className="form-group">
          <label htmlFor="email">Username</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="email@address.com"
              ref={inputUserNameRef}
              onChange={_onHandleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fas fa-lock"></i>
              </span>
            </div>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              ref={inputPassRef}
              onChange={_onHandleChange}
            />
            <div className="input-group-append">
              <span className="input-group-text">
                <i className="fas fa-eye"></i>
              </span>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className={`btn btn-primary btn-block`}
          onClick={_onHandleClick}
          disabled={btnDisabled}
        >
          {btnText}
        </button>
        <div className="form-group form-check mt-3">
          <input type="checkbox" className="form-check-input" id="rememberMe" />
          <label className="form-check-label" htmlFor="rememberMe">
            Remember me
          </label>
        </div>
      </form>
      <p className="text-center mt-4">
        Don't have an account?</p>
        <input type="button" value="Registro" />
    </div>
  );
};
export default LoginPage;