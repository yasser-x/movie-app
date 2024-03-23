import { Component } from '@angular/core';

@Component({
  selector: 'app-list-comments',
  templateUrl: './list-comments.component.html',
  styleUrls: ['./list-comments.component.css']
})
export class ListCommentsComponent {
  // Hardcoded comments for demonstration
  comments = [
    { text: 'Great movie!', author: 'Yasser' },
    { text: 'I enjoyed every moment.', author: 'Anwar' },
    { text: 'The storyline is captivating.', author: 'Rania' },
  ];

}
