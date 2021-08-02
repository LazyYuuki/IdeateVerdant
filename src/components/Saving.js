import { Typography } from "@material-ui/core";

import CustomizedCard from './CustomizedCard'

const cards = [
  { merchant: 'Fairprice', point: 120, reward: 0 },
  { merchant: 'H&M', point: 40, reward: 20 },
  { merchant: 'Giant', point: 30, reward: 40 },
  { merchant: 'Cold Storage', point: 60, reward: 30 },
]

const styles = {
  container: {
    height: 330,
    backgroundImage: `url(/tree.svg)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  cardContainer: {
    flexDirection: 'row',
    overflowX: 'scroll',
    whiteSpace: 'nowrap',
    flextWrap: "nowrap",
  },
  textContainer: {
    padding: '1rem'
  },
  welcomeText: {
    fontWeight: 'bold',
    color: '#98623C'
  },
  username: {
    fontWeight: 'bold',
  },
  totalPoint: {
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#bffffb',
    width: 200,
    margin: '0 auto',
    borderRadius: '2rem',
    elevation: 1,
    border: '4px solid #006d5b'
  },
  totalPointText: {
    padding: '0.5rem'
  }
}

export default function Saving({ username }) {
  return (
    <div
      style={styles.container}
    >
      <div style={styles.textContainer}>
        <Typography
          variant='subtitle1'
          style={styles.welcomeText}
        >
          Welcome back,
        </Typography>
        <Typography
          variant='h4'
          style={styles.username}
        >
          {username}
        </Typography>
      </div>
      <div
        style={styles.cardContainer}
        class='noscrollbar'
      >
        {cards.map((card, idx) => (
          <CustomizedCard
            key={idx}
            merchant={card.merchant}
            point={card.point}
            pointTillNext={card.reward}
          />
        ))}
      </div>
      <div style={styles.totalPoint}>
        <Typography
          style={styles.totalPointText}
        >
          Total Points Earned: <br /> 250
        </Typography>
      </div>
    </div>
  )
}