import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Animated } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const NewsFeed = ({ navigation }) => {
  // Animation values for scaling the cards on press
  const scaleValue1 = new Animated.Value(1);
  const scaleValue2 = new Animated.Value(1);

  const handlePressIn = (scaleValue) => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = (scaleValue) => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      {/* News Card */}
      <TouchableOpacity
        onPressIn={() => handlePressIn(scaleValue1)}
        onPressOut={() => handlePressOut(scaleValue1)}
        onPress={() => navigation.navigate("NewsScreen")}
        activeOpacity={0.8}
      >
        <Animated.View style={[styles.card, { transform: [{ scale: scaleValue1 }] }]}>
          <FontAwesome name="newspaper-o" size={48} color="#2e7d32" />
          <Text style={styles.text}>News</Text>
        </Animated.View>
      </TouchableOpacity>

      {/* Videos Card */}
      <TouchableOpacity
        onPressIn={() => handlePressIn(scaleValue2)}
        onPressOut={() => handlePressOut(scaleValue2)}
        onPress={() => navigation.navigate("VideosScreen")}
        activeOpacity={0.8}
      >
        <Animated.View style={[styles.card, { transform: [{ scale: scaleValue2 }] }]}>
          <FontAwesome name="video-camera" size={48} color="#2e7d32" />
          <Text style={styles.text}>Videos</Text>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2e7d32", // Green theme background
    padding: 20,
  },
  card: {
    width: 250,
    height: 150, // Slightly taller for better spacing
    backgroundColor: "#ffffff", // White card background
    justifyContent: "center",
    alignItems: "center",
    margin: 20, // Increased margin for better spacing
    borderRadius: 20, // More rounded corners
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8, // Increased elevation for a more pronounced shadow
    padding: 20,
  },
  text: {
    color: "#2e7d32", // Green text color
    fontSize: 24, // Slightly larger font size
    fontWeight: "bold",
    marginTop: 15, // Increased margin for better spacing
    fontFamily: "Poppins-SemiBold", // Custom font for better typography
  },
});

export default NewsFeed;