import React, {Component} from 'react';
import Universities from '../components/Universities';
import UniversityInput from '../components/UniversityInput'

export default class UniversityContainer extends Component {

    render() {
        return (
            <div>
                <UniversityInput />
                <Universities/>
            </div>
        )
    }
}