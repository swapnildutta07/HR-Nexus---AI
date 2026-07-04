import React, { useCallback, useState, createContext, useContext } from 'react';
import { format } from 'date-fns';
interface AppContextValue {
  // Attendance
  isCheckedIn: boolean;
  checkInTime: string | null;
  checkOutTime: string | null;
  checkIn: () => void;
  checkOut: () => void;
  // AI Assistant panel
  isAIOpen: boolean;
  openAI: () => void;
  closeAI: () => void;
  // Mobile sidebar drawer
  isSidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
}
const AppContext = createContext<AppContextValue | undefined>(undefined);
export const AppProvider = ({ children }: {children: ReactNode;}) => {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [checkInTime, setCheckInTime] = useState<string | null>(null);
  const [checkOutTime, setCheckOutTime] = useState<string | null>(null);
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const checkIn = useCallback(() => {
    setIsCheckedIn(true);
    setCheckInTime(format(new Date(), 'hh:mm a'));
    setCheckOutTime(null);
  }, []);
  const checkOut = useCallback(() => {
    setIsCheckedIn(false);
    setCheckOutTime(format(new Date(), 'hh:mm a'));
  }, []);
  const openAI = useCallback(() => setIsAIOpen(true), []);
  const closeAI = useCallback(() => setIsAIOpen(false), []);
  const openSidebar = useCallback(() => setIsSidebarOpen(true), []);
  const closeSidebar = useCallback(() => setIsSidebarOpen(false), []);
  return (
    <AppContext.Provider
      value={{
        isCheckedIn,
        checkInTime,
        checkOutTime,
        checkIn,
        checkOut,
        isAIOpen,
        openAI,
        closeAI,
        isSidebarOpen,
        openSidebar,
        closeSidebar
      }}>
      
      {children}
    </AppContext.Provider>);

};
export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within an AppProvider');
  return ctx;
};