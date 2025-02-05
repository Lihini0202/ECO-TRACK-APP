import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons'; // Importing icons from Expo

const HomeDashboard = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Welcome to EcoTrack</Text>

      {/* Personalized Goal Tracker Card */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('GoalTracker')}
      >
        <View style={styles.cardContent}>
          <MaterialIcons name="track-changes" size={32} color="#4CAF50" />
          <Text style={styles.cardTitle}>Goal Tracker</Text>
          <Text style={styles.cardDescription}>Set and track your sustainability goals.</Text>
        </View>
      </TouchableOpacity>

      {/* Educational Hub Card */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('EducationalHub')}
      >
        <View style={styles.cardContent}>
          <FontAwesome name="book" size={32} color="#4CAF50" />
          <Text style={styles.cardTitle}>Educational Hub</Text>
          <Text style={styles.cardDescription}>Learn about sustainable living practices.</Text>
        </View>
      </TouchableOpacity>

      {/* Virtual Coach Card */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('VirtualCoach')}
      >
        <View style={styles.cardContent}>
          <Ionicons name="chatbubbles" size={32} color="#4CAF50" />
          <Text style={styles.cardTitle}>Virtual Coach</Text>
          <Text style={styles.cardDescription}>Get personalized tips and advice.</Text>
        </View>
      </TouchableOpacity>

      {/* News Feed Card */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('NewsFeed')}
      >
        <View style={styles.cardContent}>
          <MaterialIcons name="newspaper" size={32} color="#4CAF50" />
          <Text style={styles.cardTitle}>News Feed</Text>
          <Text style={styles.cardDescription}>Stay updated with the latest eco-news.</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8F5E9', // Light green background
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2E7D32', // Darker green for contrast
    marginBottom: 30,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF', // White card background
    width: '100%',
    maxWidth: 350,
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000', // Card shadow
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  cardContent: {
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2E7D32', // Darker green for titles
    marginTop: 10,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666', // Gray for descriptions
    textAlign: 'center',
    marginTop: 8,
  },
});

export default HomeDashboard;
