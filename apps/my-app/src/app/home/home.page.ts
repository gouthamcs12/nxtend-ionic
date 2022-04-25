import { Component, OnInit } from '@angular/core';
import { AppVersion } from '@awesome-cordova-plugins/app-version/ngx';
import { Platform } from '@ionic/angular';

import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';


@Component({
  selector: 'anch-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  version: string = 'no version';
  constructor(private appVersion: AppVersion, private platform: Platform) { 
   
  }

  ngOnInit(): void {
    console.log('home page')
    this.addNewToGallery();
    // this.platform.ready().then((r)=>{
    //   console.log(r);
    //   this.appVersion.getVersionNumber().then(res=> {
    //     this.version = res;
    //   })
    // })
  }

  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
  }

}
