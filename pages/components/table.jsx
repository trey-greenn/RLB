import React, { useState } from 'react';import data from '../data/data.json';

const CollapsibleTable = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="overflow-x-auto p-8">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="w-1/2 py-3 px-4 uppercase font-semibold text-sm">Entity</th>
            <th className="w-1/2 py-3 px-4 uppercase font-semibold text-sm">Document Type</th>
            <th className="w-1/2 py-3 px-4 uppercase font-semibold text-sm">Year</th>

          </tr>
        </thead>
        <tbody>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <tr className="bg-gray-100 hover:bg-gray-200 cursor-pointer" onClick={toggleVisibility}>
            <td className="py-3 px-4">{item.entity}</td>
            <td className="py-3 px-4">{item.document_type[0]}</td>
            <td className="py-3 px-4">{item.presence[0]}</td>
          </tr>
          {isVisible && item.document_type.map((docType, i) => (
            <tr key={i} className="bg-white">
              <td className="py-3 px-4">{docType}</td>
              <td className="py-3 px-4">Detail about {docType}</td>
              <td className="py-3 px-4">{item.presence[i]}</td>
            </tr>
          ))}
        </React.Fragment>
      ))}
    </tbody>
      </table>
    </div>
  );
};

export default CollapsibleTable;
