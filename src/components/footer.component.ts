import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="site-footer"><div class="container"><div class="footer-top"><a class="brand-mark footer-brand" routerLink="/" fragment="home"><span class="brand-name">Velena</span><span class="brand-subtitle">NAIL STUDIO</span></a><div class="footer-nav"><a routerLink="/" fragment="services">Services</a><a routerLink="/" fragment="gallery">Gallery</a><a routerLink="/" fragment="about">About</a><a routerLink="/" fragment="contact">Contact</a></div><a class="footer-social" href="https://www.instagram.com/velenanail.yyc?igsh=MWVhbHBwM3o5ejFibw%3D%3D&utm_source=qr" target="_blank" rel="noopener">Instagram <span>↗</span></a></div><div class="footer-bottom"><span>© 2025 Velena Nail Studio. All rights reserved.</span><span>Made with care in Calgary</span></div></div></footer>
  `,
})
export class FooterComponent {}
