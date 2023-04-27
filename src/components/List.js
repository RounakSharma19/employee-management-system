import React from "react";

function List({  handleEdit, handleDelete, data }) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: null,
  });
  data.sort(function (a, b) {
    return a.salary - b.salary;
  });
  data.sort(function (a, b) {
    return a.firstName - b.firstName;
  });

  return (
    <div className="flex shadow border-b">
      <table className="min-w-full shadow ">
        <thead className="bg-gray-50">
          <tr>
            <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
              No.
            </th>
            <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
              First Name
            </th>

            <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
              Last Name
            </th>
            <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
              Email
            </th>
            <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
              Salary
            </th>
            <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
              Department
            </th>
            <th
              colSpan={2}
              className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {data?.length > 0 ? (
            data?.map((data, i) => (
              <tr key={data?.id}>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{i + 1}</div>
                </td>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{data?.firstName}</div>
                </td>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{data?.lastName}</div>
                </td>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{data?.email}</div>
                </td>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">
                    {formatter.format(data?.salary)}
                  </div>
                </td>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">
                    {data?.department}
                  </div>
                </td>
                <td className="text-left px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleEdit(data?.id)}
                    className="button muted-button"
                  >
                    <div className="text-indigo-600 hover:text-indigo-800  hover:cursor-pointer">
                      Edit
                    </div>
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(data?.id)}
                    className="button muted-button"
                  >
                    <div className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer">
                      Delete
                    </div>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No Employees</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default List;
