import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFolder, faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';
import {onFetchCategory} from './../../../Redux/category/CategoryAction';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import { Spinner } from 'reactstrap';

class ViewCategory extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.onFetchCategory()
    }


    render() {
        console.log(this.props);
        const category=this.props.categories;
        if(category.data_state=="NOT_INITIALIZED" || category.data_state=="FETCHING"){
            return (
                <div>
                     <Spinner color="primary" />
                </div>
            )
        }
        else if(category.data_state=="FETCHED_SUCCESS"){
            if(category.category.length>0){
                return (
                    <div>
                        <div className="py-2 bg-success text-white">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                    <h1>
                                    <FontAwesomeIcon icon={faFolder}></FontAwesomeIcon> Category</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container mt-5">
                            <div className="row">
                                <div className="col">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4>All Category</h4>
                                        </div>
                                        <table className="table table-striped">
                                            <thead className="thead-dark">
                                                <tr>
                                                    <th>S. Name</th>
                                                    <th>Category Name</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody className="p-2">
                                                {category.category.map((el,index)=>(
                                                    <tr cl>
                                                        <td>{index+1}</td>
                                                        <td>{el.categoryName}</td>
                                                        <Link className="btn btn-success btn-sm m-2" to={`edit-category/${el.id}`}><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon> Edit</Link>
                                                        <button className="btn btn-danger btn-sm m-2" ><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> Delete</button>
                                                        
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}else{
                    return(
                    <h1>No Data Found , Please Add First</h1>
                    )
                }}

    }
}
const mapStateToProps=state=>({
    categories:state.categories
})

export default connect(mapStateToProps,{onFetchCategory})(withRouter(ViewCategory));