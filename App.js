import React from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import YouTube from 'react-native-youtube';

const App = () => {
  return (
    <View>
      <TextInput style={{borderWidth: 4}} />
      <Photo />
      <ThemeButton></ThemeButton>
      <Text>Jadi ntar gambar Movie nya diatas</Text>
      <Text>
        Terus ntar ada container isinya info tth movie itu (e.g: genre, tahun,
        rating, dll)
      </Text>
      <Text>terus ada container lagi tuh isinya description singkat</Text>
      <Text>
        terus ntar ada link ke movie trailer nya gitu pake youtube api??
      </Text>
      <Vidio />
    </View>
  );
};

const ThemeButton = () => {
  return <Text>vvv</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/200/200/arch'}}
      style={{width: 200, height: 200}}
    />
  );
};

const Vidio = () => {
  return (
    <YouTube
      apiKey="AIzaSyABXkiT7uEtF9pkR-GayMhmK-U3lyeEnL8"
      videoId="gCcx85zbxz4"
      play
      fullscreen
      loop
      onReady={(e) => setState({isReady: true})}
      onChangeState={(e) => setState({status: e.state})}
      onChangeQuality={(e) => setState({quality: e.quality})}
      onError={(e) => setState({error: e.error})}
      style={{alignSelf: 'stretch', height: 300}}
    />
  );
};

export default App;
