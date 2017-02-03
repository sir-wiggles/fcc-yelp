import React from 'react';

import { SearchForm } from './Search';
import { List } from './List';
import { Toast } from './Toast';
import { Spinner } from './Spinner';

import { connect } from 'react-redux';
import * as actions from '../actions';

export const _App = React.createClass({
    render: function() {
        return (
            <div>
                { this.props.error   ? <Toast />   : null }
                { this.props.loading ? <Spinner /> : null }
                <div>
                    <SearchForm />
                    <List />
                </div>
            </div>
        )
    },
});

function mapStateToProps(state) {
    return {
        form   : state.forms.search,
        loading: state.restaurants.get('searching'),
        error  : state.restaurants.get('error'),
    };
};

export const App = connect(
    mapStateToProps,
    actions
)(_App);
