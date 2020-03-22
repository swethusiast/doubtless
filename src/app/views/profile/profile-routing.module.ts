import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { EditOrganizationComponent } from './edit-organization/edit-organization.component';
import { OrganizationComponent } from './organization/organization.component';
import { SignupComponent } from '../auth/signup/signup.component';

const routes: Routes = [
    { path: 'profile', component: UserComponent },
    { path: 'edit-profile', component: SignupComponent },
    { path: 'organization', component: OrganizationComponent },
    { path: 'add-organization', component: EditOrganizationComponent },
    { path: 'edit-organization/:id', component: EditOrganizationComponent },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
})
export class ProfileRoutingModule {}
