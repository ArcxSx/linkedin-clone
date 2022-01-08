import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

function header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="" />

                <div className="header__search">
                    <SearchIcon />  
                    <input type="text" />
                </div>
            </div>

            <div className="header__right">
                <HeaderOptions Icon={HomeIcon} title="Home" />
                <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOptions Icon={ChatIcon} title="Messaging" />
                <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
                <HeaderOptions avatar="https://media-exp1.licdn.com/dms/image/C5103AQFPvoFT-KN2oA/profile-displayphoto-shrink_800_800/0/1576659789566?e=1634169600&v=beta&t=_p4fbWySDRO9cde5tqrnMfEU4NrKu_KjJq74i6CFpo4" title="Me" />
            </div>
        </div>
    )
}

export default header
