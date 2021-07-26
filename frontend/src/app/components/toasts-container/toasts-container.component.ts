import {Component, TemplateRef} from '@angular/core';

import {ToastService} from '../../services/toast/toast.service';


@Component({
  selector: 'app-toasts',
  templateUrl: './toasts-container.component.html',
  host: {'[class.ngb-toasts]': 'true'}
})
export class ToastsContainerComponent {
  constructor(public toastService: ToastService) {}

  isTemplate(toast:any) { return toast.textOrTpl instanceof TemplateRef; }
}
