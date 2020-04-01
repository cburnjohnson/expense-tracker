export default (state, action) => {
    switch (action.type) {
        case 'USER_LOADED':
            return {
                ...state,
                user: action.payload,
                loading: false,
                isAuthenticated: true
            };
        case 'LOGIN_SUCCESS':
        case 'REGISTER_SUCCESS':
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                isAuthenticated: true,
                token: action.payload,
                loading: false
            };
        case 'AUTH_ERROR':
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                user: null,
                error: action.payload,
                loading: false
            };
        case 'GET_TRANSACTIONS':
            return {
                ...state,
                loading: false,
                transactions: action.payload
            };
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            };
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(
                    transaction => transaction._id !== action.payload
                )
            };
        case 'TRANSACTION_ERROR':
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};
