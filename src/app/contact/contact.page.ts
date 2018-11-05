import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  param = null;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.param = this.activatedRoute.snapshot.paramMap.get('value');
  }

}
