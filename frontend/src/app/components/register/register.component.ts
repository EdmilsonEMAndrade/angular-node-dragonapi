import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormControl} from '@angular/forms'

import { ToastService } from 'src/app/services/toast.service';
import { registerDragon } from '../dragon/dragon.model';
import { DragonService } from '../dragon/dragon.service';
import { DragonCla } from '../dragon/dragon'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {  
 
  formDragon!: FormGroup;

  constructor(private dragonService: DragonService, 
              private toastService: ToastService,
              private router:Router) { }


  ngOnInit(): void {
    this.createForm(new DragonCla());
  }

  createForm(dragonToRegister:registerDragon){
    this.formDragon = new FormGroup({
      name: new FormControl(dragonToRegister.name),
      type: new FormControl(dragonToRegister.type),
      history:  new FormControl(dragonToRegister.history),
      imageURL:  new FormControl(dragonToRegister.imageURL),
    })
  } 

  createDragon(){    
      this.dragonService.create(this.formDragon.value).subscribe(()=>{
      this.toastService.show('Cadastro concluido.', { classname: 'bg-success text-light', delay: 10000 });
      this.router.navigate(["/"]);
      });   
    
  }
}
