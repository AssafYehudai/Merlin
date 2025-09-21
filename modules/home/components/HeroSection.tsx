import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Avatar } from "./Avatar";

interface HeroSectionProps {
    backgroundImageUri: string;
    avatarUri: string;
    displayName: string;
    username: string;
    containerStyle?: any;
}

export function HeroSection({
    backgroundImageUri,
    avatarUri,
    displayName,
    username,
    containerStyle,
}: HeroSectionProps) {
    return (
        <View style={[styles.container, containerStyle]}>
            <Image
                source={{ uri: backgroundImageUri }}
                style={styles.backgroundImage}
                resizeMode='cover'
            />
            <View style={styles.darkOverlay} />
            <View style={styles.overlay}>
                <View style={styles.content}>
                    <Avatar
                        uri={avatarUri}
                        size={100}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.displayName}>{displayName}</Text>
                        <Text style={styles.username}>@{username}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 300,
        position: "relative",
    },
    backgroundImage: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        height: "100%",
    },
    darkOverlay: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
    },
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "flex-start",
        flexDirection: "column",
        padding: 20,
    },
    content: {
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 16,
        flex: 1,
    },
    textContainer: {
        width: "100%",
    },
    displayName: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 4,
    },
    username: {
        color: "#fff",
        opacity: 0.7,
        fontSize: 16,
    },
});
