import { Component } from '@angular/core';

interface FoodSlide {
  image: string;
  alt: string;
  category: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  standalone: false,
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  currentSlide = 0;

  readonly slides: FoodSlide[] = [
    {
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1400&q=85',
      alt: 'Fresh pizza with basil and vegetables',
      category: 'Italian comfort',
      title: 'A slice of joy.',
      description: 'Crisp edges, bright herbs, and a table worth gathering around.',
    },
    {
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1400&q=85',
      alt: 'Colourful bowl of fresh vegetables and grains',
      category: 'Feel-good bowls',
      title: 'Colour your plate.',
      description: 'Seasonal ingredients brought together with a little imagination.',
    },
    {
      image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=1400&q=85',
      alt: 'A table of Asian dishes ready to share',
      category: 'Made to share',
      title: 'Gather around.',
      description: 'Big flavours, small plates, and stories that last past dessert.',
    },
  ];

  previousSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }
}
