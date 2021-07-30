export interface PatientInstance {
    patientName: string;
    patientPhone: string;
    patientAvatar: string;
    deviceId: string;
    patientId: number; // encounter_id
    gender: number; // gender
    age: number; // age
    weight: number; // Only UI. Could be used with a more detailed dataset. 
    timeInHospital: number; // time_in_hospital
    numLabProcedures: number; // num_lab_procedures
    numProcedures: number; // num_procedures
    numMedications: number; // num_medications
    numberOutpatient: number; // number_outpatient
    numberEmergency: number; // number_emergency
    numberInpatient: number; // number_inpatient
    numberDiagnoses: number; // number_diagnoses
    maxGluSerum: number; // max_glu_serum
    A1Cresult: number; // A1Cresult
    insulin: string; // insulin
    diabetesMed: number; // diabetesMed
    risk?: number; // **Previous risk of the model** Does not need to be passed, but this is what should be in the response from the API
};

export interface PatientInstanceRequest {
    gender: number;
    age: number;
    time_in_hospital: number;
    num_medications: number;
    number_outpatient: number;
    number_emergency: number;
    number_inpatient: number;
    number_diagnoses: number;
    max_glu_serum: number;
    A1Cresult: number;
    insulin: number;
    diabetesMed: number;
};
