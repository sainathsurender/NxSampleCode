import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidenavService} from 'modules/shared/services/sidenav.service';

@Component({
  selector: 'lib-lib2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lib2.component.html',
  styleUrl: './lib2.component.css',
})
export class Lib2Component {
  constructor(private someService: SidenavService) {}

  ngOnInit() {
    this.someService.setToTrue(false);
  }
}
