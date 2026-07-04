import React from 'react';
export function Settings() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-text">System Settings</h1>
      <div className="bg-card rounded-card p-8 border border-border shadow-soft flex items-center justify-center min-h-[400px]">
        <p className="text-subtext">Settings module content goes here.</p>
      </div>
    </div>);

}