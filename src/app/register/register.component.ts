import { Component, OnInit } from '@angular/core';
import {RegsiterService} from './regsiter.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[RegsiterService]
})
export class RegisterComponent implements OnInit {

User ={
  firstname:'',
  lastname:''
}

  constructor(private registerService:RegsiterService) { }

  ngOnInit() {
  }

 register(){
   
this.registerService.regsister_api_call(this.User).then(response=>{

}).catch(err=>{
  
});

 }

}
