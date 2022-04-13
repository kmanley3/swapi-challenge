const btn = document.querySelector('button')
const body = document.querySelector('body')

const btnClicked = event =>{
    console.log("Button clicked!")
    axios.get(`https://swapi.dev/api/planets/2`)
        .then(res => {
            const alderaanResidents = res.data.residents
            for(let i = 0; i < alderaanResidents.length; i++){
            //    console.log(alderaanResidents[i])
                axios.get(`${alderaanResidents[i]}`)
                    .then(res => {
                        const residentName = res.data.name
                        console.log(residentName)
                        // residentName.textContent = res.data.name
                        
                        const header = document.createElement('h2')
                        header.textContent = residentName
                        body.appendChild(header)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        })
        .catch(err => {
            console.log(err)
        })
}

btn.addEventListener('click', btnClicked)