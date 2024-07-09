import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidenavService} from 'modules/shared/services/sidenav.service';


@Component({
  selector: 'lib-sidenav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
})
export class SidenavComponent {
  isFixed: boolean = false;

  constructor(private someService: SidenavService) {}

  ngOnInit() {
    this.someService.fixed$
      .subscribe(fixed => this.isFixed = fixed)
  }
}
