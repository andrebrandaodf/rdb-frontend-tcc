import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SafePipe } from "./safe-url.pipe";

@NgModule({
    declarations: [ SafePipe ],
    imports: [ CommonModule ],
    exports: [ SafePipe ]
})

export class SafePipeModule {}