const initialState={
    user:{},
    error_msg:null,
    success_msg:null,
    isLoggedIn:false,
}

const authReducer=(state=initialState, action)=>{
    switch(action.type){
        case "ON_REGISTER_SUCCESS":
            return {
                ...state,
                success_msg:action.payload,
                error_msg:null,
            }
        case "ON_REGISTER_FAILURE":
            return {
                ...state,
                error_msg:action.payload,
                success_msg:null,
            }
        case "ON_LOGIN_SUCCESS":
            return{
                ...state,
                isLoggedIn:true,
            }
        case "ON_LOGIN_FAILURE":
            return{
                ...state,
                error_msg:action.payload,
            }    
        default:
            return{
                ...state
            } 
        }
}

export default authReducer;