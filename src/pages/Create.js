import React, { useState } from 'react'
import { Typography, Button, makeStyles, Container, TextField } from '@material-ui/core'
import AcUnitIcon from '@material-ui/icons/AcUnit';
import SendIcon from '@material-ui/icons/Send';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

let useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
})


export default function Create() {

  let classes = useStyles()
  let [title, setTitle] = useState('')
  let [detail, setDetail] = useState('')
  let [titleError, setTittleError] = useState(false)
  let [detailError, setDetailError] = useState(false)


  let handleSubmit = (e) => {
    e.preventDefault()

    setTittleError(false)
    setDetailError(false)

    if ( title === '' ) {
      setTittleError(true)
    }

    if ( detail === '' ) {
      setDetailError(true)
    }

    if ( title && detail ) {
      console.log('OKkk')
    }

  }

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

      <form noValidate autoComplete='off' onSubmit={ handleSubmit }>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label='note title'
          variant='outlined'
          fullWidth
          required
          error={ titleError }
        />
        <TextField
          onChange={(e) => setDetail(e.target.value)}
          className={classes.field}
          label='details'
          multiline
          rows={5}
          variant='outlined'
          fullWidth
          required
          error={ detailError }
        />



        <Button
          className={classes.btn}
          type='submit'
          variant='contained'>
          Submit
        </Button>
      </form>



    </Container>
  )
}
