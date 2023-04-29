import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { Client } from './models/client.model';
import { ClientService } from './services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
})
export class ClientComponent implements OnInit {

  clients: Client[] = [];

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.clientService.getProductsMini();
  }

  clear(table: Table) {
    table.clear();
  }
}
