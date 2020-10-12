import React from 'react'
import TeachersInput from '../components/TeachersInput'
import Teachers from '../components/Teachers'

// class component because of state and componnet did mounts

class TeachersContainer extends React.Component {



    render() {

        return(
            <div>
                <TeachersInput/>
                <Teachers teachers={this.props.university && this.props.university.teachers}/>
            </div>
        )
    }
}


export default TeachersContainer