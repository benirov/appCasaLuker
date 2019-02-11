import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import * as dataCategoria  from '../../assets/data/categoria.js';
import * as dataSolicitud  from '../../assets/data/tipo_solicitud.js';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  List:any[] = [];
  Solicitante:any;
  CategoryItem:any[] = [];
  SolicitudItem:any[] = [];
  isEnabledDependencia:boolean = true;
  isEnabledCategoria:boolean = true;
  isEnabledTipoSolicitud:boolean = true;
  img1Preview:any; 
  codigoSap:any;
  url:any = "";

    // dataModal:any[] = [];

  constructor(public navCtrl: NavController, public modalCtrl : ModalController, private toastCtrl: ToastController, public http: HttpClient, private httpClient: HTTP) {
  this.List.push(
    {
      name: 'Casa luker'
    });
    this.presentToast;
    this.Solicitante = "1";
    this.isEnabledDependencia = false;
    this.sendData;

    // this.onChangeSolicitante;
    this.onChangeDependencia;
    this.findCodigoSap;
    this.onChangeCategoria;
    this.fileUpload;
    this.openModal; 
  }




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


  findCodigoSap() {
    console.log(typeof(this.codigoSap));
    if(typeof(this.codigoSap) == 'undefined' || this.codigoSap == '')
    {
      console.log(" a cero");
      this.presentToast("Introduzca un codigo SAP", 3000, 'top', 'red');
      // this.isEnabledDependencia = false;
    }
    else
    {
            this.httpClient.get('http://ionic.io', {}, {})
            .then(data => {

            console.log(data.status);
            console.log(data.data); // data received by server
            console.log(data.headers);

            })
            .catch(error => {
                  this.presentToast("Error Obteniendo Informacion de cleinte", 3000, 'top', 'red');
            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);

            });
    }
  }

  fileUpload(event:any)
  {
      // url:any = "";
      // this.file = event.target.files[0]
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
      this.url = (<FileReader>event.target).result;
      }
        
//     console.log("event");
//     console.log(event);
//     // let img = document["fileImg"];
//     console.log(event.files);
//     console.log(event.target.files[0]);  
//       if (event.target.files && event.target.files[0]) {
//         console.log("aqui");
//           var reader = new FileReader();
//           let img = document["fileImg"]; 
//           reader.onload = img.src;
//           reader.readAsDataURL(this.files[0])
             
//                 img.src = event.target.result;
              
//           reader.readAsDataURL(event.target.files[0]);

//           }

          // if (event.target.files && event.target.files[0]) {
    //   var reader = new FileReader();
  
    //   reader.onload = (event:any) => {
    //     this.img1Preview = (<FileReader>event.target).result;
    //   }
  
    //   reader.readAsDataURL(event.target.files[0]);
    // }
        
}


  onChangeDependencia(value:any) 
  {
    if(Number(value) != 0 )
    { 
      this.isEnabledCategoria = false;
      // let categoriaObj:any = document.querySelector("#categoria");
      switch(Number(value))
      {

        case 0:
                
                
        break;


        case 2:
              this.CategoryItem = dataCategoria.calidadCliente;
              document.getElementById("AddProducto").style.display = 'block';
        break;
        case 3:
              this.CategoryItem = dataCategoria.logistica;
              document.getElementById("AddProducto").style.display = 'none'; 
        break;
        case 4:
                this.CategoryItem = dataCategoria.Cartera;
                document.getElementById("AddProducto").style.display = 'none';           
        break;
        case 5:
                this.CategoryItem = dataCategoria.Nomina;
                document.getElementById("AddProducto").style.display = 'none';      
        break;
        case 6:
                this.CategoryItem = dataCategoria.Comercial;
                document.getElementById("AddProducto").style.display = 'none';   
        break;
        case 7:
                this.CategoryItem = dataCategoria.ServicioCliente;
                document.getElementById("AddProducto").style.display = 'none';       
        break;
    };

    this.isEnabledCategoria = false;
  }

}


onChangeCategoria(value:any) 
  {    
    if(Number(value) != 0 )
    { 
      // let solicitudObj:any = document.querySelector("#tiposolicitud"); 
      switch(Number(value))
      {
        case 0:
                
                
        break;

        case 1:
              this.SolicitudItem = dataSolicitud.Cafe;
        break;
        case 2:
              this.SolicitudItem = dataSolicitud.Chocolate; 
        break;
        case 3:
              this.SolicitudItem = dataSolicitud.Snacks;           
        break;
        case 4:
              this.SolicitudItem = dataSolicitud.Aseo;      
        break;
        case 5:
              this.SolicitudItem = dataSolicitud.Enlatados;   
        break;
        case 6:
              this.SolicitudItem = dataSolicitud.Procoval;       
        break;
        case 7:
              this.SolicitudItem = dataSolicitud.JGB;       
        break;
        case 8:
              this.SolicitudItem = dataSolicitud.Team;       
        break;
        case 9:
              this.SolicitudItem = dataSolicitud.Ferrero;       
        break;
        case 10:
              this.SolicitudItem = dataSolicitud.CafeCliente;       
        break;
        case 11:
              this.SolicitudItem = dataSolicitud.ChocolateCliente;       
        break;
        case 12:
              this.SolicitudItem = dataSolicitud.SnackCliente;       
        break;
        case 13:
              this.SolicitudItem = dataSolicitud.AseoCliente;       
        break;
        case 14:
              this.SolicitudItem = dataSolicitud.EnlatadosCliente;       
        break;
        case 15:
              this.SolicitudItem = dataSolicitud.ProcovalCliente;       
        break;
        case 16:
              this.SolicitudItem = dataSolicitud.JBGCliente;
              document.getElementById("AddProducto").style.display = 'none';       
        break;
        case 17:
              this.SolicitudItem = dataSolicitud.TeamCliente;       
        break;
        case 18:
              this.SolicitudItem = dataSolicitud.FerreroCliente;       
        break;
        case 19:
              this.SolicitudItem = dataSolicitud.Barranquilla;       
        break;
        case 20:
              this.SolicitudItem = dataSolicitud.Bucaramanga;       
        break;
        case 21:
              this.SolicitudItem = dataSolicitud.Cali;       
        break;
        case 22:
              this.SolicitudItem = dataSolicitud.Cucuta;       
        break;
        case 23:
              this.SolicitudItem = dataSolicitud.Duitama;       
        break;
        case 24:
              this.SolicitudItem = dataSolicitud.Funza;       
        break;
        case 25:
              this.SolicitudItem = dataSolicitud.Ibague;       
        break;
        case 26:
              this.SolicitudItem = dataSolicitud.Medellin;       
        break;
        case 27:
              this.SolicitudItem = dataSolicitud.Neiva;       
        break;
        case 28:
              this.SolicitudItem = dataSolicitud.Pasto;       
        break;
        case 29:
              this.SolicitudItem = dataSolicitud.Pereira;       
        break;
        case 30:
              this.SolicitudItem = dataSolicitud.Sincelejo;       
        break;
        case 31:
              this.SolicitudItem = dataSolicitud.Cotizaciones;       
        break;
        case 32:
              this.SolicitudItem = dataSolicitud.RutaVisitasVendedor;       
        break;
        case 33:
              this.SolicitudItem = dataSolicitud.Certificados;       
        break;
        case 34:
              this.SolicitudItem = dataSolicitud.ProcesoAdministrativo;       
        break;
        case 35:
              this.SolicitudItem = dataSolicitud.ReferenciasLaborales;       
        break;
        case 36:
              this.SolicitudItem = dataSolicitud.TrabajaConNosotros;       
        break;
        case 37:
              this.SolicitudItem = dataSolicitud.SolicitudGeneral;       
        break;
    };

    this.isEnabledTipoSolicitud = false;
  }

}

// metodo para modal

openModal()
{
    var modalPage = this.modalCtrl.create('ModalProductPage');
    modalPage.present();
    modalPage.onDidDismiss(data => {

      let dataHTMLString:any = ''; 

      console.log (data[0].value);

      dataHTMLString = '<li>'+
                            '<a href="#" class="acc-handle" tabindex="0">'+data[0].value+'</a>'+
                            '<div class="acc-panel">'+
                                '<ion-label  class=text-danger>'+data[1].value+'</ion-label>'+
                                '<ion-label  class=text-danger>'+data[2].value+'</ion-label>'+
                                '<ion-label  class=text-danger>'+data[3].value+'</ion-label>'+
                                '<ion-label  class=text-danger>'+data[4].value+'</ion-label>'+
                            '</div>'+
                          '</li>';

      document.querySelector("#ListProduct").innerHTML += dataHTMLString;



                          
      console.log (dataHTMLString);
    });
}

sendData()
{

      // let Data = document.querySelectorAll(".acc-panel");
      // let DataTable:[];
      // Data.forEach(element => {
            
      // });
      let clientConfirmData = new FormData();
      clientConfirmData.append("tipoCliente", "2");
      clientConfirmData.append("Dependencia", "2");
      clientConfirmData.append("Categoria", "2");
      clientConfirmData.append("TipoSolicitud", "2");
      clientConfirmData.append("tipoCliente", "2");
}

}
