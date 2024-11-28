import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'second-app';

  model = {
    firstname: {
      type: 'text',
      value: 'testname',
      label: 'FirstName',
      rules: {
        required: true,
      },
    },
    lastname: {
      type: 'text',
      value: 'test',
      label: 'LastName',
      rules: {
        minLength: 2,
      },
    },
    address: {
      type: 'text',
      value: '',
      label: 'Address',
    },
    age: {
      type: 'number',
      value: '',
      label: 'age',
    },
    birthDay: {
      type: 'date',
      value: '',
      label: 'Birthday',
    },
    typeBussines: {
      label: 'Bussines Type',
      value: 'premium',
      type: 'radio',
      options: [
        {
          label: 'Enterprise',
          value: '1500',
        },
        {
          label: 'Home',
          value: '6',
        },
        {
          label: 'Personal',
          value: '1',
        },
      ],
    },
    newsletterIn: {
      label: 'Suscribe to newsletter',
      value: 'email',
      type: 'checkbox',
    },
    subscriptionType: {
      label: 'Suscription Type',
      value: 'premium',
      type: 'select',
      options: [
        {
          label: 'Pick one',
          value: '',
        },
        {
          label: 'Premium',
          value: 'premium',
        },
        {
          label: 'Basic',
          value: 'basic',
        },
      ],
    },
    country: {
      id: 'country',
      label: 'Country',
      type: 'select',
      options: [
        {
          label: 'Spain',
          value: 'ES',
        },
        {
          label: 'USA',
          value: 'US',
        },
      ],
      provideData: [
        {
          label: 'Barcelona',
          sourceValue: 'ES',
          value: 'BCN',
        },
        {
          label: 'Madrid',
          sourceValue: 'ES',
          value: 'MDN',
        },
        {
          label: 'New York',
          sourceValue: 'US',
          value: 'NYC',
        },
        {
          label: 'Cleveland',
          sourceValue: 'CLV',
          value: 'E',
        },
      ],
    },
    city: {
      label: 'City',
      type: 'select',
      link: 'country',
      value: '',
      options: [
        {
          label: 'Select Country First',
          value: '',
        },
      ],
    },
  };
}
