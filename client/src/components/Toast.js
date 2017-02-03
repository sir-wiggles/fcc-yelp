import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


export const _Toast = React.createClass({

    render: function() {
        if (!this.props.error) {
            return null;
        }

        setTimeout(d => {
            this.props.clear_toast(true);
        }, 3000);

        return (
            <div className="block" style={{"height": "100hv"}}>
                <div className="centered">
                    <p>{this.props.error}</p>
                </div>
            </div>
        );
    }
});

function mapStateToProps(state) {
    return {
        error: state.restaurants.get('error'),
    };
};

export const Toast = connect(
    mapStateToProps,
    actions
)(_Toast);
