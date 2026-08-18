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
        </div>
        <div class="store-hours reveal-up">
          <h3 class="hours-title"><span class="contact-icon">◷</span>Store Hours</h3>
          <ul class="hours-list">
            <li><span class="day">Monday</span><span class="time closed">Closed</span></li>
            <li><span class="day">Tuesday</span><span class="time">10:00 AM – 7:00 PM</span></li>
            <li><span class="day">Wednesday</span><span class="time">10:00 AM – 7:00 PM</span></li>
            <li><span class="day">Thursday</span><span class="time">10:00 AM – 7:00 PM</span></li>
            <li><span class="day">Friday</span><span class="time">10:00 AM – 7:00 PM</span></li>
            <li><span class="day">Saturday</span><span class="time">10:00 AM – 6:00 PM</span></li>
            <li><span class="day">Sunday</span><span class="time closed">Closed</span></li>
          </ul>
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