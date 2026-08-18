import { Component } from '@angular/core';

@Component({
  selector: 'app-booking',
  standalone: true,
  template: `
    <section class="booking-banner">
      <div class="booking-orb orb-left"></div><div class="booking-orb orb-right"></div>
      <div class="container booking-content reveal-up"><p class="eyebrow light-eyebrow">Your next favourite set</p><h2>Ready for your<br /><em>next appointment?</em></h2><a class="btn btn-light-gold btn-lg" href="https://www.dashbooking.com/salon/velena-nail-studio" target="_blank" rel="noopener">Book now <span>↗</span></a></div>
    </section>
  `,
})
export class BookingComponent {}
