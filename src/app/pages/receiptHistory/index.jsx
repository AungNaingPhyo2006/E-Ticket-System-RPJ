import React, { useState } from "react";
import { receiptData } from "../../api/apiDemoData";
import {  ChevronDown, ChevronUp } from "lucide-react";

const ReceiptHistory = () => {
  const [expandedDates, setExpandedDates] = useState({});

  if (!receiptData || !receiptData.receiptList || receiptData.receiptList.length === 0) {
    return <p>No receipt data available.</p>;
  }

  const groupedReceipts = receiptData.receiptList.reduce((group, receipt) => {
    const date = receipt.purchasedDate || "Unknown Date";
    if (!group[date]) {
      group[date] = [];
    }
    group[date].push(receipt);
    return group;
  }, {});

  const toggleDateDetails = (date) => {
    setExpandedDates((prev) => ({
      ...prev,
      [date]: !prev[date],
    }));
  };

  return (
    <div className="min-h-screen mx-auto p-4 bg-base-200">
      <h1 className="text-5xl font-bold text-center mb-8">Receipt History</h1>

      <div className="container mx-auto">
        {Object.entries(groupedReceipts).map(([date, receipts]) => (
          <div
            key={date}
            className="card bg-base-100 shadow-lg p-4 mb-6 border rounded-lg max-w-full lg:max-w-3xl mx-auto"
          >
            {/* Header with purchase date and expand/collapse icon */}
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleDateDetails(date)}
            >
              <h2 className="text-2xl font-bold">{date}</h2>
              <div className="text-2xl p-2 border rounded-full bg-primary-100 hover:bg-primary-200">
                {expandedDates[date] ? <ChevronUp size={24} /> :<ChevronDown size={24} />}
              </div>
            </div>

            {/* Show details if expanded */}
            {expandedDates[date] && (
              <div className="mt-4">
                {receipts.map((receipt, index) => (
                  <div key={index} className="mb-4">
                    <table className="w-full text-sm mb-4">
                      <thead>
                        <tr className="hidden sm:table-row">
                          <th>Name</th>
                          <th className="text-right">Qty</th>
                          <th className="text-right">Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {receipt.purchasedList?.purchasedItems?.length > 0 ? (
                          receipt.purchasedList.purchasedItems.map((item, idx) => (
                            <tr key={idx} className="border-b">
                              <td className="break-words">{item.name || "Unnamed Item"}</td>
                              <td className="text-right">1</td>
                              <td className="text-right">${item.price?.toFixed(2)}</td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td
                              colSpan="3"
                              className="text-center text-sm text-gray-500"
                            >
                              No items found.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>

                    <div className="flex justify-between text-sm font-bold">
                      <p>Sub Total</p>
                      <p>${receipt.purchasedList?.totalPrce?.toFixed(2) || "0.00"}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReceiptHistory;





