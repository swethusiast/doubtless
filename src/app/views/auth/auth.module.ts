import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [ SignupComponent, ForgotPasswordComponent ],
    imports: [ CommonModule, AuthRoutingModule, FormsModule, NgbModule, TranslateModule ],
    exports: [ TranslateModule ],
})
export class AuthModule {}
