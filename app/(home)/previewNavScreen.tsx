import PreviewScreen from "@/modules/home/screens/PreviewScreen";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PreviewNavScreen() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <PreviewScreen onEditPress={() => { router.push("./editNavScreen") }} />
        </SafeAreaView>
    );
}
