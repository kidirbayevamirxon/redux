import {createStore} from "redux"

const initialState={
    counter:0,
    showCounter:true
}

const countReducer=(state=initialState, action)=>{
    if(action.type==="increment"){
        return {
            counter:state.counter+1,
            showCounter
            :state.showCounter
        }
    }
    if(action.type==="increment5"){
        return {
            counter:state.counter+action.val,
            showCounter:state.showCounter
        }
    }
    if(action.type==="decrement"){
        return {
            counter:state.counter-1,
            showCounter:state.showCounter
        }
    }
    if(action.type==="toggle"){
        return {
            counter:0,
            showCounter:!state.showCounter
        }
    }
    return state
}

const store=createStore(countReducer)

export default store