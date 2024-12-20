
import React from "react";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl">
        {/* Header */}
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-lg font-semibold">Agent Skill</h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Main description */}
          <p className="text-gray-800">
            Check if on-hand inventory will allow all sales orders to ship
            without delay
          </p>

          {/* Details */}
          <div className="space-y-4">
            <p>
              When{" "}
              <span className="text-blue-500 underline cursor-pointer">
                any vendor
              </span>{" "}
              sends an email with changes to{" "}
              <span className="text-blue-500 underline cursor-pointer">
                confirmed purchase orders
              </span>
              , check if the resulting{" "}
              <span className="text-blue-500 underline cursor-pointer">
                on-hand inventory
              </span>{" "}
              will allow{" "}
              <span className="text-blue-500 underline cursor-pointer">
                all sales orders
              </span>{" "}
              to{" "}
              <span className="text-blue-500 underline cursor-pointer">
                ship without delay
              </span>
              . If so,{" "}
              <span className="text-blue-500 underline cursor-pointer">
                update the purchase order
              </span>{" "}
              to reflect the change.
            </p>

            {/* Enable email access section */}
            <div className="border rounded-lg p-4 bg-gray-50">
              <h3 className="font-medium">Enable email access</h3>
              <p className="text-sm text-gray-600 mt-2">
                Allow the agent to access email inboxes to read mail from known
                vendors
              </p>
              <div className="flex items-center mt-4 space-x-2">
                <div className="bg-gray-100 px-4 py-2 rounded-md text-sm">
                  purchasing@contoso.com
                </div>
                <button className="text-gray-400 hover:text-gray-600">✕</button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end border-t p-4 space-x-4">
          <button
            className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
            onClick={onClose}
          >
            Close
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Allow Access
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
