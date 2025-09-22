import { useThemeColor } from "@/common/hooks/use-theme-color";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { TemplateProps } from "../../types/types";
import { ActionButtons } from "../ActionButtons";
import { HeroSection } from "../HeroSection";
import { PostsGrid } from "../PostsGrid";
import { Stats } from "../Stats";

export function Merlin2({ userData, onEditPress, onLogoutPress }: TemplateProps) {
    const backgroundColor = useThemeColor({}, "background");
    const textColor = useThemeColor({}, "text");
    const surfaceColor = useThemeColor({}, "surface");

    const stats = [
        { value: userData.followers, label: "Followers" },
        { value: userData.posts.length, label: "Posts" },
    ];

    return (
        <ScrollView
            style={[styles.container, { backgroundColor }]}
            showsVerticalScrollIndicator={false}
        >
            <HeroSection
                backgroundImageUri={userData.posts[0]?.mediaUrl}
                avatarUri={userData.avatar}
                displayName={userData.displayName}
                username={userData.username}
            />

            {/* Content Section */}
            <View style={[styles.contentSection, { backgroundColor: surfaceColor }]}>
                {/* Bio */}
                <View style={styles.bioSection}>
                    <Text style={[styles.bioTitle, { color: textColor }]}>About</Text>
                    <Text style={[styles.bio, { color: textColor }]}>{userData.bio_ai}</Text>
                </View>

                <Stats
                    stats={stats}
                    style='card'
                    containerStyle={styles.statsSection}
                />

                <ActionButtons
                    onEditPress={onEditPress}
                    onLogoutPress={onLogoutPress}
                    username={userData.username}
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
    },
    contentSection: {
        flex: 1,
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
        paddingHorizontal: 16,
    },
    actionButtons: {
        marginBottom: 24,
    },
    postsSection: {
        paddingHorizontal: 20,
    },
});
