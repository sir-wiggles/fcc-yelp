import React from 'react';
import { Control, Form } from 'react-redux-form';
import { connect } from 'react-redux';
import * as actions from '../actions';

export const Search = React.createClass({

    handleSearch: function() {
        this.props.fetch_restaurants(
            this.props.form.location
        )
    },

    render: function() {
        return (
            <div>
                <Form model="search" onSubmit={this.handleSearch}>
                    <Control.text model=".location" />
                    <button>Search</button>
                </Form>
            </div>
        );
    },
})

function mapStateToProps(state) {
    return {
        form: state.forms.search,
        loading: state.restaurants.get('searching'),
    };
};

export const SearchForm = connect(
    mapStateToProps,
    actions
)(Search);
