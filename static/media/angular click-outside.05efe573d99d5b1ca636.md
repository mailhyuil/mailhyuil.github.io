# angular click-outside

```
import { Component, ElementRef, HostListener, Input } from '@angular/core';

@Component({
  selector: 'selector',
  template:
    <div>
      {{text}}
    </div>

})
export class AnotherComponent {
  public text: String;

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if(this.eRef.nativeElement.contains(event.target)) {
      this.text = "clicked inside";
    } else {
      this.text = "clicked outside";
    }
  }

  constructor(private eRef: ElementRef) {
    this.text = 'no clicks yet';
  }
}
```
