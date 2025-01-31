import { DDECREMENT, DINCREMRNT } from './actionTypeds';

export const dincrement = (value) => {
    return {
        type: DINCREMRNT,
        payload: value,
    };
};

export const ddecrement = (value) => {
    return {
        type: DDECREMENT,
        payload: value,
    };
};
