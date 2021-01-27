import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToastMessageModel, ToastMessageType } from '../models/toast-message';

@Injectable({
    providedIn: 'root'
})
export class ToastMessageService {
    private toastMessageSource = new BehaviorSubject<ToastMessageModel>(new ToastMessageModel());
    public toastData = this.toastMessageSource.asObservable();

    constructor() { }

    showDanger(text: string, dontClose?: boolean): void {
        this.show(text, ToastMessageType.Danger, dontClose);
    }

    showPrimary(text: string, dontClose?: boolean): void {
      this.show(text, ToastMessageType.Primary, dontClose);
    }

    hide(): void {
        const model = new ToastMessageModel({
            visible: false,
            text: null,
            toastType: null,
            dontClose: null
        });

        this.toastMessageSource.next(model);
    }

    private show(text: string, toastType: ToastMessageType, dontClose?: boolean): void {
      const model = new ToastMessageModel({
        visible: true,
        text,
        toastType,
        dontClose
      });

      this.toastMessageSource.next(model);
    }
}
