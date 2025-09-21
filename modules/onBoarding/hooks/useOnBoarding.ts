import { useAuthStore } from "@/common/stores/authStore";
import { fetchMockUserData, useUserDataStore } from "@/common/stores/userDataStore";
import { useCallback, useState } from "react";

export const useOnBoarding = () => {
    const { logIn } = useAuthStore();
    const [isLoading, setIsLoading] = useState(false);
    const { setUserData, setTemplateName } = useUserDataStore();

    const login = useCallback(async () => {
        try {
            console.log("Starting login process...");
            setIsLoading(true);

            // Fetch mock data
            console.log("Fetching mock data...");
            const userData = await fetchMockUserData();

            // Save to user data store
            console.log("Saving user data...");
            setUserData(userData);

            // Set default template
            console.log("Setting default template to Merlin1...");
            setTemplateName("Merlin1");

            // Delay 2 seconds
            console.log("Waiting 2 seconds...");
            await new Promise((resolve) => setTimeout(resolve, 2000));

            // Invoke login from auth store
            console.log("Calling logIn from auth store...");
            logIn();
            console.log("Login process completed!");
        } catch (error) {
            console.error("Login error:", error);
        } finally {
            setIsLoading(false);
        }
    }, [logIn, setUserData, setTemplateName]);

    return {
        login,
        isLoading,
    };
};
