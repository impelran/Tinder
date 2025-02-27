import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import useAppStore from './store'; // Importez votre store

interface Card {
  id: number;
  name: string;
  image: string;
}

const cards: Card[] = [
  { id: 1, name: 'Alice', image: 'https://placekitten.com/200/300' },
  { id: 2, name: 'Bob', image: 'https://placekitten.com/201/301' },
  { id: 3, name: 'Charlie', image: 'https://placekitten.com/202/302' },
];

const IndexScreen: React.FC = () => {
  const swiperRef = useRef<Swiper>(null);
  const [cardIndex, setCardIndex] = useState(0);
  const acceptProfile = useAppStore((state) => state.acceptProfile); // Utilisation du store

  const onSwipedLeft = (index: number) => {
    console.log(`Card ${cards[index].name} rejected`);
    setCardIndex(index + 1);
  };

  const onSwipedRight = (index: number) => {
    console.log(`Card ${cards[index].name} accepted`);
    acceptProfile(cards[index]); // Ajouter le profil accepté au store
    setCardIndex(index + 1);
  };

  return (
    <View style={styles.container}>
      <Swiper
        ref={swiperRef}
        cards={cards}
        renderCard={(card) => (
          <View style={styles.card}>
            <Image source={{ uri: card.image }} style={styles.cardImage} />
            <Text style={styles.cardText}>{card.name}</Text>
          </View>
        )}
        onSwipedLeft={onSwipedLeft}
        onSwipedRight={onSwipedRight}
        cardIndex={cardIndex}
        stackSize={3}
        stackSeparation={15}
        overlayLabels={{
          left: {
            title: 'REJECT',
            style: {
              label: {
                backgroundColor: 'red',
                color: 'white',
                fontSize: 24,
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'flex-start',
                marginTop: 20,
                marginLeft: -20,
              },
            },
          },
          right: {
            title: 'ACCEPT',
            style: {
              label: {
                backgroundColor: 'green',
                color: 'white',
                fontSize: 24,
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                marginTop: 20,
                marginLeft: 20,
              },
            },
          },
        }}
        animateOverlayLabelsOpacity
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  card: {
    flex: 1,
    borderRadius: 8,
    shadowRadius: 25,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  cardImage: {
    width: '80%',
    height: '70%',
    borderRadius: 8,
  },
  cardText: {
    fontSize: 24,
    marginTop: 10,
  },
});

export default IndexScreen;