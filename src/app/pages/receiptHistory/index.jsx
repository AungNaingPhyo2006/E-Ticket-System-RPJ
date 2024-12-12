import React from "react";
import { receiptData } from "../../api/apiDemoData";

const ReceiptHistory = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-5xl font-bold text-center mb-8">Receipt History</h1>
    <div>
        {receiptData.receiptList.map((receipt, index) => (
          <div
            key={index}
            className="card bg-base-100 items-center shadow-xl p-6 mb-4"
          >
            <h2 className="text-2xl font-bold mb-2">
              Purchase Date: {receipt.purchasedDate}
            </h2>
            <div className="w-full">
              <h3 className="text-lg font-semibold mb-2">Purchased Items:</h3>
              <ul className="list-disc pl-6">
                {receipt.purchasedItems.map((item, idx) => (
                  <li key={idx} className="mb-1">
                    <span className="font-medium">{item.name}</span>: ${item.price.toLocaleString()}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4 text-lg font-bold">
              Total Price: ${receipt.totalPrice.toLocaleString()}
            </div>
          </div>
        ))}
      </div>
 </div>
  );
};

export default ReceiptHistory;
