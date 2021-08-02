import { Typography } from '@material-ui/core'

import Header from '../components/Header'

const styles = {
  contentContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: '#98623C',
    width: 300,
    margin: '20px auto',
    textAlign: 'center',
  },
  image: {
    margin: '20px auto',
    display: 'block'
  },
}


export default function Info() {

  return (
    <div>
      <Header />
      <div style={styles.contentContainer}>
        <img src="QR.png" alt="QR" width='70%' style={styles.image} />
        <img src="barcode.png" alt="barcode" width='80%' style={styles.image} />
        <Typography
          variant='subtitle2'
          style={styles.text}
        >
          Please show the staffs the QR code / Barcode above after your purchase using your own carrier/container to earn points!
        </Typography>
      </div>
    </div >
  )
}