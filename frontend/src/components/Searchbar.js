import React from 'react'

class Searchbar extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <label>Search: </label>
                <input type="text"  
                name="search"
                // value={}
                onChange={this.props.onSearchChange}
                /> <br/> <br/>
               
            </div>
        )

    }
   
    }

        
     


export default Searchbar