// import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import HeaderPanel from '@/components/HeaderPanel';
import Menu from '@/components/Menu';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
// const geistSans = Geist({
//    variable: '--font-geist-sans',
//    subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
//    variable: '--font-geist-mono',
//    subsets: ['latin'],
// });

// export const metadata = {
//    title: 'Create Next App',
//    description: 'Generated by create next app',
// };

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className="flex min-h-screen">
            <div className="relative bg-white py-2 border-r border-2 w-[14%] md:w-[8%] lg:w-[18%] xl:w-[14%] ">
               <div className="px-2">
                  <RxHamburgerMenu size={20} className="text-black ml-2 " />
                  <Menu />
               </div>
               <div className="absolute bottom-0 w-full border-t-2 flex items-center pt-2 gap-2 border-gray-400">
                  <span className="bg-[#6c5689] py-2 px-4 rounded-sm">s</span>
                  <span className="mr-auto text-[#939393]">Sales</span>
                  <span>
                     <MdOutlineKeyboardArrowUp
                        size={16}
                        className="text-[#939393]"
                     />
                     <MdOutlineKeyboardArrowDown
                        size={16}
                        className="text-[#939393]"
                     />
                  </span>
               </div>
            </div>
            <div className="bg-white w-[86%] md:w-[92%] py-4 px-3  lg:w-[82%] xl:w-[86%]">
               <HeaderPanel />
               {children}
            </div>
         </body>
      </html>
   );
}
