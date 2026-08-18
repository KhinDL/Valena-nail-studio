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
  template: `
    <section id="services" class="section section-anchor services-section">
      <div class="container">
        <div class="section-heading centered-heading reveal-up">
          <p class="eyebrow">Our services</p>
          <h2>Small details.<br /><em>Beautifully done.</em></h2>
          <p class="section-intro">From timeless, polished essentials to expressive nail art, every appointment is an invitation to slow down and feel cared for.</p>
        </div>
        <div class="row g-4 service-grid">
          @for (service of services; track service.number) {
            <div class="col-md-6 col-lg-4">
              <article class="service-card reveal-up">
                <div class="service-top"><span class="service-number">{{ service.number }}</span><span class="service-icon">{{ service.icon }}</span></div>
                <h3>{{ service.title }}</h3>
                <p>{{ service.description }}</p>
                <span class="card-arrow">↗</span>
              </article>
            </div>
          }
        </div>
      </div>
    </section>
  `,
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
