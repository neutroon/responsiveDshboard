import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';


@Directive({
  selector: '[appMyTooltip]'
})
export class MyTooltipDirective {

  constructor(private ElementRef:ElementRef, private Renderer2:Renderer2) { }
  @Input('appTooltip') toolTipContnet: string = '';
  @Input('appTooltipPosotion') toolTipPosintion: string = '';

  creatTooltip(): HTMLElement{
    const tooltip = this.Renderer2.createElement('div')
    const text = this.Renderer2.createText(this.toolTipContnet)
    this.Renderer2.appendChild(tooltip, text)
    this.Renderer2.addClass(tooltip, 'toolTipStyle')
    this.Renderer2.setStyle(tooltip, 'position', 'absolute')
    this.Renderer2.setStyle(tooltip, this.toolTipPosintion, 'calc(100% + 5px)')
    return tooltip
  }



  @HostListener('mouseover')
  onMouseOver(){
    const myTooltip = this.creatTooltip();
    this.Renderer2.appendChild(this.ElementRef.nativeElement, myTooltip);


  }
  @HostListener('mouseout')
  onMouseOut(){
    const toolTip = this.ElementRef.nativeElement.querySelector('.toolTipStyle')
    this.Renderer2.removeChild(this.ElementRef.nativeElement, toolTip)

  }

}
