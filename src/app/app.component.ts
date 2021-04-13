import { Component } from '@angular/core';
import { DataService } from '../app/service/data.service';
import { datos, datosConcate, datosPersona} from './other/interface';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'personas';
  public Listanombres: datos;
  public listapersona: datos[] = [];
  public obj2 : any;
  public nombre: string;
  public archivo: string;
  public jsonResul: datos [] = [];
  public person : datos[];

  constructor( private data: DataService){
    this.nombre,
    this.archivo
    
  }

  guardar(){
    
      
      let mira = this.data.getDatos().subscribe( result => { 
        this.person = result.results;
       
       let obj1 = result.results[0];
       this.obj2 = {"nombre": this.nombre, "archivo": this.archivo}
       this.Listanombres = Object.assign(obj1, this.obj2);
       this.jsonResul.push(this.Listanombres);
        console.log(this.Listanombres);

        console.log(this.jsonResul);

        localStorage.setItem("persona", JSON.stringify( this.jsonResul));
        setTimeout(()=>{this.nombre = undefined, this.archivo = undefined}, 300);
        this.obtener();
        console.log(this.archivo);
   });

    
  }

  obtener(){
     this.listapersona = JSON.parse( localStorage.getItem("persona"));
     console.log("Asi es: ", this.listapersona);
  }

  borrar(){
    localStorage.clear();
    this.listapersona = [];
    this.jsonResul = [];
  }


  
}
