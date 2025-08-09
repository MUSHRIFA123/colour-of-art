// app/layout.js
import './globals.css'

export const metadata = {
  title: 'Colour of Art',
  description: 'Your site description here',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense site verification meta */}
        <meta
          name="google-site-verification"
          content="YOUR-VERIFICATION-CODE-HERE"
        />

        {/* Google AdSense publisher account meta */}
        <meta
          name="google-adsense-account"
          content="ca-pub-7496144172676724"
        />

        {/* Optional: AdSense script (can also be added later after verification) */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7496144172676724"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
