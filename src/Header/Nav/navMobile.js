import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

export default function MenuPopupState() {

    return (
        <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
                <React.Fragment>
                    <Button  variant="outlined" color="inherit"  {...bindTrigger(popupState)}>
                     Menu
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                        <MenuItem onClick={popupState.close}> <a href='#home'>Home</a></MenuItem>
                        <MenuItem onClick={popupState.close}> <a href='#about' >About</a></MenuItem>
                        <MenuItem onClick={popupState.close}> <a href='#skills' >Skills</a></MenuItem>
                        <MenuItem onClick={popupState.close}><a href='#works'>Projects</a></MenuItem>
                        <MenuItem onClick={popupState.close}><a href='#footer'>Contact</a></MenuItem>
                    </Menu>
                </React.Fragment>
            )}
        </PopupState>
    );
}