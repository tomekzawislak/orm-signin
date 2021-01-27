export class ToastMessageModel implements IToastMessageModel {
    visible: boolean;
    text: string;
    toastType: ToastMessageType;
    dontClose?: boolean | null;

    constructor(data?: IToastMessageModel) {
        if (data) {
            for (let property in data) {
                if (data.hasOwnProperty(property)) {
                    (<any>this)[property] = (<any>data)[property];
                }
            }
        }
    }
}

export interface IToastMessageModel {
    visible: boolean;
    text: string;
    toastType: ToastMessageType;
    dontClose?: boolean | null;
}

export enum ToastMessageType {
    Primary,
    Danger
}
