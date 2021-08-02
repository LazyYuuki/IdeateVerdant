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

export default function PopUp({ modalState, setModalState }) {
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
          Please present this QR code / Barcode below to the counter to redeem the voucher!
        </Typography>
        <Typography
          variant='subtitle2'
          align='center'
        >
          (this is a fake QR)
        </Typography>
        <br />
        <img src='QR.png' alt='QR' height={200} />
        <img src='barcode.png' alt='barcode' width={200} />
        <br />
      </Box>
    </Modal>
  )
}