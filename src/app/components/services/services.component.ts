import { Component } from '@angular/core';

interface ServiceCard {
  number: string;
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
readonly services: ServiceCard[] = [
  { number: '01', title: 'Manicure', description: 'Classic polish, gel manicure, and personalized nail care for beautifully maintained hands.', icon: '✦' },
  { number: '02', title: 'Nail Enhancements', description: 'Premium acrylic, UV gel, bio gel, Gel-X, overlays, and fills crafted for strength and elegance.', icon: '⌁' },
  { number: '03', title: 'Nail Art & Design', description: 'Custom nail art, French, ombré, chrome, cat-eye, charms, and seasonal designs made uniquely yours.', icon: '✧' },
  { number: '04', title: 'Pedicure', description: 'A relaxing pedicure experience ranging from essential care to our signature deluxe and luxury treatments.', icon: '○' },
  { number: '05', title: 'Eyelash Extensions', description: 'Enhance your natural lashes with classic, hybrid, or volume sets tailored to your eye shape and style.', icon: '◇' },
  { number: '06', title: 'Waxing', description: 'Smooth, precise waxing services for brows, lips, and more — quick, clean, and gentle on the skin.', icon: '＋' },
];
}
