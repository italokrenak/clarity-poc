import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clarity-poc';

  permissions: Object[] = [
    {
      "type": "Authenticated Users",
      "rights": [
        {
          "name": "Read",
          "enable": true
        },
        {
          "name": "Modify",
          "enable": true
        },
        {
          "name": "Create",
          "enable": false
        },
        {
          "name": "Delete",
          "enable": false
        }
      ]
    },
    {
      "type": "Owners",
      "rights": [
        {
          "name": "Read",
          "enable": true
        },
        {
          "name": "Modify",
          "enable": true
        },
        {
          "name": "Create",
          "enable": true
        },
        {
          "name": "Delete",
          "enable": true
        }
      ]
    },
    {
      "type": "Public",
      "rights": [
        {
          "name": "Read",
          "enable": true
        },
        {
          "name": "Modify",
          "enable": false
        },
        {
          "name": "Create",
          "enable": false
        },
        {
          "name": "Delete",
          "enable": false
        }
      ]
    }
  ];

}
