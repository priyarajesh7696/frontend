import React from 'react'

function Socialmedia() {
  return (
    <div className='social p-2 text-center'>
    <h1 className='link-success'>Welcome to DBCC Family</h1>
    <iframe
        width="1200"
        height="400"
       src="https://www.youtube.com/embed/jhtnYjRCIpY?autoplay=1&mute=1"
         title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
  </div>
  )
}

export default Socialmedia