import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="about" class="section section-anchor about-section">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-lg-6 reveal-up"><div class="about-image-wrap"><img src="assets/images/E48B6243-A7B5-4FD2-B56D-E7280B764C64 copy.png" alt="Colourful nail art by Velena Nail Studio" loading="lazy" /><div class="about-stamp">Made<br /><em>with</em><br />intention</div></div></div>
          <div class="col-lg-5 offset-lg-1 reveal-up">
            <p class="eyebrow">The studio</p>
            <h2>A little more<br /><em>about us.</em></h2>
            <p class="about-lede">At Velena Nail Studio, we believe every detail matters.</p>
            <p class="body-copy">Our skilled technicians bring creativity and precision to every appointment, giving you nails you'll love. Whether you are after a quiet moment of self-care or a design that turns heads, you are always welcome in our chair.</p>
            <div class="about-signature">Velena <span>♡</span></div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {}
