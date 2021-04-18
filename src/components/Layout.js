import { makeStyles, Drawer, Typography } from "@material-ui/core";

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

  return (
    <div className={ classes.root }>
      <Drawer
        className={ classes.drawer }
        variant='permanent'
        anchor='left'
        classes={ { paper: classes.drawerPaper } }
      >
        <Typography variant='h5'>
          Ninja Notes
        </Typography>
      </Drawer>


      <div className={classes.page}>
        {children}
      </div>
    </div>
  );
}

export default Layout;