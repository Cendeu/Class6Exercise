import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";


@Directive({
  selector: "[randomBackground]"

})

export class RandomBackground {

  color = '#';
  digits = '0123456789ABCDEF';

  constructor(private elRef: ElementRef, private rend: Renderer2) {}

  // get a random color as a hex code (got the math code online lol)
    getRandomColor() {
      this.color='#';
      for (var i = 0; i < 6; i++) {
        this.color += this.digits[Math.floor(Math.random() * 16)];
    }
    return this.color;
  }

  // change the background-color and color of the element this is on to my getRandomColor()
  @HostListener('mouseenter') togglecolor(eventData: Event) {
    this.rend.setStyle(this.elRef.nativeElement, 'background-color', this.getRandomColor());
    this.rend.setStyle(this.elRef.nativeElement, 'color', this.getRandomColor());

  }


}
