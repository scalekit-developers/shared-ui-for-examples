import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';

type User = {
  id: string;
  email: string;
  given_name: string;
  family_name: string;
  name: string;
  username: string;
}

type UserContext = {
  loading: boolean;
  user: User | null;
}

export const userContext = createContext<UserContext>({} as UserContext);

export const UserContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/auth/me").then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    }).then((data) => {
      setUser(data);
      setLoading(false);
    }).catch(() => { setLoading(false) });
  }, []);

  return (
    <userContext.Provider
      value={{
        loading,
        user: user || null,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(userContext);
};