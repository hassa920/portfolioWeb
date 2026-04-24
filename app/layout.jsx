import Header from './Component/header'
import TopBar from './Component/topbar'
import Footer from './Component/footer'
import localFont from 'next/font/local'
import { Inter } from 'next/font/google'
import './globals.css'

const retimao = localFont({
  src: [
    { path: "../public/fonts/RetimoaStraight.ttf", weight: "500", style: "normal" }
    // if you later add a Thin file, add it here with weight: "100"
  ],
  display: "swap",
  preload: true,
});

const inter = Inter({
  weight: ['500'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export default function RootLayout({ children }) {
  return (
    // apply BOTH font classes so the fallback (Inter) is available when Retimoa lacks 100
    <html className={`${retimao.className} ${inter.className}`}>
      <body>
        <TopBar/>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}