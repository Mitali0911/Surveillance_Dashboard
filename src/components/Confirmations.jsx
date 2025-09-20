export default function Confirmations() {
  const branches = [
    { name: "Vizag", value: 80 },
    { name: "Dehradun", value: 60 },
    { name: "Indore", value: 45 },
    { name: "Prayagraj", value: 75 },
  ];

  return (
    <div className="p-4 rounded-xl bg-gray-800 shadow-lg">
      <h2 className="text-lg font-semibold mb-4">Confirmations by Branch</h2>
      <div className="space-y-4">
        {branches.map((branch, idx) => (
          <div key={idx}>
            <div className="flex justify-between text-sm mb-1">
              <span>{branch.name}</span>
              <span className="text-gray-400">{branch.value}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div
                className="bg-teal-400 h-3 rounded-full"
                style={{ width: `${branch.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
