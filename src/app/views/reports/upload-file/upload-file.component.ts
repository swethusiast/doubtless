import { Component } from '@angular/core';

@Component({
    selector: 'app-upload-file',
    templateUrl: './upload-file.component.html',
    styleUrls: [ './upload-file.component.scss' ],
})
export class UploadFileComponent {
    upload = true;
    select = false;
    files: any = [];

    uploadFile(event) {
        console.log(event);

        for (const el of event) {
            console.log(el);
            this.files.push(el.name);
        }
        this.upload = false;
        this.select = true;
    }
    deleteAttachment(index) {
        this.files.splice(index, 1);
    }
}
