import React from 'react'
import { Typography, Button, makeStyles, Container } from '@material-ui/core'
import AcUnitIcon from '@material-ui/icons/AcUnit';
import SendIcon from '@material-ui/icons/Send';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

let useStyles = makeStyles( {
  btn: {
    backgroundColor: 'orange',
    fontSize: 30,
    '&:hover': { backgroundColor: 'red' }
  }
} )


export default function Create() {

  let classes = useStyles()

  return (
    <Container>
      <Typography
        variant='h6'
        component='h2'
        gutterBottom
        color='textSecondary'

      >
        This is a new Create page
      </Typography>

      <Button
        className={ classes.btn }
        variant='contained'
        endIcon={<ArrowForwardIosIcon />}
        onClick={() => console.log('I am clicked')
        }>consol log</Button>
      
    </Container>
  )
}
