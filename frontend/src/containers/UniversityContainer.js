import React, {Component} from 'react';
import Universities from '../components/Universities';
import UniversityInput from '../components/UniversityInput'
import {connect} from 'react-redux';
import {fetchUniversities} from '../actions/fetchUniversities'


class UniversityContainer extends Component {

    componentDidMount() {
    this.props.fetchUniversities()

}
    render() {
        // console.log(this.props.universities)
        return (
            <div>
                <UniversityInput />
                <Universities universities={this.props.universities}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        universities: state.universities
    }
}

export default connect(mapStateToProps, {fetchUniversities})(UniversityContainer)

// my react frontend is still loading and i dont know why it does not load the page
// connect any component(child) of app access our redux store, to actually tell a component to update any data in the store, we have to use connect, to get the data dand update it we have to connect it