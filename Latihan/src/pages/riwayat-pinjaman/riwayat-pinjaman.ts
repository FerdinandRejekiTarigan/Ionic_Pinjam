import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
//import { TambahPinjamanPage } from '../tambah-pinjaman/tambah-pinjaman';
const KEY_DATA_PINJAMAN = "dataPinjaman";

/**
 * Generated class for the RiwayatPinjamanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-riwayat-pinjaman',
  templateUrl: 'riwayat-pinjaman.html',
})
export class RiwayatPinjamanPage {

  public listDataPinjaman: any;
  IDR: any = null;
  lamapinjaman: any = null;
  transfer: any = null;
  norek: any = null;
 
 

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private storage: Storage) {
       // mengatur key value 
       this.storage.set('name', 'noname');

       //mengambil key value
       this.storage.get('name').then((val) => {
         console.log('Your name is', val);
       });

      this.ambilDataPinjaman();
  }

  ambilDataPinjaman() {
    this.storage.get(KEY_DATA_PINJAMAN).then((data) => {
      if (data != null) {
        this.listDataPinjaman = JSON.parse(data);
        console.log(this.listDataPinjaman);
      } else {
        this.listDataPinjaman = [];
        console.log('empty');
      }
    })
  }

 
  hapusDataPinjaman(item) {
    var temp = this.listDataPinjaman.indexOf(item);
    this.listDataPinjaman.splice(temp, 1);
    this.storage.set(KEY_DATA_PINJAMAN, JSON.stringify(this.listDataPinjaman));
  }

 


  ionViewDidLoad() {
    console.log('ionViewDidLoad RiwayatPinjamanPage');
  }

}
