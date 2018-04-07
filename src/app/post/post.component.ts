import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  data: any;

  constructor(private route: ActivatedRoute) {
    this.data = this.route.snapshot.data;
  }

  ngOnInit() {
  }

}
