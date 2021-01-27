import { Component, OnInit } from '@angular/core';

import { ToastMessageService } from '../../services/toast-message.service';
import { ToastMessageModel, ToastMessageType } from '../../models/toast-message';

@Component({
    selector: 'toast-message',
    templateUrl: './toast-message.component.html',
    styleUrls: ['./toast-message.component.scss']
})
export class ToastMessageComponent implements OnInit {
    toastMessageModel: ToastMessageModel = new ToastMessageModel();

    get toastType(): string {
      switch (this.toastMessageModel.toastType) {
        case ToastMessageType.Danger:
          return 'toast-message--danger';
        default:
          return 'toast-message--primary';
      }
    }

    constructor(private toastMessageService: ToastMessageService) { }

    ngOnInit(): void {
        this.toastMessageService.toastData.subscribe(newValue => {
            this.toastMessageModel = newValue;
            if (!this.toastMessageModel.visible) {
                return;
            }

            if (!this.toastMessageModel.dontClose) {
                setTimeout(this.close.bind(this), 3000);
            }
        });
    }

    close(): void {
        this.toastMessageService.hide();
    }
}
