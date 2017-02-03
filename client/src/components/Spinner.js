import React from 'react';


export const Spinner = React.createClass({

    render: function() {
        return(
            <div className="block">
                <div className="centered spinner">
                    <div className="rect1"></div>
                    <div className="rect2"></div>
                    <div className="rect3"></div>
                    <div className="rect4"></div>
                    <div className="rect5"></div>
                </div>
            </div>
        );
    }
})
