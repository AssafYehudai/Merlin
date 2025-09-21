import OnBoardingScreen from "@/modules/onBoarding/screens/onBoardingScreen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OnboardingNavScreen() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <OnBoardingScreen />
        </SafeAreaView>
    );
}
