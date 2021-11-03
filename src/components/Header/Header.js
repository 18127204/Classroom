import React, { Children } from 'react'
import { useStyles } from './style';
import { Add, Apps } from "@material-ui/icons";
import { useLocalContext } from "../../context/context";
import {
    AppBar,
    Avatar,
    Menu,
    MenuItem,Toolbar,Typography,
  } from "@material-ui/core";
import { CreateClass } from '..';


const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClose = () => setAnchorEl(null);
    const handleClick=(event)=>setAnchorEl(event.currentTarget);
    const classes=useStyles();
    const { createClassDialog, setCreateClassDialog } = useLocalContext();
    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position="static">
                <Toolbar className={classes.toolbar}>
                    <div className={classes.headerWrapper}>
                        <img
                        src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg"
                        alt="Classroom"
                        />
                        <Typography variant="h6" className={classes.title}>
                        Classroom
                        </Typography>
                    </div>
                    <div className={classes.header__wrapper__right}>
                        <Add onClick={handleClick} className={classes.icon} />
                        <Menu
                        id="simple-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            >
                            <MenuItem onClick={() => setCreateClassDialog(true)}>Create Class</MenuItem>
                        </Menu>
                        
                    </div>
                </Toolbar>
            </AppBar>
            <CreateClass />
        </div>
    )
}
export default Header;
