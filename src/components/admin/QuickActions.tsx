import React from 'react';
import {
  UserPlus,
  CalendarCheck,
  FileText,
  Banknote,
  Download } from
'lucide-react';
const actions = [
{
  name: 'Add Employee',
  icon: UserPlus,
  color: 'text-primary',
  bg: 'bg-primary/10'
},
{
  name: 'Approve Leave',
  icon: CalendarCheck,
  color: 'text-warning',
  bg: 'bg-warning/10'
},
{
  name: 'Process Payroll',
  icon: Banknote,
  color: 'text-success',
  bg: 'bg-success/10'
},
{
  name: 'Generate Report',
  icon: Download,
  color: 'text-secondary',
  bg: 'bg-secondary/10'
}];

export function QuickActions() {
  return (
    <div className="bg-card rounded-card p-6 border border-border shadow-soft">
      <h2 className="text-lg font-semibold text-text mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) =>
        <button
          key={action.name}
          className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-border hover:border-primary/30 hover:bg-background transition-all group">
          
            <div
            className={`w-10 h-10 rounded-full ${action.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
            
              <action.icon size={20} className={action.color} />
            </div>
            <span className="text-xs font-medium text-text text-center">
              {action.name}
            </span>
          </button>
        )}
      </div>

      <div className="mt-6 pt-6 border-t border-border">
        <h3 className="text-sm font-semibold text-text mb-3">Upcoming Tasks</h3>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between p-2.5 rounded-lg bg-background border border-border">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm font-medium text-text">
                Interview: Senior Dev
              </span>
            </div>
            <span className="text-xs text-subtext">2:00 PM</span>
          </div>
          <div className="flex items-center justify-between p-2.5 rounded-lg bg-background border border-border">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-warning"></div>
              <span className="text-sm font-medium text-text">
                Payroll Review
              </span>
            </div>
            <span className="text-xs text-subtext">4:30 PM</span>
          </div>
        </div>
      </div>
    </div>);

}