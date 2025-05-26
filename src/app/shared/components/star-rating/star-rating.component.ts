import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  imports: [CommonModule],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css'
})
export class StarRatingComponent {
  @Input() rating: number = 0;
  @Input() interactive: boolean = false;
  @Input() maxStars: number = 5;

  @Output() ratingChange = new EventEmitter<number>();
  @Output() ratingSelected = new EventEmitter<number>();

  stars: number[] = [];
  currentRating: number = 0;
  hoverRating: number = 0;

  ngOnInit() {
    this.stars = Array(this.maxStars).fill(0).map((_, i) => i + 1);
    this.currentRating = this.rating;
  }

  ngOnChanges() {
    this.currentRating = this.rating;
  }

  onStarClick(rating: number) {
    if (!this.interactive) return;
    this.currentRating = rating;
    this.ratingChange.emit(rating);
    this.ratingSelected.emit(rating);
  }

  onStarHover(rating: number) {
    if (!this.interactive) return;
    this.hoverRating = rating;
    this.currentRating = rating;
  }

  onMouseLeave() {
    if (!this.interactive) return;
    this.currentRating = this.rating;
    this.hoverRating = 0;
  } 
  clearRating() {
    this.currentRating = 0;
    this.ratingChange.emit(0);
  }

}