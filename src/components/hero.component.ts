import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section id="home" class="hero-section section-anchor">
      <div class="hero-image"></div>
      <div class="hero-tint"></div>
      <div class="container hero-content">
        <div class="hero-copy">
          <h1>Where nails<br /><em>become art.</em></h1>
          <p class="hero-lede">Thoughtful details. Beautiful finishes.<br class="d-none d-sm-block" /> Your next signature set starts here.</p>
          <div class="hero-actions">
            <a class="btn btn-gold btn-lg" href="https://www.dashbooking.com/salon/velena-nail-studio" target="_blank" rel="noopener">Book your visit <span>↗</span></a>
            <a class="text-link light-link" routerLink="/" fragment="services">Explore services <span>↓</span></a>
          </div>
        </div>
      </div>

    </section>
  `,
})
export class HeroComponent {}
