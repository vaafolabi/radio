import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StreamingMedia, StreamingVideoOptions, StreamingAudioOptions } from '@ionic-native/streaming-media';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

url:any = null;

constructor(public navCtrl: NavController,private streamingMedia: StreamingMedia) { }

startStreaming(){
  /*let options: StreamingVideoOptions = {
    successCallback: () => { console.log('Video played') },
    errorCallback: (e) => { console.log('Error streaming') },
    orientation: 'landscape',
    shouldAutoClose: true,
    controls: false
  };

  this.streamingMedia.playVideo('197.210.168.147:8001/stream1', options);*/
  this.url = 'http://197.210.168.147:8001/stream1';
}

startVideo() {
  let options: StreamingVideoOptions = {
    successCallback: () => { console.log('Video played') },
    errorCallback: (e) => { console.log('Error streaming') },
    orientation: 'landscape',
    shouldAutoClose: true,
    controls: false
  };

  // http://www.sample-videos.com/
  this.streamingMedia.playVideo('http://197.210.168.147:8001/stream1', options);
}

startAudio() {
  let options: StreamingAudioOptions = {
    successCallback: () => { console.log('Finished Audio') },
    errorCallback: (e) => { console.log('Error: ', e) },
    initFullscreen: false // iOS only!
  };

  //http://soundbible.com/2196-Baby-Music-Box.html
  this.streamingMedia.playAudio('http://197.210.168.147:8001/stream1', options);
}

stopAudio() {
  this.streamingMedia.stopAudio();
}

}
