import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import { AppLayoutComponent } from "./app.layout.component";
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { AppMenuitemComponent } from "./menuitem/menuitem.component";
import { FormsModule } from "@angular/forms";
import { RippleModule } from 'primeng/ripple';
import { MenuModule } from 'primeng/menu';
import { StyleClassModule } from 'primeng/styleclass';


@NgModule(
    {declarations: [
        AppLayoutComponent,
        TopbarComponent,
        SidebarComponent,
        FooterComponent,
        MenuComponent,
        AppMenuitemComponent
    ],
     imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        RouterModule,
        RippleModule,
        MenuModule,
        StyleClassModule,
    ]}
    )
export class AppLayoutModule {}
