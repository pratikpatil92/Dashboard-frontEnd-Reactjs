import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPencilAlt} from '@fortawesome/free-solid-svg-icons';
import {onFetchCategory} from './../../../Redux/category/CategoryAction';
import {addPost} from './../../../Redux/post/PostAction';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom';
import { Spinner } from 'reactstrap';

class AddPost extends Component {
    constructor(props){
        super(props);
        this.state = {
            title:"",
            body:"",
            categoryId:"",
            image:"",
        }
    }
    componentDidMount = ()=>{
        this.props.onFetchCategory();
    }

    onHandleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    onFileChange = (e)=>{
        // console.log(e.target.files[0])
        this.setState({image:e.target.files[0]});
    }

    onSubmit=()=>{
        const obj={
            title:this.state.title,
            body:this.state.body,
            categoryId:this.state.categoryId,
            image:this.state.categoryId,
        }
        this.props.addPost(obj);
    }

    render() {
        const {title, body, categoryId, image}=this.state;
        const category=this.props.categories;
        console.log("cate",category);
        if(category.data_state=="NOT_INITIALIZED" || category.data_state=="FETCHING"){
            return (
                <div>
                     <Spinner color="primary" />
                </div>
            )
        }
        else if(category.data_state=="FETCHED_SUCCESS"){
        return (
            <div>
                <div className="py-2 bg-primary text-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                            <h1>
                            <FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon> Post</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <div className="card m-2">
                                <div className="card-header">
                                    <h4>Add Post</h4>
                                </div>
                                <div className="card-body">
                                    {/* {success_msg?<h8 className="text-success">{success_msg}</h8>:null}*/}
                                    {/* {error_msg?<h8 className="text-danger">{error_msg}</h8>:null}  */}
                                    <div className="form-group">
                                        <label>Title</label>
                                        <input type="text" className="form-control" name="title" value={title} onChange={this.onHandleChange}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Category Name</label>
                                        <select className="form-control" name="categoryId" value={categoryId} onChange={this.onHandleChange}>
                                        {category.category.map((el,index)=>(
                                                <option key={el.id} value={el.id}>{el.categoryName}</option>
                                        ))}
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label htmlFor="image">Upload Image</label>
                                        <div className="custom-file">
                                            <input type="file" className="custom-file-input" id="image" name="image" onChange={this.onFileChange}></input>
                                            <label for="image" className="custom-file-label">Choose File</label>
                                        </div>
                                        <small className="form-text text-muted">Max Size 3mb</small>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label>Body</label>
                                        <textarea name="editor1" className="form-control" name="body" value={body} onChange={this.onHandleChange}></textarea>
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
        )}else{
            <h1>No category data found please add category</h1>
        }
    }
}

const mapStateToProps=state=>({
    categories:state.categories,
    post:state.post,
});

export default  connect (mapStateToProps,{onFetchCategory, addPost})(withRouter(AddPost));
