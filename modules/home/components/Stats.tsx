import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface StatItem {
    value: number;
    label: string;
}

interface StatsProps {
    stats: StatItem[];
    style?: "default" | "card";
    containerStyle?: any;
}

export function Stats({ stats, style = "default", containerStyle }: StatsProps) {
    const isCardStyle = style === "card";

    return (
        <View style={[isCardStyle ? styles.cardContainer : styles.defaultContainer, containerStyle]}>
            {stats.map((stat, index) => (
                <View
                    key={index}
                    style={isCardStyle ? styles.statCard : styles.statItem}
                >
                    <Text style={[styles.statNumber, isCardStyle && styles.cardStatNumber]}>
                        {stat.value.toLocaleString()}
                    </Text>
                    <Text style={[styles.statLabel, isCardStyle && styles.cardStatLabel]}>{stat.label}</Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    defaultContainer: {
        flexDirection: "row",
        gap: 40,
    },
    cardContainer: {
        flexDirection: "row",
        gap: 15,
        marginBottom: 30,
    },
    statItem: {
        alignItems: "center",
    },
    statCard: {
        flex: 1,
        backgroundColor: "#f8f9fa",
        padding: 20,
        borderRadius: 12,
        alignItems: "center",
    },
    statNumber: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 4,
    },
    cardStatNumber: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 4,
    },
    statLabel: {
        fontSize: 12,
        opacity: 0.6,
    },
    cardStatLabel: {
        fontSize: 12,
        opacity: 0.6,
    },
});
