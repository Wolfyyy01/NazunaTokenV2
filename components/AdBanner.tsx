
import React from 'react'

export default function AdBanner() {
  return (
    <div id="frame" className="w-full relative z-[99998] py-8">
      <iframe
        {...{ "data-aa": "2425172" }}
        src="//acceptable.a-ads.com/2425172/?size=Adaptive&background_color=5b226a"
        style={{
          border: 0,
          padding: 0,
          width: '70%',
          height: '90px', // Set explicit height for adaptive banner usually around 90px or more
          overflow: 'hidden',
          display: 'block',
          margin: 'auto'
        }}
        title="Advertisement"
      ></iframe>
    </div>
  )
}
