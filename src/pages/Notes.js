import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

export default function Notes() {

  const [notes, setNotes] = useState( [] )

  useEffect( () => {

    fetch('http://localhost:8000/notes')
      .then( res => res.json() )
      .then( data => setNotes( data ) )

  }, [] )

  return (
    <div>

      <Grid container>
        <Grid>
          <Paper>1</Paper>
        </Grid>
        <Grid>
          <Paper>2</Paper>
        </Grid>
        <Grid>
          <Paper>3</Paper>
        </Grid>
        <Grid>
          <Paper>4</Paper>
        </Grid>
      </Grid>

      { notes.map( note => (
        <p key={ note.id }>{ note.title }</p>
      ) ) }
    </div>
  )
}
