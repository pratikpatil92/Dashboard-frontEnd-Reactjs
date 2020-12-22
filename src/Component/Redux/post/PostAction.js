import axios from 'axios';

export const addPost = (data)=>{
    const fd = new FormData()
    fd.append("title", data.title);
    fd.append("body", data.body);
    fd.append("image", data.image);
    fd.append("categoryId", data.categoryId);

    return(dispatch)=>{
        axios.post("http://127.0.0.1:8000/api/post/", fd)
        .then(res=>{
            console.log("post creat",res.data)
            if(res.status==200){
                dispatch(addPostSuccess(res.msg))
            }else{
                dispatch(addPostFailure(res.msg))
            }
        }).catch(err=>{
            console.log("addpost err",err)
            dispatch(addPostFailure(err))
        })
    }
}

export const addPostSuccess=(msg)=>{
    return{
        type:"ADD_POST_SUCCESS",
        payload:msg
    }
}

export const addPostFailure=(msg)=>{
    return{
        type:"ADD_POST_FAILURE",
        payload:msg
    }
}