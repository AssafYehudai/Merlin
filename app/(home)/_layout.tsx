import { useThemeColor } from "@/common/hooks/use-theme-color";
import { Stack } from "expo-router";

export default function HomeLayout() {
    const backgroundColor = useThemeColor({}, "background");
    const textColor = useThemeColor({}, "text");

    return (
        <Stack>
            <Stack.Screen
                name='previewNavScreen'
                options={{ headerShown: false, title: "Preview" }}
            />
            <Stack.Screen
                name='editNavScreen'
                options={{
                    title: "Edit",
                    headerStyle: {
                        backgroundColor: backgroundColor,
                    },
                    headerTintColor: textColor,
                    headerTitleStyle: {
                        color: textColor,
                    },
                }}
            />
        </Stack>
    );
}
