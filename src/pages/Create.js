import React from 'react'
import { Typography, Button, ButtonGroup } from '@material-ui/core'

export default function Create() {
  return (
    <div>
      <Typography
      variant='h6'
      component='h2'
      gutterBottom
      color='textSecondary'
      >
        This is a new Create page
      </Typography>
      <Button variant='contained' color='primary' type='submit'>Submit</Button>
      <Button variant='outlined' color='primary' type='submit'>Submit</Button>
      <Button variant='text' color='primary' type='submit'>Submit</Button>
      <ButtonGroup color='primary'>
        <Button>one</Button>
        <Button>two</Button>
        <Button>three</Button>
      </ButtonGroup> 
      <Button onClick={ () => console.log('I am clicked') }>consol log</Button>
    </div>
  )
}
