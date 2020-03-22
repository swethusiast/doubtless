import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: [ './signup.component.scss' ],
})
export class SignupComponent implements OnInit {
    RouteParams;
    signup = false;
    editProfile = false;
    prices = {
        title: 'Background And Solution',
        description: `Prices are per portfolio report for each year end. Note that you can revise
    your portfolio but can only produce one final report per fee.`,
        list: [
            'international Clients: $150 / report',
            'South African Clients: R2200 (Excl VAT)',
            'Payments are done by secure credit card or EFT (SA Clients only).',
        ],
    };
    constructor(private authService: AuthService, private router: Router) {}

    ngOnInit(): void {
        this.RouteParams = this.router.url;
        if (this.RouteParams === '/auth/signup') {
            this.signup = true;
            this.editProfile = false;
        } else if (this.RouteParams === '/user/edit-profile') {
            this.signup = false;
            this.editProfile = true;
        }
    }

    onSignup(form: NgForm) {
        if (form.invalid) {
            return;
        }
        console.log(form.value);
        this.authService.createUser(form.value.username, form.value.email, form.value.address, form.value.password);
    }
}
