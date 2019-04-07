import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poc-form',
  templateUrl: './poc-form.component.html',
  styleUrls: ['./poc-form.component.css']
})
export class PocFormComponent implements OnInit {

  name: string = '';

  users: Object[] = [
    {
      id: 1,
      name: 'Galado',
      creation: new Date(),
      color: "green"
    },
    {
      id: 1,
      name: 'Galado',
      creation: new Date(),
      color: "green"
    },
    {
      id: 1,
      name: 'Galado',
      creation: new Date(),
      color: "green"
    },
    {
      id: 1,
      name: 'Galado',
      creation: new Date(),
      color: "green"
    },
    {
      id: 1,
      name: 'Galado',
      creation: new Date(),
      color: "green"
    },
    {
      id: 1,
      name: 'Galado',
      creation: new Date(),
      color: "green"
    },
    {
      id: 1,
      name: 'Galado',
      creation: new Date(),
      color: "green"
    },
    {
      id: 1,
      name: 'Galado',
      creation: new Date(),
      color: "green"
    },
    {
      id: 1,
      name: 'Galado',
      creation: new Date(),
      color: "green"
    },
    {
      id: 1,
      name: 'Galado',
      creation: new Date(),
      color: "green"
    },
    {
      id: 2,
      name: 'Galado2',
      creation: new Date(),
      color: "green"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
