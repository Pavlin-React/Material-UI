import { makeStyles, Drawer, Typography } from "@material-ui/core";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@material-ui/icons";
import { useHistory } from 'react-router'

let drawerWidth = 240


let useStyle = makeStyles({
  page: {
    backgroundColor: '#f9f9f9',
    width: '100%'
  },
  drawer: {
    width: drawerWidth
  },
  drawerPaper: {
    width: drawerWidth
  },
  root: {
    display: 'flex'
  }
})

const Layout = ({ children }) => {

  let classes = useStyle()
  let history = useHistory()
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
    <div className={ classes.root }>
      <Drawer
        className={ classes.drawer }
        variant='permanent'
        anchor='left'
        classes={ { paper: classes.drawerPaper } }
      >
        <div>
          <Typography variant='h5'>
            Ninja Notes
          </Typography>
        </div>
        <List>
          { menuItem.map(item => (            
            <ListItem
              button
              key={ item.text } 
              onClick={ () => history.push(item.path) }
            >
              <ListItemIcon>{ item.icon }</ListItemIcon>
              <ListItemText primary={ item.text } />
            </ListItem>
          )) }
        </List>
      </Drawer>
      
      <div className={classes.page}>
        {children}
      </div>
    </div>
  );
}

export default Layout;