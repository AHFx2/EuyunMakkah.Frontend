import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appStatusColor]'
})
export class StatusColor implements OnChanges {
  @Input('appStatusColor') status: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if ('status' in changes) {
      this.applyStyle();
    }
  }

  private applyStyle(): void {
    let background = '';
    let textColor = '#fff'; // Default text color for contrast

    switch (this.status?.toLowerCase()) {
      case 'processed':
        background = '#FFA500'; // Orange
        break;
      case 'done':
        background = '#4CAF50'; // Green
        break;
      case 'unprocessed':
        background = '#F44336'; // Red
        break;
      default:
        background = '#9E9E9E'; // Grey
    }

    this.renderer.setStyle(this.el.nativeElement, 'background-color', background);
    this.renderer.setStyle(this.el.nativeElement, 'padding', '0rem 1rem');
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', '3rem');
  }
}
