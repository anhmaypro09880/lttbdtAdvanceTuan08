import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function Animation1() {
    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <View style={{ flex: 1, borderWidth: 1, borderColor: "red" }}>
                <View
                    style={{ height: 150, width: 150, backgroundColor: "blue" }}
                ></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
