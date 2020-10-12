import React, { Component } from "react";
import {connect} from 'react-redux';
import { addTeacher } from "../actions/addTeacher";

class TeachersInput extends Component {
    state ={
        name: '',
        degree: '',
        phone_number: '',
        email: ''
    }


    handleChange = (event) => {
        this.setState ({
            [event.target.name]: event.target.value,
            [event.target.degree]: event.target.value,
            [event.target.phone_number]: event.target.value,
            [event.target.email]: event.target.value
        })

    }

    handleSubmit = (event) => {
        event.preventDefault()
        // addTeacher(this.state, this.props.is)

    }

render() {

    return (

        <div>
           <form onSubmit={this.handleSubmit}>
                <label>Name: </label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} /><br/><br/>
                {/* can make degrees as options with what i have by iterating through */}
                <label>Degree: </label>
                <input type="text" name="degree" value={this.state.degree} onChange={this.handleChange} /><br/><br/>
                <label>Phone Number: </label>
                <input type="text" name="phone_number" value={this.state.phone_number} onChange={this.handleChange} /><br/><br/>
                <label>Email: </label>
                <input type="text" name="email" value={this.state.email} onChange={this.handleChange}  /><br/><br/>
                <input type="submit" /> <br/>
           </form>
           <br/>
           
        </div>
    )
}






}

export default connect(null)(TeachersInput)



    // t.string "name"
    // t.string "degree"
    // t.integer "university_id"
    // t.string "phone_number"
    // t.string "email"