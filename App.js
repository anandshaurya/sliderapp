import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Slider from '@react-native-community/slider';
import { Audio } from 'expo-av';
import VolumeSlider from 'react-native-volume-slider';

export default function App() {

const [volume, changeVolume] = useState(0.5);

const soundObject = new Audio.Sound();

const songplay = async () => {
try {
  await soundObject.loadAsync(require('./assets/hello.mp3'));
  await soundObject.playAsync();
  await soundObject.setVolumeAsync(volume)
  // Your sound is playing!
} catch (error) {
  alert("error")
}
}


  return (
    <View style={styles.container}>

      <View>
        <Button title = 'Play' onPress={() => songplay()} />
      </View>

      <Slider
    style={{width: 200, height: 40, marginTop : 50, backgroundColor : 'gray'}}
    minimumValue={0}
    maximumValue={1}
    minimumTrackTintColor="#FFFFFF"
    maximumTrackTintColor="#000000"
    value={volume}
    onValueChange = {(volume) => {changeVolume(volume)}}
  />

  <Text>{volume*100} %</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
