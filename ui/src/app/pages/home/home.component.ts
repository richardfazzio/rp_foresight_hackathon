import { Component, OnInit } from '@angular/core';
import { PatientInstance } from 'src/app/models/patient-instance.interface';
import { ModelService } from 'src/app/services/model.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public instances: PatientInstance[] = [];

  constructor(private modelService: ModelService) { }

  ngOnInit(): void {
    this.instances = this.modelService.instances;
  }
}
