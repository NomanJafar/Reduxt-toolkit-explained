const INCREMENTCOUNT="INCREMENTCOUNT";
const DECREMENTCOUNT="DECREMENTCOUNT";

const initialState={
    count:0
}

const Reducer=(state=initialState, action)=>{

    switch (action.type) {
        case INCREMENTCOUNT: return {
            ...state,
            count:state.count+1
        }
            
            break;

            case DECREMENTCOUNT: return {
                ...state,
                count:state.count-1
            }
                
                break;
    
        default: return state
            break;
    }

}

export default Reducer