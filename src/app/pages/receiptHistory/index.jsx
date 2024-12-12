import React from "react";
import { receiptData, ticketHistoryData } from "../../api/apiDemoData";

const ReceiptHistory = () => {
  return (
    <div className="min-h-screen mx-auto p-4 bg-base-200">
      <h1 className="text-5xl font-bold text-center mb-8">Receipt History</h1>

      {/* Displaying all receiptData */}
      <div className="container mx-auto p-4 bg-base-200 mb-8">
        {receiptData.receiptList.map((receipt, index) => (
          <div
            key={index}
            className="card bg-base-100 items-center shadow-xl p-6 mb-4 max-w-lg mx-auto"
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


// import React from "react";
// import { receiptData } from "../../api/apiDemoData";

// const ReceiptHistory = () => {
//   return (
//     <div className="min-h-screen mx-auto p-4 bg-base-200">
//       <h1 className="text-5xl font-bold text-center mb-8">Receipt History</h1>
//       <div className="container mx-auto p-4 bg-base-200">
//         {receiptData.receiptList.map((receipt, index) => (
//           <div
//             key={index}
//             className="card bg-base-100 items-center shadow-xl p-6 mb-4"
//           >
//             <h2 className="text-2xl font-bold mb-2">
//               Purchase Date: {receipt.purchasedDate}
//             </h2>
//             <div className="w-full">
//               <h3 className="text-lg font-semibold mb-2">Purchased Items:</h3>
//               <ul className="list-disc pl-6">
//                 {receipt.purchasedItems.map((item, idx) => (
//                   <li key={idx} className="mb-1">
//                     <span className="font-medium">{item.name}</span>: ${item.price.toLocaleString()}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="mt-4 text-lg font-bold">
//               Total Price: ${receipt.totalPrice.toLocaleString()}
//             </div>
//           </div>
//         ))}
//       </div>
//  </div>
//   );
// };

// export default ReceiptHistory;
//  {/* QR Code generation for the corresponding ticket */}
//  {ticketHistoryData.festivalList.map((festival) => (
//   festival.ticketList.map((ticket, ticketIdx) => (
//     <div key={ticketIdx} className="mt-4 text-center">
//       {/* Always display the QR code for each ticket */}
//       <QRCode value={ticket.qr} size={128} />
//       <p className="mt-2 text-center">QR Value: {ticket.qr}</p>
//     </div>
//   ))
// ))}