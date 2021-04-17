import PropTypes from "prop-types"
import React from "react"

const Blob = ({ ...props }) => {

  return (
    <div className="blob-container">
        <svg className="blob-container__blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FA4D56" d="M47.7,-58.4C62.4,-44.5,75.5,-30,77.5,-14.3C79.6,1.5,70.8,18.6,59.4,30.4C48,42.2,34,48.6,19.2,54.8C4.5,61,-11.1,67.1,-23.8,63.3C-36.6,59.6,-46.5,46.1,-48.7,32.8C-50.8,19.4,-45.2,6.2,-40.9,-5.3C-36.5,-16.8,-33.5,-26.6,-26.9,-42C-20.4,-57.4,-10.2,-78.5,3.1,-82.2C16.5,-86,32.9,-72.4,47.7,-58.4Z" transform="translate(100 100)" />
        </svg>
    </div>
  )
}

export default Blob
