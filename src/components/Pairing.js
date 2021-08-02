import { Modal, Box, Typography } from '@material-ui/core'

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

export default function Pairing({ modalState, setModalState }) {

  return (
    <Modal
      open={modalState}
      onBackdropClick={setModalState}
    >
      <Box
        component='form'
        sx={styles.modal}
      >
        <Typography
          variant="h6"
          component="h2"
          align="center"
        >
          Device is pairing please put the token nearby
        </Typography>
        <img src='earth.gif' alt='earth' height={200} />
        <br />
      </Box>
    </Modal>
  )
}