import React, { useState, useContext, createContext } from "react";
import { Button, Header, Modal } from "semantic-ui-react";
import "../Styles/Modal.css";
import valueContext from "./valueContext";
function RegisterModal() {
  const [openLogin, setLoginOpen] = React.useState(false);
  const [openRegister, setRegisterOpen] = React.useState(false);

  const { loggedIn, setLoggedIn } = useContext(valueContext);
  function redirectToRegister() {
    setLoginOpen(false);
    setRegisterOpen(true);
  }
  function redirectToLogin() {
    setRegisterOpen(false);
    setLoginOpen(true);
  }

  return (
    <>
      {/* Login Modal*/}
      <Modal
        closeIcon
        closeOnEscape
        onClose={() => setLoginOpen(false)}
        onOpen={() => setLoginOpen(true)}
        open={openLogin}
        trigger={<Button className="showModal">Sign in</Button>}
      >
        <Modal.Header className="modalHeader">Sign In</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header> </Header>
            <p>
              <form>
                <div className="formholder">
                  <i className="fa fa-user formicons"></i>
                  <input
                    type="text"
                    className="forminput"
                    id="temp"
                    name="name"
                    placeholder="Username"
                    required
                  />
                </div>
                <div className="formholder">
                  <i className="fa fa-lock formicons"></i>
                  <input
                    type="password"
                    className="forminput"
                    name="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="formholder">
                  <input
                    type="submit"
                    className="loginbtn"
                    value="Sign In "
                    onClick={() => setLoggedIn(true)}
                  />
                </div>
              </form>
            </p>
          </Modal.Description>
          <div className="footer">
            Don't have an account yet?{" "}
            <Button className="redirectButton" onClick={redirectToRegister}>
              Sign Up
            </Button>
          </div>
        </Modal.Content>
      </Modal>
      {/* Register Modal*/}
      <Modal
        closeIcon
        closeOnEscape
        onClose={() => setRegisterOpen(false)}
        onOpen={() => setRegisterOpen(true)}
        open={openRegister}
        trigger={<Button className="showModal">Sign Up</Button>}
      >
        <Modal.Header className="modalHeader">Sign Up</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header> </Header>
            <p>
              <form>
                <div className="formholder">
                  <i className="fas fa-envelope formicons"></i>
                  <input
                    type="text"
                    className="forminput"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="formholder">
                  <i className="fa fa-user formicons"></i>
                  <input
                    type="text"
                    className="forminput"
                    name="name"
                    placeholder="Username"
                    required
                  />
                </div>
                <div className="formholder">
                  <i className="fa fa-lock formicons"></i>
                  <input
                    type="password"
                    className="forminput"
                    name="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="formholder">
                  <input type="submit" className="loginbtn" value="Sign Up" />
                </div>
              </form>
            </p>
          </Modal.Description>
          <div className="footer">
            Already a member?{" "}
            <Button className="redirectButton" onClick={redirectToLogin}>
              Sign In
            </Button>
          </div>
        </Modal.Content>
      </Modal>
    </>
  );
}

export default RegisterModal;
