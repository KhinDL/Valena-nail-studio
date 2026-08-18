import { Component } from '@angular/core';
@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section id="contact" class="section section-anchor contact-section">
      <div class="container"><div class="row g-5">
        <div class="col-lg-5 reveal-up"><p class="eyebrow">Come see us</p><h2>Let's make<br /><em>something beautiful.</em></h2><p class="section-intro contact-intro">Appointments, questions, or just want to say hello? We would love to hear from you.</p><div class="contact-details">
          <a href="https://www.google.com/maps/search/?api=1&query=6+4404+14+St+NW+Calgary+AB+T2K+1J5" target="_blank" rel="noopener"><span class="contact-icon">⌖</span><span>#6 4404 14 St NW<br />Calgary, AB T2K 1J5</span></a>
          <div style="display:flex;align-items:center;gap:15px;color:#766b67;font-size:13px;"><span class="contact-icon">◌</span><span>403-475-7888</span></div>
          <a href="mailto:velenanailstudio@gmail.com"><span class="contact-icon">✉</span><span>velenanailstudio@gmail.com</span></a>
          <a href="https://www.instagram.com/velenanail.yyc?igsh=MWVhbHBwM3o5ejFibw%3D%3D&utm_source=qr" target="_blank" rel="noopener"><span class="contact-icon">◎</span><span>@velenanail.yyc</span></a>
        </div></div>
        <div class="col-lg-6 offset-lg-1 reveal-up"><div class="map-card">
          <iframe 
            class="map-embed" 
            src="https://maps.google.com/maps?q=4404+14+St+NW+Calgary+AB+T2K+1J5&t=&z=16&ie=UTF8&iwloc=&output=embed" 
            title="Velena Nail Studio location on Google Maps" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade" 
            allowfullscreen>
          </iframe>
          <a class="map-link" href="https://www.google.com/maps/search/?api=1&query=6+4404+14+St+NW+Calgary+AB+T2K+1J5" target="_blank" rel="noopener">Open in Google Maps ↗</a></div></div>
      </div></div>
    </section>
  `,
})
export class ContactComponent {}