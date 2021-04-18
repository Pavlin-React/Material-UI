import { makeStyles } from "@material-ui/core";
    

let useStyle = makeStyles( {
    page: {
        backgroundColor: '#f9f9f9',
        width: '100%'
    }
} )

    let classes = useStyle

const Layout = ( { children } ) => {

    return (
        <div>
            <div className={ classes.page }>
            { children }
            </div>
        </div>
    );
}
 
export default Layout;