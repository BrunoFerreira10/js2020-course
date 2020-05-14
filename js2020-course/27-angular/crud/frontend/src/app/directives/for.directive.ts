import { Directive, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  @Input('myForEm') numbers: number[]
  @Input('myForUsing') text: string
  @Input('myForCom') fruta: string

  constructor(private container: ViewContainerRef, private template: TemplateRef<any>) { 
    
  }

  ngOnInit(): void {
    console.log(this.container, this.template)
    for (const number of this.numbers) {      
      this.container.createEmbeddedView(this.template, { $implicit: [number, this.text, this.fruta.toUpperCase()] })
    }
  }

}
