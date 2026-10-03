import { Component, signal } from '@angular/core';

interface GalleryImage {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent {
  readonly images: GalleryImage[] = [
    { src: 'assets/images/1000031275.jpg', alt: 'Soft pink manicure with red floral nail art' },
    { src: 'assets/images/1000031276.jpg', alt: 'Pearl pink manicure with classic French tips' },
    { src: 'assets/images/1000031277.jpg', alt: 'Glossy chocolate brown stiletto manicure' },
    { src: 'assets/images/1000031278.jpg', alt: 'Chrome silver nail art with sculptural details' },
    { src: 'assets/images/1000031279.jpg', alt: 'Velena Nail Studio bridal nail design collection' },
    { src: 'assets/images/1000031281.jpg', alt: 'Blush pink manicure with gold glitter and crystals' },
    { src: 'assets/images/48A9857B-23D6-4061-82D8-FA2EE20DCDE6.png', alt: 'White and pink pearl bridal nail art' },
    { src: 'assets/images/5C9A6517-49FF-4C21-927B-968967955EA3.png', alt: 'Pink heart swirl nail design ideas' },
    { src: 'assets/images/A3FB507F-6300-4D5E-8F3D-AF307C666D22.png', alt: 'Blue, mauve, and black butterfly wing nail art' },
    { src: 'assets/images/A9327003-27C3-4674-B45D-3B23E6716DD0.png', alt: 'Pink, green, and ladybug themed nail art' },
    { src: 'assets/images/att.0969U8_Efj8NxAADnY7f9Kry2DZTLfT6zCw5Rkqn0sQ.jpeg', alt: 'Elegant pink and black nail design' },
    { src: 'assets/images/FF587509-8C83-4CAD-A586-307C3DA7D748.png', alt: 'Soft pink manicure with detailed nail art' },
  ];

  readonly active = signal<GalleryImage | null>(null);

  open(image: GalleryImage) {
    this.active.set(image);
  }

  close() {
    this.active.set(null);
  }
}
