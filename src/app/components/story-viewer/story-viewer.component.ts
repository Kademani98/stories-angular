import { Component, Input, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Story } from '../../models/story.model';

@Component({
  selector: 'app-story-viewer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './story-viewer.component.html',
  styleUrls: ['./story-viewer.component.scss']
})
export class StoryViewerComponent implements OnInit, OnDestroy {
  @Input() stories: Story[] = [];
  @Input() startIndex = 0;
  @Output() closed = new EventEmitter<void>();

  currentIndex = 0;
  progress: number[] = [];
  intervalId: any;

  ngOnInit(): void {
    this.currentIndex = this.startIndex;
    this.progress = new Array(this.stories.length).fill(0);
    this.startProgress();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  startProgress() {
    this.intervalId = setInterval(() => {
      if (this.progress[this.currentIndex] >= 100) {
        this.nextStory();
      } else {
        this.progress[this.currentIndex] += 2;
      }
    }, 60);
  }

  nextStory() {
    if (this.currentIndex < this.stories.length - 1) {
      this.progress[this.currentIndex] = 100;
      this.currentIndex++;
    } else {
      this.closeViewer();
    }
  }

  prevStory() {
    if (this.currentIndex > 0) {
      this.progress[this.currentIndex] = 0;
      this.currentIndex--;
    }
  }

  closeViewer() {
    clearInterval(this.intervalId);
    this.closed.emit(); // Notify parent to remove the component
  }

  trackByFn(index: number) {
    return index;
  }
}
