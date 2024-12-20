'use client';
import { useRef, useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { GoArrowDown } from 'react-icons/go';
import Image from 'next/image';
import copilot from '../../public/images/copilotIcon.svg';

const people = [
   {
      id: 1,
      name: 'John Doe',
      created_on: '1995-05-24',
      topic: 'Web Developer',
      status: 'New',
   },
   {
      id: 2,
      name: 'Jane Doe',
      created_on: '1980-11-04',
      topic: 'Web Designer',
      status: 'New',
   },
   {
      id: 3,
      name: 'Gary Barlow',
      created_on: '1982-01-20',
      topic: 'Singer',
      status: 'New',
   },
   {
      id: 4,
      name: 'Sarah Connor',
      created_on: '1990-06-15',
      topic: 'Marketing Manager',
      status: 'New',
   },
   {
      id: 5,
      name: 'Michael Scott',
      created_on: '1975-03-15',
      topic: 'Regional Manager',
      status: 'New',
   },
   {
      id: 6,
      name: 'Dwight Schrute',
      created_on: '1978-01-20',
      topic: 'Assistant to the Regional Manager',
      status: 'New',
   },
   {
      id: 7,
      name: 'Pam Beesly',
      created_on: '1983-08-25',
      topic: 'Receptionist',
      status: 'New',
   },
   {
      id: 8,
      name: 'Jim Halpert',
      created_on: '1985-10-10',
      topic: 'Sales Representative',
      status: 'New',
   },
   {
      id: 9,
      name: 'Kelly Kapoor',
      created_on: '1984-12-05',
      topic: 'Customer Service Rep',
      status: 'New',
   },
   {
      id: 10,
      name: 'Andy Bernard',
      created_on: '1977-09-17',
      topic: 'Sales Manager',
      status: 'New',
   },
];

function classNames(...classes) {
   return classes.filter(Boolean).join(' ');
}

export default function Table({ onchangeHandler }) {
   const checkbox = useRef();
   const [checked, setChecked] = useState(false);
   const [indeterminate, setIndeterminate] = useState(false);
   const [selectedPeople, setSelectedPeople] = useState([]);

   //  useLayoutEffect(() => {
   //     const isIndeterminate =
   //        selectedPeople.length > 0 && selectedPeople.length < people.length;
   //     setChecked(selectedPeople.length === people.length);
   //     setIndeterminate(isIndeterminate);
   //     checkbox.current.indeterminate = isIndeterminate;
   //  }, [selectedPeople]);

   function toggleAll() {
      setSelectedPeople(checked || indeterminate ? [] : people);
      setChecked(!checked && !indeterminate);
      setIndeterminate(false);
   }

   return (
      <div className="shadow-lg border-t border-2 mt-4 rounded-lg py-4">
         <div className="ml-4">
            <div className="relative mt-2 w-[30%] flex items-center">
               <input
                  placeholder="Sort,filter and search with copilot"
                  type="text"
                  name="search"
                  id="search"
                  className="block w-full pl-3 px-0  rounded-md border-0 py-1 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
               />
               <div className="absolute inset-y-0 right-0 flex py-1 pr-1.5 px-0">
                  <kbd className="inline-flex items-center rounded px-1 font-sans text-xs text-gray-400">
                     <Image src={copilot} alt="" width={15} />
                  </kbd>
               </div>
            </div>
         </div>
         <div className="px-4 sm:px-6 lg:px-8">
            <div className=" flow-root">
               <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                     <div className="relative">
                        <table className="min-w-full table-fixed divide-y divide-gray-300">
                           <thead>
                              <tr>
                                 <th
                                    scope="col"
                                    className="relative px-7 sm:w-12 sm:px-6"
                                 ></th>
                                 <th
                                    scope="col"
                                    className="min-w-[12rem] py-3.5 pr-3 text-left text-xs font-semibold text-gray-900"
                                 >
                                    <div className="flex justify-start">
                                       <h3>Name</h3>
                                       <MdOutlineKeyboardArrowDown
                                          size={20}
                                          className="text-[#939393]"
                                       />
                                    </div>
                                 </th>
                                 <th
                                    scope="col"
                                    className="px-3 py-3.5 text-left text-xs font-semibold text-gray-900"
                                 >
                                    <div className="flex justify-start">
                                       Topic
                                       <MdOutlineKeyboardArrowDown
                                          size={20}
                                          className="text-[#939393]"
                                       />
                                    </div>
                                 </th>
                                 <th
                                    scope="col"
                                    className="px-3 py-3.5 text-left text-xs font-semibold text-gray-900"
                                 >
                                    <div className="flex justify-start">
                                       Status Reason
                                       <MdOutlineKeyboardArrowDown
                                          size={20}
                                          className="text-[#939393]"
                                       />
                                    </div>
                                 </th>
                                 <th
                                    scope="col"
                                    className="px-3 py-3.5 text-left text-xs font-semibold text-gray-900"
                                 >
                                    <div className="flex justify-start">
                                       Created on
                                       <GoArrowDown
                                          onClick={onchangeHandler}
                                          size={18}
                                          className="text-[#939393] cursor-pointer"
                                       />
                                       <MdOutlineKeyboardArrowDown
                                          size={20}
                                          className="text-[#939393]"
                                       />
                                    </div>
                                 </th>
                              </tr>
                           </thead>
                           <tbody className="divide-y divide-gray-200 bg-white">
                              {people.map((person) => (
                                 <tr
                                    key={person.email}
                                    className={
                                       selectedPeople.includes(person)
                                          ? 'bg-gray-50'
                                          : undefined
                                    }
                                 >
                                    <td className="relative px-7 sm:w-12 sm:px-6">
                                       {selectedPeople.includes(person) && (
                                          <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
                                       )}
                                       <input
                                          type="checkbox"
                                          className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                          value={person.email}
                                          checked={selectedPeople.includes(
                                             person
                                          )}
                                          onChange={(e) =>
                                             setSelectedPeople(
                                                e.target.checked
                                                   ? [...selectedPeople, person]
                                                   : selectedPeople.filter(
                                                        (p) => p !== person
                                                     )
                                             )
                                          }
                                       />
                                    </td>
                                    <td
                                       className={classNames(
                                          'whitespace-nowrap py-4 pr-3 text-xs font-medium',
                                          selectedPeople.includes(person)
                                             ? 'text-indigo-600'
                                             : 'text-gray-900'
                                       )}
                                    >
                                       {person.name}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-500">
                                       {person.topic}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-500">
                                       {person.status}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-500">
                                       {person.created_on}
                                    </td>
                                 </tr>
                              ))}
                           </tbody>
                        </table>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
