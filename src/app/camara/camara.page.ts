import { Component, OnInit } from '@angular/core';
import { ImagePicker, ImagePickerOptions } from '@awesome-cordova-plugins/image-picker/ngx';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
  providers: [ImagePicker],
})
export class CamaraPage implements OnInit {
  images: Array<string> = [];

  constructor(private imagePicker: ImagePicker) {}

  ngOnInit() {}

  OpenImages() {
    const opts: ImagePickerOptions = {
      maximumImagesCount: 10,
      width: 800,
      outputType: 1,
    };

    this.imagePicker.getPictures(opts).then(
      (results) => {
        if (results === 'ok') {
          // Si el resultado es 'ok', no hagas nada o maneja la lógica correspondiente
          return;
        }

        for (let i = 0; i < results.length; i++) {
          this.images = [...this.images, 'data:image/jpeg;base64,' + results[i]];
        }
      },
      (err) => {
        console.error(err);
      }
    );
  }
}


