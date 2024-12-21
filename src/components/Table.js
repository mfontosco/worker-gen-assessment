'use client';
import { useRef, useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { GoArrowDown } from 'react-icons/go';
import Image from 'next/image';
import copilot from '../../public/images/copilotIcon.svg';
import { people } from '../utils/data';
export default function Table({ onchangeHandler }) {
   const checkbox = useRef();
   const [checked, setChecked] = useState(false);
   const [indeterminate, setIndeterminate] = useState(false);
   const [selectedPeople, setSelectedPeople] = useState([]);
   const [searchQuery, setSearchQuery] = useState('');
   const [filterStatus, setFilterStatus] = useState(''); // Filter by status
   const [sortField, setSortField] = useState(''); // Field to sort by
   const [sortOrder, setSortOrder] = useState('asc'); // Ascending or descending

   // Search logic
   const handleSearch = (query) => {
      setSearchQuery(query.toLowerCase());
   };

   // Filter logic
   const handleFilter = (status) => {
      setFilterStatus(status);
   };

   // Sort logic
   const handleSort = (field) => {
      const order = sortField === field && sortOrder === 'asc' ? 'desc' : 'asc';
      setSortField(field);
      setSortOrder(order);
   };

   // Processed data
   const filteredAndSortedPeople = people
      .filter((person) => {
         // Apply search filter
         const matchesSearch =
            person.name.toLowerCase().includes(searchQuery) ||
            person.topic.toLowerCase().includes(searchQuery) ||
            person.status.toLowerCase().includes(searchQuery);

         // Apply status filter
         const matchesFilter = filterStatus
            ? person.status.toLowerCase() === filterStatus.toLowerCase()
            : true;

         return matchesSearch && matchesFilter;
      })
      .sort((a, b) => {
         if (!sortField) return 0; // No sorting
         const valueA = a[sortField];
         const valueB = b[sortField];
         if (sortOrder === 'asc') {
            return valueA > valueB ? 1 : -1;
         } else {
            return valueA < valueB ? 1 : -1;
         }
      });

   function toggleAll() {
      setSelectedPeople(checked || indeterminate ? [] : people);
      setChecked(!checked && !indeterminate);
      setIndeterminate(false);
   }

   return (
      <div className="shadow-lg border-t border-2 mt-4 rounded-lg py-4">
         <div className="ml-4">
            {/* Search Input */}
            <div className="relative mt-2 w-[80%] lg:w-[30%] flex items-center">
               <input
                  placeholder="Search by name, topic, or status"
                  type="text"
                  name="search"
                  id="search"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="block w-full pl-3 px-0 rounded-md border-0 py-1 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
               />
               <div className="absolute inset-y-0 right-0 flex py-1 pr-1.5 px-0">
                  <kbd className="inline-flex items-center rounded px-1 font-sans text-xs text-gray-400">
                     <Image src={copilot} alt="" width={15} />
                  </kbd>
               </div>
            </div>

            {/* Filter Dropdown */}
         </div>

         <div className="px-4 sm:px-6 lg:px-8">
            <div className="flow-root">
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
                                    onClick={() => handleSort('name')}
                                 >
                                    <div className="flex justify-start cursor-pointer">
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
                                    onClick={() => handleSort('topic')}
                                 >
                                    <div className="flex justify-start cursor-pointer">
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
                                    onClick={() => handleSort('created_on')}
                                 >
                                    <div className="flex justify-start cursor-pointer">
                                       Created on
                                       <GoArrowDown
                                          size={18}
                                          className="text-[#939393]"
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
                              {filteredAndSortedPeople.map((person) => (
                                 <tr
                                    key={person.id}
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
                                    <td className="whitespace-nowrap py-4 pr-3 text-xs font-medium text-gray-900">
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
