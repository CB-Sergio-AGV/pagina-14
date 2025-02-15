import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-valentine-music',
  templateUrl: './valentine-music.component.html',
  styleUrls: ['./valentine-music.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ValentineMusicComponent {
  songs = [
    { title: "Morat", src: "https://www.cjoint.com/doc/25_02/OBpfNdnduOm_Morat.MP3" },
    { title: "Starlight", src: "https://www.cjoint.com/doc/25_02/OBpfOEHbfFm_Starlight.MP3" },
    { title: "Coyote-theory", src: "https://www.cjoint.com/doc/25_02/OBpfOTK63Om_Coyote-theory.MP3" }
  ];

  currentSongIndex: number | null = null;
  audio = new Audio();

  playSong(index: number) {
    if (this.currentSongIndex === index) {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.currentSongIndex = null;
    } else {
      this.currentSongIndex = index;
      this.audio.src = this.songs[index].src;
      this.audio.load();
      this.audio.play();
    }
  }

  changeVolume(event: Event) {
    const input = event.target as HTMLInputElement;
    this.audio.volume = parseFloat(input.value);
  }
}
