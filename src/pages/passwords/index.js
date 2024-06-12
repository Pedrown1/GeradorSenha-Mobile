import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useIsFocused } from '@react-navigation/native';
import useStorage from '../../hooks/useStorage';
import { PasswordItem } from './components/passwordItem';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Passwords() {
  const [listPassword, setListPassword] = useState([]);
  const focused = useIsFocused();
  const { getItem, removeItem } = useStorage();

  useEffect(() => {
    async function loadPassword() {
      const password = await getItem("@pass");
      setListPassword(password);
    }
    loadPassword();
  }, [focused]);

  async function handleDeletePassword(item) {
    const password = await removeItem("@pass", item);
    setListPassword(password);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.title}>Passwords</Text>
      </View>

      <View style={styles.content}>
        <FlatList
          style={{ flex: 1, paddingTop: 14 }}
          data={listPassword}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => <PasswordItem data={item} removePassword={() => handleDeletePassword(item)} />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#392de9",
    paddingTop: 58,
    paddingRight: 14,
    paddingBottom: 14,
    paddingLeft: 14,
  },

  title: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: 'bold'
  },

  content: {
    flex: 1,
    paddingRight: 14,
    paddingLeft: 14
  }
});

export default styles;
