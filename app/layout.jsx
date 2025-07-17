// app/layout.tsx

import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Your Site Title",
  description: "Your site description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="KbHGYyqwSZqkddVP5SKR1TO5DgHhvHM1dCk0A2q0WBc" />
      </head>
      <body>{children}</body>
    </html>
  );
}
