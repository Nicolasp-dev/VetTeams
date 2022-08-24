import { AiFillDelete } from "react-icons/ai";
import { GeneralContext } from "../../../contexts/GeneralContext";
import { useContext } from "react";

const petTable = ({ records }) => {
  const { petsCtx } = useContext(GeneralContext);
  const { deleteRecordHandler } = petsCtx;
  return (
    <div className="flex flex-col mt-10">
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-x-scroll sm:overflow-hidden border rounded-md">
            <table className="min-w-full divide-y divide-gray-200 ">
              <thead className="bg-[#166060]">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                  >
                    Diagnosis
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                  >
                    Treatment
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-white uppercase "
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className=" px-6 py-3 text-xs font-bold text-center text-white uppercase "
                  >
                    Remove
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {records?.map((data) => {
                  return (
                    <tr key={data.record}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {data.record}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {data.diagnosis}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {data.treatment}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {data.date}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        <AiFillDelete
                          className="mx-auto cursor-pointer text-dark-green sm:text-[1.2rem] hover:scale-[1.1] drop-shadow-lg shadow-black "
                          onClick={() => deleteRecordHandler(data.id, data.record)}
                        />
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
};

export default petTable;
