import React from 'react';
const requests = [
{
  id: 1,
  name: 'Michael Chen',
  role: 'Frontend Dev',
  date: 'Oct 25 - Oct 26',
  type: 'Sick Leave',
  avatar: 'https://i.pravatar.cc/150?img=33'
},
{
  id: 2,
  name: 'Emma Davis',
  role: 'Product Manager',
  date: 'Nov 01 - Nov 05',
  type: 'Vacation',
  avatar: 'https://i.pravatar.cc/150?img=47'
},
{
  id: 3,
  name: 'James Wilson',
  role: 'UX Designer',
  date: 'Oct 28',
  type: 'Personal',
  avatar: 'https://i.pravatar.cc/150?img=12'
}];

export function LeaveRequests() {
  return (
    <div className="bg-card rounded-card p-6 border border-border shadow-soft flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-text">Leave Requests</h2>
        <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
          View All
        </button>
      </div>

      <div className="flex flex-col gap-4 flex-1">
        {requests.map((req) =>
        <div
          key={req.id}
          className="flex items-center justify-between p-3 rounded-xl hover:bg-background transition-colors group cursor-pointer border border-transparent hover:border-border">
          
            <div className="flex items-center gap-3">
              <img
              src={req.avatar}
              alt={req.name}
              className="w-10 h-10 rounded-full object-cover" />
            
              <div>
                <p className="text-sm font-semibold text-text">{req.name}</p>
                <p className="text-xs text-subtext">
                  {req.date} • {req.type}
                </p>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-md bg-warning/10 text-warning text-xs font-semibold">
              Pending
            </span>
          </div>
        )}
      </div>
    </div>);

}