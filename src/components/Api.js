import React, {useState, useEffect} from 'react'
import axios from 'axios'
import PlantList from './PlantList/PlantList';
import Pagination from './Pagination';



const Api = () =>  {
    
    const ACCESS_TOKEN = "AJUcraEaYxH-sVl2C6wbHGi0GVj6P9Cuf0DDCb3IDp8"

    const [plant, setPlant] = useState([])
    const [loading, setLoading] = useState(true)
    const [currentPageURL, setCurrentPageURL] = useState(`https://trefle.io/api/v1/plants?token=${ACCESS_TOKEN}`)
    const [nextPageURL, setNextPageURL] = useState()
    const [prevPageURL, setPrevPageURL] = useState()

    useEffect(() => {
        setLoading(true)
        let cancel
        axios.get(currentPageURL, {
            cancelToken: new axios.CancelToken(c => cancel = c)
        })
        .then(response => {
            setLoading(false)
            setPlant(response.data.data)
            setNextPageURL(`https://trefle.io${response.data.links.next}&token=${ACCESS_TOKEN}`)
            setPrevPageURL(`https://trefle.io${response.data.links.prev}&token=${ACCESS_TOKEN}`)
        })
        .catch(error => {
            console.log(error)
        })

        return () => cancel()
    },[currentPageURL])  


    if(loading){
        return <div style = {{display: "flex", justifyContent: "center", alignItems: "center",height: "100vh"}}>Loading...</div>
    }

    function gotoNextPage(){
        setCurrentPageURL(nextPageURL)
    }

    function gotoPrevPage() {
        setCurrentPageURL(prevPageURL)
    }

    return (
        <> 
             <PlantList plant = {plant} />
             <Pagination
              gotoNextPage = {nextPageURL ? gotoNextPage : null} 
              gotoPrevPage = {prevPageURL ? gotoPrevPage : null}/>
        </>
    )
}

export default Api
