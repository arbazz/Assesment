import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Animated from 'react-native-reanimated';

const VideoPlayer = ({bottom}: any) => {
  const videoUrl =
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'; // Replace with your video URL
  const thumbnailUri =
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg';
  return (
    <Animated.View style={[styles.container, {bottom: bottom}]}>
      {thumbnailUri && (
        <Image source={{uri: thumbnailUri}} style={styles.thumbnail} />
      )}

      {/* <Video
        source={{uri: videoUrl}}
        style={styles.videoPlayer}
        resizeMode="cover"
        controls={true}
      /> */}

      <View style={styles.overlay}>
        <Text style={styles.title}>Sample Video</Text>
        <TouchableOpacity style={styles.playButton}>
          <Text style={styles.playButtonText}>Play</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    zIndex: 100,
    bottom: -50,
  },
  thumbnail: {
    flex: 1,
    resizeMode: 'cover',
  },
  videoPlayer: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 16,
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginBottom: 8,
  },
  playButton: {
    backgroundColor: 'blue',
    padding: 8,
    borderRadius: 8,
  },
  playButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default VideoPlayer;
