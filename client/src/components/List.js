import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import { Item } from './Item';

export const _List = React.createClass({

    render: function() {

        let items = this.props.restaurants.map(d => {
            return <Item key={d.get("id")} info={d} />
        });

        return (
            <ul>
                {items}                
            </ul>
        );
    }
});

function mapStateToProps(state) {
    return {
        restaurants: state.restaurants.get('restaurants'),
    };
};

export const List = connect(
    mapStateToProps,
    actions
)(_List);
