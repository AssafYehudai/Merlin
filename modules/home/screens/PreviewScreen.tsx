import { useAuthStore } from "@/common/stores/authStore";
import { useUserDataStore } from "@/common/stores/userDataStore";
import React from "react";
import { StyleSheet, View } from "react-native";
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
                return (
                    <Merlin1
                        userData={userData}
                        onEditPress={onEditPress}
                        onLogoutPress={logOut}
                    />
                );
            case "Merlin2":
                return (
                    <Merlin2
                        userData={userData}
                        onEditPress={onEditPress}
                        onLogoutPress={logOut}
                    />
                );
            default:
                return (
                    <Merlin1
                        userData={userData}
                        onEditPress={onEditPress}
                        onLogoutPress={logOut}
                    />
                ); // Default to Merlin1
        }
    };

    return <View style={styles.container}>{renderTemplate()}</View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});
