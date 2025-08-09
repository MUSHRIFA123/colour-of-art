// app/layout.jsx
import "./globals.css";

export const metadata = {
  title: "Your Site Title",
  description:
    "Discover unique handmade paintings and digital artwork. Support independent artists. Free shipping available.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        {children}
    </html>
  );
}
