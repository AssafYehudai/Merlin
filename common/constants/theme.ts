/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#007AFF";
const tintColorDark = "#333333";

export const Colors = {
    light: {
        text: "#11181C",
        background: "#fff",
        tint: tintColorLight,
        icon: "#687076",
        tabIconDefault: "#687076",
        tabIconSelected: tintColorLight,
        // Additional colors for the app
        card: "#f8f9fa",
        border: "#e1e5e9",
        placeholder: "#9ca3af",
        primary: "#007AFF",
        secondary: "#34C759",
        danger: "#FF3B30",
        warning: "#FF9500",
        success: "#34C759",
        surface: "#ffffff",
        surfaceVariant: "#f1f3f4",
        outline: "#dadce0",
    },
    dark: {
        text: "#ECEDEE",
        background: "#151718",
        tint: tintColorDark,
        icon: "#9BA1A6",
        tabIconDefault: "#9BA1A6",
        tabIconSelected: tintColorDark,
        // Additional colors for the app
        card: "#1c1c1e",
        border: "#38383a",
        placeholder: "#8e8e93",
        primary: "#0A84FF",
        secondary: "#30d158",
        danger: "#ff453a",
        warning: "#ff9f0a",
        success: "#30d158",
        surface: "#1c1c1e",
        surfaceVariant: "#2c2c2e",
        outline: "#48484a",
    },
};
