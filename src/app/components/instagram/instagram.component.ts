import { Component, OnInit, signal } from '@angular/core';

const FEED_URL = 'https://feeds.behold.so/qkCQpf5M5xJFWwnCNpY5';
const POST_LIMIT = 6;

interface BeholdPost {
  id: string;
  permalink: string;
  mediaType: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  mediaUrl?: string;
  thumbnailUrl?: string;
  sizes?: { medium?: { mediaUrl: string } };
  altText?: string;
  prunedCaption?: string;
}

interface InstagramPost {
  id: string;
  permalink: string;
  image: string;
  alt: string;
  isVideo: boolean;
}

@Component({
  selector: 'app-instagram',
  standalone: true,
  templateUrl: './instagram.component.html',
  styleUrl: './instagram.component.css',
})
export class InstagramComponent implements OnInit {
  readonly posts = signal<InstagramPost[]>([]);

  ngOnInit(): void {
    if (!FEED_URL) return;
    fetch(FEED_URL)
      .then((response) => (response.ok ? response.json() : Promise.reject(response.status)))
      .then((feed: { posts?: BeholdPost[] }) => this.posts.set(this.toPosts(feed.posts ?? [])))
      .catch((error: unknown) => console.error('Instagram feed failed to load', error));
  }

  private toPosts(posts: BeholdPost[]): InstagramPost[] {
    return posts
      .map((post) => {
        const isVideo = post.mediaType === 'VIDEO';
        // For videos mediaUrl is the video file, so only the image fields are usable.
        const image = post.sizes?.medium?.mediaUrl ?? post.thumbnailUrl ?? (isVideo ? '' : post.mediaUrl ?? '');
        const alt = post.altText || post.prunedCaption || 'Instagram post by Velena Nail Studio';
        return { id: post.id, permalink: post.permalink, image, alt, isVideo };
      })
      .filter((post) => post.image)
      .slice(0, POST_LIMIT);
  }
}
