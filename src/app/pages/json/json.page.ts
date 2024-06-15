import { Component, OnInit } from '@angular/core';

//API import
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-json',
  templateUrl: './json.page.html',
  styleUrls: ['./json.page.scss'],
})
export class JsonPage implements OnInit {

  tests: any;
  test: any = {
    id: null,
    contenido: ''
  }

  inputID :any;
  inputContenido: any;
  testType: any;

  isModalOpen: boolean = false;

  constructor(private api: APIService) { }

  ionViewWillEnter(){
    this.getTests();
  }

  ngOnInit() {
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  getTests(){
    this.api.getTests().subscribe((data)=>{
      console.log(data)
      this.tests=data;
    });
  }
  getTest(id:any){
    this.api.getTest(id).subscribe((data)=>{
      console.log(data)
      this.test=data;
      this.inputID = this.test.id;
      this.inputContenido = this.test.contenido;
    });
  }

  openEdit(id:any){
    this.getTest(id);
    this.setOpen(true);
    this.testType = "edit";
    
    
  }
  saveEdit(){
    this.api.updateTest(this.test.id, this.test).subscribe(()=>{
      this.getTests();
    });
  }

  openCreate(){ 
    this.inputID = null;
    this.inputContenido = '';
    this.test.id = this.inputID;
    this.test.contenido = this.inputContenido;
    console.log(this.test)
    this.setOpen(true);
    this.testType = "new"; 
  }
  saveNew(){
    this.api.createTest(this.test).subscribe(()=>{
      this.getTests();
    });
  }

  save(){
    if(this.testType=="new"){
      this.saveNew();
    }
    if(this.testType=="edit"){
      this.saveEdit();
    }
  }

  eliminarTest(id:any){
    this.api.deleteTest(id).subscribe(success=>{
      this.getTests();
    });
  }

}
