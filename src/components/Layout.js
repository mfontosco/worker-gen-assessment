// import { Fragment, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Dialog, Menu, Transition } from '@headlessui/react';
// import {
//    Bars3Icon,
//    BellIcon,
//    Cog6ToothIcon,
//    FolderIcon,
//    HomeIcon,
//    UsersIcon,
//    XMarkIcon,
// } from '@heroicons/react/24/outline';
// import {
//    ChevronDownIcon,
//    MagnifyingGlassIcon,
// } from '@heroicons/react/20/solid';

// const navigation = [
//    { name: 'Overview', href: '/dashboard', icon: HomeIcon, current: false },
//    { name: 'Settings', href: '#', icon: Cog6ToothIcon, current: false },
//    { name: 'Billing', href: '#', icon: FolderIcon, current: false },
// ];
// const teams = [
//    {
//       id: 1,
//       name: 'Orders',
//       href: '/dashboard-orders',
//       initial: 'O',
//       current: false,
//    },
//    {
//       id: 2,
//       name: 'Auction',
//       href: '/dashboard-auction',
//       initial: 'A',
//       current: false,
//       submenu: [
//          { name: 'AuctionList', href: '/dashboard-auction' },
//          { name: 'Create Auction', href: '/dashboard-create-auction' },
//          { name: 'Market Place', href: '/dashboard-create-auction' },
//       ],
//    },
//    { id: 3, name: 'Earnings', href: '#', initial: 'E', current: false },
//    {
//       id: 4,
//       name: 'Chats',
//       href: '/dashboard-chat',
//       initial: 'C',
//       current: false,
//    },
//    { id: 5, name: 'Favorites', href: '#', initial: 'F', current: false },
// ];

// const userNavigation = [
//    //  { name: 'Your profile', href: '#' },
//    { name: 'Sign out', href: '#' },
// ];

// function classNames(...classes) {
//    return classes.filter(Boolean).join(' ');
// }

// export default function Layout({ children }) {
//    const [sidebarOpen, setSidebarOpen] = useState(false);
//    const [openSubmenu, setOpenSubmenu] = useState(null);

//    return (
//       <>
//          <div>
//             <Transition.Root show={sidebarOpen} as={Fragment}>
//                <Dialog
//                   as="div"
//                   className="relative z-50 lg:hidden"
//                   onClose={setSidebarOpen}
//                >
//                   <Transition.Child
//                      as={Fragment}
//                      enter="transition-opacity ease-linear duration-300"
//                      enterFrom="opacity-0"
//                      enterTo="opacity-100"
//                      leave="transition-opacity ease-linear duration-300"
//                      leaveFrom="opacity-100"
//                      leaveTo="opacity-0"
//                   >
//                      <div className="fixed inset-0 bg-gray-900/80" />
//                   </Transition.Child>

//                   <div className="fixed inset-0 flex">
//                      <Transition.Child
//                         as={Fragment}
//                         enter="transition ease-in-out duration-300 transform"
//                         enterFrom="-translate-x-full"
//                         enterTo="translate-x-0"
//                         leave="transition ease-in-out duration-300 transform"
//                         leaveFrom="translate-x-0"
//                         leaveTo="-translate-x-full"
//                      >
//                         <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
//                            <Transition.Child
//                               as={Fragment}
//                               enter="ease-in-out duration-300"
//                               enterFrom="opacity-0"
//                               enterTo="opacity-100"
//                               leave="ease-in-out duration-300"
//                               leaveFrom="opacity-100"
//                               leaveTo="opacity-0"
//                            >
//                               <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
//                                  <button
//                                     type="button"
//                                     className="-m-2.5 p-2.5"
//                                     onClick={() => setSidebarOpen(false)}
//                                  >
//                                     <span className="sr-only">
//                                        Close sidebar
//                                     </span>
//                                     <XMarkIcon
//                                        className="h-6 w-6 text-white"
//                                        aria-hidden="true"
//                                     />
//                                  </button>
//                               </div>
//                            </Transition.Child>
//                            {/* Sidebar component, swap this element with another sidebar if you like */}
//                            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
//                               <div className="flex h-16 shrink-0 items-center">
//                                  <div className="company-logo">
//                                     <Link to="/" className="logo-dark">
//                                        <img
//                                           alt="AP Logo"
//                                           className="img-fluid"
//                                           src="/src/assets/APlogo3.png"
//                                        />
//                                     </Link>
//                                     {/* <Link to="/" className="logo-light">
//                                        <img
//                                           alt="Light Logo"
//                                           className="img-fluid"
//                                           src="/src/assets/logo-light.svg"
//                                        />
//                                     </Link> */}
//                                  </div>
//                               </div>
//                               <nav className="flex flex-1 flex-col">
//                                  <ul
//                                     role="list"
//                                     className="flex flex-1 flex-col gap-y-7"
//                                  >
//                                     <li>
//                                        <ul
//                                           role="list"
//                                           className="-mx-2 space-y-1"
//                                        >
//                                           {navigation.map((item) => (
//                                              <li key={item.name}>
//                                                 <a
//                                                    href={item.href}
//                                                    className={classNames(
//                                                       item.current
//                                                          ? 'bg-indigo-700 no-underline text-white'
//                                                          : 'text-indigo-200 no-underline hover:text-white hover:bg-indigo-700',
//                                                       'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
//                                                    )}
//                                                 >
//                                                    <item.icon
//                                                       className={classNames(
//                                                          item.current
//                                                             ? 'text-white'
//                                                             : 'text-indigo-200 group-hover:text-white',
//                                                          'h-6 w-6 shrink-0'
//                                                       )}
//                                                       aria-hidden="true"
//                                                    />
//                                                    {item.name}
//                                                 </a>
//                                              </li>
//                                           ))}
//                                        </ul>
//                                     </li>
//                                     <li>
//                                        <div className="text-xs font-semibold leading-6 text-indigo-200">
//                                           Dashboard
//                                        </div>

//                                        <ul
//                                           role="list"
//                                           className="-mx-2 mt-2 space-y-1"
//                                        >
//                                           {teams.map((team) => (
//                                              <li key={team.id}>
//                                                 <div>
//                                                    <button
//                                                       onClick={() =>
//                                                          setOpenSubmenu(
//                                                             openSubmenu ===
//                                                                team.id
//                                                                ? null
//                                                                : team.id
//                                                          )
//                                                       }
//                                                       className={classNames(
//                                                          'group flex w-full justify-between items-center gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
//                                                          team.current
//                                                             ? 'bg-indigo-700 text-white'
//                                                             : 'text-black hover:text-white hover:bg-indigo-700'
//                                                       )}
//                                                    >
//                                                       <div className="flex items-center gap-x-3">
//                                                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white">
//                                                             {team.initial}
//                                                          </span>
//                                                          <span className="truncate">
//                                                             {team.name}
//                                                          </span>
//                                                       </div>
//                                                       {team.submenu && (
//                                                          <ChevronDownIcon
//                                                             className={`h-5 w-5 ${
//                                                                openSubmenu ===
//                                                                team.id
//                                                                   ? 'rotate-180 transform'
//                                                                   : ''
//                                                             }`}
//                                                             aria-hidden="true"
//                                                          />
//                                                       )}
//                                                    </button>
//                                                    {/* Submenu */}
//                                                    {team.submenu &&
//                                                       openSubmenu ===
//                                                          team.id && (
//                                                          <ul className="mt-1 ml-4 space-y-1">
//                                                             {team.submenu.map(
//                                                                (
//                                                                   submenuItem
//                                                                ) => (
//                                                                   <li
//                                                                      key={
//                                                                         submenuItem.name
//                                                                      }
//                                                                   >
//                                                                      <a
//                                                                         href={
//                                                                            submenuItem.href
//                                                                         }
//                                                                         className="block rounded-md p-2 text-sm font-medium text-black hover:bg-indigo-700 hover:text-white"
//                                                                      >
//                                                                         {
//                                                                            submenuItem.name
//                                                                         }
//                                                                      </a>
//                                                                   </li>
//                                                                )
//                                                             )}
//                                                          </ul>
//                                                       )}
//                                                 </div>
//                                              </li>
//                                           ))}
//                                        </ul>
//                                     </li>
//                                     {/* <li className="mt-auto">
//                                        <a
//                                           href="#"
//                                           className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
//                                        >
//                                           <Cog6ToothIcon
//                                              className="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
//                                              aria-hidden="true"
//                                           />
//                                           Settings
//                                        </a>
//                                     </li> */}
//                                  </ul>
//                               </nav>
//                            </div>
//                         </Dialog.Panel>
//                      </Transition.Child>
//                   </div>
//                </Dialog>
//             </Transition.Root>

//             {/* Static sidebar for desktop */}
//             <div className="hidden lg:fixed lg:inset-y-0  lg:z-50 lg:flex lg:w-72 lg:flex-col">
//                {/* Sidebar component, swap this element with another sidebar if you like */}
//                <div className="flex grow flex-col gap-y-5 bg-indigo-600  overflow-y-auto  pt-10  px-6 pb-4">
//                   <div className="flex justify-center no-underline">
//                      <Link to="/" className="logo-dark">
//                         <img
//                            alt="AP Logo"
//                            a
//                            className="img-fluid"
//                            src="/src/assets/APlogo3.png"
//                         />
//                      </Link>
//                   </div>
//                   <nav className="flex flex-1 w-full flex-col">
//                      <ul
//                         role="list"
//                         className="flex flex-1 w-full flex-col gap-y-7"
//                      >
//                         <li>
//                            <ul role="list" className="-mx-2 space-y-1">
//                               {navigation.map((item) => (
//                                  <li key={item.name}>
//                                     <Link
//                                        to={item.href}
//                                        className={classNames(
//                                           item.current
//                                              ? 'bg-indigo-700 text-white'
//                                              : 'text-white hover:text-white hover:bg-indigo-700',
//                                           'no-underline group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
//                                        )}
//                                     >
//                                        <item.icon
//                                           className={classNames(
//                                              item.current
//                                                 ? 'text-white'
//                                                 : 'text-indigo-200 group-hover:text-white',
//                                              'h-6 w-6 shrink-0'
//                                           )}
//                                           aria-hidden="true"
//                                        />
//                                        {item.name}
//                                     </Link>
//                                  </li>
//                               ))}
//                            </ul>
//                         </li>
//                         <li>
//                            <div className="text-md font-semibold leading-6 text-black">
//                               Dashboard
//                            </div>
//                            <ul role="list" className="-mx-2 mt-2 space-y-1">
//                               {teams.map((team) => (
//                                  <li key={team.id}>
//                                     <div>
//                                        <Link
//                                           to={team.submenu ? '#' : team.href} // Prevent navigation for submenu
//                                           onClick={(e) => {
//                                              if (team.submenu) {
//                                                 e.preventDefault();
//                                                 setOpenSubmenu(
//                                                    openSubmenu === team.id
//                                                       ? null
//                                                       : team.id
//                                                 );
//                                              }
//                                           }}
//                                           className={classNames(
//                                              'no-underline group flex w-full justify-between items-center gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
//                                              team.current
//                                                 ? 'bg-indigo-700 text-white'
//                                                 : 'text-white hover:text-white hover:bg-indigo-700'
//                                           )}
//                                        >
//                                           <div className="flex items-center gap-x-3">
//                                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white">
//                                                 {team.initial}
//                                              </span>
//                                              <span className="truncate">
//                                                 {team.name}
//                                              </span>
//                                           </div>
//                                           {team.submenu && (
//                                              <ChevronDownIcon
//                                                 className={`h-5 w-5 ${
//                                                    openSubmenu === team.id
//                                                       ? 'rotate-180 transform'
//                                                       : ''
//                                                 }`}
//                                                 aria-hidden="true"
//                                              />
//                                           )}
//                                        </Link>
//                                        {/* Submenu */}
//                                        {team.submenu &&
//                                           openSubmenu === team.id && (
//                                              <ul className="mt-1 ml-4 space-y-1">
//                                                 {team.submenu.map(
//                                                    (submenuItem) => (
//                                                       <li
//                                                          key={submenuItem.name}
//                                                       >
//                                                          <Link
//                                                             to={
//                                                                submenuItem.href
//                                                             }
//                                                             className="no-underline block rounded-md p-2 text-sm font-medium text-white hover:bg-indigo-700 hover:text-white"
//                                                          >
//                                                             {submenuItem.name}
//                                                          </Link>
//                                                       </li>
//                                                    )
//                                                 )}
//                                              </ul>
//                                           )}
//                                     </div>
//                                  </li>
//                               ))}
//                            </ul>
//                         </li>
//                      </ul>
//                   </nav>
//                </div>
//             </div>

//             <div className="lg:pl-72">
//                <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
//                   <button
//                      type="button"
//                      className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
//                      onClick={() => setSidebarOpen(true)}
//                   >
//                      <span className="sr-only">Open sidebar</span>
//                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
//                   </button>

//                   {/* Separator */}
//                   <div
//                      className="h-6 w-px bg-gray-900/10 lg:hidden"
//                      aria-hidden="true"
//                   />

//                   <div className="flex flex-1 justify-end gap-x-4 self-stretch lg:gap-x-6">
//                      {/* <div className="flex items-center gap-2 d-lg-flex d-none">
//                         <ul className="flex gap-2 items-center">
//                            <li>
//                               <Link to="/app-store" className="drop-down">
//                                  App Store
//                               </Link>
//                            </li>
//                            <li>
//                               <Link to="/web-store" className="drop-down">
//                                  Web Store
//                               </Link>
//                            </li>
//                            <li>
//                               <Link to="/resource-store" className="drop-down">
//                                  Resource Store
//                               </Link>
//                            </li>
//                            <li>
//                               <Link to="#" className="drop-down"></Link>
//                            </li>
//                            <li>
//                               <Link to="#" className="drop-down"></Link>
//                            </li>
//                         </ul>
//                      </div> */}

//                      <div className="flex items-center gap-x-4 lg:gap-x-6">
//                         <button
//                            type="button"
//                            className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
//                         >
//                            <span className="sr-only">View notifications</span>
//                            <BellIcon className="h-6 w-6" aria-hidden="true" />
//                         </button>

//                         {/* Separator */}
//                         <div
//                            className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
//                            aria-hidden="true"
//                         />

//                         {/* Profile dropdown */}
//                         <Menu as="div" className="relative"></Menu>
//                      </div>
//                   </div>
//                </div>

//                <main className="">
//                   <div className="px-4 sm:px-6 ">{children}</div>
//                </main>
//             </div>
//          </div>
//       </>
//    );
// }
