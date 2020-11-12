import React, { Component } from "react";
import {connect} from 'react-redux';
import {addUniversity} from '../actions/addUniversity'
import {Link} from 'react-router-dom'

// controlled form to control the values, because of local state holding the values
// controllerd form

class UniversityInput extends Component {
    
    state = {

        name: '',
        state: '',
        zip: ''
    }
    handleChange = (event) => {
        this.setState({
            // without brackets since we are inside the object, this give a key on just event .targetname, cant have a key with periods in it, brackets first read the value associated and then sets it as the key
            [event.target.name]: event.target.value,
            [event.target.state]: event.target.value,
            [event.target.zip]: event.target.value
        })
    }

    handleSubmit = (event) => { 
        event.preventDefault();
        this.props.addUniversity(this.state)
        // setState is asynchronous
        this.setState({
            name: '',
            state: '',
            zip: ''
        })
        // this.resetForm()
       

    }

    // resetForm = (event) => {
    //     event.preventDefault()
    //     event.target.reset()
    // }

    

    render() {
        return (
            <div>
            <form className="universityForm" onSubmit={this.handleSubmit}>
                <label>University Name:</label>
                <input type="text" placeholder="University Name" name="name" value={this.state.name} onChange={this.handleChange}/><br/><br/>
                <label>State:</label>
                <input type="text" placeholder="State" name="state" value={this.state.state} onChange={this.handleChange}/><br/><br/>
                <label>ZipCode;</label>
                <input type="text" placeholder="ZipCode" name="zip" value={this.state.zip} onChange={this.handleChange}/><br/><br/>
                <input type="submit"/>

                <br/><br/>

        <Link to={'/universities'}><button>Click Here For Home</button></Link>

                
            </form>
            </div>
        )
    }

}

export default connect(null, {addUniversity})(UniversityInput)
// two arguments that we can pass to connect, mapStateToProps, or dispatchStateToProps
// it does not need access to the redux store, 
// this form resposibility is to creating dat that we can send it to the backend and updating the store

