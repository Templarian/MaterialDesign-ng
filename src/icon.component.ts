import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'icon',
  templateUrl: `./icon.component.html`
})
export class MdiComponent  {
  @Input('path') iconPath: string;
  setPath (path: string) {
    if (path == undefined || path == null) {
      console.error('Icon not found. Defaulting to alert icon.');
    } else {
      this.data = path;
    }
  }

  data: string = 'M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z';
  
  ngOnChanges(changes: SimpleChanges){
    this.setPath(changes.iconPath.currentValue);
  }
}