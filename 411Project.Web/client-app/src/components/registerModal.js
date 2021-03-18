import React from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'
import "../Styles/Modal.css"
import PasswordToggle from "../components/Hooks/PasswordToggle"

function RegisterModal() {
    const [openLogin, setLoginOpen] = React.useState(false)
    const [openRegister, setRegisterOpen] = React.useState(false)
    const [PasswordInputType, ToggleIcon] = PasswordToggle();
   
    function redirectToRegister(){
        setLoginOpen(false);
        setRegisterOpen(true);
    }
    function redirectToLogin() {
        setRegisterOpen(false);
        setLoginOpen(true);
    }
    return (
      <>
      
      {/* Login Modal*/ }
      <Modal
        closeIcon
        closeOnEscape
        onClose={() => setLoginOpen(false)}
        onOpen={() => setLoginOpen(true)}
        open={openLogin}
        trigger={<Button className = 'showModal' >Sign in</Button>}
      >
        <Modal.Header>Sign In</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header>  </Header>
            <p>
            <form>
            
              <div className = "formholder">
              
                  <i class="fa fa-user formicons"></i>
                  <input type="text" class = "forminput" id = "temp" name="name" placeholder = "Username" required="required"/>
              </div>
              <div className = "formholder">
                  <i class="fa fa-lock formicons"></i>
                  <span className="password-toggle-icon">{ToggleIcon}</span>
                  <input type={PasswordInputType} class = "forminput" name="password" placeholder = "Password" required="required"/>
                  
              </div>
              <div className = "formholder">
              <input type="submit" className = "loginbtn" value="Sign In"/>
              </div>
              </form>
              
            </p>
          </Modal.Description>
          <div className ="footer">Don't have an account yet? <Button className = "redirectButton" onClick={redirectToRegister}>Sign Up</Button></div>
        </Modal.Content>
      </Modal>
      {/* Register Modal*/ }
      <Modal
        closeIcon
        closeOnEscape
        onClose={() => setRegisterOpen(false)}
        onOpen={() => setRegisterOpen(true)}
        open={openRegister}
        trigger={<Button className = 'showModal' >Sign Up</Button>}
      >
        <Modal.Header>Sign Up</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header>  </Header>
            <p>
            <form>
              <div className = "formholder">
                  <i class="fa fa-user formicons"></i>
                  <input type="text" class = "forminput" name="name" placeholder = "Username" required="required"/>
              </div>
              <div className = "formholder">
                  <i class="fa fa-lock formicons"></i>
                  <span className="password-toggle-icon">{ToggleIcon}</span>
                  <input type={PasswordInputType} class = "forminput" name="password" placeholder = "Password" required="required"/>
              </div>
              <div className = "formholder">
              <input type="submit" className = "loginbtn" value="Sign Up"/>
              </div>
              </form>
            </p>
          </Modal.Description>
          <div className ="footer">Already a member? <Button className = "redirectButton" onClick={redirectToLogin} >Sign In</Button></div>
        </Modal.Content>
      </Modal>
      </>
    )
  }

  export default RegisterModal;
