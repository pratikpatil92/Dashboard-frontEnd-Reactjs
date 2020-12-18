import React, { Component } from 'react'
import {onUpdateCategory, getSingleCategory} from './../../../Redux/category/CategoryAction';
import {withRouter} from 'react-router-dom'; 
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {faCog, faPlus} from '@fortawesome/free-solid-svg-icons';


class EditCategory extends Component {
    constructor(props){
        super(props);
        this.state={id:"",categoryName:""};
        //console.log(props);
        const id=props.match.params.id;
        this.getSingleCategoryAction(id);
    }

    getSingleCategoryAction=async(id)=>{
        console.log("getsingle",this.props)
        const res=await this.props.getSingleCategory(id)
        if(res){
            this.setState({categoryName:res.categoryName, id:res.id})
        }
    }

    onHandleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    onSubmit=()=>{
        console.log("onsubmit",this.state);
        const obj={
            categoryName:this.state.categoryName,
            id:this.state.id,
        }
        const id = this.state.id;
        this.props.onUpdateCategory(id, obj, this.props.history);
    }

    render() {
        console.log(this.props)
        const {categoryName} = this.state;
        const {error_msg}=this.props.categories;

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
                                    <h4>Edit Category</h4>
                                </div>
                                <div className="card-body">
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

export default connect (mapStateToProps, {onUpdateCategory, getSingleCategory})(withRouter(EditCategory));