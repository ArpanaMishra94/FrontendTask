import React from 'react';
import './CareerPage2.css';
import Navbar from './Navbar';
import {useLocation} from "react-router-dom";

export default function CareerPage2() {
    const location = useLocation();
    const data = location.state;

    return (

        <div className="careerPage2">
            <Navbar/>
            <div className="careerPage2-content">
                <div className="careerPage2-jobSection">
                    <span>
                        {
                        data.jobSection
                    }</span>
                </div>
                <div className="careerPage2-aboutJob">
                    <div className="careerPage2-jobTitle">
                        <p>
                            {
                            data.title
                        }</p>
                    </div>

                    <div className="careerPage2-jobDescriptionContainer">
                        <div className="careerPage2-jobDescription">
                            <p>
                                {
                                data.shortDesc
                            }</p>
                        </div>


                        <div className="careerPage2-paidOrGratis">
                            <h4 className={
                                (data.paidOrGratis == 'Paid' ? 'paidOrGratisSelected' : 'paidOrGratisNotSelected')
                            }>
                                $ Paid
                            </h4>
                            <h4 className={
                                (data.paidOrGratis == 'Gratis' ? 'paidOrGratisSelected' : 'paidOrGratisNotSelected')
                            }>
                                ❤ Gratis
                            </h4>

                        </div>
                    </div>
                    <div className="careerPage2-workplaceType">
                        <span>{
                            data.workplaceType
                        }</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
