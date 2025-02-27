import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import useAppStore from '../store';
import MiniCard from '../../components/MiniCard';

const MatchesScreen: React.FC = () => {
  const acceptedProfiles = useAppStore((state) => state.acceptedProfiles);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {acceptedProfiles.map((profile) => (
        <MiniCard key={profile.name} profile={profile} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MatchesScreen;