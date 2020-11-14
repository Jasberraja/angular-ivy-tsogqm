import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { JassComponent } from "./jass/jass.component";
import { Jass2Component } from "./jass2/jass2.component";
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, JassComponent, Jass2Component],
  bootstrap: [AppComponent]
})
export class AppModule {}
