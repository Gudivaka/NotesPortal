import { Component, OnInit } from '@angular/core';
import { ContactsServiceService } from '../../contacts-service.service';

@Component({
  selector: 'app-contact-dashboard',
  templateUrl: './contact-dashboard.component.html',
  styleUrls: ['./contact-dashboard.component.css']
})
export class ContactDashboardComponent implements OnInit {

  constructor(private contactsService: ContactsServiceService) { }

  Contacts = [];
  ngOnInit() { 
    this.contactsService.getJSON().subscribe(data =>  {
      console.log("Controller Data:", data);
      this.Contacts = data;
    })
  }
  openContact = function() {
    console.log('card Clicked');
  }
  cards  = ['Card1', 'Card2', 'Card3', 'Card4', 'Card5', 'Card6', 'Card7', 'Card8'];

}
