import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from 'src/app/services/toast.service';
import { ShowDragon } from '../dragon/dragon.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  
  private show=false;
  paragrafos:string[]=[];
  @Input()
  dragon:ShowDragon={_id:'', name: '', type:'', history:'', imageURL: '' };  
  
  constructor(private toastService: ToastService, private modalService: NgbModal) { }

  ngOnInit(): void {}

  showSuccess() {
    this.toastService.show('I am a success toast', { classname: 'bg-success text-light', delay: 10000 });
  }
  showDanger(dangerTpl:any) {
    if(!this.show){
      this.changeShow()
      this.toastService.show(dangerTpl, { classname: 'bg-danger text-light', delay: 10000 });
      setTimeout(() => {this.changeShow()}, 10000);
      
    }
  }
  changeShow(): void {
    this.show = !this.show;
  }

  openVerticallyCentered(content:any) {
    this.paragrafos = this.dragon.history.split("\n");
    this.modalService.open(content, { centered: true, scrollable: true});
  }

}
