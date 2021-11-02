module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('https://ipfs.io/ipfs/QmeiaJAsvEn2N3B9nTG197TnrinwvsJayok3mHuJLfkNSC')",
        booyah: "url('https://ipfs.io/ipfs/QmZymCtzuC4TPdBXwbv6Hvj7EKNozYMCX7aBNA3f4ZRWkg')",
        giraffe: "url('https://ipfs.io/ipfs/QmTtSE6D48xWSrYkLh6PtyHa1mW6z5zkmJtBt877u5PVUf')",
        faq_bg: "url('https://ipfs.io/ipfs/QmYxX1RKBEyMd95iX65oNE2W17134VFVkwQcnfuvf6a3UK')",
        tiles: "url('https://ipfs.io/ipfs/QmToaCRLzqSQnBd6swB816cj9GXtBR2pjJasmjs79dB2o1')"
       },
       fontFamily: {
        raisin: ['"Rum Raisin"'],
        roboto: ["Roboto"],
        gloria: ['Gloria Hallelujah']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
