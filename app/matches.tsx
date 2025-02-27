import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useAppStore from './store';

const MatchesScreen: React.FC = () => {
  const acceptedProfiles = useAppStore((state) => state.acceptedProfiles);

  return (
    <View style={styles.container}>
      <Text>Profils Acceptés:</Text>
      {acceptedProfiles.map((profile) => (
        <Text key={profile.id}>{profile.name}</Text>
      ))}
    </View>
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