import React, { useEffect } from 'react'
import { FaTwitter, FaTiktok, FaDiscord, FaRegCopyright} from 'react-icons/fa';
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
      step: "01",
      title: "What's an NFT?",
      text: "    An NFT is a digital good that is unique, authentic, and entirely yours! NFTs can take the form of images, videos, songs, animations, web domains, and much more. Mediocre Mallards come as a PNG image file, packed with fun attributes, personality traits, and even a birthday!"
    },
    {
      step: "02",
      title: "What makes Mediocre Mallards so special?",
      text: "Besides the stunning artwork, our Mallards have more charisma than any other NFT out there! We believe that each Mallard we create is worthy of love, and we want to make every single Mallard owner feel special as well. Additionally, we are are one of the few collections offering phyical merchandise, more on that later!"
    },
    {
      step: "04",
      title: "How do I mint one?",
      text: <p> Great question! The first step is to get yourself a <a href="https://metamask.io/" className="text-xl font-gloria">digital wallet.</a> Once that's done, you can connect your wallet to this website using the <a href={`#${"Mint"}`} className="text-xl font-gloria">Connect Wallet</a> button. From there, you are ready to mint a mallard as soon as the migration begins!</p>
    },
    {
      step: "03",
      title: "How can I join the flock?",
      text: "This one is easy! Remember those social media icons at the top (and bottom) of this page? Go to them! Join our Discord server, follow us on Tiktok & Twitter, and you're in!"
    }, 
  ]

  let Plan = [
    {
      step: "Step 1 : ",
      title: " Assemble the Flock",
      text: "As with all great migrations, a tremendous flock must first assemble. Our first goal is to recruit & spread word of the Mediocre Mallards through Discord, Twitter, and of course local ponds. We are hoping to gather a flock 10,000 Mallards strong, at which point the migration will ensue!"
    },
    {
      step: "Step 2 : ",
      title: " MIGRATION!!",
      text: "Yes you read that right, as soon as our flock is 10,000 strong, minting goes live! Mallards will migrate from the smart contract into wallets all around the world. Prepare yourself, this could be one of the fastest migrations ever! "
    },
    {
      step: "Step 3 : ",
      title: " Conquer the world ❤️",
      text: "After the mallards have settled down in their new homes, we hope to continue spreading joy around the world. As such, we will be offering official merchandise to mallard holders. The custom merch will even feature your own mallard on it!"
    }
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
            <div className="w-1/2 text-left select-none font-gloria text-3xl mt-5 text-black pb-3">A digital collection of 9,250 quirky, lovable, and totally unique ducks.</div>
            <div className="ml-auto flex flex-nowrap">
            <a href="https://twitter.com/MediocreMallard"><FaTwitter className="ml-5 mt-3" size={40} /></a>
            <a href="http://tiktok.com"><FaTiktok className="ml-5 mt-3" size={40} /></a>
            <a href="http://discord.org"><FaDiscord className="ml-5 mt-3" size={40} /></a>
            <br /><br />
            </div>
          </div>
        </div>
      </div>

      {/* Project Stats */}
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


      {/* Migration Plan */}
      <div className="bg-tiles bg-cover">
        <a name="Migration Plan"/>
        <div className="containerr mx-10 mx-auto w-full pt-10 pb-10">
          <Reveal type={<Fade right />} className="container mx-10 mx-auto w-full">
            <div className="containerr text-black font-gloria text-6xl bg-white rounded mx-40 p-2 border-2 border-black ">Migration Plan</div>
          </Reveal>
          {Plan.map(goal => <Reveal type={<Fade right/>} key={goal.step} className="bg-gray pt-10 flex">
            <div className="bg-white bg-opacity-100 z-0 w-5/6 m-auto rounded mt-10 text-black border-2 border-black">
              <div className="mx-10 p-5 pb-0 flex">
                <div className="text-xl mr-3 text-black font-gloria">{goal.step}</div>
                <div className="text-3xl font-gloria ">{goal.title}</div><br />
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


      {/* Meet the Mallards */}
      <div className="bg-faq_bg bg-cover">
        <a name="Meet the Mallards" />
        <div className="bg-opacity-40 bg-gray-800">
          {/* eslint-disable-next-line */}
          <Reveal type={<Fade left />} from={{ y: 1800 }} to={{ y: 0 }} className="containerr mx-10 mx-auto w-full">
            <div className="text-white font-gloria text-5xl p-4 pt-6">Meet the Mallards!</div>
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
          <Reveal>
          <div className="text-white font-gloria text-l pt-2 pb-6">These exact mallards may not be part of our migration, as we are still incorporating flock suggested attributes!</div>
          </Reveal>
        </div>
      </div>



      {/* FAQ */}
      <div className="bg-faq_bg bg-cover">
        <a name="FAQ" />
        <div className="containerr mx-10 mx-auto w-full pt-2 pb-5">
        <div className="w-3/2 text-middle select-none font-gloria text-6xl pt-5 text-black"> FAQ</div>
          {/* eslint-disable-next-line */}
          {FAQ.map(goal => <Reveal key={goal.step} className="bg-black pt-10 flex">
            <div className="bg-gray-900 bg-opacity-80 z-0 w-5/6 m-auto rounded mt-10 text-white">
              <div className="mx-10 p-5 pb-0 flex">
                <div className="text-3xl font-gloria">{goal.title}</div><br />
              </div>
              <div className="mx-10 p-5 flex">
                <div className="text-lg text-bold text-mono text-left">{goal.text}</div>
              </div>
            </div>
          </Reveal>)}
        </div>
      </div>

      <div className="bg-booyah bg-cover">
        <div className="bg-opacity-100 p-2">
          {/* eslint-disable-next-line */}
          <div className="pb-3 align-left mx-auto ">
            <div className="containerr flex align-left w-full">
              <a href={`#${""}`}><FaRegCopyright className="ml-7 mt-4 my-auto text-white mx-auto" size={30} /></a>
              <p className="text-xl font-gloria text-white mt-4 mx-5 align-middle"> 2021 Mediocre Mallards</p>
              <a href="https://twitter.com/MediocreMallard"><FaTwitter className="ml-5 mt-3 text-white" size={40} /></a>
              <a href="http://tiktok.com"><FaTiktok className="ml-5 mt-3 text-white" size={40} /></a>
              <a href="http://discord.org"><FaDiscord className="ml-5 mt-3 text-white" size={40} /></a>
            </div>
          </div>
        </div>
      </div>




    </div>
  );
}

export default App;

