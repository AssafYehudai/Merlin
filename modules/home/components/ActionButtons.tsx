import { useThemeColor } from "@/common/hooks/use-theme-color";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ActionButtonsProps {
    onEditPress?: () => void;
    onLogoutPress?: () => void;
    onSharePress?: () => void;
    showShare?: boolean;
    containerStyle?: any;
}

export function ActionButtons({
    onEditPress,
    onLogoutPress,
    onSharePress,
    showShare = true,
    containerStyle,
}: ActionButtonsProps) {
    const tintColor = useThemeColor({}, "tint");

    return (
        <View style={[styles.container, containerStyle]}>
            <TouchableOpacity
                style={[styles.button, { backgroundColor: tintColor }]}
                onPress={onEditPress}
            >
                <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>

            {showShare && (
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: tintColor }]}
                    onPress={onSharePress || (() => {})}
                >
                    <Text style={styles.buttonText}>Share</Text>
                </TouchableOpacity>
            )}

            <TouchableOpacity
                style={[styles.button, { backgroundColor: tintColor }]}
                onPress={onLogoutPress}
            >
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 12,
    },
    button: {
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "600",
    },
});
