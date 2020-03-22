import { LayoutModule } from './layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AuthModule } from '../views/auth/auth.module';

@NgModule({
    declarations: [],
    imports: [ CommonModule, LayoutModule, TranslateModule, AuthModule ],
    exports: [ TranslateModule ],
})
export class SharedModule {}
