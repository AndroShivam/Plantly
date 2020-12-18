import React, {useState, useEffect} from 'react'
import axios from 'axios'
import PlantList from './PlantList/PlantList';
import Pagination from './Pagination/Pagination';
import './Api.css'



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

            if(response.data.links.prev != undefined)
                setPrevPageURL(`https://trefle.io${response.data.links.prev}&token=${ACCESS_TOKEN}`)
            else
                setPrevPageURL(null)
                
            console.log(response.data.links.prev)
            console.log(nextPageURL)
            console.log(prevPageURL)
        })
        .catch(error => {
            console.log(error)
        })

        return () => cancel()
    },[currentPageURL])  


    if(loading){
        return <img className = "loading-gif" src = "https://cdn.dribbble.com/users/241278/screenshots/2438365/color-fill.gif" />
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
