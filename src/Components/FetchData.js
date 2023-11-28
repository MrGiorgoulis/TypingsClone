import React, {useEffect} from 'react'





function FetchData() {

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
        return res.json()
    })
    .then(data => {
        console.log(data)
    })


    return (
        <div>

        </div>
    )
}

export default FetchData