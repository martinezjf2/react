

import React, {Component} from 'react';
import Universities from '../components/Universities';
import UniversityInput from '../components/UniversityInput';
import {connect} from 'react-redux';
import {fetchUniversities} from '../actions/fetchUniversities';
import {Route, Switch} from 'react-router-dom';
import University from "../components/University";
import Searchbar from '../components/Searchbar'

class UniversityContainer extends Component {
    constructor(){
        super();
        this.state = {
            universitiesArray: [],
            searchfield: ''
        }
    }
    
    onSearchChange = (e) => {
        this.setState({
            universitiesArray: this.props.universities,
            searchfield: e.target.value 
        })
    }
    componentDidMount() {
    this.props.fetchUniversities()
    console.log(this.props.universities)

}
    render() {
        // console.log(this.props.universities)
        const filteredUniversities = this.props.universities.filter((university) => {
            return university.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div>

                <Switch>
                <Route path="/universities/new" component={UniversityInput} />
                <Route path="/universities/:id" render={(routerProps) => <University {...routerProps} universities={this.props.universities}/>}  />

                <Route exact path="/universities"  render={(routerProps) => <Universities {...routerProps} universities={filteredUniversities} onSearchChange={this.onSearchChange}/>} />
                {/* // <Universities universities={this.props.universities}/> */}

                </Switch>

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