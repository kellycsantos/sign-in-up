/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{vue,js}"],
  theme: {
    extend:{
      colors:{
        lilic: '#f8e7f7',
        brand: '#83498c',
        field: '#f3f1f1',
        link:  '#a832bd'
      }
    }
 
    
  },
  plugins: [],
}
