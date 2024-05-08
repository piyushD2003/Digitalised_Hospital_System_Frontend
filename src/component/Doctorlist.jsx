import React, { useState, useEffect } from 'react';

function getImgUrl(name) {
   return new URL(`../uploads/${name}`, import.meta.url).href;
}

const Doctors = ({ appointment }) => {
    const [doctorImage, setDoctorImage] = useState(null);

    useEffect(() => {
        const loadImage = async () => {
            if (appointment && appointment.image) {
                try {
                    const response = await fetch(getImgUrl(appointment.image));
                    if (response.ok) {
                        const blob = await response.blob();
                        setDoctorImage(URL.createObjectURL(blob));
                    } else {
                        console.error('Failed to load image:', response.statusText);
                    }
                } catch (error) {
                    console.error('Error fetching image:', error);
                }
            }
        };

        loadImage();

        // Clean up the object URL to prevent memory leaks
        return () => {
            if (doctorImage) {
                URL.revokeObjectURL(doctorImage);
            }
        };
    }, [appointment]);

    if (!appointment) return null;

    const { dname, specialist, study, mobile } = appointment;

    return (
        <div className='col-md-3'>
            <div className="card" style={{ maxWidth: "18rem" }}>
                {doctorImage && <img src={doctorImage} style={{ height: "11rem" }} className="card-img-top" alt={`Portrait of Dr. ${dname}`} />}
                <div className="card-body">
                    <h4 className="card-title">{dname}</h4>
                    <h6 className="card-text">{specialist}</h6>
                    <h6 className="card-text">{study}</h6>
                    <h6 className="card-text">Contact: {mobile}</h6>
                    {/* Add appointment button if needed */}
                </div>
            </div>
        </div>
    );
};

export default Doctors;
