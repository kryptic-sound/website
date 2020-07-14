import React from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '66%' //'56.25%', 
  },
  cardContent: {
    flexGrow: 1
  },
}))

const SkuCard = ({ sku }) => {
  const classes = useStyles()
  const { addItem } = useShoppingCart()
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={sku.image}
        title="Image title"
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2" style={{color: 'black'}}>
          {sku.name}
        </Typography>
        <Typography color="textPrimary">
          Price:{' '}
          {formatCurrencyString({
            value: parseInt(sku.price),
            currency: sku.currency,
          })}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          color="secondary"
          style={{backgroundColor: "black"}}
          onClick={() => {
            addItem(sku)
          }}
        >
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  )
}

export default SkuCard
