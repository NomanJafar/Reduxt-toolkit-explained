import React  from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { IncrementAction,decrementAction } from '../Features/CounterFeatures/CounterAction'


const Counter = () => {

    
    // equivalent of mapStatetoProps of connect rapper
    const count = useSelector((state)=>state.counter.count)
    console.log(count);
     // equivalent of mapdispatchtoProps of connect rapper
    const dispatch = useDispatch()

    const incrementClick = () => {
        dispatch(IncrementAction(count));

        
    }
    const decrementClick = () => {
        dispatch(decrementAction(count));
    }



    return (
        <div className="card text-center">
            <div className="card-header">
            
            </div>
            <div className="card-body">
                <h5 className="card-title">{count}</h5>
                <p className="card-text"></p>
                <button className="btn btn-dark mx-2" onClick={incrementClick} > Increment</button>
                <button className="btn btn-dark" onClick={decrementClick}> Decrement</button>
            </div>
            <div className="card-footer text-muted">
               
            </div>
        </div>
    )
}

export default Counter