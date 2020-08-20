import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.css']
})
export class SecondChildComponent implements OnInit {


  queryParamValue;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.queryParamValue = this.route.snapshot.queryParamMap.get('q');
  }

}
