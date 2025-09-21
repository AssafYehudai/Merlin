import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { ActionButtons } from "../ActionButtons";
import { Avatar } from "../Avatar";
import { PostsGrid } from "../PostsGrid";
import { Stats } from "../Stats";
import { TemplateProps } from "../types";

export function Merlin1({ userData, onEditPress, onLogoutPress }: TemplateProps) {
    const stats = [
        { value: userData.followers, label: "Followers" },
        { value: userData.posts.length, label: "Posts" },
    ];

    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            {/* Header Section */}
            <View style={styles.header}>
                <Avatar
                    uri={userData.avatar}
                    size={120}
                />
                <Text style={styles.displayName}>{userData.displayName}</Text>
                <Text style={styles.username}>@{userData.username}</Text>
                <Text style={styles.bio}>{userData.bio_ai}</Text>

                <Stats stats={stats} />

                <ActionButtons
                    onEditPress={onEditPress}
                    onLogoutPress={onLogoutPress}
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
        backgroundColor: "#fff",
    },
    header: {
        alignItems: "center",
        paddingVertical: 40,
        paddingHorizontal: 20,
        backgroundColor: "#f8f9fa",
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
