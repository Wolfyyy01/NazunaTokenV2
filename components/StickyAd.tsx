"use client"

import React, { useState } from 'react'

export default function StickyAd() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div style={{ position: 'absolute', zIndex: 99999 }}>
      <div style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div style={{
          width: '15%',
          height: '100%',
          position: 'fixed',
          textAlign: 'center',
          fontSize: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          right: 0,
          minWidth: '100px',
          zIndex: 99999
        }}>
          <button
            onClick={() => setIsVisible(false)}
            style={{
              position: 'absolute',
              bottom: '24px',
              margin: '0 auto',
              right: 0,
              left: 0,
              maxWidth: '24px',
              borderRadius: '4px',
              background: 'rgba(248, 248, 249, 0.70)',
              padding: '4px',
              zIndex: 99999,
              cursor: 'pointer',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            aria-label="Close Ad"
          >
            <svg fill="#000000" height="16px" width="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 490">
              <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 " />
            </svg>
          </button>
          <div id="frame" style={{
            width: '100%',
            margin: 'auto',
            position: 'relative',
            zIndex: 99998,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <iframe
              {...{ "data-aa": "2425191" }}
              src="//acceptable.a-ads.com/2425191/?size=Adaptive&background_color=transparent"
              style={{
                border: 0,
                padding: 0,
                width: '70%',
                height: '70%',
                overflow: 'hidden',
                margin: '0 auto'
              }}
              title="Advertisement"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
