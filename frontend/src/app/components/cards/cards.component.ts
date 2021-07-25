import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from 'src/app/services/toast.service';
import { ShowDragon } from '../dragon/dragon.model';
import { DragonService } from '../dragon/dragon.service';
import {ListCardsComponent} from '../list-cards/list-cards.component'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  
  //if toast is open
  open=false;

  paragraphs:string[]=[];

  @Input()
  dragon:ShowDragon={_id:'', name: '', type:'', history:'', imageURL: '' };  
  
  formDragon!: FormGroup;
  
  constructor(private toastService: ToastService, 
                private modalService: NgbModal,
                private dragonService: DragonService,
                private list:ListCardsComponent) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
    this.formDragon = new FormGroup({
      _id: new FormControl(this.dragon._id),
      name: new FormControl(this.dragon.name),
      type: new FormControl(this.dragon.type),
      history:  new FormControl(this.dragon.history),
      imageURL:  new FormControl(this.dragon.imageURL),
    })
  }

  showSuccess() {
    this.toastService.show('Cadastro modificado', { classname: 'bg-success text-light', delay: 2000 });
  }
  
  showDanger(dangerTpl:any) {
    if(!this.open){
      this.open = true;
      this.toastService.show(dangerTpl, { classname: 'bg-danger text-light', delay: 5000 });
      setTimeout(() => this.open = false, 5000);           
    }
  }  

  openVerticallyCentered(content:any) {
    this.paragraphs = this.dragon.history.split("\n");
    this.modalService.open(content, { centered: true, scrollable: true});
  }

  updateDragon(content:any){
    this.dragonService.update(this.formDragon.value).subscribe(()=>{
      this.showSuccess();      
      this.modalService.dismissAll(content);
      this.list.ngOnInit();
    })
  }

  deleteDragon(){
    this.dragonService.delete(this.dragon).subscribe(()=>{     
      this.open = false;    
      this.list.ngOnInit();      
    });
  }

}
