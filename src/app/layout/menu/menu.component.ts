import {Component, OnInit} from '@angular/core';
import {LayoutService} from '../services/app.layout.service';

@Component({selector: 'app-menu', templateUrl: './menu.component.html', styleUrls: ['./menu.component.css']})
export class MenuComponent implements OnInit {
    model : any[] = [];

    constructor(public layoutService : LayoutService) {}


    ngOnInit(): void {
        this.model = [
            {
                label: 'Home',
                icon: 'pi pi-fw pi-home',
                items: [
                    {
                        label: 'Dashboard',
                        icon: 'pi pi-fw pi-chart-line',
                        routerLink: ['/']
                    }
                ]
            }, {
                label: 'Underwriting',
                icon: 'pi pi-fw pi-home',
                items: [
                    {
                        label: 'Client Listing',
                        icon: 'pi pi-fw pi-users',
                        routerLink: ['/client/all']
                    }
                ]
            }, {
                label: 'System Setting',
               
                items: [
                  {
                    label: 'Company Profile',
                    icon: 'pi pi-fw pi-shield',
                    routerLink: ['/company']
                  },
                  {
                    label:"Utility Parameters",
                    icon: 'pi pi-fw pi-wrench',
                    items: [
                      { label: 'Module Management', icon: 'pi pi-fw pi-circle', routerLink: ['/modules'], badge: 'NEW' },
                      { label: 'User Maintenance', icon: 'pi pi-fw pi-circle', routerLink: ['/users'], target: '_blank' },
                    ]
                  }
                 
                ]
            },
        ]
    }


}
