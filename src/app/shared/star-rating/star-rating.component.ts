import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent implements OnInit {
  private fullStars:number[]
  private emptyStars:number[]

  constructor() { }

  ngOnInit() {}

  @Input()
  set rating(rating:number) {
    this.fullStars = new Array(rating)
    this.emptyStars = new Array(5-rating)
  }

}


// how make it reusable
// 1. ng content
// 2. passing styles as a prop
// 3. ng-template
// 4. directives ???
// 5. theming capabilites --> adding diffrent styles based on props/class