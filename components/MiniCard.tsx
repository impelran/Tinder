import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface MiniCardProps {
  profile: {
    name: string;
    age: number;
    image: string;
  };
}

const MiniCard: React.FC<MiniCardProps> = ({ profile }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: profile.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.age}>{profile.age} ans</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flexDirection: 'column',
  },
  name: {
    fontWeight: 'bold',
  },
  age: {
    fontSize: 12,
    color: 'gray',
  },
});

export default MiniCard;