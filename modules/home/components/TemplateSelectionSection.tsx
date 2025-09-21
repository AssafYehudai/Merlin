import { useThemeColor } from "@/common/hooks/use-theme-color";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface TemplateSelectionSectionProps {
    selectedTemplate: string;
    onTemplateSelect: (template: string) => void;
}

interface TemplateButtonProps {
    template: string;
    isSelected: boolean;
    onPress: () => void;
    textColor: string;
    borderColor: string;
    primaryColor: string;
}

function TemplateButton({ template, isSelected, onPress, textColor, borderColor, primaryColor }: TemplateButtonProps) {
    return (
        <Text
            style={[
                styles.templateButton,
                { borderColor, color: textColor },
                isSelected && [
                    styles.selectedTemplate,
                    { backgroundColor: primaryColor, color: "#fff", borderColor: primaryColor },
                ],
            ]}
            onPress={onPress}
        >
            {template}
        </Text>
    );
}

export function TemplateSelectionSection({ selectedTemplate, onTemplateSelect }: TemplateSelectionSectionProps) {
    const textColor = useThemeColor({}, "text");
    const borderColor = useThemeColor({}, "border");
    const primaryColor = useThemeColor({}, "primary");

    return (
        <View style={styles.section}>
            <Text style={[styles.label, { color: textColor }]}>Template</Text>
            <View style={styles.templateButtons}>
                <TemplateButton
                    template='Merlin1'
                    isSelected={selectedTemplate === "Merlin1"}
                    onPress={() => onTemplateSelect("Merlin1")}
                    textColor={textColor}
                    borderColor={borderColor}
                    primaryColor={primaryColor}
                />
                <TemplateButton
                    template='Merlin2'
                    isSelected={selectedTemplate === "Merlin2"}
                    onPress={() => onTemplateSelect("Merlin2")}
                    textColor={textColor}
                    borderColor={borderColor}
                    primaryColor={primaryColor}
                />
            </View>
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
        // Dynamic styles applied inline
    },
});
