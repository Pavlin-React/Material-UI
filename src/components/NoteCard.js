import { Card, CardHeader, Avatar, CardContent, IconButton, Typography, makeStyles } from '@material-ui/core'
import { green, pink, blue, yellow } from '@material-ui/core/colors'
import { DeleteOutlined } from '@material-ui/icons'

let useStyle = makeStyles( {
  avatar: {
    backgroundColor: ( note ) => {
      if ( note.category === 'reminders' ) {
        return yellow[700]
      }
      if ( note.category === 'work' ) {
        return green[500]
      }
      if ( note.category === 'todos' ) {
        return pink[300]
      }
      return blue[500]
    }
    
  }
} )


const NoteCard = ({ note, handleDelete }) => {

  let classes = useStyle( note )

  return (
    <div>
      <Card elevation={ 4 } className={ classes.test }>
        <CardHeader 
          avatar={ 
            <Avatar className={ classes.avatar } >
              { note.category[0].toUpperCase() }
            </Avatar>
           }
          action={
            <IconButton onClick={ () => handleDelete( note.id ) }>
              <DeleteOutlined />
            </IconButton>
          }
          title={ note.title }
          subheader={ note.category }
        />
        <CardContent>
          <Typography variant='body2' color='textSecondary'>
            { note.details }
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default NoteCard;