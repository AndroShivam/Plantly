import React from 'react'
import './PlantList.css'

const PlantList = ({plant}) => {
    return(
        <>
            <section className = "info">
                <div className = "info-container">
                        {plant.map(p => (
                            <div key = {p.slug} className = "card">
                                <img src = {p.image_url} alt = "image" />
                                <div className = "text-container">
                                    <h1 className = "card-title">{p.common_name}</h1>
                                    <small className = "card-desc"><span>Scientific Name : </span>{p.scientific_name}</small>
                                    <small className = "card-desc"><span>Year : </span>{p.year}</small>
                                    <small className = "card-desc"><span>Family : </span>{p.family}</small>
                                </div>
                            </div>
                        ))}
                </div>
            </section>
        </>
    )
}

export default PlantList