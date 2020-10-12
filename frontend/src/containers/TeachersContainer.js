import React from 'react'
import TeachersInput from '../components/TeachersInput'

// class component because of state and componnet did mounts

class TeachersContainer extends React.Component {



    render() {

        return(
            <div>
                <TeachersInput/>
            </div>
        )
    }
}


export default TeachersContainer