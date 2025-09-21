import { useUserDataStore } from "@/common/stores/userDataStore";
import { useEffect, useState } from "react";

export const useEdit = () => {
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

    // Update local state when userData changes
    useEffect(() => {
        if (userData) {
            setDisplayName(userData.displayName || "");
            setBio(userData.bio_ai || "");
        }
    }, [userData]);

    const handleSaveDisplayName = () => {
        updateDisplayName(displayName);
    };

    const handleSaveBio = () => {
        updateBio(bio);
    };

    const handleSaveTemplate = (template: string) => {
        setTemplateName(template);
    };

    const handleTemplateSelect = (template: string) => {
        setSelectedTemplate(template);
        handleSaveTemplate(template);
    };

    return {
        // State
        userData,
        displayName,
        bio,
        selectedTemplate,

        // Actions
        setDisplayName,
        setBio,
        handleSaveDisplayName,
        handleSaveBio,
        handleTemplateSelect,
    };
};
