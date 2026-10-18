import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type User = {
  name: string;
  email: string;
};

type UserContextType = {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
};

const USER_STORAGE_KEY = 'launchpad-ui-user';

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUser must be used within UserProvider');
  return context;
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem(USER_STORAGE_KEY);
    return savedUser ? (JSON.parse(savedUser) as User) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
      return;
    }

    localStorage.removeItem(USER_STORAGE_KEY);
  }, [user]);

  const login = (userData: User) => setUser(userData);
  const logout = () => setUser(null);

  return <UserContext.Provider value={{ user, login, logout }}>{children}</UserContext.Provider>;
};
