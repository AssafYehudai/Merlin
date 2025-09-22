import { useThemeColor } from "@/common/hooks/use-theme-color";
import React from "react";
import { Share, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ActionButtonsProps {
    onEditPress?: () => void;
    onLogoutPress?: () => void;
    onSharePress?: () => void;
    showShare?: boolean;
    containerStyle?: any;
    username?: string;
}

export function ActionButtons({
    onEditPress,
    onLogoutPress,
    onSharePress,
    showShare = true,
    containerStyle,
    username,
}: ActionButtonsProps) {
    const tintColor = useThemeColor({}, "tint");
    const buttonTextColor = "#fff";

    const handleShare = async () => {
        if (username) {
            const shareUrl = `https://${username}.merlin-site.com`;
            try {
                await Share.share({
                    message: `Check out my Merlin profile: ${shareUrl}`,
                    url: shareUrl,
                });
            } catch (error) {
                console.error("Error sharing:", error);
            }
        }
        // Call the optional onSharePress callback if provided
        onSharePress?.();
    };

    return (
        <View style={[styles.container, containerStyle]}>
            <TouchableOpacity
                style={[styles.button, { backgroundColor: tintColor }]}
                onPress={onEditPress}
            >
                <Text style={[styles.buttonText, { color: buttonTextColor }]}>Edit</Text>
            </TouchableOpacity>

            {showShare && (
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: tintColor }]}
                    onPress={handleShare}
                >
                    <Text style={[styles.buttonText, { color: buttonTextColor }]}>Share</Text>
                </TouchableOpacity>
            )}

            <TouchableOpacity
                style={[styles.button, { backgroundColor: tintColor }]}
                onPress={onLogoutPress}
            >
                <Text style={[styles.buttonText, { color: buttonTextColor }]}>Logout</Text>
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
        fontSize: 14,
        fontWeight: "600",
    },
});
