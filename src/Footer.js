import React from 'react'

const Footer = ({totalNoItems}) => {
    return (
        <footer>
            <p>{totalNoItems} List {totalNoItems === 1? "item" : "items"}</p>
        </footer>
    )
}

export default Footer
