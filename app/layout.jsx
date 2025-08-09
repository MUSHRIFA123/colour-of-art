// app/layout.js
export const metadata = {
  title: 'Colour of Art',
  description: 'Your site description',
  other: {
    'google-adsense-account': 'ca-pub-7496144172676724',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
