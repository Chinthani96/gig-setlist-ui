import { Box, createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import GSAppBar from '../components';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        mainContainer: {
            minHeight:"100vh"
        }
    })
);

interface LayoutProps {
    children: React.ReactNode;
};

const Layout = (props: LayoutProps) => {
    const classes = useStyles();
    return(
        <Box className={classes.mainContainer}
        >
            <GSAppBar></GSAppBar>
        </Box>
    )
}

export default Layout;