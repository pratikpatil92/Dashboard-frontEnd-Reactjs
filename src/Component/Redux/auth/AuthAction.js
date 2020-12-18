import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from './../../utilities/setAuthToken'

export const onRegister = (user,history)=>{
    return(dispatch)=>{
        axios.post("http://127.0.0.1:8000/api/register/", user)
        .then(
            res=>{
                console.log(res)
                if (res.status==200){
                    console.log(res.data.message)
                    dispatch(onRegisterSuccess(res.data.message))
                    history.push("/")
                }else{
                    console.log("error ",res)
                    dispatch(onRegisterFailure(res.data.message))
                }
            }
        )
        .catch(err=>{
            const er = err.response.data
            const a = []
            for (const [key, value] of Object.entries(er)) {
                 a.push(`${key} :${value} `);
              }
            console.log(a)  
            // console.log(Object.keys(er)+" is wrong")
            dispatch(onRegisterFailure(a))
            
        })
    }

}

export const onLogin=(user, history)=>{
    return (dispatch)=>{
        axios.post("http://127.0.0.1:8000/api/auth/",user)
        .then((res)=>{
           console.log(res);
            if(res.status==200){

                const {token}=res.data;
                console.log(token);
                // const decoded=jwt_decode(access_token);
                // console.log("decoded",decoded)
                localStorage.setItem("user", token);
                setAuthToken(token);
                
                dispatch(onLoginSuccess());
                history.push('/dashboard');
            }else{
                console.log("er1",res.data.msg)
                dispatch(onLoginFailure(res.data.msg));
            }
        })
        .catch(err=>{
            console.log("er2",err);
            // dispatch(onLoginFailure(err));
        })
    }
}

export const onRegisterSuccess=(msg)=>{
    return {
        type:"ON_REGISTER_SUCCESS",
        payload:msg
    }
}
export const onRegisterFailure=(msg)=>{
    return {
        type:"ON_REGISTER_FAILURE",
        payload:msg
    }
}

export const onLoginSuccess=()=>{
    return {
        type:"ON_LOGIN_SUCCESS",
        // payload:user,
    }

}

export const onLoginFailure=(msg)=>{
    return {
        type:"ON_LOGIN_FAILURE",
        payload:msg,
    }
}