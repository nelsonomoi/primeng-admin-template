import {Component, ElementRef, OnInit} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';
import {Subject} from 'rxjs';


@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']})
export class AppComponent implements OnInit {
    title = 'rxjs-subject';

    value : string = '';

    count: number = 0;

    register: string[] = [];

    subject = new Subject<string>();


    constructor(private primengConfig : PrimeNGConfig) {}


    ngOnInit() {
        this.primengConfig.ripple = false;
        this.primengConfig.zIndex = {
          
        }

        this.subject.subscribe({
            next: (v) => {
              this.register.push(v)
            }
        })
    }

    onSubjectBehaviourChange(){
      this.subject.next(this.value)
    }
}
