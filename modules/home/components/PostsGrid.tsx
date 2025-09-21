import { useThemeColor } from "@/common/hooks/use-theme-color";
import React from "react";
import { Dimensions, FlatList, Image, StyleSheet, Text, View } from "react-native";

interface Post {
    id: string;
    mediaUrl: string;
    type: string;
}

interface PostsGridProps {
    posts: Post[];
    title?: string;
    showFeaturedBadge?: boolean;
    containerStyle?: any;
    titleStyle?: any;
}

export function PostsGrid({
    posts,
    title = "Recent Posts",
    showFeaturedBadge = false,
    containerStyle,
    titleStyle,
}: PostsGridProps) {
    const textColor = useThemeColor({}, "text");
    const screenWidth = Dimensions.get("window").width;
    const itemWidth = (screenWidth - 56) / 3; // 20 padding + 8 gap * 2 = 36, so 40 total margin

    const renderPostItem = ({ item, index }: { item: Post; index: number }) => (
        <View style={[styles.postItem, { width: itemWidth }]}>
            <Image
                source={{ uri: item.mediaUrl }}
                style={styles.postImage}
            />
            {showFeaturedBadge && index === 0 && (
                <View style={styles.featuredBadge}>
                    <Text style={styles.badgeText}>Featured</Text>
                </View>
            )}
        </View>
    );

    return (
        <View style={[styles.container, containerStyle]}>
            {title && <Text style={[styles.title, { color: textColor }, titleStyle]}>{title}</Text>}
            <FlatList
                data={posts}
                renderItem={renderPostItem}
                keyExtractor={(item) => item.id}
                numColumns={3}
                scrollEnabled={false}
                contentContainerStyle={styles.postsGrid}
                columnWrapperStyle={styles.row}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 20,
    },
    title: {
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
