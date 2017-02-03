

export const GET_RESTAURANTS         = 'GET_RESTAURANTS';
export const GET_RESTAURANTS_FAIL    = 'GET_RESTAURANTS_FAIL';
export const GET_RESTAURANTS_SUCCESS = 'GET_RESTAURANTS_SUCCESS';

export const RESTAURANT_CLICK = 'RESTAURANT_CLICK';

export const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL    = 'LOGIN_FAIL';

export const CLEAR_TOAST = 'CLEAR_TOAST';


export function fetch_restaurants(loc) {

    return function(dispatch) {
        dispatch(getting_restaurants(loc));
        fetch("search/" +loc)
            .then(resp => {
            if (resp.status >= 200 && resp.status < 300) {
                resp.json()
                    .then(json => {
                        dispatch(get_restaurants_success(json));
                    })
            } else {
                const error = new Error(resp.statusText);
                error.response = resp;
                dispatch(get_restaurants_fail(error));
                throw error;
            }
        })
    }
}

function getting_restaurants(loc) {
    return {type: GET_RESTAURANTS};
};

function get_restaurants_success(restaurants) {
    return {type: GET_RESTAURANTS_SUCCESS, restaurants}
}

function get_restaurants_fail(error) {
    console.error(error);
    return {type: GET_RESTAURANTS_FAIL, error}
}

export function login(username, password) {
    return {type: LOGIN_ATTEMPT, auth: {username, password}};
};

export function restaurant_click(id) {
    return {type: RESTAURANT_CLICK, id};
};

export function clear_toast() {
    return {type: CLEAR_TOAST};
};
