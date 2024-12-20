// 'use client';
// import { useState } from 'react';
// import Link from 'next/link';
// import { LiaHomeSolid } from 'react-icons/lia';
// import { FiClock } from 'react-icons/fi';
// import { LiaThumbtackSolid } from 'react-icons/lia';
// import { IoRocketOutline } from 'react-icons/io5';
// import { MdDashboard } from 'react-icons/md';
// import { MdOutlineNoteAlt } from 'react-icons/md';
// import { SiWikibooks } from 'react-icons/si';
// import { LuUserRound } from 'react-icons/lu';
// import { BsTelephoneX } from 'react-icons/bs';
// import { SlNotebook } from 'react-icons/sl';
// import { LuUserCog } from 'react-icons/lu';
// import { PiNotebookLight } from 'react-icons/pi';
// import { PiNoteBold } from 'react-icons/pi';
// import { PiNoteBlankBold } from 'react-icons/pi';
// import { IoCubeOutline } from 'react-icons/io5';
// import { RiUDiskFill } from 'react-icons/ri';
// import { LiaBullhornSolid } from 'react-icons/lia';
// import { FaBullhorn } from 'react-icons/fa';
// import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
// import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
// import { RiFileCopyLine } from 'react-icons/ri';
// import { PiPhoneIncoming } from 'react-icons/pi';
// import { BsMicrosoftTeams } from 'react-icons/bs';
// import { useLocation } from 'react-router-dom';

// const menuItems = [
//    {
//       id: 1,
//       items: [
//          {
//             icon: <LiaHomeSolid size={16} />,
//             label: 'Home',
//             href: '/',
//             visible: '',
//          },
//          {
//             icon: <FiClock size={16} />,
//             label: 'Recent',
//             href: '/recent',
//             dropdown: <MdOutlineKeyboardArrowDown />,
//             subItems: [{ label: 'Today', href: '/recent/today' }],
//          },
//          {
//             icon: <LiaThumbtackSolid size={16} />,
//             label: 'Pinned',
//             href: '/pinned',
//             dropdown: <MdOutlineKeyboardArrowDown />,
//             subItems: [{ label: 'Work', href: '/pinned/work' }],
//          },
//       ],
//    },
//    {
//       id: 2,
//       title: 'My work',
//       items: [
//          {
//             icon: <IoRocketOutline size={16} />,
//             label: 'Sales accelerator',
//             href: '/sales-accelerator',
//             visible: '',
//          },
//          {
//             icon: <MdDashboard size={16} />,
//             label: 'Dashboards',
//             href: '/dashboard',
//             visible: '',
//          },
//          {
//             icon: <MdOutlineNoteAlt size={16} />,
//             label: 'Activities',
//             href: '/activities',
//             visible: '',
//          },
//       ],
//    },
//    {
//       id: 3,
//       title: 'Customers',
//       items: [
//          {
//             icon: <RiFileCopyLine size={16} />,
//             label: 'Accounts',
//             href: 'account',
//             visible: '',
//          },
//          {
//             icon: <LuUserRound size={16} />,
//             label: 'Contacts',
//             href: '/contacts',
//             visible: '',
//          },
//       ],
//    },
//    {
//       id: 4,
//       title: 'Sales',
//       items: [
//          {
//             icon: <PiPhoneIncoming size={16} />,
//             label: 'Leads',
//             href: '/',
//             visible: '',
//          },
//          {
//             icon: <SlNotebook size={16} />,
//             label: 'Opportunities',
//             href: '/opportunities',
//             visible: '',
//          },
//          {
//             icon: <LuUserCog size={16} />,
//             label: 'Competitors',
//             href: '/competitors',
//             visible: '',
//          },
//       ],
//    },
//    {
//       id: 5,
//       title: 'Collateral',
//       items: [
//          {
//             icon: <PiNotebookLight size={16} />,
//             label: 'Quotes',
//             href: '/quotes',
//             visible: '',
//          },
//          {
//             icon: <PiNoteBold size={16} />,
//             label: 'Orders',
//             href: '/orders',
//             visible: '',
//          },
//          {
//             icon: <PiNoteBlankBold size={16} />,
//             label: 'Invoices',
//             href: '/invoices',
//             visible: '',
//          },
//          {
//             icon: <IoCubeOutline size={16} />,
//             label: 'Products',
//             href: '/products',
//             visible: '',
//          },
//          {
//             icon: <RiUDiskFill size={16} />,
//             label: 'Sales Literature',
//             href: '/sales-literature',
//             visible: '',
//          },
//       ],
//    },
//    {
//       id: 6,
//       title: 'Marketing',
//       items: [
//          {
//             icon: <LiaBullhornSolid size={16} />,
//             label: 'Marketing lists',
//             href: '/marketing',
//             visible: '',
//          },
//          {
//             icon: <FaBullhorn size={16} />,
//             label: 'Quick Campaigns',
//             href: '/quick-campaigns',
//             visible: '',
//          },
//       ],
//    },
//    {
//       id: 7,
//       title: 'Performances',
//    },
// ];

// const Menu = () => {
//    const [openDropdown, setOpenDropdown] = useState(null);
//    const location = useLocation();

//    const toggleDropdown = (label) => {
//       setOpenDropdown(openDropdown === label ? null : label); // Toggle the dropdown
//    };
//    return (
//       <div className="text-sm py-2">
//          {menuItems.map((menu) => (
//             <div className="flex flex-col mb-2" key={menu.id}>
//                {menu.title && (
//                   <span className="hidden   lg:block text-gray-700 font-semibold">
//                      {menu.title}
//                   </span>
//                )}
//                {menu.items?.map((item) => (
//                   <div key={item.label} className="relative">
//                      <div
//                         className={
//                            location.pathname == item.href
//                               ? md:flex w-full items-center cursor-pointer justify-between lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-gray-200 hover:text-gray-600 ${
//                                    item.subItems ? 'cursor-pointer' : ''
//                                 }
//                               : md:flex w-full items-center cursor-pointer justify-between lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-gray-400 hover:text-gray-600 ${
//                                    item.subItems ? 'cursor-pointer' : ''
//                                 }
//                         }
//                         onClick={() =>
//                            item.subItems && toggleDropdown(item.label)
//                         }
//                      >
//                         <div className="flex items-center gap-2">
//                            <span className="text-[#939393] font-bold">
//                               {item.icon}
//                            </span>
//                            <span className="hidden lg:block text-xs">
//                               {item.label}
//                            </span>
//                         </div>
//                         {/* Dropdown arrow */}
//                         {item.subItems && (
//                            <span className="text-[#939393]">
//                               {openDropdown === item.label ? (
//                                  <MdOutlineKeyboardArrowUp />
//                               ) : (
//                                  <MdOutlineKeyboardArrowDown />
//                               )}
//                            </span>
//                         )}
//                      </div>

//                      {/* Sub-menu items */}
//                      {openDropdown === item.label && item.subItems && (
//                         <div className="ml-8 mt-2">
//                            {item.subItems.map((subItem) => (
//                               <Link
//                                  href={subItem.href}
//                                  key={subItem.label}
//                                  className="block py-1 text-gray-500 hover:bg-black rounded-md px-2 hover:text-gray-700"
//                               >
//                                  {subItem.label}
//                               </Link>
//                            ))}
//                         </div>
//                      )}
//                   </div>
//                ))}
//             </div>
//          ))}
//       </div>
//    );
// };

// export default Menu;