/* eslint-disable no-console */
import React from 'react';
import {
  ScrollView, Dimensions, Alert, SafeAreaView,
} from 'react-native';
import { NatContainer, NatCard, NatSpace } from '../../../lib';

export const Card = () => {
  const press = () => Alert.alert(
    'Press',
    'My Alert Msg',
    [
      {
        onPress: () => console.log('Ask me later pressed'),
        text: 'Ask me later',
      },
      {
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
        text: 'Cancel',
      },
      { onPress: () => console.log('OK Pressed'), text: 'OK' },
    ],
    { cancelable: false },
  );
  const examples = [
    {
      iconURI:
        'https://upload.wikimedia.org/wikipedia/pt/thumb/c/cb/Natura_Logo.png/200px-Natura_Logo.png',
      imageURI: 'https://i.picsum.photos/id/1016/328/184.jpg',
      resume: 'This is a Natura card ',
      subtitle: '13 hours ago',
      title: 'Card Test Number 1',
    },
    {
      iconURI:
        'https://upload.wikimedia.org/wikipedia/pt/thumb/c/cb/Natura_Logo.png/200px-Natura_Logo.png',
      imageURI: 'https://i.picsum.photos/id/1016/328/184.jpg',
      resume: 'This is a Natura card ',
      subtitle: '13 hours ago',
      title: 'Card Test Number 2',
    },
    {
      iconURI:
        'https://upload.wikimedia.org/wikipedia/pt/thumb/c/cb/Natura_Logo.png/200px-Natura_Logo.png',
      imageURI: 'https://i.picsum.photos/id/1016/328/184.jpg',
      resume: 'This is a Natura card ',
      subtitle: '13 hours ago',
      title: 'Card Test Number 3',
    },
    {
      iconURI:
        'https://upload.wikimedia.org/wikipedia/pt/thumb/c/cb/Natura_Logo.png/200px-Natura_Logo.png',
      imageURI: 'https://i.picsum.photos/id/1016/328/184.jpg',
      resume: 'This is a Natura card ',
      subtitle: '13 hours ago',
      title: 'Card Test Number 4',
    },
  ];
  const styles = {
    defaultScreen: {
      flex: 1,
      width: Dimensions.get('window').width,
    },
  };

  return (
    <SafeAreaView style={styles.defaultScreen}>
      <NatContainer>
        <ScrollView>
          {examples.map((example, index) => (
            <NatSpace key={index} marginBottom="small">
              <NatCard
                title={example.title}
                subtitle={example.subtitle}
                resume={example.resume}
                imageURI={example.imageURI}
                key={index}
                onPress={press}
              />
            </NatSpace>
          ))}
        </ScrollView>
      </NatContainer>
    </SafeAreaView>
  );
};
