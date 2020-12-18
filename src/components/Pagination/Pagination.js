import React from 'react'
import './Pagination.css'

export default function Pagination({gotoNextPage, gotoPrevPage}) {
    return (
        <>
            <div className = "pagination">
                {gotoPrevPage && <button className = "pagination-btn" onClick = {gotoPrevPage}>Prev</button> }
                {gotoNextPage && <button className = "pagination-btn" onClick = {gotoNextPage}>Next</button> }
            </div>
        </>
    )
}
