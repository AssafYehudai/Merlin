import React from "react";
import { Image, ImageStyle, StyleSheet } from "react-native";

interface AvatarProps {
    uri: string;
    size?: number;
    style?: ImageStyle;
    showBorder?: boolean;
}

export function Avatar({ uri, size = 100, style, showBorder = true }: AvatarProps) {
    return (
        <Image
            source={{ uri }}
            style={[
                styles.avatar,
                {
                    width: size,
                    height: size,
                    borderRadius: size / 2,
                    borderWidth: showBorder ? 3 : 0,
                },
                style,
            ]}
        />
    );
}

const styles = StyleSheet.create({
    avatar: {
        borderColor: "#fff",
    },
});
