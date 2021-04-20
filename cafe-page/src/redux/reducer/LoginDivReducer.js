import {ACCOUNT, JOIN, FORGOTPW} from "redux/action/LoginDiv.js";

const initialize = "login";

export const loginDiv = (state = initialize, action) => {
    switch(action.type) {
        case ACCOUNT:
            state = "login";
            return state;
        case JOIN:
            state = "signUp";
            return state;
        case FORGOTPW:
            state = "findPw";
            return state;
        default:
            return state;
    }
};