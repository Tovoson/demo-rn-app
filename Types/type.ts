export type user = {
    email: string;
    password: string;
}

export type UserContextType = {
    authUser: any;
    login: (user: user) => Promise<void>;
    register: (user: user) => Promise<void>;
    logout: () => Promise<void>;
}