import { useState, useEffect } from 'react'
import { Typography, Button } from '@material-ui/core'

import Header from '../components/Header'
import Pairing from '../components/Pairing'


const styles = {
  contentContainer: {

  },
  text: {
    fontWeight: 'bold',
    color: '#98623C',
    width: 300,
    margin: '20px auto',
    textAlign: 'center',
  },
  button: {
    textAlign: 'center',
  },
}


export default function Token() {
  const [isPairing, setIsPairing] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsPairing(false)
    }, 8000)
  }, [isPairing])

  const handleClick = () => {
    setIsPairing(!isPairing)
  }

  return (
    <div>
      <Header />
      <Pairing
        modalState={isPairing}
        setModalState={handleClick}
      />
      <Typography
        variant='h4'
        style={styles.text}
      >
        Click on the button below to pair with your token!
      </Typography>
      <img src="tree.svg" alt="tree" width='100%' />
      <div style={{ textAlign: 'center' }}>
        <Button
          variant='contained'
          color='success'
          size='large'
          style={styles.button}
          onClick={handleClick}
        >
          Pair
        </Button>
      </div>
    </div >
  )
}