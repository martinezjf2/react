import React, { Component } from "react";
import {connect} from 'react-redux';

class TeachersInput extends Component {


render() {

    return (

        <div>
           <form>
                <label>Name: </label>
                <input type="text" /><br/><br/>
                {/* can make degrees as options with what i have by iterating through */}
                <label>Degree: </label>
                <input type="text" /><br/><br/>
                <label>Phone Number: </label>
                <input type="text" /><br/><br/>
                <label>Email: </label>
                <input type="text" /><br/><br/>
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