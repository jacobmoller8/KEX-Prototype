import { ORDER_BY_NAME, ORDER_BY_EAN, ORDER_BY_DATE } from '../Actions/sortListActions';

export default function sortListReducer(state = {}, { type, payload }) {
    switch (type) {
        case ORDER_BY_NAME:
            return payload 
        case ORDER_BY_EAN:
            return payload
        case ORDER_BY_DATE:
            return payload
        default:
            return state;
    }
}