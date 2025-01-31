import { DDECREMENT, DINCREMRNT } from './actionTypeds';

const initialState = {
    value: 0,
};
const dynamicCounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case DINCREMRNT:
            return {
                ...state,
                value: state.value + action.payload,
            };
        case DDECREMENT:
            return {
                ...state,
                value: state.value - action.payload,
            };
        default:
            return state;
    }
};

export default dynamicCounterReducer;
