import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-select',
    templateUrl: './select.component.html',
    styleUrls: [ './select.component.scss' ],
})
export class SelectComponent implements OnInit {
    @Input() files: string;

    select = true;
    sheet = false;
    constructor() {}
    onSelect(form: NgForm) {
        if (form.invalid) {
            return;
        }

        this.select = false;
        this.sheet = true;
        console.log(form.value);
    }
    ngOnInit(): void {
        console.log(this.files);
    }
}
