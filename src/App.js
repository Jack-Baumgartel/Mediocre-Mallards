import React, { useEffect } from 'react'
import { FaTwitter, FaDiscord, FaRegCopyright, FaStore} from 'react-icons/fa';
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
      text: <p>    An NFT is a digital good that is unique, authentic, and entirely yours! NFTs can take the form of images, videos, songs, animations, web domains, and much more. Mediocre Mallards come as an image file packed with fun attributes, personality traits, and even a birthday! If you purchase and hold your Mediocre Mallard, you will also get a free one of a kind hat at no extra cost! Join our <a href="https://discord.gg/JCrz4g7MuX" className="text-xl font-gloria">discord</a> for more details!</p>
    },
    {
      step: "02",
      title: "What makes Mediocre Mallards so special?",
      text: "Besides the stunning artwork, our Mallards have more charisma than any other NFT out there! We believe that each Mallard we create is worthy of love, and we want to make every single Mallard owner feel special as well. Additionally, we are are one of the first (only?) projects to offer custom phyical merchandise for NFT holders!"
    },
    {
      step: "04",
      title: "How do I mint one?",
      text: <p> Great question! The first step is to get yourself a <a href="https://metamask.io/" className="text-xl font-gloria">digital wallet</a> and put some Ethereum into it. You can use a service like <a href="https://www.coinbase.com/" className="text-xl font-gloria">coinbase</a> to buy and then send Ethereum to your new digital wallet! Our sale price is 0.05 ETH per mallard, but it's always a good idea to keep some extra change in your wallet, an extra 0.01 ETH is a safe bet! Once that's finished, you're ready for the migration! As soon as it begins, click the <a href={`#${"Mint"}`} className="text-xl font-gloria">Migrate!</a> button. You'll be guided along the last (easy) steps to buy your very own mallard!</p>
    },
    {
      step: "03",
      title: "How can I join the flock?",
      text: "This one is easy! Remember those social media icons at the top (and bottom) of this page? Go to them! Simply join our Discord server to become part of the flock! You should definitely check out our Twitter as well though!"
    }, 
    {
      step: "04",
      title: "I want more details!",
      text: <p>That's not really a question, but we love your enthusiasm! <a href="https://discord.gg/JCrz4g7MuX" className="text-xl font-gloria">You can find way more technical details, support, and project info all on our discord!</a> </p>
    }
  ]

  let Plan = [
    {
      step: "Step 1 : ",
      title: " Assemble the Flock",
      text: "As with all great migrations, a flock must first assemble. We will recruit & spread the word of the Mediocre Mallards through Discord, Twitter, and of course local ponds. We are hoping to gather a flock 10,000 Mallards strong, at which point the migration will begin!!"
    },
    {
      step: "Step 2 : ",
      title: " Migration!!",
      text: <p>Yes you read that right, as soon as our Discord server has 10,000 members, minting goes live! Mallards will migrate from the smart contract into wallets all around the world. Each mallard will cost 0.05 ETH, and you may adopt up to 3 with each transaction. Find more info, help, and details about the migration in our <a href="https://discord.gg/JCrz4g7MuX" className="text-xl font-bold font-gloria"> discord!</a> </p>
    },
    {
      step: "Step 3 : ",
      title: " Conquer the world ❤️",
      text: "After the mallards have settled down in their new homes, we hope to continue spreading joy around the world. As such, we will be offering free custom embroidered hats for all initial mallard holders. Each hat is one of a kind and only mallard holders may claim one! Additionally, following a successful migration, we will be donating $25,000 to New England Wildlife Centers! (a non-profit that provides medical care for wild animals ❤️)"
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
            <div className="w-full text-left select-none font-gloria text-6xl text-black"> Welcome to the flock </div>
            <div className="text-left select-none font-gloria text-3xl mt-5 text-black pb-3 mx-0">A digital collection of 9,250 quirky, lovable, and totally unique ducks.</div>
            <div className="ml-4 flex flex-nowrap">
            <a href="https://twitter.com/MediocreMallard"><FaTwitter className="ml-7 mt-3" size={40} /></a>
            <a href="https://discord.gg/JCrz4g7MuX"><FaDiscord className="ml-7 mt-3" size={40} /></a>
            <br /><br />
            </div>
          </div>
        </div>
      </div>

      {/*Duck quote */}
      <div className="bg-black w-full h-auto">
        <div className="font-gloria font-xl text-white pt-5 pb-5"> "How fleeting are all human passions compared with the massive continuity of ducks." - Dorothy L. Sayers</div>
      </div>
      {/* Project Stats */}
      <div className="bg-booyah bg-cover w-full font-roboto text-white">
      <a name="Stats" />
        <div className="bg-opacity-0 bg-gray-800 py-10">
          {/* eslint-disable-next-line */}
          <Reveal type={<Fade left />} className="container mx-8 mx-auto">
            <div className="text-white font-gloria text-5xl pb-3 w-full">Project Stats</div>
            <div className="flex justify-center flex-row m-3 align-center text-white font-bold text-lg">
              <div className="w-96 bg-1 m-auto p-2 rounded ">
                <img alt="NFT" className="shadow-lg mb-5 border border-black rounded max-w-full h-auto align-middle" src='https://ipfs.io/ipfs/QmSmWVQUGbMqYfbB2pD1vEgfBwtEkTn2n3MAh7CaGLEhog' />
                <p>15 Properties & 165 Attributes!</p>
              </div>
              <div className="w-96 bg-1 m-auto p-2 rounded">
                <img alt="NFT" className=" mb-8 rounded max-w-full h-auto align-middle" src='https://ipfs.io/ipfs/QmWCqD9V3xjanDrGcD46mNcS3zb8j8Xr1hfZmmGyM6GmTH' />
                <p>Names for every duck!</p>
              </div>
              <div className="w-96 bg-1 m-auto p-2 rounded">
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
        <div className="containerr mx-auto w-full pt-10 pb-10">
          <Reveal type={<Fade right />} className="container mx-auto ">
            <div className="containerr text-black font-gloria text-5xl bg-white rounded p-2 py-3 mx-10 border-2 border-black">Migration Plan</div>
          </Reveal>
          {Plan.map(goal => <Reveal type={<Fade right/>} key={goal.step} className="bg-gray pt-10 flex">
            <div className="bg-white bg-opacity-100 z-0 w-5/6 m-auto rounded mt-10 text-black border-2 border-black">
              <div className="mx-2 p-5 pb-0 flex">
                <div className="text-l mr-3 text-black font-gloria">{goal.step}</div>
                <div className="text-3xl font-gloria ">{goal.title}</div><br />
              </div>
              <div className="mx-0 p-4 flex">
                <div className="text-l text-bold text-mono text-left">{goal.text}</div>
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
            <div className="flex justify-center flex-row m-auto text-white font-bold text-l">
              {nfts.slice(0, 5).map(nft => <div key={nft.name} className="w-72 bg-1 m-1 p-1 rounded">
                {nft.name}
                <img alt="NFT" className="shadow-lg rounded w-full h-auto align-middle" src={nft.image} />
              </div>)}
            </div>
          </Reveal>
          <Reveal type={<Fade left />} from={{ y: 1800 }} to={{ y: 0 }} className="containerr mx-10 mx-auto w-full">
            <div className="flex justify-center flex-row m-auto text-white font-bold text-l">
              {nfts.slice(5, 10).map(nft => <div key={nft.name} className="w-72 bg-1 m-1 p-1 rounded">
                {nft.name}
                <img alt="NFT" className="shadow-lg rounded max-w-full h-auto align-middle" src={nft.image} />
              </div>)}
            </div>
          </Reveal>
          <Reveal type={<Fade left />} from={{ y: 1800 }} to={{ y: 0 }} className="containerr mx-10 mx-auto w-full">
            <div className="flex justify-center flex-row m-auto text-white font-bold text-l">
              {nfts.slice(10, 15).map(nft => <div key={nft.name} className="w-72 bg-1 m-1 p-1 rounded">
                {nft.name}
                <img alt="NFT" className="shadow-lg rounded max-w-full h-auto align-middle" src={nft.image} />
              </div>)}
            </div>
          </Reveal>
          <Reveal type={<Fade right />} from={{ y: 1800 }} to={{ y: 0 }}>
          <div className="text-white font-gloria text-l pt-2 pb-6">These exact mallards may not be part of our migration, as we are still incorporating flock suggested attributes!</div>
          </Reveal>
        </div>
      </div>



      {/* FAQ */}
      <div className="bg-faq_bg bg-cover">
        <a name="FAQ" />
        <div className="containerr mx-5 mx-auto w-full pt-2 pb-5">
        <div className="w-3/2 text-middle select-none font-gloria text-6xl pt-5 text-black"> FAQ</div>
          {/* eslint-disable-next-line */}
          {FAQ.map(goal => <Reveal key={goal.step} className="bg-black pt-10 flex">
            <div className="bg-gray-900 bg-opacity-80 z-0 w-5/6 m-auto rounded mt-8 text-white">
              <div className="mx-3 p-5 pb-0 flex">
                <div className="text-3xl font-gloria">{goal.title}</div><br />
              </div>
              <div className="mx-1 p-5 flex">
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
              <a href={`#${""}`}><FaRegCopyright className="ml-3 mb-2 mt-7 text-white mr-2" size={20} /></a>
              <p className="text-l font-gloria mb-2  mt-auto text-white align-middle"> 2021 Mediocre Mallards</p>
              <a href="https://twitter.com/MediocreMallard"><FaTwitter className="ml-3 mt-5 text-white" size={40} /></a>
              <a href="https://discord.gg/JCrz4g7MuX"><FaDiscord className="ml-3 mt-5 text-white" size={40} /></a>
            </div>
          </div>
        </div>
      </div>




    </div>
  );
}

export default App;


