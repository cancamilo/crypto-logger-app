import React, { Component } from 'react'
import styles from './Dashboard.module.css'
import AppBar from 'material-ui/AppBar';
import money from 'images/money.svg';

import IconButton from 'material-ui/IconButton';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Menu, {MenuItem} from 'material-ui/Menu';
import MoreVertIcon from 'material-ui-icons/MoreVert';

const AppIcon = () => (
    <div>
        <img src={money} className={styles.logo} alt="logo" />
    </div>
)

const BarMenu = (props) => (
    <Menu 
            {...props}
            iconButtonElement={<IconButton><MoreVertIcon color="white" /></IconButton>}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
        <MenuItem primaryText="Help"/>
    </Menu>
)



export class BoardHeader extends Component {
    render() {
        return (
            <div>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <IconButton className="" color="contrast" aria-label="Menu">
                            <AppIcon/>
                        </IconButton>
                        <Typography type="title" color="inherit" className="">
                            Crypto Logger App
                        </Typography>
                        <BarMenu/>
                    </Toolbar>
                </AppBar>
                
            </div>
        );
    }
}

export default BoardHeader;

// iconElementLeft={<AppIcon/>}
// iconElementRight={<BarMenu/>}
// title={<span className={styles.title}>Crypto Logger App</span>}