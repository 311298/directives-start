import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})
export class BetterHighlightDirective implements OnInit {
  // @HostBinding("style.backgroundColor") backgroundColor: string = "transparent";

  @Input() defaultColor: string = "transparent";
  @Input() highlightColor: string = "blue";

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}
  ngOnInit(): void {
    // this.renderer.setStyle(this.elementRef.nativeElement, "color", "white");
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "backgroundColor",
      this.defaultColor
    ); // to give the default backgroundColor from AppComponent template
  }

  @HostListener("mouseenter") mouseover(eventData: Event) {
    // mouseenter inside the hostlistener is the one of the events supported by angular
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "backgroundColor",
      this.highlightColor // "blue" ; I changed it to use binding property of directive
    );
    // this.backgroundColor = "blue";
  }
  @HostListener("mouseleave") mouseleave(eventData: Event) {
    // mouseleave inside the hostlistener is the one of the events supported by angular
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "backgroundColor",
      this.defaultColor // "transparent" ; I changed it to use binding property of directive
    );
  }
}
