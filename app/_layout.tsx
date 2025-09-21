import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/common/hooks/use-color-scheme";
import { useAuthStore } from "@/common/stores/authStore";

export default function RootLayout() {
    const colorScheme = useColorScheme();
    const { isLoggedIn } = useAuthStore();

    console.log(isLoggedIn)
    return (
        <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
            <Stack>
                <Stack.Protected guard={!isLoggedIn}>
                    <Stack.Screen
                        name='index'
                        options={{ headerShown: false }}
                    />
                </Stack.Protected>
                <Stack.Protected guard={isLoggedIn}>
                    <Stack.Screen
                        name='(home)'
                        options={{ headerShown: false }}
                    />
                </Stack.Protected>
            </Stack>
            <StatusBar style='auto' />
        </ThemeProvider>
    );
}
