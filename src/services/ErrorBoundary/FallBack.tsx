import React from 'react'
// import MainButton from '../buttons/MainButton'

import './ErrorBoundary.scss'

import styled from 'styled-components'

export const Fallback = () => {
  const handleButtonClick = () => {
    window.location.href = '/proposals'
  }

  return (
    <Wrapper>
      <div className={'fallback-body'}>
        <h2 className={'fallback-title'}>
          Oops, something went wrong, please try to reload or go to{' '}
          {/* <MainButton className={'fallback-home-button'} title={'home page'} onClick={handleButtonClick} /> */}
        </h2>
        <div className='gears'>
          <div className='gear one'>
            <div className='bar' />
            <div className='bar' />
            <div className='bar' />
          </div>
          <div className='gear two'>
            <div className='bar' />
            <div className='bar' />
            <div className='bar' />
          </div>
          <div className='gear three'>
            <div className='bar' />
            <div className='bar' />
            <div className='bar' />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .fallback-body {
    position: absolute;
    width: 100vw;
    height: 100vh;
    //background: #4285f4 !important;
    background: #fff !important;
    overflow: hidden;
  }

  .fallback-title {
    margin: 100px auto !important;
    font-family: 'Poppins', Verdana, sans-serif;
    font-size: 1.5rem;
    line-height: 2.5rem;
    font-weight: 500;
    text-align: center;
    //color: #fff !important;
    color: #4285f4 !important;
  }

  .gears {
    position: relative;
    margin: 0 auto;
    width: auto;
    height: 0;
  }

  .gear {
    position: relative;
    z-index: 0;
    width: 120px;
    height: 120px;
    margin: 0 auto;
    border-radius: 50%;
    background: #fff !important;
    //background: #4285f4 !important;
  }

  .gear:before {
    position: absolute;
    left: 5px;
    top: 5px;
    right: 5px;
    bottom: 5px;
    z-index: 2;
    content: '';
    border-radius: 50%;
    //background: #4285f4 !important;
    background: #fff !important;
    //border: 5px solid #4285f4 !important;
  }

  .gear:after {
    position: absolute;
    left: 25px;
    top: 25px;
    z-index: 3;
    content: '';
    width: 70px;
    height: 70px;
    border-radius: 50%;
    //border: 5px solid #fff !important;
    border: 5px solid #4285f4 !important;
    box-sizing: border-box;
    //background: #4285f4 !important;
    //background: #fff !important;
  }

  .gear.one {
    left: -130px;
    background: #4285f4 !important;
  }

  .gear.two {
    top: -75px;
    background: #4285f4 !important;
  }

  .gear.three {
    top: -235px;
    left: 130px;
    background: #4285f4 !important;
  }

  .gear .bar {
    position: absolute;
    left: -15px;
    top: 50%;
    z-index: 0;
    width: 150px;
    height: 30px;
    margin-top: -15px;
    border-radius: 5px;
    background: #fff !important;
    //background: #4285f4 !important;
    border: 6px solid #4285f4 !important;
  }

  .gear .bar:before {
    position: absolute;
    left: 5px;
    top: 5px;
    right: 5px;
    bottom: 5px;
    z-index: 1;
    content: '';
    border-radius: 2px;
    //background: #4285f4 !important;
    //background: #fff !important;
  }

  .gear .bar:nth-child(2) {
    transform: rotate(60deg);
    -webkit-transform: rotate(60deg);
  }

  .gear .bar:nth-child(3) {
    transform: rotate(120deg);
    -webkit-transform: rotate(120deg);
  }

  @-webkit-keyframes clockwise {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @-webkit-keyframes anticlockwise {
    0% {
      -webkit-transform: rotate(360deg);
    }
    100% {
      -webkit-transform: rotate(0deg);
    }
  }

  @-webkit-keyframes clockwiseError {
    0% {
      -webkit-transform: rotate(0deg);
    }
    20% {
      -webkit-transform: rotate(30deg);
    }
    40% {
      -webkit-transform: rotate(25deg);
    }
    60% {
      -webkit-transform: rotate(30deg);
    }
    100% {
      -webkit-transform: rotate(0deg);
    }
  }

  @-webkit-keyframes anticlockwiseErrorStop {
    0% {
      -webkit-transform: rotate(0deg);
    }
    20% {
      -webkit-transform: rotate(-30deg);
    }
    60% {
      -webkit-transform: rotate(-30deg);
    }
    100% {
      -webkit-transform: rotate(0deg);
    }
  }

  @-webkit-keyframes anticlockwiseError {
    0% {
      -webkit-transform: rotate(0deg);
    }
    20% {
      -webkit-transform: rotate(-30deg);
    }
    40% {
      -webkit-transform: rotate(-25deg);
    }
    60% {
      -webkit-transform: rotate(-30deg);
    }
    100% {
      -webkit-transform: rotate(0deg);
    }
  }

  .gear.one {
    -webkit-animation: anticlockwiseErrorStop 2s linear infinite;
  }

  .gear.two {
    -webkit-animation: anticlockwiseError 2s linear infinite;
  }

  .gear.three {
    -webkit-animation: clockwiseError 2s linear infinite;
  }

  .loading .gear.one,
  .loading .gear.three {
    -webkit-animation: clockwise 3s linear infinite;
  }

  .loading .gear.two {
    -webkit-animation: anticlockwise 3s linear infinite;
  }

  .fallback-home-button {
    display: inline-block;
    border: 1px solid;
    font-size: 16px;
    background: #fff !important;
    background: #4285f4 !important;
    color: #4285f4 !important;
    color: #fff !important;
  }
`
