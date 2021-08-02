import { Modal, Box, Typography, TextField, Button } from '@material-ui/core'
import { useState } from 'react'

import Header from '../components/Header'
import Saving from '../components/Saving'
import Coupons from '../components/Coupons'

const styles = {
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 250,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: 'center',
  },
}


export default function Home() {
  const [modalState, setModalState] = useState(true)
  const [username, setUsername] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    setModalState(false)
  }

  const handleChange = (event) => {
    setUsername(event.target.value)
  }

  return (
    <div>
      <Modal
        open={modalState}
      >
        <Box
          component='form'
          onSubmit={handleSubmit}
          sx={styles.modal}
        >
          <Typography
            variant="h6"
            component="h2"
            align="center"
          >
            Welcome to our Demo for <br /> Verdant!
          </Typography>
          <Typography sx={{ mt: 2 }} align='center'>
            Please enter your name below to try out the demo
          </Typography>
          <Typography
            variant='subtitle2'
            align='center'
          >
            (it is all stored locally on your browser, we do not use a server for this demo)
          </Typography>
          <br />
          <TextField required label="Username" variant="outlined"
            onChange={handleChange}
          />
          <br /><br />
          <Button
            type='submit'
          >
            Continue
          </Button>
        </Box>
      </Modal>
      <Header />
      <Saving username={username} />
      <Coupons />
    </div >
  )
}