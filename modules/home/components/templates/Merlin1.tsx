import { useThemeColor } from "@/common/hooks/use-theme-color";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { TemplateProps } from "../../types/types";
import { ActionButtons } from "../ActionButtons";
import { Avatar } from "../Avatar";
import { PostsGrid } from "../PostsGrid";
import { Stats } from "../Stats";

export function Merlin1({ userData, onEditPress, onLogoutPress }: TemplateProps) {
    const backgroundColor = useThemeColor({}, "background");
    const textColor = useThemeColor({}, "text");
    const cardColor = useThemeColor({}, "card");

    const stats = [
        { value: userData.followers, label: "Followers" },
        { value: userData.posts.length, label: "Posts" },
    ];

    return (
        <ScrollView
            style={[styles.container, { backgroundColor }]}
            showsVerticalScrollIndicator={false}
        >
            {/* Header Section */}
            <View style={[styles.header, { backgroundColor: cardColor }]}>
                <Avatar
                    uri={userData.avatar}
                    size={120}
                />
                <Text style={[styles.displayName, { color: textColor }]}>{userData.displayName}</Text>
                <Text style={[styles.username, { color: textColor }]}>@{userData.username}</Text>
                <Text style={[styles.bio, { color: textColor }]}>{userData.bio_ai}</Text>

                <Stats stats={stats} />

                <ActionButtons
                    onEditPress={onEditPress}
                    onLogoutPress={onLogoutPress}
                    username={userData.username}
                    containerStyle={styles.actionButtons}
                />
            </View>

            {/* Posts Grid */}
            <PostsGrid
                posts={userData.posts}
                title='Recent Posts'
                containerStyle={styles.postsSection}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        alignItems: "center",
        paddingVertical: 40,
        paddingHorizontal: 20,
    },
    displayName: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 4,
        textAlign: "center",
    },
    username: {
        fontSize: 16,
        opacity: 0.6,
        marginBottom: 12,
    },
    bio: {
        fontSize: 14,
        textAlign: "center",
        lineHeight: 20,
        marginBottom: 20,
        paddingHorizontal: 20,
    },
    actionButtons: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    postsSection: {
        padding: 20,
    },
});
