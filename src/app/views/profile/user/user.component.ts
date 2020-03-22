import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: [ './user.component.scss' ],
})
export class UserComponent implements OnInit {
    profile = {
        name: 'Ahmed Samir Mohammed',
        email: 'mail@mail.com',
        phone: '0123456789',
        organizations: [
            {
                id: 1,

                name: 'organization Name',
                currency: 'USD',
                websit: 'organization.com',
                address: 'address address',
                industry: 'industry',
                poBox: 'poBox poBox',
                taxNo: '01234568',
                commercialNo: '01234568',
                vatNumber: '01234568',
                image: './../../../../assets/financial.svg',
            },
            {
                id: 2,

                name: 'organization Name',
                currency: 'USD',
                websit: 'organization.com',
                address: 'address address',
                industry: 'industry',
                poBox: 'poBox poBox',
                taxNo: '01234568',
                commercialNo: '01234568',
                vatNumber: '01234568',
                image: './../../../../assets/financial.svg',
            },
            {
                id: 3,
                name: 'organization Name',
                currency: 'USD',
                websit: 'organization.com',
                address: 'address address',
                industry: 'industry',
                poBox: 'poBox poBox',
                taxNo: '01234568',
                commercialNo: '01234568',
                vatNumber: '01234568',
                image: './../../../../assets/financial.svg',
            },
        ],
    };
    constructor() {}
    //     editOrganization(id){
    // this.router.navigate()
    //     }
    ngOnInit(): void {}
}
