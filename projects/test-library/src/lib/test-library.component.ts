import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-test-library',
  template: `
    <p>
      *******test-library works
      <b>update changes version 1.0.2</b>******** !
    
    </p>
  `,
  styles: []
})
export class TestLibraryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
