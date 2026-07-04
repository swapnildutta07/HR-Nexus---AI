import React from 'react';
import { CheckCircle2, CalendarOff, Banknote, UserPlus } from 'lucide-react';
const activities = [
{
  id: 1,
  title: 'Check In',
  desc: '142 employees checked in on time',
  time: '9:00 AM',
  icon: CheckCircle2,
  color: 'text-success',
  bg: 'bg-success/10'
},
{
  id: 2,
  title: 'Leave Approved',
  desc: 'Sarah Jenkins approved 3 leaves',
  time: '10:30 AM',
  icon: CalendarOff,
  color: 'text-primary',
  bg: 'bg-primary/10'
},
{
  id: 3,
  title: 'Payroll Generated',
  desc: 'October payroll processing started',
  time: '11:15 AM',
  icon: Banknote,
  color: 'text-warning',
  bg: 'bg-warning/10'
},
{
  id: 4,
  title: 'Employee Updated',
  desc: 'New details added for Mike Ross',
  time: '2:00 PM',
  icon: UserPlus,
  color: 'text-secondary',
  bg: 'bg-secondary/10'
}];

export function RecentActivity() {
  return (
    <div className="bg-card rounded-card p-6 border border-border shadow-soft flex-1">
      <h2 className="text-lg font-semibold text-text mb-6">Recent Activity</h2>

      <div className="relative">
        <div className="absolute left-[19px] top-2 bottom-2 w-[2px] bg-border rounded-full"></div>

        <div className="flex flex-col gap-6">
          {activities.map((activity) =>
          <div
            key={activity.id}
            className="flex gap-4 relative z-10 group cursor-pointer">
            
              <div
              className={`w-10 h-10 rounded-full ${activity.bg} flex items-center justify-center shrink-0 border-4 border-card group-hover:scale-110 transition-transform duration-300`}>
              
                <activity.icon size={18} className={activity.color} />
              </div>
              <div className="flex-1 pt-1">
                <div className="flex items-center justify-between mb-0.5">
                  <p className="text-sm font-semibold text-text">
                    {activity.title}
                  </p>
                  <span className="text-xs font-medium text-subtext">
                    {activity.time}
                  </span>
                </div>
                <p className="text-xs text-subtext">{activity.desc}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>);

}