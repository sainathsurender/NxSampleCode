import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from '@sample-nx/sidenav';

@Component({
  standalone: true,
  imports: [RouterModule, SidenavComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'sample-nx';
}
