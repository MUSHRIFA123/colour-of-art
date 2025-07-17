import { Figtree } from "next/font/google";

const fontPrimary = Figtree({
  subsets: ['latin'],
  display: 'swap',
});

const fonts = {
  primary: fontPrimary,
};

export default fonts;
