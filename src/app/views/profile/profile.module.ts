import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { EditOrganizationComponent } from './edit-organization/edit-organization.component';
import { FormsModule } from '@angular/forms';
import { OrganizationComponent } from './organization/organization.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [ UserComponent, EditOrganizationComponent, OrganizationComponent ],
    imports: [ CommonModule, ProfileRoutingModule, FormsModule, TranslateModule ],
    exports: [ TranslateModule ],
})
export class ProfileModule {}
