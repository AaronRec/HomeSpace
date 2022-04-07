import { Component, OnInit } from '@angular/core';

import { SITES } from "../mock-sites";

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

  sites = SITES


  ngOnInit(): void {
    // This is intentional
  }

}
