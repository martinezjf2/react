export function fetchUniversities() {

    fetch('http://localhost:3000/universities')
        .then(resp => resp.json()
        .then(university => console.log(university)))

        

}

