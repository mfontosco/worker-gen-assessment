import HeaderPanel from '@/components/HeaderPanel';
import Layout from '@/components/Layout';
import Table from '@/components/Table';
import { TopLead } from '@/components/TopLead';
const tableData = [
   {
      id: 1,
      name: 'John Doe',
      dateOfBirth: '1995-05-24',
      role: 'Web Developer',
      salary: '$120,000',
   },
   {
      id: 2,
      name: 'Jane Doe',
      dateOfBirth: '1980-11-04',
      role: 'Web Designer',
      salary: '$100,000',
   },
   {
      id: 3,
      name: 'Gary Barlow',
      dateOfBirth: '1982-01-20',
      role: 'Singer',
      salary: '$20,000',
   },
   {
      id: 4,
      name: 'Sarah Connor',
      dateOfBirth: '1990-06-15',
      role: 'Marketing Manager',
      salary: '$90,000',
   },
   {
      id: 5,
      name: 'Michael Scott',
      dateOfBirth: '1975-03-15',
      role: 'Regional Manager',
      salary: '$85,000',
   },
   {
      id: 6,
      name: 'Dwight Schrute',
      dateOfBirth: '1978-01-20',
      role: 'Assistant to the Regional Manager',
      salary: '$55,000',
   },
   {
      id: 7,
      name: 'Pam Beesly',
      dateOfBirth: '1983-08-25',
      role: 'Receptionist',
      salary: '$45,000',
   },
   {
      id: 8,
      name: 'Jim Halpert',
      dateOfBirth: '1985-10-10',
      role: 'Sales Representative',
      salary: '$70,000',
   },
   {
      id: 9,
      name: 'Kelly Kapoor',
      dateOfBirth: '1984-12-05',
      role: 'Customer Service Rep',
      salary: '$50,000',
   },
   {
      id: 10,
      name: 'Andy Bernard',
      dateOfBirth: '1977-09-17',
      role: 'Sales Manager',
      salary: '$80,000',
   },
];

export default function Home() {
   return (
      <div className="bg-white text-black min-h-screen">
         <TopLead />
         <Table />
      </div>
   );
}
