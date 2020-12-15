import React from 'react'
import './PlantList.css'

const PlantList = ({plant}) => {
    return(
        <>
            <section className = "info">
                <div className = "info-container">
                        {plant.map(p => (
                            <div key = {p.slug} className = "card">
                                <img className = "img" src = {p.image_url} alt = "image" />
                                <div className = "text-container">
                                    <h1 className = "card-title">{p.common_name}</h1>
                                    <p className = "card-desc"></p>
                                </div>
                            </div>
                        ))}
                </div>
            </section>
        </>
    )
}

export default PlantList