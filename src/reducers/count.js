import { INCREMENT, DECREMENT } from '../actions'

const initialState = { number: 0 }

export default (counter = initialState, actions) => {
    switch (actions.type) {
        case INCREMENT:
            return { number: counter.number + 1 }
        case DECREMENT:
            return { number: counter.number - 1 }
        default:
            return counter
    }
}