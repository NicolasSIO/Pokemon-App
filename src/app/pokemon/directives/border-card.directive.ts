import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[pokemonBC]'
})
export class BorderCardDirective{
    private initialColor: string = '#F5F5F5';
    private defaultColor: string = '#009688';
    private defaultHeight:number = 200;

    private borderColor: string = '#009688';
    private backgroundColor: string = '#D0D0D0';

    constructor(private el: ElementRef){
        this.setBorder(this.initialColor);
        this.setHeight(this.defaultHeight);
    }

    @HostListener('mouseenter') onMouseEnter(){
        this.setBorder(this.borderColor || this.defaultColor);
        this.setBackground(this.backgroundColor || this.defaultColor);
    }

    @HostListener('mouseleave') onMouseLeave(){
        this.setBorder(this.initialColor);
        this.setBackground(this.initialColor);
    }

    private setBorder(color:string){
        let border = 'solid 4px ' + color;
        this.el.nativeElement.style.border = border;
    }

    private setHeight(height: number){
        this.el.nativeElement.style.height = height + 'px';
    }

    private setBackground(color:string){
        this.el.nativeElement.style.backgroundColor = color;
    }
}