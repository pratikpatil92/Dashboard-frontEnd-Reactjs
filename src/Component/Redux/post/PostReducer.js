const initialState={
    post:{},
    error_msg:null,
    success_msg:null,
    data_state:"NOT_INITIALIZED"
}

const postReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_POST_SUCCESS":
            return{
                ...state,
                success_msg:action.payload,
            }
        case "ADD_POST_FAILURE":
            return{
                ...state,
                error_msg:action.payload,
            }    
        default:
            return{
                ...state,
            }    
    }
}

export default postReducer;