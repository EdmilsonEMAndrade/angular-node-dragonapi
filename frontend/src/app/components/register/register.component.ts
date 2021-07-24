import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';
import { registerDragon } from '../dragon/dragon.model';
import { DragonService } from '../dragon/dragon.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private dragonService: DragonService, 
              private toastService: ToastService,
              private router:Router) { }
  dragon:registerDragon ={
    name:'Shiryu',
    type:'humano',
    history:'Dragon Shiryū é um personagem fictício do universo Saint Seiya criado por Masami Kurumada. Como um dos protagonistas desta franquia de mídia, ele fez aparições em vários mangás, a adaptação original de anime, OVAs, filmes e videogames. Ele também inspirou um grande número de colecionáveis.',
    imageURL:'https://http2.mlstatic.com/D_NQ_NP_604899-MLB28861063153_122018-O.jpg'
    
  }
  ngOnInit(): void {
  }

  createDragon(){
    this.dragonService.create(this.dragon).subscribe(()=>{
      this.toastService.show('Cadastro concluido.', { classname: 'bg-success text-light', delay: 10000 });
      this.router.navigate(["/"]);
    });
  }
}
