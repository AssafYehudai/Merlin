import * as SecureStore from "expo-secure-store";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type UserState = {
    isLoggedIn: boolean;
    logIn: () => void;
    logOut: () => void;
};

export const useAuthStore = create(
    persist<UserState>(
        (set) => ({
            isLoggedIn: false,
            logIn: () => {
                console.log("Auth store logIn called - setting isLoggedIn to true");
                set((state) => {
                    return {
                        ...state,
                        isLoggedIn: true,
                    };
                });
            },
            logOut: () => {
                set((state) => {
                    return {
                        ...state,
                        isLoggedIn: false,
                    };
                });
            },
        }),
        {
            name: "auth-store",
            storage: createJSONStorage(() => ({
                setItem: (key: string, value: string) => SecureStore.setItemAsync(key, value),
                getItem: (key: string) => SecureStore.getItemAsync(key),
                removeItem: (key: string) => SecureStore.deleteItemAsync(key),
            })),
        }
    )
);
