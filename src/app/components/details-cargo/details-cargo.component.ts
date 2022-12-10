import { DialogModule } from '@angular/cdk/dialog';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cargo } from 'src/app/models/cargo';

@Component({
  selector: 'app-details-cargo',
  templateUrl: './details-cargo.component.html',
  styleUrls: ['./details-cargo.component.css']
})
export class DetailsCargoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public cargo: Cargo) { }

  ngOnInit(): void {
  }
}
