import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/employee/Card';
export const PlaceholderPage = ({ title }: {title: string;}) => {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-heading">{title}</h1>
        <p className="text-muted mt-1">
          Manage your {title.toLowerCase()} details here.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{title} Overview</CardTitle>
        </CardHeader>
        <CardContent className="h-[400px] flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-muted">🚧</span>
            </div>
            <h3 className="text-lg font-medium text-heading">
              Under Construction
            </h3>
            <p className="text-muted max-w-sm mx-auto mt-2">
              The {title} module is currently being built. Check back later for
              updates.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>);

};