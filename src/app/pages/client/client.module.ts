import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {NgModule} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {RouterModule, Routes} from '@angular/router';
import {ClientComponent} from './client.component';
import {RippleModule} from 'primeng/ripple';
import {TableModule} from 'primeng/table';
import {ClientFormComponent} from './client-form/client-form.component';
import { StepsModule } from 'primeng/steps';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from "primeng/dropdown";
import { AutoCompleteModule } from 'primeng/autocomplete';

const routes: Routes = [

    {
        path: 'all',
        component: ClientComponent
    }, 
    
    {
        path: '',
        component: ClientFormComponent
    }
]


@NgModule({
    declarations: [
        ClientComponent, 
        ClientFormComponent,

    ],
    imports: [
      CommonModule,
      RouterModule.forChild(routes), 
      FormsModule,
      RippleModule, 
      ButtonModule, 
      TableModule,
      StepsModule,
      TabViewModule,
      InputTextModule,
      CheckboxModule,
      RadioButtonModule,
      InputTextareaModule,
      InputNumberModule,
      DropdownModule,
      AutoCompleteModule
    ]
})
export class ClientModule {}
