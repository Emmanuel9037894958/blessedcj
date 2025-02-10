/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {
      screens: {
        extra:'550px',
        extraone: '600px',
        extratwo: '650px',
        extrathree: '750px',
        extrafour: '350px',
        extratour: '360px',
        extrafive: '450px',
        extrasix: '800px',
        extraseven: '850px',
        extraeight: '400px',
        extranine: '300px',
        extraten: '1030px',
        extrapoint: '950px',
        extrapointer: '500px',
        extrapointerone: '700px',
        endpoint: '900px',
        
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

