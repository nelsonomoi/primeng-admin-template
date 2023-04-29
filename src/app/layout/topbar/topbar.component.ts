import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../services/app.layout.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
})
export class TopbarComponent implements OnInit{

  items: MenuItem[] = [];
  
  constructor(
    public layoutService: LayoutService
  ){}

  ngOnInit(): void {
    this.items = [
      {
          label: 'Profile',
          escape: true,
          icon: 'pi pi-user',
          command: () => {
            console.log("User profile");
        }
      },
      {
          label: 'Logout',
          escape: true,
          icon: 'pi pi-power-off',
          command: () => {
            console.log("Logged Out");
        }
      },
    ]
  }
}
