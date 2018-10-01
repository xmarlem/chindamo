import * as Actions from '../actions';

const initialState = {
    role: 'guest',
    data: {
        'displayName': 'Domenico Chindamo',
        'photoURL'   : 'assets/images/avatars/Velazquez.jpg',
        'email'      : 'domenico.chindamo@baloise.ch',
        shortcuts    : [
            'calendar',
            'mail',
            'contacts',
            'todo'
        ]
    }
};

const user = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.SET_USER_DATA:
        {
            return {
                ...initialState,
                ...action.payload
            };
        }
        case Actions.REMOVE_USER_DATA:
        {
            return {
                ...initialState
            };
        }
        case Actions.USER_LOGGED_OUT:
        {
            return initialState;
        }
        default:
        {
            return state
        }
    }
};

export default user;
