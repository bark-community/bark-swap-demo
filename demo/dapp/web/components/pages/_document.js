// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document'
import GoogleFonts from 'next-google-fonts'

class BarkDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Paste the Google Fonts link tag here */}
          <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default BarkDocument
