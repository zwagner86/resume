import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  slalomProjects = [
    {
      role: "Front-End JavaScript Developer",
      client: "Networking Solutions Company",
      duration: "4 months",
      summary: "Client developing a Salesforce portal to allow customers and partners to access information on their products, including downloads, licenses, and assets.",
      accomplishments: [
        "Using Visualforce with jQuery and Bootstrap CSS framework on the front-end to deliver a solid user experience",
        "Solely responsible for UI/UX implementation - managing project requirements and scope, implementing desired features before deadlines",
        "Provide input on UI/UX design"
      ]
    }
  ];
}
