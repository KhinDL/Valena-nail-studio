import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar.component';
import { HeroComponent } from './components/hero.component';
import { ServicesComponent } from './components/services.component';
import { GalleryComponent } from './components/gallery.component';
import { AboutComponent } from './components/about.component';
import { BookingComponent } from './components/booking.component';
import { ContactComponent } from './components/contact.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, ServicesComponent, GalleryComponent, AboutComponent, BookingComponent, ContactComponent, FooterComponent],
  template: `
    <app-navbar />
    <main>
      <app-hero />
      <app-services />
      <app-gallery />
      <app-about />
      <app-booking />
      <app-contact />
    </main>
    <app-footer />
  `,
})
export class AppComponent {}
