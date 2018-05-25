import { Component, OnInit } from '@angular/core';
import { ListConfig } from '../../viewmodel/listConfig';
import { TileConfig } from '../../viewmodel/tileConfig';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-custom-entity-page',
  templateUrl: './custom-entity-page.component.html',
  styleUrls: ['./custom-entity-page.component.scss']
})
export class CustomEntityPageComponent implements OnInit {
  name: string;

  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.name = 'checklist-'+ id;
  }
  goback(){
    this.router.navigate(['/checklist']);
  }

}
