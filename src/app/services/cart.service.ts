import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  bookings: any = [
    {
      price: {
        food: 3000,
        basic: 25000,
        other: 5000,
        gst: 7920,
        othertax: 990,
      },
      pricetotal: 3 * 41910,

      package: {
        id: 2,
        name: 'Great Wall of China',
        description:
          'The Great Wall of China is a series of fortifications built along the northern borders of China to protect against invaders.',
        country: 'China',
        heritage: true,
        image_url: 'chinaWall.jpg',
        expences: '25000 - 40000',
        map_link:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13666.423731676578!2d116.08177347170533!3d40.43190876437175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35f05bf1dacf7d2f%3A0xb867af8a1705df5c!2sThe%20Great%20Wall%20of%20China!5e0!3m2!1sen!2sus!4v1557373086462!5m2!1sen!2sus',
      },

      date: '2023-12-03',
      maleCount: 1,
      femaleCount: 2,
    },

    {
      price: {
        food: 0,
        basic: 25000,
        other: 3000,
        gst: 6720,
        othertax: 840,
      },
      pricetotal: 35560,

      package: {
        id: 5,
        name: 'Red Fort',
        description:
          'The Red Fort is a historic fort in the city of Delhi, India, built in the 17th century by Mughal emperor Shah Jahan.',
        country: 'India',
        heritage: true,
        image_url: 'redFort.jpg',
        expences: '25000 - 40000',
        map_link:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.9811224810253!2d77.24014171497325!3d28.65615948241447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce43201271ef1%3A0x6a97a30bf29faaf2!2sRed%20Fort!5e0!3m2!1sen!2sus!4v1650456897031!5m2!1sen!2sus',
      },

      date: '2023-10-23',
      maleCount: 1,
      femaleCount: 0,
    },
  ];

  constructor() { }
}
