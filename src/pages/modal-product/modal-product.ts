import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http/ngx';

/**
 * Generated class for the ModalProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-product',
  templateUrl: 'modal-product.html',
})
export class ModalProductPage {
  nombreProducto:string;
  CodigoBarras:string;
  LoteNumber:string;
  fechaVencimiento:string;
  cantidadProd:string;
  dataRange:string; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController, private toastCtrl: ToastController, private httpClient: HTTP) {
    this.closeModal;
    this.presentToast;
    this.clickImgModal;
    this.changeCantidad;
    this.findCodigoQr;
    this.getProduct;
    let startDate = new Date(); 
    console.log('startDate', startDate);
      startDate.setDate(startDate.getDate()-30);
    let dformat = [startDate.getFullYear(),
                  "0" + (String(startDate.getMonth()+1)).slice(-2),
                   startDate.getDate()].join('-');
    console.log('dformat', dformat);
    this.dataRange = dformat;
  }

  // notify

  presentToast(message:string, duration:number = 3000, position:string = 'top', color:string = 'red') {
    let toast = this.toastCtrl.create({
      message: message,
      duration: duration,
      position: position,
      cssClass: "bg-color-toast-"+color,
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

  ionViewDidLoad() {
  }

  closeModal(){
    console.log("nombreProducto", typeof(this.nombreProducto));
    console.log("CodigoBarras", this.CodigoBarras);
    console.log("LoteNumber", this.LoteNumber);
    console.log("fechaVencimiento", this.fechaVencimiento);
    console.log("cantidadProd", this.cantidadProd);
    if((this.nombreProducto == '' || typeof(this.nombreProducto) === 'undefined') || (this.CodigoBarras == '' || typeof(this.CodigoBarras) === 'undefined') || (this.LoteNumber == '' || typeof(this.LoteNumber) === 'undefined') || (this.fechaVencimiento == '' || typeof(this.fechaVencimiento) === 'undefined') || (this.cantidadProd == '' || typeof(this.cantidadProd) === 'undefined'))
    {
      
      this.presentToast("Todos los campos son requerido para agregar producto", 3000, 'top', 'blue');
    }else
    {
      let dataFormProduct:object = 
      [
            {"name": "Producto", value: this.nombreProducto},
            {"name": "CodigoBarras", value: this.CodigoBarras},
            {"name": "LoteNumber", value: this.LoteNumber},
            {"name": "fechaVencimiento", value: this.fechaVencimiento},
            {"name": "cantidadProd", value: this.cantidadProd},
      ];
      this.viewCtrl.dismiss(dataFormProduct);
    }
    
}

changeCantidad(value:any)
{
  console.log("cantidadProd", this.cantidadProd);

  if(Number(this.cantidadProd) < 20)
  {
    document.getElementById("AddImg").style.display = 'block';
  }
  else
  {
    document.getElementById("AddImg").style.display = 'none';
  }

}

clickImgModal()
{
  var fileImg = document.getElementById('fileImg');
  fileImg.click();
  // fileImg
  // var button = document.getElementById("myButton");
  // button.addEventListener("click");
}

findCodigoQr()
{
  if(this.CodigoBarras  == '')
  {
    this.presentToast("Introduzca un codigo SAP", 3000, 'top', 'blue');
  }else
  {
    this.getProduct(this.CodigoBarras)
  }

}

getProduct(CodigoBarras: any)
{

  this.httpClient.get('http://ionic.io', {}, {})
  .then(data => {

    console.log(data.status);
    console.log(data.data); // data received by server
    console.log(data.headers);

  })
  .catch(error => {

    this.presentToast("Error Obteniendo Producto", 3000, 'top', 'red');

  });

}

}
