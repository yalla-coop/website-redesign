import React from 'react'
import PropTypes from 'prop-types'

const SVG = ({ width, height, viewBox, fill, className }) => (
  <div className={className}>
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.7844 0.510441C13.4258 0.862004 13.4258 1.4456 13.7773 1.80419L18.0453 6.08622L1.78203 6.08622C1.28281 6.08622 0.875 6.49404 0.875 7.00029C0.875 7.50654 1.28281 7.91435 1.78203 7.91435L18.0453 7.91435L13.7703 12.1964C13.4188 12.555 13.4258 13.1315 13.7773 13.4901C14.1359 13.8417 14.7055 13.8417 15.0641 13.4831L20.8578 7.64716C20.9352 7.56278 20.9984 7.47138 21.0477 7.35888C21.0969 7.24638 21.118 7.12685 21.118 7.00732C21.118 6.76825 21.0266 6.54325 20.8578 6.36747L15.0641 0.531535C14.7195 0.165909 14.143 0.158879 13.7844 0.510441Z"
        fill="white"
      />
    </svg>
  </div>
)

SVG.propTypes = {
  fill: PropTypes.string,
  height: PropTypes.number,
  viewBox: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.number,
}

SVG.defaultProps = {
  width: 21,
  height: 14,
  viewBox: '0 0 22 14',
  fill: 'none',
  className: '',
}

export default SVG
