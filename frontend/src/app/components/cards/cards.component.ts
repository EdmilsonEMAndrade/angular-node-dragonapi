import { Component, Input, OnInit } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';
import { ShowDragon } from '../dragon.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input()
  dragon:ShowDragon={_id:'', name: '', type:'', history:'', imageURL: '' }

  constructor(private toastService: ToastService) { }

  ngOnInit(): void {
    
  }


  showSuccess() {
    this.toastService.show('I am a success toast', { classname: 'bg-success text-light', delay: 10000 });
  }
  showDanger(dangerTpl:any) {
    this.toastService.show(dangerTpl, { classname: 'bg-danger text-light', delay: 15000 });
  }

}
