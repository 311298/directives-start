import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  numbers = [1, 2, 3, 4, 5];
  onlyOdd = false;
  valueForNgSwitch: number = 99;

  variableForCustomStructuralDirective: boolean = false;
  onClick() {
    this.variableForCustomStructuralDirective =
      !this.variableForCustomStructuralDirective;
  }
}
