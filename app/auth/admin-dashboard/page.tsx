export default function AdminDashboard() {
  return (
    <div className="grid gap-6">

      <h2 className="text-2xl font-bold text-gray-800">
        Welcome Back Admin 👋
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500">Users</h3>
          <p className="text-2xl font-bold">120</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500">Programs</h3>
          <p className="text-2xl font-bold">5</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500">Messages</h3>
          <p className="text-2xl font-bold">18</p>
        </div>

      </div>

    </div>
  );
}