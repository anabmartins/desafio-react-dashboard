import './styles.css'
//sidebar
import { NavLink } from 'react-router-dom';
//icons
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InsertInvitationOutlinedIcon from '@mui/icons-material/InsertInvitationOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
// drawer
import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

type Anchor = 'left'

export function SideBar() {

    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event &&
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    const drawer = (
        <Box
            className='drawer'
            role="presentation"
            onClick={toggleDrawer('left', false)}
            onKeyDown={toggleDrawer('left', false)}
        >
            <NavLink to="/">
                <div className="option">
                    <HomeOutlinedIcon />
                    <p className='link'>Home</p>
                </div>
            </NavLink>

            <NavLink to="/agend">
                <div className="option">
                    <InsertInvitationOutlinedIcon />
                    <p className='link'>Agenda</p>
                </div>
            </NavLink>

            <NavLink to="/manage">
                <div className="option">
                    <HealthAndSafetyOutlinedIcon />
                    <p className='link'>Gerenciamento</p>
                </div>
            </NavLink>
            {/* <Divider /> */}
        </Box>
    );

    return (
        <>
            <div className="sidebar">
                <div className="option">
                    <button onClick={toggleDrawer('left', true)}
                    >
                        <KeyboardDoubleArrowRightIcon 
                        sx={{width: 30}}
                        className='link'
                        />
                    </button>

                    <SwipeableDrawer
                        anchor="left"
                        open={state.left}
                        onClose={toggleDrawer('left', false)}
                        onOpen={toggleDrawer('left', true)}
                    >
                        {drawer}
                    </SwipeableDrawer>
                </div>
            </div>
        </>
    )
}