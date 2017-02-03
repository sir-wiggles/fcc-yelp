import React from 'react';

export const Item = React.createClass({

    render: function() {
        return (
            <li className="item">
                <div className="image">
                    <img className="image" src={this.props.info.get("image_url")} height="100px" width="100px" />
                </div>
                <div className="description">
                    <div className="attending">
                        <a href={this.props.info.get("url")}>
                            <p>{this.props.info.get("name")}</p>
                        </a>
                        <button className="going">Going</button> 
                    </div>
                    <p>{this.props.info.get("snippet_text")}</p>
                </div>
            </li>
        );
    }
});
