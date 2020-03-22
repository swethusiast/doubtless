import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-edit-organization',
    templateUrl: './edit-organization.component.html',
    styleUrls: [ './edit-organization.component.scss' ],
})
export class EditOrganizationComponent implements OnInit {
    constructor(private router: Router, private route: ActivatedRoute) {}
    files: any = [];
    RouteParams;
    organizationId;
    addOrganization = false;
    editOrganization = false;
    uploadFile(event) {
        console.log(event);

        for (const el of event) {
            console.log(el);
            this.files.push(el.name);
        }
    }
    deleteAttachment(index) {
        this.files.splice(index, 1);
    }
    ngOnInit(): void {
        this.RouteParams = this.router.url;
        this.organizationId = this.route.snapshot.params.id;
        if (this.RouteParams === '/user/add-organization') {
            this.addOrganization = true;
            this.editOrganization = false;
        } else if (this.RouteParams.includes('/user/edit-organization') && this.organizationId) {
            this.addOrganization = false;
            this.editOrganization = true;
        }
    }
    onSubmit(form: NgForm) {
        if (form.invalid) {
            return;
        }
        console.log(form.value);
    }
}
