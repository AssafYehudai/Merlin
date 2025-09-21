import { useAuthStore } from "@/common/stores/authStore";
import { useUserDataStore } from "@/common/stores/userDataStore";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Merlin1 } from "../components/templates/Merlin1";
import { Merlin2 } from "../components/templates/Merlin2";

interface PreviewScreenProps {
    onEditPress?: () => void;
}

export default function PreviewScreen({ onEditPress }: PreviewScreenProps) {
    const { userData, templateName } = useUserDataStore();
    const { logOut } = useAuthStore();

    console.log("PreviewScreen - Current templateName:", templateName);

    if (!userData) {
        return <View style={styles.container}>{/* Handle no user data case */}</View>;
    }

    const renderTemplate = () => {
        switch (templateName) {
            case "Merlin1":
                return <Merlin1 userData={userData} />;
            case "Merlin2":
                return <Merlin2 userData={userData} />;
            default:
                return <Merlin1 userData={userData} />; // Default to Merlin1
        }
    };

    return (
        <View style={styles.container}>
            {/* Edit Button */}
            {onEditPress && (
                <TouchableOpacity
                    style={styles.editButton}
                    onPress={onEditPress}
                >
                    <Text style={styles.editButtonText}>Edit</Text>
                </TouchableOpacity>
            )}

            {/* Logout Button */}
            <TouchableOpacity
                style={styles.logoutButton}
                onPress={logOut}
            >
                <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>

            {renderTemplate()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    editButton: {
        position: "absolute",
        top: 50,
        right: 20,
        backgroundColor: "#007AFF",
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        zIndex: 1000,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    editButtonText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "600",
    },
    logoutButton: {
        position: "absolute",
        top: 50,
        left: 20,
        backgroundColor: "#FF3B30",
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        zIndex: 1000,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    logoutButtonText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "600",
    },
});
