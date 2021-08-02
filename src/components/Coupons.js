import CouponCard from './CouponCard'

const styles = {
  container: {
    backgroundColor: '#98623C',
    textAlign: 'center',
    justifyContent: 'center',
    overflowY: 'scroll',
    height: 450,
    borderRadius: '2rem 2rem 0 0'
  },
  couponContainer: {
    marginTop: 20,
    height: 340,
    overflow: 'scroll'
  }
}

const coupons = [
  { merchant: 'Fairprice', redeemPoint: 120, content: '$10 off your next purchase' },
  { merchant: 'H&M', redeemPoint: 60, content: '$2 off your next purchase' },
  { merchant: 'Giant', redeemPoint: 70, content: '$2 off your next purchase' },
  { merchant: 'Cold Storage', redeemPoint: 90, content: '1 free beverage product of choice*' },
  { merchant: 'Fairprice', redeemPoint: 120, content: '$10 off your next purchase' },
  { merchant: 'H&M', redeemPoint: 60, content: '$2 off your next purchase' },
  { merchant: 'Giant', redeemPoint: 70, content: '$2 off your next purchase' },
  { merchant: 'Cold Storage', redeemPoint: 90, content: '1 free beverage product of choice*' },
]

export default function Coupons() {
  return (
    <div style={styles.container}>
      <div style={styles.couponContainer}>
        {coupons.map((coupon, idx) => (
          <CouponCard
            key={idx}
            merchant={coupon.merchant}
            redeemPoint={coupon.redeemPoint}
            content={coupon.content}
          />
        ))}
      </div>
    </div>
  )
}