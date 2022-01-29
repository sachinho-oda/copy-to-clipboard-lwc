import { api, LightningElement } from 'lwc';

export default class CopyToClipboardUtil extends LightningElement {
    @api
    async doCopy(textToCopy){
        //you can also use input element here if formatting doesnt need to be carried over to clipboard
        const input = document.createElement("textarea");
        input.innerHTML = textToCopy;

        document.body.appendChild(input);
        input.select();

        if(navigator.clipboard){
            const selection = document.getSelection();
            await copy(selection.toString());
        } else {
            // deprecated but still a good fallback because it is supported in most of the browsers
            document.execCommand('copy');
        }
        document.body.removeChild(input);
}

}

export const copy = async (textToCopy) => await navigator.clipboard.writeText(textToCopy).catch((err) => console.error(JSON.stringify(err)), (err) => console.error(JSON.stringify(err)));