const INCREMENTCOUNT = "INCREMENTCOUNT";
const DECREMENTCOUNT = "DECREMENTCOUNT";

export const IncrementAction = (count) => {
    return (dispatch) => {
        dispatch({
            type: INCREMENTCOUNT,
            Payload: count
        })

    }

}


export const decrementAction = (count) => {
    return (dispatch) => {
        dispatch({
            type : DECREMENTCOUNT,
            Payload : count
        })

    }

}

