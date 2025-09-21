import { useThemeColor } from "@/common/hooks/use-theme-color";
import React from "react";
import { Pressable, PressableProps, StyleSheet, Text } from "react-native";

type ButtonProps = {
    title: string;
    onPress?: () => void;
    disabled?: boolean;
    variant?: "primary" | "secondary";
} & PressableProps;

// from SDK 53 (React 19) onwards, forwardRef is no longer needed, as ref is now a prop
export function Button({ title, onPress, disabled, variant = "primary", style, ...rest }: ButtonProps) {
    const backgroundColor = useThemeColor({}, "tint");
    const textColor = "#fff";
    const buttonStyle = [styles.button, { backgroundColor }, style];
    const textStyle = [styles.buttonText, { color: textColor }];

    return (
        <Pressable
            onPress={onPress}
            disabled={disabled}
            style={buttonStyle as any}
            {...rest}
        >
            <Text style={textStyle}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingHorizontal: 24,
        paddingVertical: 12,
        alignItems: "center",
        justifyContent: "center",
        minHeight: 44,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "600",
        textAlign: "center",
    },
});
