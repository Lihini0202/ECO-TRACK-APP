import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; // Importing icons from Expo

const VirtualCoach = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const scrollViewRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom when a new message is added
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

  const sendMessage = () => {
    if (inputText.trim()) {
      setMessages([...messages, { text: inputText, sender: 'user' }]);
      setInputText('');
      // Simulate a response from the coach
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'Great question! Let me think...', sender: 'coach' },
        ]);
      }, 1000);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      {/* Chat Header */}
      <View style={styles.header}>
        <MaterialIcons name="smart-toy" size={28} color="#4CAF50" />
        <Text style={styles.headerText}>Eco Coach</Text>
      </View>

      {/* Chat Window */}
      <ScrollView
        ref={scrollViewRef}
        style={styles.chatWindow}
        contentContainerStyle={styles.chatContent}
      >
        {messages.map((message, index) => (
          <View
            key={index}
            style={[
              styles.messageContainer,
              message.sender === 'user' ? styles.userContainer : styles.coachContainer,
            ]}
          >
            {/* Bot or User Icon */}
            {message.sender === 'coach' ? (
              <MaterialIcons name="smart-toy" size={24} color="#4CAF50" style={styles.icon} />
            ) : (
              <Ionicons name="person" size={24} color="#666" style={styles.icon} />
            )}

            {/* Message Bubble */}
            <View
              style={[
                styles.messageBubble,
                message.sender === 'user' ? styles.userBubble : styles.coachBubble,
              ]}
            >
              <Text style={styles.messageText}>{message.text}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Input Area */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type your message..."
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Ionicons name="send" size={24} color="#4CAF50" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF', // White background
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F5F5F5', // Light gray header
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50', // Green theme
    marginLeft: 8,
  },
  chatWindow: {
    flex: 1,
    paddingHorizontal: 16,
  },
  chatContent: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 12,
  },
  userContainer: {
    justifyContent: 'flex-end',
  },
  coachContainer: {
    justifyContent: 'flex-start',
  },
  icon: {
    marginRight: 8,
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 12,
  },
  userBubble: {
    backgroundColor: '#DCF8C6', // Light green for user messages
    borderBottomRightRadius: 4, // Sharp edge for user bubbles
  },
  coachBubble: {
    backgroundColor: '#E8F5E9', // Lighter green for coach messages
    borderBottomLeftRadius: 4, // Sharp edge for bot bubbles
  },
  messageText: {
    fontSize: 16,
    color: '#333', // Dark text for readability
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F5F5F5', // Light gray input area
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#FFF', // White input field
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  sendButton: {
    padding: 10,
  },
});

export default VirtualCoach;