import React, { useEffect } from 'react'
import { FaTwitter, FaFacebook, FaDiscord } from 'react-icons/fa';
import Nav from './Nav';
import Mint from './Mint';
import WebFont from 'webfontloader';
import './App.css';
import nfts from './nfts.json'
import Fade from 'react-reveal/Fade';
import Reveal from './Reveal'



function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto', 'Rum Raisin', 'Gloria Hallelujah']
      }
    });
  }, []);


  let FAQ = [
    {
      step: "",
      title: "What's an NFT?",
      text: "An NFT is a digital good that is unique, authentic, and entirely yours! NFTs can take the form of images, videos, songs, animations, web domains, and much more. Mediocre Mallards come as a PNG image file, packed with fun attributes, personality traits, and even a birthday!"
    },
    {
      step: "02",
      title: "What makes Mediocre Mallards so special?",
      text: "Besides the stunning artwork, our Mallards have more charisma than any other NFT out there! We believe that each Mallard we create is worthy of love, and we want to make every single Mallard owner feel special as well. Additionally, we are are one of the few collections offering phyical merchandise! Check out the merch page for more info."
    },
    {
      step: "03",
      title: "Open Minting",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      step: "04",
      title: "Giveaways",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      step: "05",
      title: "Something Great",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
  ]

  return (

    <div className="App">
      <div className="bg-hero bg-cover">
        <div className="bg-opacity-100 pb-10">
          {/* eslint-disable-next-line */}
          <a name="Welcome" />
          <div className="containerr px-10 mx-auto w-full">
            <Nav />
            <div className="w-3/2 text-left select-none font-gloria text-6xl text-black"> Welcome to the flock </div>
            <div className="w-1/2 text-left select-none font-gloria text-3xl mt-5 text-black">A digital collection of 9,250 quirky, lovable, and totally unique ducks.<br /><br /><br /><br />
              <a href="#Mint" className="px-4 py-2 shadow-2xl drop-shadow-2xl border-2 border-gray-900 bg-yellow-500 rounded ml-1">Mint Now!</a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-booyah bg-cover font-roboto text-white">
      <a name="Stats" />
        <div className="bg-opacity-0 bg-gray-800 py-10">
          {/* eslint-disable-next-line */}
          <Reveal type={<Fade left />} className="container mx-10 mx-auto w-full">
            <div className="text-white font-gloria text-5xl">Project Stats</div>
            <div className="flex justify-center flex-row m-auto align-center text-white font-bold text-lg">
              <div className="w-96 bg-1 m-2 p-2 rounded">
                <img alt="NFT" className="shadow-lg mb-5 border border-black rounded max-w-full h-auto align-middle" src='https://ipfs.io/ipfs/QmSmWVQUGbMqYfbB2pD1vEgfBwtEkTn2n3MAh7CaGLEhog' />
                <p>15 Properties & 165 Attributes!</p>
              </div>
              <div className="w-96 bg-1 m-2 p-2 rounded">
                <img alt="NFT" className=" mb-5 rounded max-w-full h-auto align-middle" src='https://ipfs.io/ipfs/QmWCqD9V3xjanDrGcD46mNcS3zb8j8Xr1hfZmmGyM6GmTH' />
                <p>Names for every duck!</p>
              </div>
              <div className="w-96 bg-1 m-2 p-2 rounded">
                <img alt="NFT" className="shadow-lg mb-5 border border-black rounded max-w-full h-auto align-middle" src='https://ipfs.io/ipfs/QmTtSE6D48xWSrYkLh6PtyHa1mW6z5zkmJtBt877u5PVUf' />
                <p>Quirky Personalities!</p>
              </div>
            </div>
          </Reveal>


        </div>
      </div>
      {/* FAQ */}
      <div className="bg-faq_bg text-white">
        <div className="containerr mx-10 mx-auto w-full pt-2 pb-5">
          {/* eslint-disable-next-line */}
          <a name="FAQ" />
          {FAQ.map(goal => <Reveal key={goal.step} className="bg-black pt-10 flex">
            <div className="bg-gray-900 bg-opacity-80 z-0 w-5/6 m-auto rounded mt-10 text-white">
              <div className="mx-10 p-5 pb-0 flex">
                <div className="text-2xl text-bold text-mono">{goal.title}</div><br />
              </div>
              <div className="mx-10 p-5 flex">
                <div className="text-lg text-bold text-mono text-left">{goal.text}</div>
              </div>
            </div>
          </Reveal>)}
        </div>
      </div>


      {/* Mint */}
      <Mint/>


      {/* Tokens */}
      <div className="bg-faq_bg bg-cover">
        <div className="bg-opacity-40 bg-gray-800">
          {/* eslint-disable-next-line */}
          <a name="Meet the Mallards" />
          <Reveal type={<Fade left />} from={{ y: 1800 }} to={{ y: 0 }} className="containerr mx-10 mx-auto w-full">
            <div className="text-white font-gloria text-5xl p-4">Meet the Mallards!</div>
            <div className="flex justify-center flex-row m-auto text-white font-bold text-lg">
              {nfts.slice(0, 5).map(nft => <div key={nft.name} className="w-72 bg-1 m-2 p-2 rounded">
                {nft.name}
                <img alt="NFT" className="shadow-lg  border border-black rounded max-w-full h-auto align-middle" src={nft.image} />
              </div>)}
            </div>
          </Reveal>
          <Reveal type={<Fade left />} from={{ y: 1800 }} to={{ y: 0 }} className="containerr mx-10 mx-auto w-full">
            <div className="flex justify-center flex-row m-auto text-white font-bold text-lg">
              {nfts.slice(5, 10).map(nft => <div key={nft.name} className="w-72 bg-1 m-2 p-2 rounded">
                {nft.name}
                <img alt="NFT" className="shadow-lg  border border-black rounded max-w-full h-auto align-middle" src={nft.image} />
              </div>)}
            </div>
          </Reveal>
          <Reveal type={<Fade left />} from={{ y: 1800 }} to={{ y: 0 }} className="containerr mx-10 mx-auto w-full">
            <div className="flex justify-center flex-row m-auto text-white font-bold text-lg">
              {nfts.slice(10, 15).map(nft => <div key={nft.name} className="w-72 bg-1 m-2 p-2 rounded">
                {nft.name}
                <img alt="NFT" className="shadow-lg  border border-black rounded max-w-full h-auto align-middle" src={nft.image} />
              </div>)}
            </div>
          </Reveal>
        </div>
      </div>


      {/* <div className="h-72 bg-white">
        <Reveal from={{ x: -1800 }} to={{ x: 0 }}>
          <div> fade </div>
        </Reveal>
      </div> */}

    </div>


  );
}

export default App;

