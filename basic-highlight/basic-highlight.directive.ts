import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  //   selector: "appBasicHighlight", // recognised as html tags for attributes style follow below
  selector: "[appBasicHighlight]",
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = "green";
    this.elementRef.nativeElement.style.color = "white";
    // while it works perfectly, it is not correct way to change the dom properties
  }
}
