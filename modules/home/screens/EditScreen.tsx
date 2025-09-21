import { useUserDataStore } from "@/common/stores/userDataStore";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function EditScreen() {
    const { userData, templateName, updateDisplayName, updateBio, setTemplateName } = useUserDataStore();
    const [displayName, setDisplayName] = useState(userData?.displayName || "");
    const [bio, setBio] = useState(userData?.bio_ai || "");
    const [selectedTemplate, setSelectedTemplate] = useState(templateName || "Merlin1");

    // Sync selectedTemplate with templateName from store
    useEffect(() => {
        if (templateName && templateName !== selectedTemplate) {
            setSelectedTemplate(templateName);
        }
    }, [templateName]);

    const handleSaveDisplayName = () => {
        updateDisplayName(displayName);
    };

    const handleSaveBio = () => {
        updateBio(bio);
    };

    const handleSaveTemplate = (template: string) => {
        setTemplateName(template);
    };

    if (!userData) {
        return (
            <View style={styles.container}>
                <Text>No user data available</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
            >
                {/* Display Name Section */}
                <View style={styles.section}>
                    <Text style={styles.label}>Display Name</Text>
                    <TextInput
                        value={displayName}
                        onChangeText={setDisplayName}
                        onBlur={handleSaveDisplayName}
                        style={styles.input}
                    />
                </View>

                {/* Bio Section */}
                <View style={styles.section}>
                    <Text style={styles.label}>Bio</Text>
                    <TextInput
                        value={bio}
                        onChangeText={setBio}
                        onBlur={handleSaveBio}
                        multiline
                        numberOfLines={4}
                        style={[styles.input, styles.multilineInput]}
                    />
                </View>

                {/* Template Selection Section */}
                <View style={styles.section}>
                    <Text style={styles.label}>Template</Text>
                    <View style={styles.templateButtons}>
                        <Text
                            style={[styles.templateButton, selectedTemplate === "Merlin1" && styles.selectedTemplate]}
                            onPress={() => {
                                setSelectedTemplate("Merlin1");
                                handleSaveTemplate("Merlin1");
                            }}
                        >
                            Merlin1
                        </Text>
                        <Text
                            style={[styles.templateButton, selectedTemplate === "Merlin2" && styles.selectedTemplate]}
                            onPress={() => {
                                setSelectedTemplate("Merlin2");
                                handleSaveTemplate("Merlin2");
                            }}
                        >
                            Merlin2
                        </Text>
                    </View>
                </View>

                {/* User Info Display */}
                <View style={styles.section}>
                    <Text style={styles.label}>Current Info</Text>
                    <Text style={styles.infoText}>Username: {userData.username}</Text>
                    <Text style={styles.infoText}>Followers: {userData.followers.toLocaleString()}</Text>
                    <Text style={styles.infoText}>Posts: {userData.posts.length}</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
        padding: 20,
    },
    title: {
        marginBottom: 30,
        textAlign: "center",
    },
    section: {
        marginBottom: 25,
    },
    label: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
    },
    multilineInput: {
        height: 100,
        textAlignVertical: "top",
    },
    templateButtons: {
        flexDirection: "row",
        gap: 10,
    },
    templateButton: {
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        borderWidth: 1,
        textAlign: "center",
        fontSize: 16,
        fontWeight: "500",
    },
    selectedTemplate: {
        backgroundColor: "#007AFF",
        color: "#fff",
    },
    infoText: {
        fontSize: 14,
        marginBottom: 4,
        opacity: 0.7,
    },
});
