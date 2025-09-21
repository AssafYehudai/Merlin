import { useThemeColor } from "@/common/hooks/use-theme-color";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface DisplayNameSectionProps {
    displayName: string;
    onDisplayNameChange: (value: string) => void;
    onSave: () => void;
}

export function DisplayNameSection({ displayName, onDisplayNameChange, onSave }: DisplayNameSectionProps) {
    const textColor = useThemeColor({}, "text");
    const borderColor = useThemeColor({}, "border");
    const placeholderColor = useThemeColor({}, "placeholder");

    return (
        <View style={styles.section}>
            <Text style={[styles.label, { color: textColor }]}>Display Name</Text>
            <TextInput
                value={displayName}
                onChangeText={onDisplayNameChange}
                onBlur={onSave}
                style={[styles.input, { borderColor, color: textColor }]}
                placeholder='Enter display name'
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
});
