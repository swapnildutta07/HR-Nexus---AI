import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend } from
'recharts';
const data = [
{
  name: 'Engineering',
  value: 120,
  color: '#2563EB'
},
{
  name: 'Sales',
  value: 45,
  color: '#14B8A6'
},
{
  name: 'Marketing',
  value: 35,
  color: '#F59E0B'
},
{
  name: 'HR',
  value: 20,
  color: '#EF4444'
},
{
  name: 'Others',
  value: 36,
  color: '#64748B'
}];

export function DepartmentChart() {
  return (
    <div className="bg-card rounded-card p-6 border border-border shadow-soft flex flex-col h-full">
      <h2 className="text-lg font-semibold text-text mb-4">Departments</h2>
      <div className="flex-1 min-h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="45%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
              stroke="none">
              
              {data.map((entry, index) =>
              <Cell key={`cell-${index}`} fill={entry.color} />
              )}
            </Pie>
            <Tooltip
              contentStyle={{
                borderRadius: '12px',
                border: '1px solid #E5E7EB',
                boxShadow: '0 4px 16px rgba(15,23,42,0.04)',
                fontSize: '13px',
                fontWeight: 500
              }}
              itemStyle={{
                color: '#0F172A'
              }} />
            
            <Legend
              verticalAlign="bottom"
              height={36}
              iconType="circle"
              iconSize={8}
              wrapperStyle={{
                fontSize: '12px',
                color: '#64748B',
                fontWeight: 500
              }} />
            
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>);

}