import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {MyCarousel} from './MyCarousel';

const App: () => React$Node = () => {
  const carouselRef = React.useRef(null);

  [entries, setEntries] = useState([0, 1, 2, 3, 4]);

  const _renderButton = (data) => {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log(`Snapping to: ${data}`);
          console.log('Carousel ref current is: ', carouselRef.current);
          carouselRef.current.snapToItem(data, true, false);
        }}>
        <Text> Snap to #{data + 1} </Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View style={styles.topView}></View>
      <StatusBar barStyle="dark-content" />
      <MyCarousel carouselRef={carouselRef} />
      <View style={styles.bottomButtons}>
        {entries.map((data) => _renderButton(data))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  topView: {
    height: '25%',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#ADADAD',
    padding: 10,
    margin: 10,
  },
  bottomButtons: {
    height: '50%',
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
