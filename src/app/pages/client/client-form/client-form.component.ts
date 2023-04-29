import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css'],
})
export class ClientFormComponent implements OnInit {
  clientAction: string = '';

  selectedAgent: any;

  filteredItems: any[] = [];

  AgentList: any[] = [];

  selectedBranch: any;

  countries: any[] = [];

  selectedCountry: any;

  branchList: any[] = [];

  isBooleanList: any = [];

  isDirectBussiness: any;

  isAgentDisabled: boolean = true;

  clientTypeList: any [] = []

  selectedClientType:any;

  isIndividualClient: boolean = true


  constructor() {}

  filterItems(event: any) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < this.AgentList.length; i++) {
      let item = this.AgentList[i];
      if (item.label.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(item);
      }
    }

    this.filteredItems = filtered;
  }

  ngOnInit(): void {

    this.clientTypeList = [
      { name: 'Individual', code: 'I' },
      { name: 'Corporate', code: 'C' },
      { name: 'SMEs', code: 'S' },
    ]

    this.countries = [
      { name: 'Kenya', code: 'KE' },
      { name: 'Uganda', code: 'UG' },
      { name: 'Tanzania', code: 'TZ' },
    ];

    this.branchList = [
      { name: 'Nairobi Head-Quarters', code: 'N1001' },
      { name: 'Nairobi CBD', code: 'N1011' },
    ];

    this.isBooleanList = [
      { name: 'Yes', code: 'Y' },
      { name: 'No', code: 'N' },
    ];

    this.AgentList = [];
    for (let i = 0; i < 10000; i++) {
      this.AgentList.push({ label: 'Item ' + i, value: 'Item ' + i });
    }
  }

  onBranchChange() {}


  onBusinessTypeChange(){

    this.selectedAgent = null

    if (this.isDirectBussiness != null && this.isDirectBussiness.code == 'Y') {
      this.isAgentDisabled = true
    }

    if (this.isDirectBussiness != null && this.isDirectBussiness.code == 'N') {
      this.isAgentDisabled = false
    }

  }


  onClientTypeChange(){
    if (this.selectedClientType.code == 'I') {
      this.isIndividualClient = true
    }else{
      this.isIndividualClient = false
    }
    
  }
}
