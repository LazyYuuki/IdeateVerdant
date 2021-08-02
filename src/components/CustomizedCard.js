import { Card, CardContent, Typography } from "@material-ui/core";

const styles = {
  card: {
    width: 180,
    height: 120,
    display: 'inline-block',
    margin: '1rem',
    backgroundColor: '#bffffb',
    borderRadius: '2rem',
    elevation: 1
  },
  merchantText: {
    fontWeight: 'bold',

  },
  pointText: {
    textAlign: 'center',
    padding: '0.5rem'
  },
  rewardText: {
    textAlign: 'center',
  }
}

export default function CustomizedCard({ merchant, point, pointTillNext }) {
  return (
    <>
      <Card sx={styles.card}>
        <CardContent>
          <Typography
            variant='h6'
            align='center'
            style={styles.merchantText}
          >
            {merchant}
          </Typography>
          <Typography
            style={styles.pointText}
          >
            Points earned: <br />{point}
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}