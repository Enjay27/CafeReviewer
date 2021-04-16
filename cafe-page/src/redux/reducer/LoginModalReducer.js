import {OPEN, CLOSE} from "../action/LoginModal.js";

const initialize = false;

export const loginModal = (state = initialize, action) => {
    switch(action.type) {
        case OPEN:
            state = true;
            return state;
        case CLOSE:
            state = false;
            return state;
        default:
            return state;
    }
};