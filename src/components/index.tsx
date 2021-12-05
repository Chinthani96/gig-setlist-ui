import { AppBar, Button, IconButton, makeStyles, Theme, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor:"#567567"
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
}))

const GSAppBar = () => {
    const classes = useStyles();
    return(
        <AppBar position="static" className={classes.root}>
  <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
     
    </IconButton>
    <Typography variant="h6" className={classes.title}>
      Gig Setlist
    </Typography>
    <Button color="inherit">Login</Button>
  </Toolbar>
</AppBar>
    )
}

export default GSAppBar;