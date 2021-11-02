(this["webpackJsonpMediocre-Mallards"]=this["webpackJsonpMediocre-Mallards"]||[]).push([[0],{134:function(e,t){e.exports={contractAddress:"0x3F2AeE683a49EbD635707B18Ed3240cc24A53530",requiredChainId:1,networkName:"Ethereum Mainnet"}},237:function(e,t){e.exports=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"_tokenURI",type:"string"}],name:"safeMint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}]},249:function(e,t,a){},265:function(e,t){},267:function(e,t){},269:function(e,t){},273:function(e,t){},300:function(e,t){},302:function(e,t){},312:function(e,t){},314:function(e,t){},324:function(e,t){},326:function(e,t){},447:function(e,t){},449:function(e,t){},456:function(e,t){},457:function(e,t){},547:function(e,t,a){},548:function(e,t,a){"use strict";a.r(t);var i=a(20),r=a.n(i),l=a(130),n=a.n(l),s=(a(249),a(44)),o=a(53),p=a(6),u=function(){var e=Object(i.useState)(!1),t=Object(o.a)(e,2),a=t[0],r=t[1],l=["Stats","Migration Plan","Mint","Meet the Mallards","FAQ"];return Object(p.jsxs)("nav",{className:"",children:[Object(p.jsx)("div",{className:"max-w-6xl mx-center px-15 py-2 font-gloria text-1xl",children:Object(p.jsxs)("div",{className:"flex justify-between",children:[Object(p.jsxs)("div",{className:"flex space-x-2",children:[Object(p.jsx)("div",{children:Object(p.jsx)("a",{href:"#",className:"flex items-center py-4 px-2",children:Object(p.jsx)("img",{src:"https://ipfs.io/ipfs/QmWZS8FbBYj95nyLFfaKJiu8yQkXNYnch1A62BrQLpAHe5"})})}),Object(p.jsx)("div",{className:"hidden md:flex items-center space-x-1",children:l.map((function(e){return Object(p.jsx)("a",{href:"#".concat(e),className:"py-4 px-3 text-black  font-semibold",children:e},e)}))})]}),Object(p.jsx)("div",{className:"md:hidden flex items-center",children:Object(p.jsx)("button",{onClick:function(){return r(!a)},className:"outline-none mobile-menu-button",children:Object(p.jsx)("svg",{className:" w-6 h-6 text-black","x-show":"!showMenu",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"3.5",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(p.jsx)("path",{d:"M4 6h16M4 12h16M4 18h16"})})})})]})}),a&&Object(p.jsx)("div",{className:"mobile-menu color-black",children:Object(p.jsx)("ul",{className:"",children:l.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)("a",{href:"#".concat(e),className:"block text-2xl px-2 py-4 text-black font-gloria",children:e},e)})}))})})]})},d=(a(3),a(132),a(235)),c=a.n(d),y=(a(136),a(237),a(134)),m=a.n(y),h=a(238),g=a.n(h),b=a(239),v=a.n(b),x=a(240),f=a.n(x),j=function(e){e.isVisible;var t=e.children,a=e.type,i=(e.className,a||Object(p.jsx)(v.a,{left:!0}));return r.a.createElement(i.type,i.props,t)},_=function(e){var t=e.children,a=e.type,r=e.className,l=Object(i.useState)(!1),n=Object(o.a)(l,2),s=n[0],u=n[1];return Object(p.jsx)(f.a,{onChange:function(e){u(e)},children:Object(p.jsx)(j,{isVisible:s,type:a,className:r,children:t})})},O=(m.a.contractAddress,m.a.requiredChainId,function(e){var t=Object(i.useState)(),a=Object(o.a)(t,2),r=a[0],l=a[1],n=Object(i.useState)({}),s=Object(o.a)(n,2),u=s[0],d=s[1],y=function(e){r.eth.getAccounts().then((function(t){t[0]&&r.eth.getBalance(t[0]).then((function(a){d({publicKey:t[0],chainId:e,wei:a})}))}))},m=function(e){e[0]?r.eth.getChainId().then(y):d({}),console.log(e)};return Object(i.useEffect)((function(){return window.ethereum&&(r?(window.ethereum.on("accountsChanged",m),window.ethereum.on("chainChanged",y),r.eth.getChainId().then(y)):l(new c.a(window.ethereum))),function(){window.ethereum&&(window.ethereum.removeListener("accountsChanged",m),window.ethereum.removeListener("chainChanged",y))}}),[r,u]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("a",{name:"Mint"}),Object(p.jsx)("div",{className:"bg-white bg-cover text-black pb-5",children:Object(p.jsx)("div",{className:"containerr mx-auto w-full ",children:Object(p.jsx)(_,{type:Object(p.jsx)(g.a,{}),className:"",children:Object(p.jsxs)("div",{className:"bg-hero bg-cover z-0 h-70 w-5/6 m-auto rounded my-3 text-black",children:[Object(p.jsx)("div",{className:"containerr text-black font-gloria text-6xl rounded pb-12 pt-3",children:"Minting!"}),Object(p.jsx)("button",{className:"px-4 py-3 shadow-2xl drop-shadow-2xl border-2 border-gray-900 bg-blue-200 rounded ml-3 font-gloria m-2",children:"Connect Wallet"}),Object(p.jsx)("button",{disabled:!r,className:"px-4 py-3 shadow-2xl drop-shadow-2xl border-2 border-gray-900 bg-blue-200 rounded ml-3 font-gloria m-2",children:"Mint a Mallard!"}),Object(p.jsx)("div",{className:"containerr text-black font-gloria text-xl rounded pb-12 pt-5",children:"( It's not quite time to migrate yet! )"})]})})})})]})}),w=a(242),N=a.n(w),B=(a(547),a(97)),T=a(54),k=a.n(T);var L=function(){Object(i.useEffect)((function(){N.a.load({google:{families:["Roboto","Rum Raisin","Gloria Hallelujah"]}})}),[]);var e=[{step:"01",title:"What's an NFT?",text:"    An NFT is a digital good that is unique, authentic, and entirely yours! NFTs can take the form of images, videos, songs, animations, web domains, and much more. Mediocre Mallards come as a PNG image file, packed with fun attributes, personality traits, and even a birthday!"},{step:"02",title:"What makes Mediocre Mallards so special?",text:"Besides the stunning artwork, our Mallards have more charisma than any other NFT out there! We believe that each Mallard we create is worthy of love, and we want to make every single Mallard owner feel special as well. Additionally, we are are one of the few collections offering phyical merchandise, more on that later!"},{step:"04",title:"How do I mint one?",text:Object(p.jsxs)("p",{children:[" Great question! The first step is to get yourself a ",Object(p.jsx)("a",{href:"https://metamask.io/",className:"text-xl font-gloria",children:"digital wallet."})," Once that's done, you can connect your wallet to this website using the ",Object(p.jsx)("a",{href:"#".concat("Mint"),className:"text-xl font-gloria",children:"Connect Wallet"})," button. From there, you are ready to mint a mallard as soon as the migration begins!"]})},{step:"03",title:"How can I join the flock?",text:"This one is easy! Remember those social media icons at the top (and bottom) of this page? Go to them! Join our Discord server, follow us on Tiktok & Twitter, and you're in!"}];return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("div",{className:"bg-hero bg-cover",children:Object(p.jsxs)("div",{className:"bg-opacity-100 pb-10",children:[Object(p.jsx)("a",{name:"Welcome"}),Object(p.jsxs)("div",{className:"containerr px-10 mx-auto w-full",children:[Object(p.jsx)(u,{}),Object(p.jsx)("div",{className:"w-full text-left select-none font-gloria text-6xl text-black",children:" Welcome to the flock "}),Object(p.jsx)("div",{className:"text-left select-none font-gloria text-3xl mt-5 text-black pb-3 mx-0",children:"A digital collection of 9,250 quirky, lovable, and totally unique ducks."}),Object(p.jsxs)("div",{className:"ml-4 flex flex-nowrap",children:[Object(p.jsx)("a",{href:"https://twitter.com/MediocreMallard",children:Object(p.jsx)(s.d,{className:"ml-7 mt-3",size:40})}),Object(p.jsx)("a",{href:"http://tiktok.com",children:Object(p.jsx)(s.c,{className:"ml-7 mt-3",size:40})}),Object(p.jsx)("a",{href:"http://discord.org",children:Object(p.jsx)(s.a,{className:"ml-7 mt-3",size:40})}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{})]})]})]})}),Object(p.jsxs)("div",{className:"bg-booyah bg-cover w-full font-roboto text-white",children:[Object(p.jsx)("a",{name:"Stats"}),Object(p.jsx)("div",{className:"bg-opacity-0 bg-gray-800 py-10",children:Object(p.jsxs)(_,{type:Object(p.jsx)(k.a,{left:!0}),className:"container mx-8 mx-auto",children:[Object(p.jsx)("div",{className:"text-white font-gloria text-5xl pb-3 w-full",children:"Project Stats"}),Object(p.jsxs)("div",{className:"flex justify-center flex-row m-3 align-center text-white font-bold text-lg",children:[Object(p.jsxs)("div",{className:"w-96 bg-1 m-auto p-2 rounded ",children:[Object(p.jsx)("img",{alt:"NFT",className:"shadow-lg mb-5 border border-black rounded max-w-full h-auto align-middle",src:"https://ipfs.io/ipfs/QmSmWVQUGbMqYfbB2pD1vEgfBwtEkTn2n3MAh7CaGLEhog"}),Object(p.jsx)("p",{children:"15 Properties & 165 Attributes!"})]}),Object(p.jsxs)("div",{className:"w-96 bg-1 m-auto p-2 rounded",children:[Object(p.jsx)("img",{alt:"NFT",className:" mb-8 rounded max-w-full h-auto align-middle",src:"https://ipfs.io/ipfs/QmWCqD9V3xjanDrGcD46mNcS3zb8j8Xr1hfZmmGyM6GmTH"}),Object(p.jsx)("p",{children:"Names for every duck!"})]}),Object(p.jsxs)("div",{className:"w-96 bg-1 m-auto p-2 rounded",children:[Object(p.jsx)("img",{alt:"NFT",className:"shadow-lg mb-5 border border-black rounded max-w-full h-auto align-middle",src:"https://ipfs.io/ipfs/QmTtSE6D48xWSrYkLh6PtyHa1mW6z5zkmJtBt877u5PVUf"}),Object(p.jsx)("p",{children:"Quirky Personalities!"})]})]})]})})]}),Object(p.jsxs)("div",{className:"bg-tiles bg-cover",children:[Object(p.jsx)("a",{name:"Migration Plan"}),Object(p.jsxs)("div",{className:"containerr mx-auto w-full pt-10 pb-10",children:[Object(p.jsx)(_,{type:Object(p.jsx)(k.a,{right:!0}),className:"container mx-auto ",children:Object(p.jsx)("div",{className:"containerr text-black font-gloria text-5xl bg-white rounded p-2 py-3 mx-10 border-2 border-black",children:"Migration Plan"})}),[{step:"Step 1 : ",title:" Assemble the Flock",text:"As with all great migrations, a tremendous flock must first assemble. Our first goal is to recruit & spread word of the Mediocre Mallards through Discord, Twitter, and of course local ponds. We are hoping to gather a flock 10,000 Mallards strong, at which point the migration will ensue!"},{step:"Step 2 : ",title:" Migration!!",text:"Yes you read that right, as soon as our flock is 10,000 strong, minting goes live! Mallards will migrate from the smart contract into wallets all around the world. Prepare yourself, this could be one of the fastest migrations ever! "},{step:"Step 3 : ",title:" Conquer the world \u2764\ufe0f",text:"After the mallards have settled down in their new homes, we hope to continue spreading joy around the world. As such, we will be offering official merchandise to mallard holders. The custom merch will even feature your own mallard on it!"}].map((function(e){return Object(p.jsx)(_,{type:Object(p.jsx)(k.a,{right:!0}),className:"bg-gray pt-10 flex",children:Object(p.jsxs)("div",{className:"bg-white bg-opacity-100 z-0 w-5/6 m-auto rounded mt-10 text-black border-2 border-black",children:[Object(p.jsxs)("div",{className:"mx-2 p-5 pb-0 flex",children:[Object(p.jsx)("div",{className:"text-l mr-3 text-black font-gloria",children:e.step}),Object(p.jsx)("div",{className:"text-3xl font-gloria ",children:e.title}),Object(p.jsx)("br",{})]}),Object(p.jsx)("div",{className:"mx-0 p-4 flex",children:Object(p.jsx)("div",{className:"text-l text-bold text-mono text-left",children:e.text})})]})},e.step)}))]})]}),Object(p.jsx)(O,{}),Object(p.jsxs)("div",{className:"bg-faq_bg bg-cover",children:[Object(p.jsx)("a",{name:"Meet the Mallards"}),Object(p.jsxs)("div",{className:"bg-opacity-40 bg-gray-800",children:[Object(p.jsxs)(_,{type:Object(p.jsx)(k.a,{left:!0}),from:{y:1800},to:{y:0},className:"containerr mx-10 mx-auto w-full",children:[Object(p.jsx)("div",{className:"text-white font-gloria text-5xl p-4 pt-6",children:"Meet the Mallards!"}),Object(p.jsx)("div",{className:"flex justify-center flex-row m-auto text-white font-bold text-l",children:B.slice(0,5).map((function(e){return Object(p.jsxs)("div",{className:"w-72 bg-1 m-1 p-1 rounded",children:[e.name,Object(p.jsx)("img",{alt:"NFT",className:"shadow-lg rounded w-full h-auto align-middle",src:e.image})]},e.name)}))})]}),Object(p.jsx)(_,{type:Object(p.jsx)(k.a,{left:!0}),from:{y:1800},to:{y:0},className:"containerr mx-10 mx-auto w-full",children:Object(p.jsx)("div",{className:"flex justify-center flex-row m-auto text-white font-bold text-l",children:B.slice(5,10).map((function(e){return Object(p.jsxs)("div",{className:"w-72 bg-1 m-1 p-1 rounded",children:[e.name,Object(p.jsx)("img",{alt:"NFT",className:"shadow-lg rounded max-w-full h-auto align-middle",src:e.image})]},e.name)}))})}),Object(p.jsx)(_,{type:Object(p.jsx)(k.a,{left:!0}),from:{y:1800},to:{y:0},className:"containerr mx-10 mx-auto w-full",children:Object(p.jsx)("div",{className:"flex justify-center flex-row m-auto text-white font-bold text-l",children:B.slice(10,15).map((function(e){return Object(p.jsxs)("div",{className:"w-72 bg-1 m-1 p-1 rounded",children:[e.name,Object(p.jsx)("img",{alt:"NFT",className:"shadow-lg rounded max-w-full h-auto align-middle",src:e.image})]},e.name)}))})}),Object(p.jsx)(_,{children:Object(p.jsx)("div",{className:"text-white font-gloria text-l pt-2 pb-6",children:"These exact mallards may not be part of our migration, as we are still incorporating flock suggested attributes!"})})]})]}),Object(p.jsxs)("div",{className:"bg-faq_bg bg-cover",children:[Object(p.jsx)("a",{name:"FAQ"}),Object(p.jsxs)("div",{className:"containerr mx-5 mx-auto w-full pt-2 pb-5",children:[Object(p.jsx)("div",{className:"w-3/2 text-middle select-none font-gloria text-6xl pt-5 text-black",children:" FAQ"}),e.map((function(e){return Object(p.jsx)(_,{className:"bg-black pt-10 flex",children:Object(p.jsxs)("div",{className:"bg-gray-900 bg-opacity-80 z-0 w-5/6 m-auto rounded mt-8 text-white",children:[Object(p.jsxs)("div",{className:"mx-3 p-5 pb-0 flex",children:[Object(p.jsx)("div",{className:"text-3xl font-gloria",children:e.title}),Object(p.jsx)("br",{})]}),Object(p.jsx)("div",{className:"mx-1 p-5 flex",children:Object(p.jsx)("div",{className:"text-lg text-bold text-mono text-left",children:e.text})})]})},e.step)}))]})]}),Object(p.jsx)("div",{className:"bg-booyah bg-cover",children:Object(p.jsx)("div",{className:"bg-opacity-100 p-2",children:Object(p.jsx)("div",{className:"pb-3 align-left mx-auto ",children:Object(p.jsxs)("div",{className:"containerr flex align-left w-full",children:[Object(p.jsx)("a",{href:"#",children:Object(p.jsx)(s.b,{className:"ml-3 mb-2 mt-7 text-white mr-2",size:20})}),Object(p.jsx)("p",{className:"text-l font-gloria mb-2  mt-auto text-white align-middle",children:" 2021 Mediocre Mallards"}),Object(p.jsx)("a",{href:"https://twitter.com/MediocreMallard",children:Object(p.jsx)(s.d,{className:"ml-3 mt-5 text-white",size:40})}),Object(p.jsx)("a",{href:"http://tiktok.com",children:Object(p.jsx)(s.c,{className:"ml-3 mt-5 text-white",size:40})}),Object(p.jsx)("a",{href:"http://discord.org",children:Object(p.jsx)(s.a,{className:"ml-3 mt-5 text-white",size:40})})]})})})})]})},E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,550)).then((function(t){var a=t.getCLS,i=t.getFID,r=t.getFCP,l=t.getLCP,n=t.getTTFB;a(e),i(e),r(e),l(e),n(e)}))};n.a.render(Object(p.jsx)(L,{}),document.getElementById("root")),E()},97:function(e){e.exports=JSON.parse('[{"name":"Zina","image":"http://ipfs.io/ipfs/QmenJEuExJKqZTfJjpNfb8XDPEpGb47ENJiUZ5ZV9LA1Ug/Zina.png","attributes":[{"trait_type":"Background","value":"Light Orange"},{"trait_type":"Footwear","value":"Yellow + Blue Mismatched Sneakers"},{"trait_type":"Bill","value":"Bright Orange"},{"trait_type":"Upper Extras","value":"Blue + Yellow Backpack"},{"trait_type":"Clothes","value":"Light Blue Tie"},{"trait_type":"Body","value":"Bright Blue"},{"trait_type":"Left Lower Extras","value":"Spilled Milk"},{"trait_type":"Tail","value":"Bright Pink"},{"trait_type":"Head","value":"Bright Pink"},{"trait_type":"Legs","value":"Bright Pink"},{"trait_type":"Headgear","value":"Sailor\'s Cap"},{"trait_type":"Outline","value":"White"},{"trait_type":"Nameplate","value":"Orange"},{"trait_type":"Right Lower Extras","value":"The Bunny Queen"},{"trait_type":"Wing","value":"Bright Orange"},{"trait_type":"Actual Odds","value":"9.259111133333333"},{"trait_type":"Theoretical Odds","value":"8.586253333333332"}]},{"name":"Montez","image":"http://ipfs.io/ipfs/QmenJEuExJKqZTfJjpNfb8XDPEpGb47ENJiUZ5ZV9LA1Ug/Montez.png","attributes":[{"trait_type":"Background","value":"Light Yellow"},{"trait_type":"Footwear","value":"Muddy Feet"},{"trait_type":"Bill","value":"Natural"},{"trait_type":"Upper Extras","value":"The Sun!"},{"trait_type":"Clothes","value":"Light Pink Tie"},{"trait_type":"Body","value":"Bright Pink"},{"trait_type":"Left Lower Extras","value":"Light Reading"},{"trait_type":"Tail","value":"Bright Orange"},{"trait_type":"Head","value":"Bright Purple"},{"trait_type":"Legs","value":"Bright Pink"},{"trait_type":"Headgear","value":"Chef\'s Hat"},{"trait_type":"Outline","value":"Black"},{"trait_type":"Nameplate","value":"Yellow"},{"trait_type":"Right Lower Extras","value":"A Bunny"},{"trait_type":"Wing","value":"Bright Orange"},{"trait_type":"Actual Odds","value":"15.715111199999997"},{"trait_type":"Theoretical Odds","value":"12.104633333333334"}]},{"name":"Moya","image":"http://ipfs.io/ipfs/QmenJEuExJKqZTfJjpNfb8XDPEpGb47ENJiUZ5ZV9LA1Ug/Moya.png","attributes":[{"trait_type":"Background","value":"Light Red"},{"trait_type":"Footwear","value":"Teal Sneakers"},{"trait_type":"Bill","value":"Bright Blue"},{"trait_type":"Upper Extras","value":"Cool Sun"},{"trait_type":"Clothes","value":"None"},{"trait_type":"Body","value":"Bright Orange"},{"trait_type":"Left Lower Extras","value":"Light Reading"},{"trait_type":"Tail","value":"Bright Orange"},{"trait_type":"Head","value":"Bright Lime"},{"trait_type":"Legs","value":"Bright Teal"},{"trait_type":"Headgear","value":"Headband"},{"trait_type":"Outline","value":"Black"},{"trait_type":"Nameplate","value":"Rainbow Confetti!"},{"trait_type":"Right Lower Extras","value":"None"},{"trait_type":"Wing","value":"Bright Pink"},{"trait_type":"Actual Odds","value":"18.775777866666665"},{"trait_type":"Theoretical Odds","value":"12.756186666666668"}]},{"name":"Serra","image":"http://ipfs.io/ipfs/QmenJEuExJKqZTfJjpNfb8XDPEpGb47ENJiUZ5ZV9LA1Ug/Serra.png","attributes":[{"trait_type":"Background","value":"Light Teal"},{"trait_type":"Footwear","value":"Lime Sneakers"},{"trait_type":"Bill","value":"Bright Lime"},{"trait_type":"Upper Extras","value":"White + Rainbow Backpack"},{"trait_type":"Clothes","value":"None"},{"trait_type":"Body","value":"Bright Purple"},{"trait_type":"Left Lower Extras","value":"None"},{"trait_type":"Tail","value":"Bright Teal"},{"trait_type":"Head","value":"Bright Orange"},{"trait_type":"Legs","value":"Bright Blue"},{"trait_type":"Headgear","value":"None"},{"trait_type":"Outline","value":"White"},{"trait_type":"Nameplate","value":"Blue"},{"trait_type":"Right Lower Extras","value":"A Dove"},{"trait_type":"Wing","value":"Bright Red"},{"trait_type":"Actual Odds","value":"16.23755553333333"},{"trait_type":"Theoretical Odds","value":"13.21064"}]},{"name":"Elaina","image":"http://ipfs.io/ipfs/QmenJEuExJKqZTfJjpNfb8XDPEpGb47ENJiUZ5ZV9LA1Ug/Elaina.png","attributes":[{"trait_type":"Background","value":"Light Pink"},{"trait_type":"Footwear","value":"None"},{"trait_type":"Bill","value":"Bright Pink"},{"trait_type":"Upper Extras","value":"A Friend"},{"trait_type":"Clothes","value":"Diamond Necklace"},{"trait_type":"Body","value":"Bright Teal"},{"trait_type":"Left Lower Extras","value":"Wants Peas"},{"trait_type":"Tail","value":"Bright Blue"},{"trait_type":"Head","value":"Bright Orange"},{"trait_type":"Legs","value":"Bright Yellow"},{"trait_type":"Headgear","value":"Hard Hat"},{"trait_type":"Outline","value":"Black"},{"trait_type":"Nameplate","value":"Black"},{"trait_type":"Right Lower Extras","value":"None"},{"trait_type":"Wing","value":"Bright Orange"},{"trait_type":"Actual Odds","value":"19.197111133333333"},{"trait_type":"Theoretical Odds","value":"13.5669"}]},{"name":"Romie","image":"http://ipfs.io/ipfs/QmenJEuExJKqZTfJjpNfb8XDPEpGb47ENJiUZ5ZV9LA1Ug/Romie.png","attributes":[{"trait_type":"Background","value":"Light Blue"},{"trait_type":"Footwear","value":"Muddy Feet"},{"trait_type":"Bill","value":"Bright Teal"},{"trait_type":"Upper Extras","value":"None"},{"trait_type":"Clothes","value":"Orange Bowtie"},{"trait_type":"Body","value":"Bright Red"},{"trait_type":"Left Lower Extras","value":"Light Reading"},{"trait_type":"Tail","value":"Bright Teal"},{"trait_type":"Head","value":"Bright Lime"},{"trait_type":"Legs","value":"Bright Orange"},{"trait_type":"Headgear","value":"Headband"},{"trait_type":"Outline","value":"Black"},{"trait_type":"Nameplate","value":"Rainbow Confetti!"},{"trait_type":"Right Lower Extras","value":"None"},{"trait_type":"Wing","value":"Bright Blue"},{"trait_type":"Actual Odds","value":"21.133555533333332"},{"trait_type":"Theoretical Odds","value":"13.866446666666667"}]},{"name":"Desire","image":"http://ipfs.io/ipfs/QmenJEuExJKqZTfJjpNfb8XDPEpGb47ENJiUZ5ZV9LA1Ug/Desire.png","attributes":[{"trait_type":"Background","value":"Light Yellow"},{"trait_type":"Footwear","value":"Muddy Feet"},{"trait_type":"Bill","value":"Bright Lime"},{"trait_type":"Upper Extras","value":"None"},{"trait_type":"Clothes","value":"Gold Chain"},{"trait_type":"Body","value":"Bright Lime"},{"trait_type":"Left Lower Extras","value":"Light Reading"},{"trait_type":"Tail","value":"Bright Lime"},{"trait_type":"Head","value":"Bright Blue"},{"trait_type":"Legs","value":"Bright Blue"},{"trait_type":"Headgear","value":"None"},{"trait_type":"Outline","value":"Black"},{"trait_type":"Nameplate","value":"Red"},{"trait_type":"Right Lower Extras","value":"A Bunny"},{"trait_type":"Wing","value":"Bright Yellow"},{"trait_type":"Actual Odds","value":"21.705777800000003"},{"trait_type":"Theoretical Odds","value":"14.141519999999998"}]},{"name":"Lazer","image":"http://ipfs.io/ipfs/QmenJEuExJKqZTfJjpNfb8XDPEpGb47ENJiUZ5ZV9LA1Ug/Lazer.png","attributes":[{"trait_type":"Background","value":"Light Red"},{"trait_type":"Footwear","value":"Socks"},{"trait_type":"Bill","value":"Bright Lime"},{"trait_type":"Upper Extras","value":"None"},{"trait_type":"Clothes","value":"None"},{"trait_type":"Body","value":"Natural"},{"trait_type":"Left Lower Extras","value":"None"},{"trait_type":"Tail","value":"Bright Teal"},{"trait_type":"Head","value":"Bright Lime"},{"trait_type":"Legs","value":"Bright Yellow"},{"trait_type":"Headgear","value":"Crown"},{"trait_type":"Outline","value":"Black"},{"trait_type":"Nameplate","value":"Yellow"},{"trait_type":"Right Lower Extras","value":"A Turtle"},{"trait_type":"Wing","value":"Bright Lime"},{"trait_type":"Actual Odds","value":"21.069555533333336"},{"trait_type":"Theoretical Odds","value":"14.40408"}]},{"name":"Bray","image":"http://ipfs.io/ipfs/QmenJEuExJKqZTfJjpNfb8XDPEpGb47ENJiUZ5ZV9LA1Ug/Bray.png","attributes":[{"trait_type":"Background","value":"Light Purple"},{"trait_type":"Footwear","value":"Orange Sneakers"},{"trait_type":"Bill","value":"Bright Teal"},{"trait_type":"Upper Extras","value":"None"},{"trait_type":"Clothes","value":"Light Lime Tie"},{"trait_type":"Body","value":"Bright Lime"},{"trait_type":"Left Lower Extras","value":"Light Reading"},{"trait_type":"Tail","value":"Bright Purple"},{"trait_type":"Head","value":"Bright Blue"},{"trait_type":"Legs","value":"Bright Teal"},{"trait_type":"Headgear","value":"None"},{"trait_type":"Outline","value":"Black"},{"trait_type":"Nameplate","value":"Black"},{"trait_type":"Right Lower Extras","value":"None"},{"trait_type":"Wing","value":"Bright Purple"},{"trait_type":"Actual Odds","value":"23.765555600000003"},{"trait_type":"Theoretical Odds","value":"14.655473333333333"}]},{"name":"Latifa","image":"http://ipfs.io/ipfs/QmenJEuExJKqZTfJjpNfb8XDPEpGb47ENJiUZ5ZV9LA1Ug/Latifa.png","attributes":[{"trait_type":"Background","value":"Light Purple"},{"trait_type":"Footwear","value":"Teal Sneakers"},{"trait_type":"Bill","value":"Bright Pink"},{"trait_type":"Upper Extras","value":"None"},{"trait_type":"Clothes","value":"Blue Bowtie"},{"trait_type":"Body","value":"Bright Teal"},{"trait_type":"Left Lower Extras","value":"None"},{"trait_type":"Tail","value":"Natural"},{"trait_type":"Head","value":"Bright Orange"},{"trait_type":"Legs","value":"Bright Red"},{"trait_type":"Headgear","value":"Chef\'s Hat"},{"trait_type":"Outline","value":"Black"},{"trait_type":"Nameplate","value":"Rainbow"},{"trait_type":"Right Lower Extras","value":"None"},{"trait_type":"Wing","value":"Bright Orange"},{"trait_type":"Actual Odds","value":"22.17977786666667"},{"trait_type":"Theoretical Odds","value":"14.911173333333334"}]},{"name":"Makeba","image":"http://ipfs.io/ipfs/QmenJEuExJKqZTfJjpNfb8XDPEpGb47ENJiUZ5ZV9LA1Ug/Makeba.png","attributes":[{"trait_type":"Background","value":"Light Orange"},{"trait_type":"Footwear","value":"None"},{"trait_type":"Bill","value":"Bright Teal"},{"trait_type":"Upper Extras","value":"None"},{"trait_type":"Clothes","value":"None"},{"trait_type":"Body","value":"Bright Lime"},{"trait_type":"Left Lower Extras","value":"Light Reading"},{"trait_type":"Tail","value":"Bright Orange"},{"trait_type":"Head","value":"Bright Pink"},{"trait_type":"Legs","value":"Natural"},{"trait_type":"Headgear","value":"None"},{"trait_type":"Outline","value":"Black"},{"trait_type":"Nameplate","value":"Purple"},{"trait_type":"Right Lower Extras","value":"None"},{"trait_type":"Wing","value":"Bright Teal"},{"trait_type":"Actual Odds","value":"25.76755566666667"},{"trait_type":"Theoretical Odds","value":"15.170399999999999"}]},{"name":"Rosana","image":"http://ipfs.io/ipfs/QmenJEuExJKqZTfJjpNfb8XDPEpGb47ENJiUZ5ZV9LA1Ug/Rosana.png","attributes":[{"trait_type":"Background","value":"Light Yellow"},{"trait_type":"Footwear","value":"Purple Sneakers"},{"trait_type":"Bill","value":"Bright Pink"},{"trait_type":"Upper Extras","value":"Blue + Yellow Backpack"},{"trait_type":"Clothes","value":"None"},{"trait_type":"Body","value":"Bright Red"},{"trait_type":"Left Lower Extras","value":"Wants Peas"},{"trait_type":"Tail","value":"Bright Purple"},{"trait_type":"Head","value":"Bright Purple"},{"trait_type":"Legs","value":"Bright Lime"},{"trait_type":"Headgear","value":"Sailor\'s Cap"},{"trait_type":"Outline","value":"Black"},{"trait_type":"Nameplate","value":"Purple"},{"trait_type":"Right Lower Extras","value":"None"},{"trait_type":"Wing","value":"Bright Yellow"},{"trait_type":"Actual Odds","value":"21.740000000000002"},{"trait_type":"Theoretical Odds","value":"15.446393333333333"}]},{"name":"Anya","image":"http://ipfs.io/ipfs/QmenJEuExJKqZTfJjpNfb8XDPEpGb47ENJiUZ5ZV9LA1Ug/Anya.png","attributes":[{"trait_type":"Background","value":"Light Orange"},{"trait_type":"Footwear","value":"None"},{"trait_type":"Bill","value":"Bright Lime"},{"trait_type":"Upper Extras","value":"Pink + Teal Backpack"},{"trait_type":"Clothes","value":"Orange Bowtie"},{"trait_type":"Body","value":"Bright Red"},{"trait_type":"Left Lower Extras","value":"None"},{"trait_type":"Tail","value":"Bright Red"},{"trait_type":"Head","value":"Bright Purple"},{"trait_type":"Legs","value":"Bright Teal"},{"trait_type":"Headgear","value":"None"},{"trait_type":"Outline","value":"Black"},{"trait_type":"Nameplate","value":"Red"},{"trait_type":"Right Lower Extras","value":"A Dove"},{"trait_type":"Wing","value":"Bright Purple"},{"trait_type":"Actual Odds","value":"21.81133326666667"},{"trait_type":"Theoretical Odds","value":"15.731200000000001"}]},{"name":"Baylee","image":"http://ipfs.io/ipfs/QmenJEuExJKqZTfJjpNfb8XDPEpGb47ENJiUZ5ZV9LA1Ug/Baylee.png","attributes":[{"trait_type":"Background","value":"Light Yellow"},{"trait_type":"Footwear","value":"None"},{"trait_type":"Bill","value":"Bright Yellow"},{"trait_type":"Upper Extras","value":"None"},{"trait_type":"Clothes","value":"Orange Bowtie"},{"trait_type":"Body","value":"Bright Orange"},{"trait_type":"Left Lower Extras","value":"Light Reading"},{"trait_type":"Tail","value":"Bright Pink"},{"trait_type":"Head","value":"Bright Yellow"},{"trait_type":"Legs","value":"Bright Purple"},{"trait_type":"Headgear","value":"None"},{"trait_type":"Outline","value":"Black"},{"trait_type":"Nameplate","value":"Black"},{"trait_type":"Right Lower Extras","value":"None"},{"trait_type":"Wing","value":"Bright Yellow"},{"trait_type":"Actual Odds","value":"25.807777866666665"},{"trait_type":"Theoretical Odds","value":"16.0854"}]},{"name":"Genia","image":"http://ipfs.io/ipfs/QmenJEuExJKqZTfJjpNfb8XDPEpGb47ENJiUZ5ZV9LA1Ug/Genia.png","attributes":[{"trait_type":"Background","value":"Light Red"},{"trait_type":"Footwear","value":"Lime Sneakers"},{"trait_type":"Bill","value":"Bright Pink"},{"trait_type":"Upper Extras","value":"None"},{"trait_type":"Clothes","value":"Light Blue Tie"},{"trait_type":"Body","value":"Bright Blue"},{"trait_type":"Left Lower Extras","value":"None"},{"trait_type":"Tail","value":"Bright Yellow"},{"trait_type":"Head","value":"Bright Lime"},{"trait_type":"Legs","value":"Bright Purple"},{"trait_type":"Headgear","value":"None"},{"trait_type":"Outline","value":"Black"},{"trait_type":"Nameplate","value":"Blue"},{"trait_type":"Right Lower Extras","value":"None"},{"trait_type":"Wing","value":"Bright Lime"},{"trait_type":"Actual Odds","value":"25.594666733333334"},{"trait_type":"Theoretical Odds","value":"16.573439999999998"}]}]')}},[[548,1,2]]]);
//# sourceMappingURL=main.b69647d9.chunk.js.map