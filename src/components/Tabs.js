/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
const tabs = [
   { name: 'Engage', href: '#', current: false },
   { name: 'Research', href: '#', current: true },
];

function classNames(...classes) {
   return classes.filter(Boolean).join(' ');
}

export default function Tabs() {
   return (
      <div>
         <div className="sm:hidden">
            <label htmlFor="tabs" className="sr-only">
               Select a tab
            </label>
            {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
            <select
               id="tabs"
               name="tabs"
               className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
               defaultValue={tabs.find((tab) => tab.current).name}
            >
               {tabs.map((tab) => (
                  <option key={tab.name}>{tab.name}</option>
               ))}
            </select>
         </div>
         <div className="hidden sm:block">
            <nav
               className="isolate flex divide-x  rounded-lg "
               aria-label="Tabs"
            >
               {tabs.map((tab, tabIdx) => (
                  <a
                     key={tab.name}
                     href={tab.href}
                     className={classNames(
                        tab.current
                           ? 'text-gray-900'
                           : 'text-gray-500 hover:text-gray-700',
                        tabIdx === 0 ? 'rounded-l-lg' : '',
                        tabIdx === tabs.length - 1 ? 'rounded-r-sm' : '',
                        'group relative min-w-0 flex-1 overflow-hidden bg-white py-2 px-4 text-center text-xs font-medium hover:bg-gray-50 focus:z-10'
                     )}
                     aria-current={tab.current ? 'page' : undefined}
                  >
                     <span>{tab.name}</span>
                     <span
                        aria-hidden="true"
                        className={classNames(
                           tab.current ? 'bg-[#3a55d1]' : 'bg-transparent',
                           'absolute inset-x-0 bottom-0 h-0.5'
                        )}
                     />
                  </a>
               ))}
            </nav>
         </div>
      </div>
   );
}
