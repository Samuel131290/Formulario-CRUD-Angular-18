import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProjetoCRUDComponent } from "./projeto-crud/projeto-crud.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, ProjetoCRUDComponent]
})

export class AppComponent {
  title = 'Projetos';
}




