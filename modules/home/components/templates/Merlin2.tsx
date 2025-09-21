import React from "react";
import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native";

type UserData = {
    username: string;
    displayName: string;
    bio_ai: string;
    avatar: string;
    followers: number;
    posts: Array<{
        id: string;
        mediaUrl: string;
        type: string;
    }>;
};

interface Merlin2Props {
    userData: UserData;
}

export function Merlin2({ userData }: Merlin2Props) {
    const screenWidth = Dimensions.get("window").width;
    const itemWidth = (screenWidth - 56) / 3; // 20 padding + 8 gap * 2 = 36, so 40 total margin

    const renderPostItem = ({ item, index }: { item: any; index: number }) => (
        <View style={[styles.postItem, { width: itemWidth }]}>
            <Image
                source={{ uri: item.mediaUrl }}
                style={styles.postImage}
            />
            {index === 0 && (
                <View style={styles.featuredBadge}>
                    <Text style={styles.badgeText}>Featured</Text>
                </View>
            )}
        </View>
    );

    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            {/* Hero Section with Background */}
            <View style={styles.heroSection}>
                <Image
                    source={{ uri: userData.avatar }}
                    style={styles.heroAvatar}
                />
                <View style={styles.heroOverlay}>
                    <Text style={styles.heroDisplayName}>{userData.displayName}</Text>
                    <Text style={styles.heroUsername}>@{userData.username}</Text>
                </View>
            </View>

            {/* Content Section */}
            <View style={styles.contentSection}>
                {/* Bio */}
                <View style={styles.bioSection}>
                    <Text style={styles.bioTitle}>About</Text>
                    <Text style={styles.bio}>{userData.bio_ai}</Text>
                </View>

                {/* Stats Cards */}
                <View style={styles.statsSection}>
                    <View style={styles.statCard}>
                        <Text style={styles.statNumber}>{userData.followers.toLocaleString()}</Text>
                        <Text style={styles.statLabel}>Followers</Text>
                    </View>
                    <View style={styles.statCard}>
                        <Text style={styles.statNumber}>{userData.posts.length}</Text>
                        <Text style={styles.statLabel}>Posts</Text>
                    </View>
                </View>

                {/* Posts Grid */}
                <View style={styles.postsSection}>
                    <Text style={styles.sectionTitle}>Gallery</Text>
                    <FlatList
                        data={userData.posts}
                        renderItem={renderPostItem}
                        keyExtractor={(item) => item.id}
                        numColumns={3}
                        scrollEnabled={false}
                        contentContainerStyle={styles.postsGrid}
                        columnWrapperStyle={styles.row}
                    />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
    },
    heroSection: {
        height: 300,
        position: "relative",
        backgroundColor: "#1a1a1a",
    },
    heroAvatar: {
        position: "absolute",
        top: 60,
        left: 20,
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: "#fff",
    },
    heroOverlay: {
        position: "absolute",
        bottom: 20,
        left: 20,
        right: 20,
    },
    heroDisplayName: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 4,
    },
    heroUsername: {
        color: "#fff",
        opacity: 0.7,
        fontSize: 16,
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
    statNumber: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 4,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 16,
    },
    bio: {
        fontSize: 14,
        lineHeight: 20,
        opacity: 0.8,
    },
    statsSection: {
        flexDirection: "row",
        paddingHorizontal: 20,
        gap: 15,
        marginBottom: 30,
    },
    statCard: {
        flex: 1,
        backgroundColor: "#f8f9fa",
        padding: 20,
        borderRadius: 12,
        alignItems: "center",
    },
    statLabel: {
        fontSize: 12,
        opacity: 0.6,
    },
    postsSection: {
        paddingHorizontal: 20,
    },
    postsGrid: {
        paddingBottom: 20,
    },
    row: {
        justifyContent: "space-between",
        marginBottom: 8,
    },
    postItem: {
        aspectRatio: 1,
        position: "relative",
    },
    postImage: {
        width: "100%",
        height: "100%",
        borderRadius: 8,
    },
    featuredBadge: {
        position: "absolute",
        top: 8,
        right: 8,
        backgroundColor: "#007AFF",
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
    },
    badgeText: {
        color: "#fff",
        fontSize: 10,
        fontWeight: "600",
    },
});
