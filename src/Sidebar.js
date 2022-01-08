import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';

function Sidebar() {
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className='Sidebar'>
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1506765515384-028b60a970df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80" alt="" />
                <Avatar className="sidebar__avatar" />
                <h2>Archana Sharma</h2>
                <h4>Archanasharma2797@gmail.com</h4>
            </div>    
                <div className="sidebar__stats">
                    <div className="sidebar__stat">
                        <p>Who Viewed You</p>
                        <p className="sidebar__statNumber">2,543</p>
                    </div>
                    <div className="sidebar__stat">
                        <p>Views on Post</p>
                        <p className="sidebar__statNumber">2,448</p>
                    </div>
                </div>

                <div className="sidebar__bottom">
                    <p>Recent</p>
                    {recentItem('reactjs')}
                    {recentItem('programming')}
                    {recentItem('softwareengineering')}
                    {recentItem('design')}
                    {recentItem('developer')}
                </div>
        </div>
    )
}

export default Sidebar
