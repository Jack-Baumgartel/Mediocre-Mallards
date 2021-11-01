import React, { useState } from 'react'

const Nav = () => {

  const [showMobile, setShowMobile] = useState(false)

  let links = [
    "Stats",
    "Merch",
    "Meet the Mallards",
    "Mint",
    "FAQ"
  ]

  return <nav className="">
    <div className="max-w-6xl mx-center px-15 py-2 font-gloria text-1xl">
      <div className="flex justify-between">
        <div className="flex space-x-2">
          <div>
            {/* <!-- Website Logo --> */}
            {/* eslint-disable-next-line */}
            <a href="#" className="flex items-center py-4 px-2">
            <img src="https://ipfs.io/ipfs/QmWZS8FbBYj95nyLFfaKJiu8yQkXNYnch1A62BrQLpAHe5"></img>
            </a>
          </div>
          {/* <!-- Primary Navbar items --> */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map(key => {
              return <a key={key} href={`#${key}`} className="py-4 px-3 text-black  font-semibold">{key}</a>
            })}
          </div>
        </div>
        {/* <!-- Secondary Navbar items --> */}
        {/* <!-- Mobile menu button --> */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setShowMobile(!showMobile)} className="outline-none mobile-menu-button">
            <svg className=" w-6 h-6 text-black"
              x-show="!showMenu"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    {/* <!-- mobile menu --> */}

    {showMobile && <div className="mobile-menu color-black">
      <ul className="">
        {links.map(key => {
          return <li><a key={key} href={`#${key}`} className="block text-2xl px-2 py-4 text-black font-gloria">{key}</a></li>
        })}

      </ul>
    </div>}
  </nav>
}

export default Nav