import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToastMessageModel, ToastMessageType } from '../models/toast-message.model';

@Injectable({
    providedIn: 'root'
})
export class ToastMessageService {
    private toastMessageSource = new BehaviorSubject<ToastMessageModel>(new ToastMessageModel());
    public toastData = this.toastMessageSource.asObservable();

    constructor() { }

    show(text: string, toastType: ToastMessageType): void {
        const model = new ToastMessageModel({
            visible: true,
            text,
            toastType
        });

        this.toastMessageSource.next(model);
    }

    showDanger(text: string, dontClose?: boolean): void {
        const model = new ToastMessageModel({
            visible: true,
            text,
            toastType: ToastMessageType.Danger,
            dontClose
        });

        this.toastMessageSource.next(model);
    }

    showPrimary(text: string, dontClose?: boolean): void {
        const model = new ToastMessageModel({
            visible: true,
            text,
            toastType: ToastMessageType.Primary,
            dontClose
        });

        this.toastMessageSource.next(model);
    }

    hide(): void {
        const model = new ToastMessageModel({
            text: '',
            visible: false,
            toastType: this.toastMessageSource.value.toastType,
            dontClose: null
        });

        this.toastMessageSource.next(model);
    }
}
