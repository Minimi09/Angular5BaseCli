import { Component, OnInit } from '@angular/core';
import { ColorService } from '../services/color.service';

@Component({
  selector: 'app-reactivo',
  templateUrl: './reactivo.component.html',
  styleUrls: ['./reactivo.component.css']
})
export class ReactivoComponent implements OnInit {

  newColor : string = '#ffcccc';
  constructor(private colorService : ColorService) { }

  ngOnInit() {
      this.colorService
      .getEventColor()
      .subscribe(value => this.newColor=value);
  }


}
