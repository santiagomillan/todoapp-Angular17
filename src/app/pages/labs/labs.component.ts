import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css',
})
export class LabsComponent {
  welcome = 'Hola todoapp!';
  tasks = ['instalar Angular CLI', 'Crear proyecto', 'Crear Componentes'];
  name = signal('Camila');
  age = 25;
  disabled = true;
  image = 'https://i.ibb.co/vXNxtKW/OIG-2y-9y-Tiej-C-7-Eqkg-Iy.jpg';
  person = {
    name: 'Camila',
    age: 25,
    image: 'https://i.ibb.co/vXNxtKW/OIG-2y-9y-Tiej-C-7-Eqkg-Iy.jpg',
  };

  colorCtrl = new FormControl();

  constructor() {
    this.colorCtrl.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  tasksSignal = signal([
    'instalar Angular CLI',
    'Crear proyecto',
    'Crear Componentes',
  ]);

  clickHandler() {
    alert('hola');
  }

  chageHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
  }

  keydownHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }
}
