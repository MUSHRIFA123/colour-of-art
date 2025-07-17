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
      <head />
        {/* ✅ All your page content will be placed here */}
        {children}
    </html>
  );
}
