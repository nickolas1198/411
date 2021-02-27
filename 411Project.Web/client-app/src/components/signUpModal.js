import React from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'

function ModalExampleModal() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button >Show Modal</Button>}
    >
      <Modal.Header>Sign In</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Header>Test</Header>
          <p>
          <form>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
            </form>
          </p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Nope
        </Button>
        <Button
          content="Yep, that's me"
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