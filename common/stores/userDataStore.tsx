import { MOCK } from "@/common/data/data";
import * as SecureStore from "expo-secure-store";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type UserData = {
    username: string;
    displayName: string;
    bio_ai: string;
    avatar: string;
    followers: number;
    posts: Array<{
        id: string;
        mediaUrl: string;
        type: string;
    }>;
};

type UserDataStore = {
    userData: UserData | null;
    templateName: string;
    setUserData: (data: UserData) => void;
    clearUserData: () => void;
    updateDisplayName: (displayName: string) => void;
    updateBio: (bio: string) => void;
    setTemplateName: (templateName: string) => void;
};

export const useUserDataStore = create(
    persist<UserDataStore>(
        (set, get) => ({
            userData: null,
            templateName: "",
            setUserData: (data: UserData) => set({ userData: data }),
            clearUserData: () => set({ userData: null }),
            updateDisplayName: (displayName: string) => {
                const currentData = get().userData;
                if (currentData) {
                    set({ userData: { ...currentData, displayName } });
                }
            },
            updateBio: (bio: string) => {
                const currentData = get().userData;
                if (currentData) {
                    set({ userData: { ...currentData, bio_ai: bio } });
                }
            },
            setTemplateName: (templateName: string) => set({ templateName }),
        }),
        {
            name: "user-data-store",
            storage: createJSONStorage(() => ({
                setItem: (key: string, value: string) => SecureStore.setItemAsync(key, value),
                getItem: (key: string) => SecureStore.getItemAsync(key),
                removeItem: (key: string) => SecureStore.deleteItemAsync(key),
            })),
        }
    )
);

// Helper function to fetch mock data
export const fetchMockUserData = async (): Promise<UserData> => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    return MOCK as UserData;
};
