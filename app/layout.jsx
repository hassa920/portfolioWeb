import Header from './Component/header'
import TopBar from './Component/topbar'
import Footer from './Component/footer'
import { localFont } from 'next/font/local'
import './globals.css'

const retimao=localFont({
src:"../public/fonts/RetimoaStraight.ttf",
display:"swap",
preload:true,
});
export const metadata = {
  title: "My Portfolio",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html className={retimao.className}>
    
      <body className={'retimao.className'}>
        <TopBar/>
          <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}