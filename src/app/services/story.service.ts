import { Injectable } from '@angular/core';
import { Story } from '../models/story.model';

@Injectable({ providedIn: 'root' })
export class StoryService {
  private storageKey = 'stories';

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  getStories(): Story[] {
    if (!this.isBrowser()) return [];

    const data = localStorage.getItem(this.storageKey);
    if (!data) return [];

    const stories = JSON.parse(data) as Story[];
    const now = Date.now();
    const filtered = stories.filter(s => now - s.timestamp < 24 * 60 * 60 * 1000);
    localStorage.setItem(this.storageKey, JSON.stringify(filtered));
    return filtered;
  }

  saveStory(story: Story): void {
    if (!this.isBrowser()) return;

    const stories = this.getStories();
    stories.unshift(story);
    localStorage.setItem(this.storageKey, JSON.stringify(stories));
  }
}
