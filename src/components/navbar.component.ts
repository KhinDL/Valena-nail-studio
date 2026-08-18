import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav class="navbar navbar-expand-lg fixed-top site-navbar" [class.menu-open]="menuOpen()">
      <div class="container">
        <a class="navbar-brand brand-mark" routerLink="/" fragment="home" (click)="menuOpen.set(false)">
          <span class="brand-name">Velena</span><span class="brand-subtitle">NAIL STUDIO</span>
        </a>
        <button class="navbar-toggler" type="button" aria-label="Toggle navigation" [attr.aria-expanded]="menuOpen()" (click)="toggleMenu()">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" [class.show]="menuOpen()">
          <ul class="navbar-nav mx-auto gap-lg-4">
            <li class="nav-item"><a class="nav-link" routerLink="/" fragment="home" (click)="menuOpen.set(false)">Home</a></li>
            <li class="nav-item"><a class="nav-link" routerLink="/" fragment="services" (click)="menuOpen.set(false)">Services</a></li>
            <li class="nav-item"><a class="nav-link" routerLink="/" fragment="gallery" (click)="menuOpen.set(false)">Gallery</a></li>
            <li class="nav-item"><a class="nav-link" routerLink="/" fragment="about" (click)="menuOpen.set(false)">About</a></li>
            <li class="nav-item"><a class="nav-link" routerLink="/" fragment="contact" (click)="menuOpen.set(false)">Contact</a></li>
          </ul>
          <a class="btn btn-gold nav-book" href="https://www.dashbooking.com/salon/velena-nail-studio" target="_blank" rel="noopener">Book now <span>↗</span></a>
        </div>
      </div>
    </nav>
  `,
})
export class NavbarComponent {
  readonly menuOpen = signal(false);
  toggleMenu(): void {
    this.menuOpen.set(!this.menuOpen());
  }
}
