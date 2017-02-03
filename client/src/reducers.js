import * as actions from './actions';
import { fromJS } from 'immutable';

let initialRestaurtnas = {
    searching: false,
    error: "",
    restaurants: [],

}

export default function restaurants(state = fromJS(initialRestaurtnas), action) {
    let next;
    switch (action.type) {
        case actions.GET_RESTAURANTS:
            return state.update("searching", d => { return !d });
        case actions.GET_RESTAURANTS_FAIL:
            next = state.update("error", d => { return action.error });
            return next.update("searching", d => { return !d })
        case actions.GET_RESTAURANTS_SUCCESS:
            next = state.set("restaurants", fromJS(action.restaurants));
            return next.update("searching", d => { return !d });
        case actions.CLEAR_TOAST:
            return state.update("error", d => {return ""});
        default:
            return state;
    }
};

