import { useThemeColor } from "@/common/hooks/use-theme-color";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface BioSectionProps {
    bio: string;
    onBioChange: (value: string) => void;
    onSave: () => void;
}

export function BioSection({ bio, onBioChange, onSave }: BioSectionProps) {
    const textColor = useThemeColor({}, "text");
    const borderColor = useThemeColor({}, "border");
    const placeholderColor = useThemeColor({}, "placeholder");

    return (
        <View style={styles.section}>
            <Text style={[styles.label, { color: textColor }]}>Bio</Text>
            <TextInput
                value={bio}
                onChangeText={onBioChange}
                onBlur={onSave}
                multiline
                numberOfLines={4}
                style={[styles.input, styles.multilineInput, { borderColor, color: textColor }]}
                placeholder='Tell us about yourself...'
                placeholderTextColor={placeholderColor}
            />
        </View>
    );
}

const styles = StyleSheet.create({
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
});
