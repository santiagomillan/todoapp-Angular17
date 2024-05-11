import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css',
})
export class LabsComponent {
  welcome = 'Hola todoapp!';
  tasks = ['instalar Angular CLI', 'Crear proyecto', 'Crear Componentes'];
  name = 'Camila';
  age = 25;
  disabled = true;
  image = 'https://i.ibb.co/vXNxtKW/OIG-2y-9y-Tiej-C-7-Eqkg-Iy.jpg';
  person = {
    name: 'Camila',
    age: 25,
    image: 'https://i.ibb.co/vXNxtKW/OIG-2y-9y-Tiej-C-7-Eqkg-Iy.jpg',
  };
}
