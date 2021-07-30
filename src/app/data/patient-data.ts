import { PatientInstance } from '../models/patient-instance.interface';
import { INSULIN_DISPLAY_VALUES } from '../shared/constants';

export const PATIENT_DATA: PatientInstance[] = [{
    deviceId: '989f59c5-6965-44c1-a3b5-188e10adcc81',
    patientName: 'Samantha Smith',
    patientPhone: '561-410-9331',
    patientAvatar: 'https://t4.ftcdn.net/jpg/02/60/03/61/360_F_260036118_AUYppgsODQeTCnbu0OXGNDXB8EVzpxKq.jpg',
    patientId: 149190, // encounter_id
    gender: 0, // gender
    age: 62, // age
    weight: 110,
    timeInHospital: 3, // time_in_hospital
    numLabProcedures: 59, // num_lab_procedures
    numProcedures: 20, // num_procedures
    numMedications: 13, // num_medications
    numberOutpatient: 2, // number_outpatient
    numberEmergency: 12, // number_emergency
    numberInpatient: 5, // number_inpatient
    numberDiagnoses: 9, // number_diagnoses
    insulin: INSULIN_DISPLAY_VALUES.UP,
    maxGluSerum: 85, // max_glu_serum
    A1Cresult: 12, // A1Cresult
    diabetesMed: 1, // diabetesMed
    risk: 0.34, // **Previous risk of the model** Does not need to be passed, but this is what should be in the response from the API
}, {
    deviceId: 'f4086ecf-7196-48a5-aee1-eaea8e70e8f2',
    patientName: 'Jerry Johnson',
    patientPhone: '631-555-1234',
    patientAvatar: 'https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg',
    patientId: 500364, // encounter_id
    gender: 1, // gender
    age: 65, // age
    weight: 185, // string
    timeInHospital: 7, // time_in_hospital
    numLabProcedures: 44, // num_lab_procedures
    numProcedures: 1, // num_procedures
    numMedications: 11, // num_medications
    numberOutpatient: 0, // number_outpatient
    numberEmergency: 0, // number_emergency
    numberInpatient: 0, // number_inpatient
    numberDiagnoses: 7, // number_diagnoses
    maxGluSerum: 0, // max_glu_serum
    A1Cresult: 0, // A1Cresult
    insulin: INSULIN_DISPLAY_VALUES.UP,
    diabetesMed: 1, // diabetesMed
    risk: .11, // **Previous risk of the model** Does not need to be passed, but this is what should be in the response from the API
}, {
    deviceId: 'bc0fcd10-7ac1-43c0-84c5-babc0a5052e6',
    patientName: 'Michael Madison',
    patientPhone: '631-555-7890',
    patientAvatar: 'https://thumbs.dreamstime.com/b/smiling-indian-man-looking-camera-mature-wearing-spectacles-portrait-middle-eastern-confident-businessman-office-195195079.jpg',
    patientId: 36900, // encounter_id
    gender: 1, // gender
    age: 42, // age
    weight: 152, // string
    timeInHospital: 5, // time_in_hospital
    numLabProcedures: 62, // num_lab_procedures
    numProcedures: 12, // num_procedures
    numMedications: 23, // num_medications
    numberOutpatient: 5, // number_outpatient
    numberEmergency: 5, // number_emergency
    numberInpatient: 5, // number_inpatient
    numberDiagnoses: 9, // number_diagnoses
    maxGluSerum: 152, // max_glu_serum
    A1Cresult: 11, // A1Cresult
    insulin: INSULIN_DISPLAY_VALUES.STEADY,
    diabetesMed: 1, // diabetesMed
    risk: 0.45, // **Previous risk of the model** Does not need to be passed, but this is what should be in the response from the API
}, {
    deviceId: '34760289-674f-4e1c-aea3-2e1957a5cfd2',
    patientName: 'Maria Moore',
    patientPhone: '331-589-7660',
    patientAvatar: 'https://images2.markets.businessinsider.com/60f1b1377b0ec5001800a779?format=jpeg',
    patientId: 440836292, // encounter_id
    gender: 0, // gender
    age: 87, // age
    weight: 142, // string
    timeInHospital: 13, // time_in_hospital
    numLabProcedures: 67, // num_lab_procedures
    numProcedures: 0, // num_procedures
    numMedications: 32, // num_medications
    numberOutpatient: 0, // number_outpatient
    numberEmergency: 0, // number_emergency
    numberInpatient: 0, // number_inpatient
    numberDiagnoses: 8, // number_diagnoses
    maxGluSerum: 211, // max_glu_serum
    A1Cresult: 0, // A1Cresult
    insulin: INSULIN_DISPLAY_VALUES.UP, // insulin
    diabetesMed: 1, // diabetesMed
    risk: 0.05, // **Previous risk of the model** Does not need to be passed, but this is what should be in the response from the API
}, {
    deviceId: 'f29a0d23-192d-4e8e-a462-9584164075da',
    patientName: 'Samantha Snider',
    patientPhone: '621-588-1212',
    patientAvatar: 'https://t3.ftcdn.net/jpg/02/66/29/58/360_F_266295896_H62ybNsZwOnnNvdyzEWzZDa3WWp2YFFf.jpg',
    patientId: 441364904, // encounter_id
    gender: 1, // gender
    age: 67, // age
    weight: 155, // string
    timeInHospital: 1, // time_in_hospital
    numLabProcedures: 34, // num_lab_procedures
    numProcedures: 50, // num_procedures
    numMedications: 17, // num_medications
    numberOutpatient: 100, // number_outpatient
    numberEmergency: 100, // number_emergency
    numberInpatient: 100, // number_inpatient
    numberDiagnoses: 9, // number_diagnoses
    maxGluSerum: 105, // max_glu_serum
    A1Cresult: 7.8, // A1Cresult
    insulin: INSULIN_DISPLAY_VALUES.UP,
    diabetesMed: 0, // diabetesMed
    risk: 0.09, // **Previous risk of the model** Does not need to be passed, but this is what should be in the response from the API
},];
