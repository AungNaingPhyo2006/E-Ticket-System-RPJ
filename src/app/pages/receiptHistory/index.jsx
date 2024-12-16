
import React, { useState } from "react";
import { receiptData } from "../../api/apiDemoData";

const ReceiptHistory = () => {


  if (!receiptData || !receiptData.receiptList || receiptData.receiptList.length === 0) {
    return <p>No receipt data available.</p>;
  }

  return (
    <div className="min-h-screen mx-auto p-4 bg-base-200">
      <h1 className="text-5xl font-bold text-center mb-8">Receipt History</h1>

      <div className="container mx-auto p-4 bg-base-200 mb-8">
        {receiptData.receiptList.map((receipt, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-xl p-6 mb-4 max-w-full lg:max-w-3xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-2">
              Purchase Date: {receipt.purchasedDate || "N/A"}
            </h2>
            <div className="w-full mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="hidden sm:table-row">
                    <th>Name</th>
                    <th className="text-right">Qty</th>
                    <th className="text-right">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {receipt.purchasedList.purchasedItems && receipt.purchasedList.purchasedItems.length > 0 ? (
                    receipt.purchasedList.purchasedItems.map((item, idx) => (
                      <tr key={idx} className="border-b">
                        <td className="break-words">{item.name || "Unnamed Item"}</td>
                        <td className="text-right">1</td> 
                        <td className="text-right">${(item.price).toFixed(2)}</td> 
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3" className="text-center text-sm text-gray-500">
                        No items found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="mt-4 text-lg font-bold">
              <div className="flex justify-between text-sm font-bold">
                <p>Sub Total</p>
                <p>${(receipt.purchasedList.totalPrce).toFixed(2)}</p> 
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReceiptHistory;



