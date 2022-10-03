import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header'
import GoBackButton from '../components/GoBackButton'

function PatientDetailPage() {
    const currentItem = useSelector(state => state.currentItem);
    const currentPatient = useSelector(state => state.data[currentItem.conditionId][currentItem.studyId]?.data[currentItem.patientId]);
    const navigate = useNavigate();
    return (
        <div className='PatientDetailPage'>
            <Header />
            <div className='main'>
                <GoBackButton />
                <div className='top'>
                    <div className='top-left'>
                        <p>PATIENT DETAILS</p>
                    </div>
                    <div className='top-right'>
                        <p>OBERVATIONS</p>
                    </div>
                </div>
                <div className='bottom'>
                    <div className='left'>
                        <div className='left-top'>
                            <div className='patient-detail-item'>
                                <p>PATIENT ID :</p>
                                <p>{currentPatient?.patientId}</p>
                            </div>
                            <div className='patient-detail-item'>
                                <p>SURNAME :</p>
                                <p>{currentPatient?.surName}</p>
                            </div>
                            <div className='patient-detail-item'>
                                <p>MIDDLE NAME :</p>
                                <p>{currentPatient?.middleName}</p>
                            </div>
                            <div className='patient-detail-item'>
                                <p>GIVEN NAME :</p>
                                <p>{currentPatient?.givenName}</p>
                            </div>
                            <div className='patient-detail-item'>
                                <p>DATE OF BIRTH :</p>
                                <p>{currentPatient?.dateOfBirth}</p>
                            </div>
                            <div className='patient-detail-item'>
                                <p>GENDER :</p>
                                <p>{currentPatient?.gender}</p>
                            </div>
                            <div className='patient-detail-item'>
                                <p>BLOOD GROUP :</p>
                                <p>{currentPatient?.bloodGroup}</p>
                            </div>
                            <div className='patient-detail-item'>
                                <p>DIAGNOSIS :</p>
                                <p>{currentPatient?.diagnosis}</p>
                            </div>
                            <div className='patient-detail-item'>
                                <p>DATE OF FIRST TREATMENT :</p>
                                <p>{currentPatient?.dateOfFirstTreatment}</p>
                            </div>
                        </div>
                        <div className='left-bottom'>
                            <div className='button'>RECORD NEW OBSERVATION</div>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='observation-item' onClick={() => { navigate('/observation') }}>
                            <div className='observation-item-data'>
                                <p>DATE OF THE OBSERVATION :</p>
                            </div>
                            <div className='observation-item-data'>
                                <p>HEART RATE :</p>
                            </div>
                            <div className='observation-item-data'>
                                <p>BLOOD PRESSURE :</p>
                            </div>
                            <div className='observation-item-data'>
                                <p>RESPIRATORY RATE :</p>
                            </div>
                            <div className='observation-item-data'>
                                <p>LEVEL OF CONSCIOUSNESS :</p>
                            </div>
                            <div className='observation-item-data'>
                                <p>PULSE OXIMETRY :</p>
                            </div>
                            <div className='observation-item-data'>
                                <p>OBSERVATION NOTES :</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PatientDetailPage