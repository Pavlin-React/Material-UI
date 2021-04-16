import React from 'react'
import { Typography, Button, ButtonGroup, Container } from '@material-ui/core'
import AcUnitIcon from '@material-ui/icons/AcUnit';
import SendIcon from '@material-ui/icons/Send';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function Create() {
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
        variant='contained'
        endIcon={<ArrowForwardIosIcon />}
        onClick={() => console.log('I am clicked')
        }>consol log</Button>
      <br />
      <AcUnitIcon />
      <AcUnitIcon color='secondary' fontSize='large' />
      <AcUnitIcon color='secondary' fontSize='small' />
      <AcUnitIcon color='action' fontSize='small' />
      <AcUnitIcon color='error' fontSize='small' />
      <AcUnitIcon color='disabled' fontSize='small' />
    </Container>
  )
}
