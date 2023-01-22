import React from "react";
import { IoRocketOutline } from "react-icons/io5";

export default function Table({ data }) {
  return (
    <div className="flex flex-col mx-40 my-5">
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr className="text-left">
                  <th
                    scope="col"
                    className="px-8 py-3 text-md font-bold text-gray-700 uppercase "
                  ></th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-md font-bold text-gray-700 uppercase "
                  >
                    Field
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-md font-bold text-gray-700 uppercase "
                  >
                    Value
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-green-600">
                {Object.keys(data).map((key) => {
                  const field = key;
                  const value = data[key];
                  return (
                    <tr
                      key={key}
                      className="hover:bg-green-700 transition-all duration-300 shadow-lg"
                    >
                      <td className="px-6 py-4 text-lg font-medium text-gray-100 whitespace-nowrap">
                        <IoRocketOutline className="text-green-500" />
                      </td>
                      <td className="px-6 py-4 text-lg text-gray-100 whitespace-nowrap uppercase">
                        {field}
                      </td>
                      <td className="px-6 py-4 text-lg text-gray-100 whitespace-nowrap">
                        {value}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}