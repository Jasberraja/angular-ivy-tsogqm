import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { JassComponent } from "./jass/jass.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, JassComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
