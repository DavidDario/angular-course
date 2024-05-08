import { NgModule } from '@angular/core';
import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { DbzListComponent } from './components/dbz-list/dbz-list.component';
import { AddCharactersComponent } from './components/add-characters/add-characters.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainPageComponent,
    AddCharactersComponent,
    DbzListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgClass,
    NgFor,
    NgIf
  ],
  exports:[MainPageComponent]
})
export class DBZModule { }
