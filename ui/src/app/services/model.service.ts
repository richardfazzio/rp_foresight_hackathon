import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PATIENT_DATA } from '../data/patient-data';
import { PatientInstance, PatientInstanceRequest } from '../models/patient-instance.interface';
import { A1C_VALUES, GLUCOS_VALUES, INSULIN_DISPLAY_VALUES, INSULIN_VALUES, PREDICTION_THRESHOLD, TOAST_DISPLAY_TIMER } from '../shared/constants';

interface PredictResponse {
  result: string;
};

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  private _patientInstances: PatientInstance[] = PATIENT_DATA;
  private url = 'https://macfvywb37.execute-api.us-east-1.amazonaws.com/Prod/evaluate';

  constructor(private http: HttpClient, private snackbar: MatSnackBar) { }

  get instances() {
    return this._patientInstances;
  }

  public async predict(instance: PatientInstance): Promise<number> {
    try {
      const instanceRequest = this.createIntanceRequest(instance);
      const res = await this.http.post<PredictResponse>(this.url, {
        instanceRequest
      }).toPromise();
      const risk = Number(Number(res.result).toFixed(2));
      if (risk > PREDICTION_THRESHOLD) {
        this.snackbar.open(`${instance.patientName} - ${instance.patientId}: is at high risk for readmittance, the patient will be notified at ${instance.patientPhone}.`, null, {
          duration: TOAST_DISPLAY_TIMER
        });
      }
      return risk;
    } catch (err) {
      this.snackbar.open(`Error occured predicting risk for ${instance.patientName} - ${instance.patientId}`, null, {
        duration: TOAST_DISPLAY_TIMER
      });
      console.error(err);
      return instance.risk;
    }
  }

  private createIntanceRequest(instance: PatientInstance): PatientInstanceRequest {
    const request: PatientInstanceRequest = {
      gender: instance.gender,
      age: this.convertAge(instance.age),
      time_in_hospital: instance.timeInHospital,
      num_medications: instance.numMedications,
      number_outpatient: instance.numberOutpatient,
      number_emergency: instance.numberEmergency,
      number_inpatient: instance.numberInpatient,
      number_diagnoses: instance.numberDiagnoses,
      max_glu_serum: this.convertGlucose(instance.maxGluSerum),
      A1Cresult: this.convertA1C(instance.A1Cresult),
      insulin: this.convertInsulin(instance.insulin),
      diabetesMed: instance.diabetesMed,
    };
    return request;
  }

  private convertInsulin(insulin: string): number {
    switch (insulin) {
      case INSULIN_DISPLAY_VALUES.UP:
        return INSULIN_VALUES.UP;
      case INSULIN_DISPLAY_VALUES.DOWN:
        return INSULIN_VALUES.DOWN;
      case INSULIN_DISPLAY_VALUES.STEADY:
        return INSULIN_VALUES.STEADY;
    }
    return INSULIN_VALUES.NO;
  }

  private convertA1C(a1c: number): number {
    if (a1c > 8) {
      return A1C_VALUES.HIGH;
    }
    if (a1c > 7) {
      return A1C_VALUES.MED;
    }
    if (a1c > 0) {
      return A1C_VALUES.NORMAL;
    }
    return A1C_VALUES.NONE; // Default if user sets slider to 0
  }

  private convertGlucose(glucose: number): number {
    if (glucose > 300) {
      return GLUCOS_VALUES.HIGH;
    }
    if (glucose > 200) {
      return GLUCOS_VALUES.MED;
    }
    if (glucose > 0) {
      return GLUCOS_VALUES.NORM;
    }
    return GLUCOS_VALUES.NONE; // Default if user sets slider to 0
  }

  private convertAge(age: number): number {
    if (age < 10) {
      return 0;
    }
    if (age < 20) {
      return 1;
    }
    if (age < 30) {
      return 2;
    }
    if (age < 40) {
      return 3;
    }
    if (age < 50) {
      return 4;
    }
    if (age < 60) {
      return 5;
    }
    if (age < 70) {
      return 6;
    }
    if (age < 80) {
      return 7;
    }
    if (age < 90) {
      return 8;
    }
    return 9; // largest range in data set
  }
}
