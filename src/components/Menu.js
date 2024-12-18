'use client';
import { useState } from 'react';
import Link from 'next/link';
import { LiaHomeSolid } from 'react-icons/lia';
import { FiClock } from 'react-icons/fi';
import { LiaThumbtackSolid } from 'react-icons/lia';
import { IoRocketOutline } from 'react-icons/io5';
import { MdDashboard } from 'react-icons/md';
import { MdOutlineNoteAlt } from 'react-icons/md';
import { SiWikibooks } from 'react-icons/si';
import { LuUserRound } from 'react-icons/lu';
import { BsTelephoneX } from 'react-icons/bs';
import { SlNotebook } from 'react-icons/sl';
import { LuUserCog } from 'react-icons/lu';
import { PiNotebookLight } from 'react-icons/pi';
import { PiNoteBold } from 'react-icons/pi';
import { PiNoteBlankBold } from 'react-icons/pi';
import { IoCubeOutline } from 'react-icons/io5';
import { RiUDiskFill } from 'react-icons/ri';
import { LiaBullhornSolid } from 'react-icons/lia';
import { FaBullhorn } from 'react-icons/fa';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';

const menuItems = [
   {
      items: [
         {
            icon: <LiaHomeSolid size={20} />,
            label: 'Home',
            href: '/',
            visible: '',
         },
         {
            icon: <FiClock size={20} />,
            label: 'Recent',
            href: '/recent',
            dropdown: <MdOutlineKeyboardArrowDown />,
            subItems: [{ label: 'Today', href: '/recent/today' }],
         },
         {
            icon: <LiaThumbtackSolid size={20} />,
            label: 'Pinned',
            href: '/pinned',
            dropdown: <MdOutlineKeyboardArrowDown />,
            subItems: [{ label: 'Work', href: '/pinned/work' }],
         },
      ],
   },
   {
      title: 'My work',
      items: [
         {
            icon: <IoRocketOutline size={20} />,
            label: 'Sales accelerator',
            href: '/sales-accelerator',
            visible: '',
         },
         {
            icon: <MdDashboard size={20} />,
            label: 'Dashboards',
            href: '/dashboard',
            visible: '',
         },
         {
            icon: <MdOutlineNoteAlt size={20} />,
            label: 'Activities',
            href: '/activities',
            visible: '',
         },
      ],
   },
   {
      title: 'Customers',
      items: [
         {
            icon: <SiWikibooks size={20} />,
            label: 'Accounts',
            href: 'account',
            visible: '',
         },
         {
            icon: <LuUserRound size={20} />,
            label: 'Contacts',
            href: '/contacts',
            visible: '',
         },
      ],
   },
   {
      title: 'Sales',
      items: [
         {
            icon: <BsTelephoneX size={20} />,
            label: 'Leads',
            href: '/leads',
            visible: '',
         },
         {
            icon: <SlNotebook size={20} />,
            label: 'Opportunities',
            href: '/opportunities',
            visible: '',
         },
         {
            icon: <LuUserCog size={20} />,
            label: 'Competitors',
            href: '/competitors',
            visible: '',
         },
      ],
   },
   {
      title: 'Collateral',
      items: [
         {
            icon: <PiNotebookLight size={20} />,
            label: 'Quotes',
            href: '/quotes',
            visible: '',
         },
         {
            icon: <PiNoteBold size={20} />,
            label: 'Orders',
            href: '/orders',
            visible: '',
         },
         {
            icon: <PiNoteBlankBold size={20} />,
            label: 'Invoices',
            href: '/invoices',
            visible: '',
         },
         {
            icon: <IoCubeOutline size={20} />,
            label: 'Products',
            href: '/products',
            visible: '',
         },
         {
            icon: <RiUDiskFill size={20} />,
            label: 'Sales Literature',
            href: '/sales-literature',
            visible: '',
         },
      ],
   },
   {
      title: 'Marketing',
      items: [
         {
            icon: <LiaBullhornSolid size={20} />,
            label: 'Marketing lists',
            href: '/marketing',
            visible: '',
         },
         {
            icon: <FaBullhorn size={20} />,
            label: 'Quick Campaigns',
            href: '/quick-campaigns',
            visible: '',
         },
      ],
   },
   {
      title: 'Performances',
   },
];

const Menu = () => {
   const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open

   const toggleDropdown = (label) => {
      setOpenDropdown(openDropdown === label ? null : label); // Toggle the dropdown
   };
   return (
      <div className="text-sm py-2">
         {menuItems.map((menu) => (
            <div className="flex flex-col" key={menu.title}>
               {menu.title && (
                  <span className="hidden lg:block text-gray-700 font-semibold">
                     {menu.title}
                  </span>
               )}
               {menu.items?.map((item) => (
                  <div key={item.label} className="relative">
                     {/* Main menu item */}
                     <div
                        className={`md:flex w-full items-center justify-between lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight ${
                           item.subItems ? 'cursor-pointer' : ''
                        }`}
                        onClick={() =>
                           item.subItems && toggleDropdown(item.label)
                        }
                     >
                        <div className="flex items-center gap-4">
                           <span className="text-[#939393]">{item.icon}</span>
                           <span className="hidden lg:block">{item.label}</span>
                        </div>
                        {/* Dropdown arrow */}
                        {item.subItems && (
                           <span className="text-[#939393]">
                              {openDropdown === item.label ? (
                                 <MdOutlineKeyboardArrowUp />
                              ) : (
                                 <MdOutlineKeyboardArrowDown />
                              )}
                           </span>
                        )}
                     </div>

                     {/* Sub-menu items */}
                     {openDropdown === item.label && item.subItems && (
                        <div className="ml-8 mt-2">
                           {item.subItems.map((subItem) => (
                              <Link
                                 href={subItem.href}
                                 key={subItem.label}
                                 className="block py-1 text-gray-500 hover:text-gray-700"
                              >
                                 {subItem.label}
                              </Link>
                           ))}
                        </div>
                     )}
                  </div>
               ))}
            </div>
         ))}
      </div>
   );
};

export default Menu;
