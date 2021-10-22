module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        screens: {
        "xsm": {"max": "361px"},
        'sm': { 'max': '640px'},
        // => @media (min-width: 640px) { ... }
  
        'md': { 'max': '767px'},
        // => @media (min-width: 768px) { ... }
        'md2': { 'max': '768px'},
        
        "min-md": "768px",
        "min-lg": "1024px",

        'lg': { 'max': '1023px'},
        // => @media (min-width: 1024px) { ... }
  
        'xl': { 'max': '1280px'},
        // => @media (min-width: 1280px) { ... }
  
        '2xl': { 'max': '1536px'},
        // => @media (min-width: 1536px) { ... }
        "qhd": {"min": "1440px"},
        "4k": {"min": "2160px"}
      },
      height: {
        "10vh": "10vh",
        "20vh": "20vh",
        "30vh": "30vh",
        "15vh" : "15vh",
        "40vh": "40vh",
        "50vh": "50vh",
        "60": "60vh",
        "70vh": "70vh",
        "80vh": "80vh",
        "0": ".125rem",
        "90vh": "90vh",
        "100vh":"100vh",
        "110vh":"110vh",
        "85vh": "85vh",
        "150vh": "120vh",
        "160vh": "160vh",
        "180vh": "180vh",
        "200vh": "200vh",
        "220vh": "220vh",
        "240vh": "240vh",
        "260vh": "260vh",
        "280vh": "280vh",
        "300vh": "300vh",
        "10%": "10%",
        "20%": "20%",
        "25%": "25%",
        "30%": "30%",
        "40%": "40%",
        "50%": "50%",
        "60%": "60%",
        "70%": "70%",
        "80%": "80%",
        "90%": "90%"
      },
      width: {
        "10%": "10%",
        "20%": "20%",
        "25%": "25%",
        "30%": "30%",
        "40%": "40%",
        "50%": "50%",
        "60%": "60%",
        "70%": "70%",
        "80%": "80%",
        "90%": "90%"
      },
      fontFamily: {
        "poppins": ["Poppins"]
      },
      backgroundImage:{
        "testimonial": "url('https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
