import { useState } from 'react'
import { Card, CardContent, CardActionArea, Typography } from "@material-ui/core";

import PopUp from './PopUp'

const styles = {
  card: {
    width: 290,
    height: 80,
    margin: '1rem auto',
    backgroundColor: '#DACBA9',
    borderRadius: '1rem',
    elevation: 1
  },
  title: {
    display: 'flex',
    flexDirection: 'row'
  },
  merchantText: {
    fontWeight: 'bold',
    display: 'inline-block',
    flex: 1,
    textAlign: 'left'
  },
  pointText: {
    display: 'inline-block',
  },
  rewardText: {
    textAlign: 'left'
  },
}

export default function CouponCard({ merchant, redeemPoint, content }) {
  const [showCoupon, setShowCoupon] = useState(false)

  const handleClick = () => {
    setShowCoupon(true)
  }

  const handleBackdrop = () => {
    setShowCoupon(false)
  }

  return (
    <>
      <PopUp
        modalState={showCoupon}
        setModalState={handleBackdrop}
      />
      <Card sx={styles.card}>
        <CardActionArea
          onClick={handleClick}
        >
          <CardContent>
            <div
              style={styles.title}
            >
              <Typography
                style={styles.merchantText}
              >
                {merchant}
              </Typography>
              <Typography
                style={styles.pointText}
              >
                <img src="/coin.gif" alt="coin" width={14} style={{ marginRight: 3 }} />
                {redeemPoint}
              </Typography>
            </div>
            <Typography
              style={styles.rewardText}
            >
              {content}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  )
}