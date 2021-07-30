import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { PatientInstance } from 'src/app/models/patient-instance.interface';
import { ModelService } from 'src/app/services/model.service';
import { PREDICTION_THRESHOLD } from 'src/app/shared/constants';

@Component({
  selector: 'app-patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.scss']
})
export class PatientCardComponent implements OnInit {
  @Input() patient: PatientInstance;
  public form: FormGroup;
  public selected = false;
  public threshold = PREDICTION_THRESHOLD;

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer, private modelService: ModelService) { }

  ngOnInit(): void {
    this.iconRegistry.addSvgIcon('icon_close', '../../../assets/icon-close.svg');
  }

  public select() {
    this.selected = true;
    // TODO: FIX, workaround for not loading initially
    setTimeout(() => this.selected = true, 0);
  }

  public close() {
    // Set time out to complete after the card is selected
    setTimeout(() => this.selected = false, 50);
  }

  public async predict() {
    const result = await this.modelService.predict(this.patient);
    this.patient.risk = result;
  }
}
