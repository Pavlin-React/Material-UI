import { makeStyles, Drawer, Typography } from "@material-ui/core";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@material-ui/icons";
import { AppBar, Toolbar } from '@material-ui/core'
import { useHistory, useLocation } from 'react-router'
import { format } from 'date-fns'

let drawerWidth = 240


let useStyle = makeStyles(( theme ) => {
  return {
    page: {
      backgroundColor: '#f9f9f9',
      width: '100%',
      padding: theme.spacing( 3 )
    },
    drawer: {
      width: drawerWidth
    },
    drawerPaper: {
      width: drawerWidth
    },
    root: {
      display: 'flex'
    },
    active: {
      backgroundColor: '#f4f4f4'
    },
    title: {
      padding: theme.spacing( 2 )
    },
    appbar: {
      width: `calc( 100% - ${ drawerWidth }px )`
    },
    toolbar: theme.mixins.toolbar,
    date: {
      flexGrow: 1
    }
  }
})

const Layout = ({ children }) => {

  let classes = useStyle()
  let history = useHistory()
  let location = useLocation()

  let menuItem = [
    {
      text: 'My notes',
      icon: <SubjectOutlined color='secondary' />,
      path: '/'
    },
    {
      text: 'Create Icon',
      icon: <AddCircleOutlineOutlined color='secondary' />,
      path: '/create'
    }
  ]

  return (
    <div className={ classes.root } elevation={ 0 }>
      <AppBar
      className={ classes.appbar }>
        <Toolbar>
          <Typography className={ classes.date }>
            Today is { format( new Date(), 'do MMMM Y' ) }
          </Typography>
          <Typography>
            Mario
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={ classes.drawer }
        variant='permanent'
        anchor='left'
        classes={ { paper: classes.drawerPaper } }
      >
        <div>
          <Typography variant='h5' className={ classes.title }>
            Ninja Notes
          </Typography>
        </div>
        <List>
          { menuItem.map(item => (            
            <ListItem
              button
              key={ item.text } 
              onClick={ () => history.push(item.path) }
              className={ location.pathname === item.path ? classes.active : null }
            >
              <ListItemIcon>{ item.icon }</ListItemIcon>
              <ListItemText primary={ item.text } />
            </ListItem>
          )) }
        </List>
      </Drawer>
      
      <div className={classes.page}>
        <div className={ classes.toolbar } ></div>
        {children}
      </div>
    </div>
  );
}

export default Layout;