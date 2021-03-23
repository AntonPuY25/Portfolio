import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import s from './nav.module.scss';

export default function MenuPopupState() {
    return (
        <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
                <React.Fragment>
                    <Button  variant="outlined" color="inherit"  {...bindTrigger(popupState)}>
                     Menu
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                        <MenuItem onClick={popupState.close}> <a href='/23r'>Home</a></MenuItem>
                        <MenuItem onClick={popupState.close}> <a href='/23r'>About</a></MenuItem>
                        <MenuItem onClick={popupState.close}> <a href='/23r'>Skills</a></MenuItem>
                        <MenuItem onClick={popupState.close}><a href='/23r'>Projects</a></MenuItem>
                        <MenuItem onClick={popupState.close}><a href='/23r'>Contact</a></MenuItem>
                    </Menu>
                </React.Fragment>
            )}
        </PopupState>
    );
}