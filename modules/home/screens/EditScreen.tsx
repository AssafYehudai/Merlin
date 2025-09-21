import { useThemeColor } from "@/common/hooks/use-theme-color";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { BioSection } from "../components/BioSection";
import { DisplayNameSection } from "../components/DisplayNameSection";
import { TemplateSelectionSection } from "../components/TemplateSelectionSection";
import { UserInfoSection } from "../components/UserInfoSection";
import { useEdit } from "../hooks/useEdit";

export default function EditScreen() {
    const backgroundColor = useThemeColor({}, "background");
    const textColor = useThemeColor({}, "text");

    const {
        userData,
        displayName,
        bio,
        selectedTemplate,
        setDisplayName,
        setBio,
        handleSaveDisplayName,
        handleSaveBio,
        handleTemplateSelect,
    } = useEdit();

    if (!userData) {
        return (
            <View style={[styles.container, { backgroundColor }]}>
                <Text style={{ color: textColor }}>No user data available</Text>
            </View>
        );
    }

    return (
        <View style={[styles.container, { backgroundColor }]}>
            <ScrollView
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
            >
                <DisplayNameSection
                    displayName={displayName}
                    onDisplayNameChange={setDisplayName}
                    onSave={handleSaveDisplayName}
                />

                <BioSection
                    bio={bio}
                    onBioChange={setBio}
                    onSave={handleSaveBio}
                />

                <TemplateSelectionSection
                    selectedTemplate={selectedTemplate}
                    onTemplateSelect={handleTemplateSelect}
                />

                <UserInfoSection userData={userData} />
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
});
