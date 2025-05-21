import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Story } from '../../models/story.model';
import { StoryViewerComponent } from '../story-viewer/story-viewer.component';
import { StoryService } from '../../services/story.service';

@Component({
  selector: 'app-story-bar',
  standalone: true,
  imports: [CommonModule, StoryViewerComponent],
  templateUrl: './story-bar.component.html',
  styleUrls: ['./story-bar.component.scss']
})
export class StoryBarComponent {
  stories: Story[] = [];
  showViewer = false;
  selectedIndex = 0;

  constructor(private storyService: StoryService) {
    this.stories = this.storyService.getStories();
  }

  addStory(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const newStory: Story = {
        id: crypto.randomUUID(),
        imageBase64: reader.result as string,
        timestamp: Date.now()
      };
      this.storyService.saveStory(newStory);
      this.stories = this.storyService.getStories();
    };
    if (file) reader.readAsDataURL(file);
  }

  openViewer(index: number) {
    this.selectedIndex = index;
    this.showViewer = true;
    const viewer = document.getElementById('story-viewer');
    if (viewer) viewer.style.display = 'flex';
  }
  onViewerClosed() {
    this.showViewer = false;
  }
  
}
