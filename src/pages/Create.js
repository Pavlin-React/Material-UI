import React, { useState } from 'react'
import { FormControl, FormLabel } from '@material-ui/core'
import { Typography, Button, makeStyles, Container, TextField, Radio, RadioGroup, FormControlLabel } from '@material-ui/core'
import AcUnitIcon from '@material-ui/icons/AcUnit';
import SendIcon from '@material-ui/icons/Send';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useHistory } from 'react-router';

let useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
})


export default function Create() {

  let history = useHistory()


  let classes = useStyles()
  let [title, setTitle] = useState('')
  let [details, setDetail] = useState('')
  let [titleError, setTittleError] = useState(false)
  let [detailError, setDetailError] = useState(false)
  let [category, setCategory] = useState('money')


  let handleSubmit = (e) => {
    e.preventDefault()

    setTittleError(false)
    setDetailError(false)

    if (title === '') {
      setTittleError(true)
    }

    if (details === '') {
      setDetailError(true)
    }

    if (title && details) {
      fetch('http://localhost:8000/notes', {
        method: 'Post',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify( { title, details, category } )
      }).then( () => history.push('/') )

    }

  }

  return (
    <Container>
      <Typography
        variant='h4'
        component='h2'
        gutterBottom
        color='textSecondary'

      >
        This is a new Create page
      </Typography>

      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label='note title'
          variant='outlined'
          fullWidth
          required
          error={titleError}
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
          error={detailError}
        />

        <FormControl className={ classes.field }>
          <FormLabel>Note Category</FormLabel>
            <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
              <FormControlLabel control={<Radio />} label='Money' value='money' />
              <FormControlLabel control={<Radio />} label='Sport' value='sport' />
              <FormControlLabel control={<Radio />} label='Music' value='music' />
              <FormControlLabel control={<Radio />} label='Hobby' value='hobby' />
            </RadioGroup>
        </FormControl>

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
