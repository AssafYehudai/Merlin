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

interface Merlin1Props {
    userData: UserData;
}

export function Merlin1({ userData }: Merlin1Props) {
    const screenWidth = Dimensions.get("window").width;
    const itemWidth = (screenWidth - 56) / 3; // 20 padding + 8 gap * 2 = 36, so 40 total margin

    const renderPostItem = ({ item }: { item: any }) => (
        <View style={[styles.postItem, { width: itemWidth }]}>
            <Image
                source={{ uri: item.mediaUrl }}
                style={styles.postImage}
            />
        </View>
    );

    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            {/* Header Section */}
            <View style={styles.header}>
                <Image
                    source={{ uri: userData.avatar }}
                    style={styles.avatar}
                />
                <Text style={styles.displayName}>{userData.displayName}</Text>
                <Text style={styles.username}>@{userData.username}</Text>
                <Text style={styles.bio}>{userData.bio_ai}</Text>

                {/* Stats */}
                <View style={styles.stats}>
                    <View style={styles.statItem}>
                        <Text style={styles.statNumber}>{userData.followers.toLocaleString()}</Text>
                        <Text style={styles.statLabel}>Followers</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statNumber}>{userData.posts.length}</Text>
                        <Text style={styles.statLabel}>Posts</Text>
                    </View>
                </View>
            </View>

            {/* Posts Grid */}
            <View style={styles.postsSection}>
                <Text style={styles.sectionTitle}>Recent Posts</Text>
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
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 16,
    },
    displayName: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 4,
        textAlign: "center",
    },
    statNumber: {
        fontSize: 20,
        fontWeight: "bold",
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
    stats: {
        flexDirection: "row",
        gap: 40,
    },
    statItem: {
        alignItems: "center",
    },
    statLabel: {
        fontSize: 12,
        opacity: 0.6,
        marginTop: 4,
    },
    postsSection: {
        padding: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 16,
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
    },
    postImage: {
        width: "100%",
        height: "100%",
        borderRadius: 8,
    },
});
