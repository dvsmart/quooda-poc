import { Directive, ElementRef, Input, Renderer, OnInit } from '@angular/core';

@Directive({ selector: '[tableStyleCell]' })
export class StyleCellDirective implements OnInit {
  @Input() tableStyleCell: string;
  constructor(
    private el: ElementRef,
    private renderer: Renderer) { }
  ngOnInit() {
    if (this.tableStyleCell === undefined) {
      this.renderer.setElementStyle(
        this.el.nativeElement,
        'color',
        '#dcdcdc');
      this.renderer.setElementStyle(
        this.el.nativeElement,
        'text-align',
        'center');
    }
    // if (typeof this.tableStyleCell === 'number') {
    //   this.renderer.setElementStyle(
    //     this.el.nativeElement,
    //     'text-align',
    //     'center');
    // }
  }
}
