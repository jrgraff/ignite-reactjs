import "tailwindcss/tailwind.css";

import '../styles/globals.css'

const App = ({ Component, pageProps }) => (
  <div>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Portfólio | jrgraff</title>
      </head>
    <Component {...pageProps} />
  </div>
)

export default App