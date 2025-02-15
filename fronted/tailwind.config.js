/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        // footerBgColor:"40BFFF"
        productFontColorBlue:"#33A0FF",
        productFontColorgray:"#262626",
        customFooterColor: '#bcddfe',
        fontCustomColor:"#22262a",
        imageBgColor:"#40BFFF",
        textRedColor:"#FB7181",
        textLighGrayColor:"#9098B1",
        textgrayColor:"#22262A",
        darkText:'#262626'
      },
      backgroundImage: {
        'hero-pattern': "url('/public/images/Promotion Image.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      screens:{
        xs:"480px",
        xll:'1492px'
      }
    },
  },
  plugins: [],
};
