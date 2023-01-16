import React from "react";
import { IoRocketOutline } from "react-icons/io5";

export default function Table() {
  return (
    <div className="flex flex-col mx-40 my-5">
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full text-center">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-md font-bold text-center text-gray-700 uppercase "
                  >
                    
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-md font-bold text-center text-gray-700 uppercase "
                  >
                    Field
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-md font-bold text-center text-gray-700 uppercase "
                  >
                    Value
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-green-600">
                <tr className="hover:bg-green-700 transition-all duration-300">
                  <td className="px-6 py-4 text-lg font-medium text-gray-100 whitespace-nowrap">
                    <IoRocketOutline className="text-green-500" />
                  </td>
                  <td className="px-6 py-4 text-lg text-gray-100 whitespace-nowrap">
                    Name
                  </td>
                  <td className="px-6 py-4 text-lg text-gray-100 whitespace-nowrap">
                    Golam Mostafa
                  </td>
                </tr>
                <tr className="hover:bg-green-700 transition-all duration-300">
                  <td className="px-6 py-4 text-lg font-medium text-gray-100 whitespace-nowrap">
                    <IoRocketOutline className="text-green-500" />
                  </td>
                  <td className="px-6 py-4 text-lg text-gray-100 whitespace-nowrap">
                    Address
                  </td>
                  <td className="px-6 py-4 text-lg text-gray-100 whitespace-nowrap">
                    Majigacha, Adarsha Sadar, Cumilla
                  </td>
                </tr>
                <tr className="hover:bg-green-700 transition-all duration-300">
                  <td className="px-6 py-4 text-lg font-medium text-gray-100 whitespace-nowrap">
                    <IoRocketOutline className="text-green-500" />
                  </td>
                  <td className="px-6 py-4 text-lg text-gray-100 whitespace-nowrap">
                    Father's Name
                  </td>
                  <td className="px-6 py-4 text-lg text-gray-100 whitespace-nowrap">
                    Md. Shelim
                  </td>
                </tr>
                <tr className="hover:bg-green-700 transition-all duration-300">
                  <td className="px-6 py-4 text-lg font-medium text-gray-100 whitespace-nowrap">
                    <IoRocketOutline className="text-green-500" />
                  </td>
                  <td className="px-6 py-4 text-lg text-gray-100 whitespace-nowrap">
                    Mother's Name
                  </td>
                  <td className="px-6 py-4 text-lg text-gray-100 whitespace-nowrap">
                    Hazera Begum
                  </td>
                </tr>
                <tr className="hover:bg-green-700 transition-all duration-300">
                  <td className="px-6 py-4 text-lg font-medium text-gray-100 whitespace-nowrap">
                    <IoRocketOutline className="text-green-500" />
                  </td>
                  <td className="px-6 py-4 text-lg text-gray-100 whitespace-nowrap">
                    Gender
                  </td>
                  <td className="px-6 py-4 text-lg text-gray-100 whitespace-nowrap">
                    Male
                  </td>
                </tr>
                <tr className="hover:bg-green-700 transition-all duration-300">
                  <td className="px-6 py-4 text-lg font-medium text-gray-100 whitespace-nowrap">
                    <IoRocketOutline className="text-green-500" />
                  </td>
                  <td className="px-6 py-4 text-lg text-gray-100 whitespace-nowrap">
                    Date of Birth
                  </td>
                  <td className="px-6 py-4 text-lg text-gray-100 whitespace-nowrap">
                    18/01/1997
                  </td>
                </tr>
                <tr className="hover:bg-green-700 transition-all duration-300">
                  <td className="px-6 py-4 text-lg font-medium text-gray-100 whitespace-nowrap">
                    <IoRocketOutline className="text-green-500" />
                  </td>
                  <td className="px-6 py-4 text-lg text-gray-100 whitespace-nowrap">
                    Place of Birth
                  </td>
                  <td className="px-6 py-4 text-lg text-gray-100 whitespace-nowrap">
                    Cumilla
                  </td>
                </tr>
                <tr className="hover:bg-green-700 transition-all duration-300">
                  <td className="px-6 py-4 text-lg font-medium text-gray-100 whitespace-nowrap">
                    <IoRocketOutline className="text-green-500" />
                  </td>
                  <td className="px-6 py-4 text-lg text-gray-100 whitespace-nowrap">
                    Mobile
                  </td>
                  <td className="px-6 py-4 text-lg text-gray-100 whitespace-nowrap">
                    01516715333
                  </td>
                </tr>
                <tr className="hover:bg-green-700 transition-all duration-300">
                  <td className="px-6 py-4 text-lg font-medium text-gray-100 whitespace-nowrap">
                    <IoRocketOutline className="text-green-500" />
                  </td>
                  <td className="px-6 py-4 text-lg text-gray-100 whitespace-nowrap">
                    Email
                  </td>
                  <td className="px-6 py-4 text-lg text-gray-100 whitespace-nowrap">
                    mostafarmstu@gmail.com
                  </td>
                </tr>
                <tr className="hover:bg-green-700 transition-all duration-300">
                  <td className="px-6 py-4 text-lg font-medium text-gray-100 whitespace-nowrap">
                    <IoRocketOutline className="text-green-500" />
                  </td>
                  <td className="px-6 py-4 text-lg text-gray-100 whitespace-nowrap">
                    Nationality
                  </td>
                  <td className="px-6 py-4 text-lg text-gray-100 whitespace-nowrap">
                    Bangladeshi
                  </td>
                </tr>
                <tr className="hover:bg-green-700 transition-all duration-300">
                  <td className="px-6 py-4 text-lg font-medium text-gray-100 whitespace-nowrap">
                    <IoRocketOutline className="text-green-500" />
                  </td>
                  <td className="px-6 py-4 text-lg text-gray-100 whitespace-nowrap">
                    Religion
                  </td>
                  <td className="px-6 py-4 text-lg text-gray-100 whitespace-nowrap">
                    Islam
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
