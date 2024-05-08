import { NgModule } from "@angular/core";

import { HeroComponent } from "./component/hero/hero.component";
import { ListComponent } from "./component/list/list.component";
import { CommonModule, NgFor, NgIf } from "@angular/common";


@NgModule({
    declarations:[
        HeroComponent, 
        ListComponent],
    imports:[
        CommonModule,
        NgIf,
        NgFor],
    exports:[
        HeroComponent,
        ListComponent]
})
export class herolist {

}