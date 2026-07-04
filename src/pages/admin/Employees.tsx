import React from 'react';
export function Employees() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-text">Employees</h1>
        <button className="px-4 py-2 bg-primary text-white rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm">
          Add Employee
        </button>
      </div>

      <div className="bg-card rounded-card border border-border shadow-soft overflow-hidden">
        <div className="p-4 border-b border-border flex items-center justify-between bg-background/50">
          <input
            type="text"
            placeholder="Search employees..."
            className="px-4 py-2 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 w-64" />
          
          <div className="flex gap-2">
            <select className="px-3 py-2 bg-card border border-border rounded-lg text-sm focus:outline-none">
              <option>All Departments</option>
              <option>Engineering</option>
              <option>Sales</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border bg-background/50">
                <th className="p-4 text-xs font-semibold text-subtext uppercase tracking-wider">
                  Employee
                </th>
                <th className="p-4 text-xs font-semibold text-subtext uppercase tracking-wider">
                  Role
                </th>
                <th className="p-4 text-xs font-semibold text-subtext uppercase tracking-wider">
                  Department
                </th>
                <th className="p-4 text-xs font-semibold text-subtext uppercase tracking-wider">
                  Status
                </th>
                <th className="p-4 text-xs font-semibold text-subtext uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[1, 2, 3, 4, 5].map((i) =>
              <tr
                key={i}
                className="hover:bg-background/50 transition-colors">
                
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <img
                      src={`https://i.pravatar.cc/150?img=${i + 10}`}
                      alt=""
                      className="w-8 h-8 rounded-full" />
                    
                      <div>
                        <p className="text-sm font-semibold text-text">
                          Employee Name {i}
                        </p>
                        <p className="text-xs text-subtext">
                          emp{i}@hrnexus.ai
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-text">Software Engineer</td>
                  <td className="p-4 text-sm text-text">Engineering</td>
                  <td className="p-4">
                    <span className="px-2.5 py-1 rounded-md bg-success/10 text-success text-xs font-semibold">
                      Active
                    </span>
                  </td>
                  <td className="p-4">
                    <button className="text-primary text-sm font-medium hover:underline">
                      Edit
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>);

}