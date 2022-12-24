import { Component, Input, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  @Input() videoName!: string;
  @Input() title!: string;
  @Input() subTitle!: string;
  @Input() description!: string;
  @Input() joinUs!: boolean;
  mp4:string=".mp4";
  defaultVideoName:string="bg.mp4";
  constructor() { }

  ngOnInit(): void {
    Aos.init();
  }

}
