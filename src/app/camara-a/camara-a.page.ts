import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


@Component({
  selector: 'app-camara-a',
  templateUrl: './camara-a.page.html',
  styleUrls: ['./camara-a.page.scss'],
})
export class CamaraAPage implements OnInit {
  picture: string;
  code: any;
  constructor(private barcodeScanner: BarcodeScanner) { }

  async takePicture() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.code=barcodeData.text;
      console.log('Barcode data', this.code);
     }).catch(err => {
         console.log('Error en qr', err);
     });
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl, 
    });

    this.picture = image.dataUrl;
  }

  ngOnInit() {
    
  }

  Scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.code=barcodeData.text;
      console.log('Barcode data', this.code);
     }).catch(err => {
         console.log('Error en qr', err);
     });
  }
}

 

