import { Stack } from "expo-router";

export default function HomeLayout() {
    return (
        <Stack>
            <Stack.Screen
                name='previewNavScreen'
                options={{ headerShown: false, title: "Preview" }}
            />
            <Stack.Screen
                name='editNavScreen'
                options={{ title: "Edit" }}
            />
        </Stack>
    );
}
