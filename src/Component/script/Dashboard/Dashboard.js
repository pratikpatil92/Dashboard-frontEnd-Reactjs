import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCog, faPlus} from '@fortawesome/free-solid-svg-icons';
import {Link, withRouter} from 'react-router-dom';


export default class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render() {
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
                <div className="py-4 mb-4 bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <Link className="btn btn-primary btn-block" to="/add-category"><FontAwesomeIcon icon={faPlus} ></FontAwesomeIcon>Add Category</Link>
                            </div>
                            <div className="col-md-6">
                                <Link className="btn btn-success btn-block" to="/add-post"><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>Add Post</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
