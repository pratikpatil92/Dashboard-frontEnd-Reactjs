import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCog, faPlus} from '@fortawesome/free-solid-svg-icons';
import {addCategory} from './../../../Redux/category/CategoryAction';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';


class AddCategory extends Component {
    constructor(props){
        super(props);
        this.state = {
            categoryName:""
        }
    }
    onHandleChange = (e)=>{
        this.setState(({[e.target.name]:e.target.value}));
    }

    onSubmit = ()=>{
        const obj = {
            categoryName:this.state.categoryName,
        }
        this.props.addCategory(obj,this.props.history)
        this.setState({categoryName:""})
    }
    render() {
        const {categoryName} = this.state;
        const {success_msg,error_msg}=this.props.categories;

        return (

            <div>
                <div className="py-2 bg-primary text-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                            <h1>
                            <FontAwesomeIcon icon={faCog}></FontAwesomeIcon> Dashborad</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <div className="card m-2">
                                <div className="card-header">
                                    <h4>Add Category</h4>
                                </div>
                                <div className="card-body">
                                    {success_msg?<h8 className="text-success">{success_msg}</h8>:null}
                                    {error_msg?<h8 className="text-danger">{error_msg}</h8>:null}
                                    <div className="form-group">
                                        <label>Category Name</label>
                                        <input className="form-control" type="text" name="categoryName" value={categoryName} onChange={this.onHandleChange}></input>
                                    </div>
                                    <div className="text-center">
                                        <button className="btn btn-primary btn-block" onClick={this.onSubmit}>Add</button>
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
    categories:state.categories
})

export default connect (mapStateToProps, {addCategory})(withRouter(AddCategory));
