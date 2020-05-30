import PropTypes from 'prop-types'
import React from 'react'

import { css } from 'styled-components'

class DragScoll extends React.Component {
  state = {
    left: 0,
  }

  slider = React.createRef()

  onMouseDown = e => {
    e.persist()
    this.isDown = true

    this.startX = e.pageX - this.slider.current.offsetLeft
    this.scrollLeft = this.slider.current.scrollLeft
    this.slider.current.style.cursor = 'grabbing'
    // console.log(
    //   e.pageX - this.slider.current.offsetLeft,
    //   this.slider.current.scrollLeft
    // );
  }

  onMouseLeave = () => {
    this.isDown = false
  }

  onMouseUp = () => {
    this.isDown = false
    this.slider.current.style.cursor = 'pointer'
  }

  onMouseMove = e => {
    if (!this.isDown) {
      return
    }

    e.preventDefault()
    const x = e.pageX - this.slider.current.offsetLeft
    const walk = (this.startX - x) / 20
    const z = this.slider.current.scrollLeft - walk
    const { left } = this.state

    this.setState(
      prevState => ({ left: prevState.left + z }),
      () => {
        this.slider.current.scrollLeft = left
      },
    )
  }

  goLeftPercent = () => ({
    transform: `translatex(${this.p}px)`,
    transition: '0.3s',
  })

  mouseMove = () => {
    const { left } = this.state
    if (left > 0) {
      this.setState({ left: 0 })
    } else if (left < -1040) {
      this.setState({ left: -1040 })
    } else {
      return {
        transform: `translatex(${left}px)`,
      }
    }
    return null
  }

  render() {
    const { children } = this.props
    return (
      <div className="slider" style={{ overflowX: 'scroll' }}>
        <div className="slider-wrapper">
          <div
            onMouseDown={this.onMouseDown}
            style={this.mouseMove()}
            onMouseUp={this.onMouseUp}
            onMouseLeave={this.onMouseLeave}
            onMouseMove={this.onMouseMove}
            ref={this.slider}
            role="button"
            tabIndex={0}
            className="slider-container test"
            css={css`
              display: flex;
              width: 120%;
              margin-top: 4rem;
              overflow: hidden;
              outline: none;
              div {
                margin-right: 4rem;
              }
            `}
          >
            {children}
          </div>
        </div>
      </div>
    )
  }
}

DragScoll.propTypes = {
  children: PropTypes.shape().isRequired,
}
export default DragScoll
