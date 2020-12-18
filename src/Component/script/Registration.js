import React, { Component } from 'react'
import {onRegister} from './../Redux/auth/AuthAction';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'

class Registration extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:"",
            first_name:"",
            last_name:"",
            email:"",
            password:"",
            error:"",

        }
    }

    onHandleChange = (e)=>{
        this.setState({[e.target.name]:e.target.value});
        console.log(this.state)
    }

    onSubmit = ()=>{
        // console.log(this.state)
        
        const {username,first_name,last_name,email,password}=this.state;
        if(username==""){
            this.setState({error:"this field can not be empty"})    
        }
        else if(first_name==""){
            this.setState({error:"this field can not be empty"})
        }
        else if(last_name==""){
            this.setState({error:"this field can not be empty"})
        }
        else if(email==""){
            this.setState({error:"this field can not be empty"})
        }
        else if(password==""){
            this.setState({error:"this field can not be empty"})
        }
        else{
            const user = {username,first_name,last_name,email,password};
            this.props.onRegister(user,this.props.history);
            this.setState({username:"",first_name:"",last_name:"",email:"",password:"",error:""})
        }
        
    }

    render() {
        const {username,first_name,last_name,email,password}=this.state;
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
                                <h4>Account Registration</h4>
                            </div>
                            <div className="card-body">
                            {error_msg?<p className="text-danger">{error_msg}</p>:""}
                                <div className="form-group">
                                    <label>Username*</label>
                                    <input type="text" className="form-control" name="username" value={username} onChange={this.onHandleChange}></input>
                                    <span className="text-danger">{this.state.error}</span>
                                </div>
                                
                                <div className="form-group">
                                    <label>First Name*</label>
                                    <input type="text" className="form-control" name="first_name" value={first_name} onChange={this.onHandleChange}></input>
                                    <span className="text-danger">{this.state.error}</span>
                                </div>
                                <div className="form-group">
                                    <label>Last Name*</label>
                                    <input type="text" className="form-control" name="last_name" value={last_name} onChange={this.onHandleChange}></input>
                                    <span className="text-danger">{this.state.error}</span>
                                </div>
                                
                                <div className="form-group">
                                    <label>Email*</label>
                                    <input type="text" className="form-control" name="email" value={email} onChange={this.onHandleChange}></input>
                                    <span className="text-danger">{this.state.error}</span>
                                </div>
                                <div className="form-group">
                                    <label>Password*</label>
                                    <input type="password" className="form-control" name="password" value={password} onChange={this.onHandleChange}></input>
                                    {this.state.error?<span className="text-danger">{this.state.error}</span>:<span className="text-muted">Must be 8-20 characters long</span>}
                                    
                                </div>
                                <div className="text-center">
                                    <button className="btn btn-primary btn-block" onClick={this.onSubmit}>Register</button>
                                    <p>Already Registered <Link to="/">Click</Link> To Login</p>
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
const mapStateToProps=state=>({
    auth:state.auth,
})

export default connect(mapStateToProps, {onRegister})(withRouter(Registration));
