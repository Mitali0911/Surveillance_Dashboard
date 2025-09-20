import React from 'react';
 
export default function TopClients() {
  const clients = [
    { name: "Ayush", amount: "Rs 2.4Crore", status: "Active", source: "Dealer" },
    {
      name: "Vinay",
      amount: "Rs98k",
      status: "Active",
      source: "Mobile",
    },
    {
      name: "Tanishq",
      amount: "Rs770k",
      status: "Active",
      source: "Dealer",
    },
    { name: "Darshan", amount: "Rs560k", status: "Active", source: "Web" },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-600";
      case "Debarred":
        return "bg-red-600";
      case "Arrowed":
        return "bg-blue-600";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <div className="p-4 rounded-xl bg-gray-800 shadow-lg">
      <h2 className="text-lg font-semibold mb-4">Top Clients</h2>
      <div className="grid grid-cols-2 gap-4">
        {clients.map((client, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between bg-gray-900 p-3 rounded-lg"
          >
            <div>
              <h3 className="font-medium">{client.name}</h3>
              <p className="text-gray-400 text-sm">{client.source}</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold">{client.amount}</p>
              <span
                className={`text-xs px-2 py-1 rounded ${getStatusColor(
                  client.status
                )}`}
              >
                {client.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
