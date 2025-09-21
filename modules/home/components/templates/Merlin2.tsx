import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { ActionButtons } from "../ActionButtons";
import { HeroSection } from "../HeroSection";
import { PostsGrid } from "../PostsGrid";
import { Stats } from "../Stats";
import { TemplateProps } from "../types";

export function Merlin2({ userData, onEditPress, onLogoutPress }: TemplateProps) {
    const stats = [
        { value: userData.followers, label: "Followers" },
        { value: userData.posts.length, label: "Posts" },
    ];

    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <HeroSection
                backgroundImageUri={userData.posts[0]?.mediaUrl}
                avatarUri={userData.avatar}
                displayName={userData.displayName}
                username={userData.username}
            />

            {/* Content Section */}
            <View style={styles.contentSection}>
                {/* Bio */}
                <View style={styles.bioSection}>
                    <Text style={styles.bioTitle}>About</Text>
                    <Text style={styles.bio}>{userData.bio_ai}</Text>
                </View>

                <Stats
                    stats={stats}
                    style='card'
                    containerStyle={styles.statsSection}
                />

                <ActionButtons
                    onEditPress={onEditPress}
                    onLogoutPress={onLogoutPress}
                    containerStyle={styles.actionButtons}
                />

                <PostsGrid
                    posts={userData.posts}
                    title='Gallery'
                    showFeaturedBadge={true}
                    containerStyle={styles.postsSection}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
    },
    contentSection: {
        flex: 1,
        backgroundColor: "#fff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: -20,
        paddingTop: 20,
    },
    bioSection: {
        padding: 20,
    },
    bioTitle: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 8,
    },
    bio: {
        fontSize: 14,
        lineHeight: 20,
        opacity: 0.8,
    },
    statsSection: {
        paddingHorizontal: 20,
    },
    actionButtons: {
        paddingHorizontal: 20,
        marginBottom: 30,
    },
    postsSection: {
        paddingHorizontal: 20,
    },
});
