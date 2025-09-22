import { useThemeColor } from "@/common/hooks/use-theme-color";
import React from "react";
import { Alert, Dimensions, Share, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const { width: screenWidth } = Dimensions.get("window");

interface TouchableButtonProps {
    title: string;
    onPress: () => void;
    backgroundColor?: string;
    textColor?: string;
    style?: any;
}

function TouchableButton({ title, onPress, backgroundColor, textColor = "#fff", style }: TouchableButtonProps) {
    return (
        <TouchableOpacity
            style={[buttonStyles.button, { backgroundColor }, style]}
            onPress={onPress}
        >
            <Text style={[buttonStyles.buttonText, { color: textColor }]}>{title}</Text>
        </TouchableOpacity>
    );
}

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

    const handlePublish = () => {
        if (username) {
            Alert.alert("Published", `Published to ${username}.merlin-site.com (mock).`);
        } else {
            Alert.alert("Published", "Published to username.merlin-site.com (mock).");
        }
    };

    // Calculate button width based on screen width and number of buttons
    const buttonCount = showShare ? 4 : 3;
    const sideMargins = 32; // 16px on each side (16px left + 16px right)
    const gapTotal = (buttonCount - 1) * 8; // 8px gap between buttons
    const availableWidth = screenWidth - sideMargins - gapTotal;
    const buttonWidth = Math.max(availableWidth / buttonCount, 60); // Minimum 60px width per button

    return (
        <View style={[styles.container, containerStyle]}>
            <TouchableButton
                title='Edit'
                onPress={onEditPress || (() => {})}
                backgroundColor={tintColor}
                textColor={buttonTextColor}
                style={{ width: buttonWidth }}
            />

            <TouchableButton
                title='Publish'
                onPress={handlePublish}
                backgroundColor={tintColor}
                textColor={buttonTextColor}
                style={{ width: buttonWidth }}
            />

            {showShare && (
                <TouchableButton
                    title='Share'
                    onPress={handleShare}
                    backgroundColor={tintColor}
                    textColor={buttonTextColor}
                    style={{ width: buttonWidth }}
                />
            )}

            <TouchableButton
                title='Logout'
                onPress={onLogoutPress || (() => {})}
                backgroundColor={tintColor}
                textColor={buttonTextColor}
                style={{ width: buttonWidth }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 8,
        marginLeft: 16,
        marginRight: 16,
    },
});

const buttonStyles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        minHeight: 36,
    },
    buttonText: {
        fontSize: 14,
        fontWeight: "600",
    },
});
