import React, { useContext, useEffect, useState } from "react";
import { Button, Header, Modal, Form } from "semantic-ui-react";
import "../Styles/Modal.css";
import PasswordToggle from "./Hooks/PasswordToggle";
import SignInApiCall from "../ApiCalls/SignInApiCall";
import { UserContext } from "../Context/UserContext";

function RegisterModal() {
  const [openLogin, setLoginOpen] = React.useState(false);
  const [openRegister, setRegisterOpen] = React.useState(false);
  const [PasswordInputType, ToggleIcon] = PasswordToggle();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [formLoading, setFormLoading] = useState(false);
  const { user, setUser } = useContext(UserContext);

  const handleLoginSubmit = async () => {
    try {
      // Activate the LoadingOverlay component
      setFormLoading(true);

      let dto = {
        Email: userEmail,
        Password: userPassword,
      };
      let res = await SignInApiCall(dto);
      setUser(true);
      console.log("the context thingy " + user);

      // force loading overlay to last at least 2 seconds
      setTimeout(function () {
        setFormLoading(false);
        if (res.status === 200) {
          // make modal go away
          setLoginOpen(false);
        } else {
          alert("Please verify your email and password.");
        }
      }, 2000);
    } catch (error) {
      console.log(error);
      // force loading overlay to last at least 2 seconds
      setTimeout(function () {
        setFormLoading(false);
        alert("Server is down. Please try again later :(");
      }, 2000);
    }
  };

  const handleUserEmailChange = (e: any, value: any) => {
    setUserEmail(value.value);
  };

  const handleUserPasswordChange = (e: any, value: any) => {
    setUserPassword(value.value);
  };

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
        <Modal.Header>Sign In</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header> </Header>
            <Form onSubmit={handleLoginSubmit} loading={formLoading}>
              <Form.Input
                name="email"
                label="Email"
                value={userEmail}
                onChange={handleUserEmailChange}
              />
              <Form.Input
                name="password"
                label="Password"
                value={userPassword}
                onChange={handleUserPasswordChange}
              />
              <Button color="teal" fluid>
                Sign In
              </Button>
            </Form>
            {/* <p>
              <form>
                <div className="formholder">
                  <i class="fa fa-user formicons"></i>
                  <input
                    type="text"
                    class="forminput"
                    id="username"
                    name="name"
                    placeholder="Username"
                    required="required"
                  />
                </div>
                <div className="formholder">
                  <i class="fa fa-lock formicons"></i>
                  <span className="password-toggle-icon">{ToggleIcon}</span>
                  <input
                    type={PasswordInputType}
                    class="forminput"
                    name="password"
                    placeholder="Password"
                    required="required"
                  />
                </div>
                <div className="formholder">
                   <input
                    type="submit"
                    className="loginbtn"
                    value="Sign In"
                    onClick={redirectToLogin}
                  /> 
                  <Button color="teal" fluid>
                    Sign In
                  </Button>
                </div>
              </form>
            </p> */}
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
        <Modal.Header>Sign Up</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header> </Header>
            <p>
              {/* <form>
                <div className="formholder">
                  <i class="fa fa-user formicons"></i>
                  <input
                    type="text"
                    class="forminput"
                    name="name"
                    placeholder="Username"
                    required="required"
                  />
                </div>
                <div className="formholder">
                  <i class="fa fa-lock formicons"></i>
                  <span className="password-toggle-icon">{ToggleIcon}</span>
                  <input
                    type={PasswordInputType}
                    class="forminput"
                    name="password"
                    placeholder="Password"
                    required="required"
                  />
                </div>
                <div className="formholder">
                  <input type="submit" className="loginbtn" value="Sign Up" />
                </div>
              </form> */}
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
