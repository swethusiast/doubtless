import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateComponent } from './generate/generate.component';
import { ReportsRoutingModule } from './reports-routing.module';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { DragDropDirective } from './drag-drop.directive';
import { SelectComponent } from './select/select.component';
import { SheetComponent } from './sheet/sheet.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        GenerateComponent,
        DragDropDirective,
        UploadFileComponent,
        SelectComponent,
        SheetComponent,
        ListComponent,
    ],
    imports: [ CommonModule, ReportsRoutingModule, FormsModule ],
})
export class ReportsModule {}
