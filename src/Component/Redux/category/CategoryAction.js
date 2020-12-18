import axios from 'axios';

export const addCategory=(data, history)=>{
    return(dispatch)=>{
        axios.post("http://127.0.0.1:8000/api/add_category/",data)
        .then(
            res=>{
                // console.log(res)
                if(res.status==200){
                    dispatch(onAddSuccess(res.data.message))
                }else{
                    dispatch(onAddFaluire(res.data.error))
                }
            }
            
        ).catch(err=>{
            //  console.log(err)
             dispatch(onAddFaluire(err.data.error))   
        })

    }
}

export const onFetchCategory=()=>{
    return(dispatch)=>{
        axios.get("http://127.0.0.1:8000/api/get_category/")
        .then(res=>{
            if(res.status==200){
                // console.log(res)
                dispatch(OnFetchSuccess(res.data));
            

            }else{    
                dispatch(OnFetchFailure(res.data.msg));            }
        }).catch(err=>{
            // console.log(err)
            dispatch(OnFetchFailure(err))
        })
    }
}

export const getSingleCategory=(id)=>{
    return (dispatch)=>{
        return axios.get("http://127.0.0.1:8000/api/edit_category/"+id)
        .then(res=>{
            console.log("actionsingle",res);
            return res.data.data;
        })
        .catch(err=>{
            console.log(err);
            return false;
        })
    }
}

export const onUpdateCategory=(id,data,history)=>{
    //console.log(data);
    return (dispatch)=>{
        axios.put("http://127.0.0.1:8000/api/edit_category/"+id,data)
        .then(res=>{
            //console.log(res);
            if(res.status==200){
            dispatch(onUpdateSuccess(res.data.message));
            history.push("/view-category");
            }else{
                dispatch(onUpdateFailure(res.data));
            }
        })
        .catch(err=>{
            //console.log(err);
            dispatch(onUpdateFailure(err.response));
        })
}
}





const onAddSuccess=(msg)=>{
   return{
        type:"ADD_SUCCESS",
        payload:msg
}
}
const onAddFaluire=(msg)=>{
    return{
         type:"ADD_FAILUIRE",
         payload:msg
 }
 }

 const OnFetchSuccess=(res)=>{
     return{
        type:"ON_FETCH_SUCCESS",
        payload:res
     }
 }

 const OnFetchFailure=(msg)=>{
     return{
         type:"ON_FETCH_FAILURE",
         payload:msg
     }
 }
 export const onFetching=()=>{
    return{
        type:"ON_FETCHING"
    }
}

export const onUpdateSuccess=(msg)=>{
    return {
        type:"UPDATE_SUCCESS",
        payload:msg
    }
}

export const onUpdateFailure=(msg)=>{
    return {
        type:"UPDATE_FAILURE",
        payload:msg
    }
}