import React, { Component } from 'react';
import {onLogin} from './../Redux/auth/AuthAction';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'


class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:"",
            password:"",
            error:"",
        }
    }

    onHandleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }

    onSubmit = ()=>{
        // console.log(this.state)
        
        const {username,password}=this.state;
        console.log(this.state)
        if(username==""){
            this.setState({error:"this field can not be empty"})    
        }
        else if(password==""){
            this.setState({error:"this field can not be empty"})
        }
        else{
            const user = {username,password};
            this.props.onLogin(user,this.props.history);
            this.setState({username:"",password:"",error:""})
        }
        
    }

    render() {
        const {username,password}=this.state;
        const {error_msg}=this.props.auth;
        return (
            <div>
                <div className="py-2 bg-primary text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                        <h1>
                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> Dashborad</h1>
                        </div>
                    </div>
                </div>
                </div>
                <div className="py-4 mb-4 bg-light">
                <div className="container">
                    <div className="row">

                    </div>
                </div>
                </div>
                <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="card">
                            <div className="card-header">
                                <h4>Account Login</h4>
                            </div>
                            <div className="card-body">
                            {error_msg?<p className="text-danger">{error_msg}</p>:""}
                                <div className="form-group">
                                    <label>Username*</label>
                                    <input type="text" className="form-control" name="username" value={username} onChange={this.onHandleChange}></input>
                                    <span className="text-danger">{this.state.error}</span>
                                </div>
                                

                                <div className="form-group">
                                    <label>Password*</label>
                                    <input type="password" className="form-control" name="password" value={password} onChange={this.onHandleChange}></input>
                                    <span className="text-danger">{this.state.error}</span>
                                    
                                </div>
                                <div className="text-center">
                                    <button className="btn btn-primary btn-block" onClick={this.onSubmit}>Login</button>
                                    <p>Not Registered <Link to="/register">Click</Link> To Register</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state)=>({
    auth:state.auth,
});

export default connect(mapStateToProps,{onLogin})(withRouter(Login))
