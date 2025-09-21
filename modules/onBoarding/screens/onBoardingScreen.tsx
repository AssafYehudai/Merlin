import { Button } from "@/common/components/Button";
import { useThemeColor } from "@/common/hooks/use-theme-color";
import { useState } from "react";
import { ActivityIndicator, StyleSheet, Text, TextInput, View } from "react-native";
import { useOnBoarding } from "../hooks/useOnBoarding";

export default function OnBoardingScreen() {
    const { login, isLoading } = useOnBoarding();
    const [accountName, setAccountName] = useState("");

    const backgroundColor = useThemeColor({}, "background");
    const textColor = useThemeColor({}, "text");
    const borderColor = useThemeColor({}, "border");
    const placeholderColor = useThemeColor({}, "placeholder");
    const primaryColor = useThemeColor({}, "primary");

    const handleLogin = () => {
        // You can use the accountName state here if needed
        login();
    };

    return (
        <View style={[styles.container, { backgroundColor }]}>
            <Text style={[styles.title, { color: textColor }]}>Merlin</Text>
            <View style={styles.contentContainer}>
                <View style={styles.formContainer}>
                    <Text style={[styles.accountLabel, { color: textColor }]}>AccountName</Text>
                    <TextInput
                        style={[
                            styles.textInput,
                            {
                                borderColor,
                                color: textColor,
                                backgroundColor: backgroundColor,
                            },
                        ]}
                        value={accountName}
                        onChangeText={setAccountName}
                        editable={!isLoading}
                        placeholder='Enter your account name'
                        placeholderTextColor={placeholderColor}
                    />
                    <Button
                        style={styles.loginButton}
                        title={isLoading ? "Logging in..." : "Login"}
                        onPress={() => handleLogin()}
                        disabled={isLoading}
                    />
                    {isLoading && (
                        <ActivityIndicator
                            size='small'
                            color={primaryColor}
                            style={styles.loader}
                        />
                    )}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    title: {
        fontSize: 64,
        fontWeight: "600",
        marginTop: 80,
    },
    contentContainer: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    formContainer: {
        alignItems: "center",
        width: "80%",
        gap: 8,
        padding: 16,
        marginTop: -200,
    },
    accountLabel: {
        fontSize: 16,
        fontWeight: "600",
        textAlign: "left",
        width: "100%",
    },
    textInput: {
        width: "100%",
        borderWidth: 1,
        borderRadius: 8,
        height: 44,
        paddingHorizontal: 12,
    },
    loginButton: {
        top: 8,
        width: "100%",
    },
    loader: {
        position: "absolute",
    },
});
