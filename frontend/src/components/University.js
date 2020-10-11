import React from 'react';

const University = (props) => {

    let university = props.universities[props.match.params.id - 1]
    // console.log(university)

    return (
        <div>
        {university ? <h2>{university.name}</h2>: null}
        {university ? <h3>{university.state}</h3> : null}
        {university ? <p>{university.zip}</p> : null}


            {/* <h2>{props.university.name}</h2>
            <h3>State: {props.university.state}</h3>
            <p>ZipCode:{props.university.zip}</p> */}

        </div>
    )

}

export default University;