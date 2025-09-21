import { Button } from "@/common/components/Button";
import { useColorScheme } from "@/common/hooks/use-color-scheme";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useOnBoarding } from "../hooks/useOnBoarding";

export default function OnBoardingScreen() {
    const { login } = useOnBoarding();
    const colorScheme = useColorScheme();
    const [accountName, setAccountName] = useState("");

    const handleLogin = () => {
        // You can use the accountName state here if needed
        login();
    };

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "flex-start",
                alignItems: "center",
            }}
        >
            <Text style={{ fontSize: 64, fontWeight: "600", color: "black", marginTop: 80 }}>Merlin</Text>
            <View
                style={{
                    flex: 1,
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <View
                    style={{
                        alignItems: "center",
                        width: "80%",
                        gap: 8,
                        padding: 16,
                        marginTop: -200,
                    }}
                >
                    <Text style={styles.accountLabel}>AccountName</Text>
                    <TextInput style={{ width: "100%", borderWidth: 1, borderRadius: 8, height: 44 }} />
                    <Button
                        style={{ top: 8, width: "100%" }}
                        title='Login'
                        onPress={() => handleLogin()}
                    />
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
    accountLabel: {
        fontSize: 16,
        fontWeight: 600,
        textAlign: "left",
        width: "100%",
    },
});
