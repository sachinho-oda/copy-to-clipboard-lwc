import { LightningElement } from 'lwc';

export default class CopyToClipboard extends LightningElement {
    copyText(){
        const textarea = this.template.querySelector('textarea');
        this.template.querySelector('c-copy-to-clipboard-util')?.doCopy(textarea.value);
    }
}