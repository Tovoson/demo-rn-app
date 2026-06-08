import { createContext, useEffect, useState } from "react";
import { user, UserContextType } from "../Types/type";
import { account } from "../lib/appwrite";
import { ID } from "react-native-appwrite";

export const UserContext = createContext<UserContextType | undefined>(
  undefined,
);

export function UserProvider({ children }: { children: React.ReactNode }) {

  const [authUser, setAuthUser] = useState<any>(null);
  const [authChecked, setAuthChecked] = useState(false);

  async function login(user: user) {
    try {
      await account.createEmailPasswordSession(user.email, user.password);
      const response = await account.get();
      setAuthUser(response);
    } catch (error: any) {
      throw Error(error.message);
    }
  }

  async function register(user: user) {
    try {
      await account.create(ID.unique(), user.email, user.password);
    } catch (error: any) {
      throw Error(error.message);
    }
  }

  async function logout() {
    try {
      await account.deleteSession("current");
      setAuthUser(null);
    } catch (error: any) {
      throw Error(error.message);
    }
  }

  async function initialUserValue() {
    try {
      const response = await account.get();
      setAuthUser(response);
    } catch (error) {
      setAuthUser(null);
    }finally {
      setAuthChecked(true);
    }
  }

  useEffect(() => {
    initialUserValue();
  }, []);

  return (
    <UserContext.Provider value={{ login, register, logout, authUser, authChecked }}>
      {children}
    </UserContext.Provider>
  );
}
