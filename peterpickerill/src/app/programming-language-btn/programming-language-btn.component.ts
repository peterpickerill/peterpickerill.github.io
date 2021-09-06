import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-programming-language-btn',
  templateUrl: './programming-language-btn.component.html',
  styleUrls: ['./programming-language-btn.component.sass']
})
export class ProgrammingLanguageBtnComponent implements OnInit {
  @Input() image: string = ""; 
  @Input() name: string = ""; 
  @Input() level: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

  getLevelText(): string {
    let levels = ["Beginner", "I know how this works", "I can make basic with this", "I can program big projects with this", "I dream in this language"]
    return levels[this.level-1];
  }

}
