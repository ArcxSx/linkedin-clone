import React from 'react';
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widget__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widget__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>

            {newsArticle("Finally! Aliens Found", "7d ago - 98765 readers")}
            {newsArticle("Bitcoin crashes -43%", "5d ago - 45322 readers")}
            {newsArticle("UEM declares online exam", "3d ago - 15342 readers")}
            {newsArticle("ZOMATO Announces Free Food 3rd Dec", "2d ago - 9532 readers")}
            {newsArticle("Zuckerberg buys Amazon", "1h ago - 99999 readers")}
        </div>
    );
}

export default Widgets;
