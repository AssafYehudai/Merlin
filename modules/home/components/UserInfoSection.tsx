import { useThemeColor } from "@/common/hooks/use-theme-color";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { UserData } from "../types/types";

interface UserInfoSectionProps {
    userData: UserData;
}

export function UserInfoSection({ userData }: UserInfoSectionProps) {
    const textColor = useThemeColor({}, "text");

    return (
        <View style={styles.section}>
            <Text style={[styles.label, { color: textColor }]}>Current Info</Text>
            <Text style={[styles.infoText, { color: textColor }]}>Username: {userData.username}</Text>
            <Text style={[styles.infoText, { color: textColor }]}>
                Followers: {userData.followers.toLocaleString()}
            </Text>
            <Text style={[styles.infoText, { color: textColor }]}>Posts: {userData.posts.length}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    section: {
        marginBottom: 25,
    },
    label: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 8,
    },
    infoText: {
        fontSize: 14,
        marginBottom: 4,
        opacity: 0.7,
    },
});
