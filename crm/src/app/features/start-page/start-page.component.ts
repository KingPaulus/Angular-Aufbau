import { JsonPipe } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-start-page',
  imports: [
    JsonPipe
  ],
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.scss'
})
export class StartPageComponent implements OnInit {

  ngOnInit(): void {
    this.loadNews();
  }

  news = signal<number[]>([]);

  loadNews() {
    of([3,4,56]).subscribe((n) => {

      this.news.set(n);
    })
  }

}
