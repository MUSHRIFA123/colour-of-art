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
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7496144172676724"
          crossOrigin="anonymous"
        ></script>
      </head>
        {children}
    </html>
  )
}
