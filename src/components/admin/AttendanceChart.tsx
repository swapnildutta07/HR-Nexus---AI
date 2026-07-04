import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart } from
'recharts';
const data = [
{
  name: 'Mon',
  present: 220,
  absent: 36
},
{
  name: 'Tue',
  present: 232,
  absent: 24
},
{
  name: 'Wed',
  present: 228,
  absent: 28
},
{
  name: 'Thu',
  present: 235,
  absent: 21
},
{
  name: 'Fri',
  present: 231,
  absent: 25
}];

export function AttendanceChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 10,
          left: -20,
          bottom: 0
        }}>
        
        <defs>
          <linearGradient id="colorPresent" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#2563EB" stopOpacity={0.2} />
            <stop offset="95%" stopColor="#2563EB" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid
          strokeDasharray="3 3"
          vertical={false}
          stroke="#E5E7EB" />
        
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{
            fill: '#64748B',
            fontSize: 12
          }}
          dy={10} />
        
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{
            fill: '#64748B',
            fontSize: 12
          }} />
        
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
        
        <Area
          type="monotone"
          dataKey="present"
          stroke="#2563EB"
          strokeWidth={3}
          fillOpacity={1}
          fill="url(#colorPresent)"
          activeDot={{
            r: 6,
            strokeWidth: 0,
            fill: '#2563EB'
          }} />
        
      </AreaChart>
    </ResponsiveContainer>);

}