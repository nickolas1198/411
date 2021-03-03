import React from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'
import "../Styles/Modal.css"
function ModalExampleModal() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button className = 'showModal' >Login/Register</Button>}
    >
      <Modal.Header>Sign In</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Header>Test</Header>
          <p>
          <form>
            <label>
                <i class="fa fa-user"></i>
                <input type="text" name="name" placeholder = "Username"/>
            </label>
           <label>
            <i class="fa fa-lock"></i>
                <input type="text" name="password" placeholder = "Password" />
            </label>
            <input type="submit" className = "loginbtn" value="Submit" />
            </form>
          </p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
        <i class="fas fa-times"></i>
        </Button>
        <Button
          content="Submit"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default ModalExampleModal