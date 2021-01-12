import React from 'react'
import ScarecrowImg from './Scarecrow.png'

function App() {
  return (
    <div className="grid grid-rows-layout items-center w-screen min-h-screen px-6 py-4 md:px-14 md:py-6">
      <div className="uppercase font-logo font-bold text-lg">404 Not Found</div>
      <div className="font-mono grid gap-10 md:gap-20 grid-cols-one-col md:grid-cols-two-cols my-20">
        <img src={ScarecrowImg} alt="scarecrow" />
        <div>
          <h1 className="font-bold text-5xl md:text-6xl max-w-xl leading-snug md:leading-normal mb-7">
            I have bad news for you
          </h1>
          <p className="font-normal max-w-xs mb-12">
            The page you are looking for might be removed or is temporarily
            unavailable
          </p>
          <button className="px-8 py-4 bg-gray-800 text-white text-xs uppercase">
            Back to Homepage
          </button>
        </div>
      </div>
      <div className="font-sans text-xs text-center">
        Tung Teng @ DevChallenges.io
      </div>
    </div>
  )
}

export default App
