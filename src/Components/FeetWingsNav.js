import React from 'react';
import './FeetWingsNav.css';
import { Link } from 'react-router-dom';
export default function FeetWingsNav() {
    return (
        <div className = "feetWingsNav">
        <div className = "feetWingsLogoText">
             <img className = "feetWingsLogo"
              src = "https://s3-alpha-sig.figma.com/img/3ba1/10de/10fa432f369b64dd65ba24772a88473e?Expires=1649635200&Signature=NRU6X-RmvLVHK9y60lG5lFb7GBf5JePQugPtIDnIseSs-Zq5Ceatw9~KseSKh7trCsD7Q3TMeU~bten99y977mvxEin0pL0ViT6582SRZOrWhE~FjocCuv9Da7qpXxOE1PTbDY90Y4U4d6LX7QJfG~cXkBRo3Kue4gZNrRMfMeWqWe6ZMqqwZ2UviJb13JfNQZhtWxm~T5r-3g3EgQ5eu6lD4HKkQHi8ZjdCvtPMHRuQR6K~CI226L~4UgNx9RGzhl2THgHmeYfJrZk7ba4XCA3zARcZ4H3WYXP4FqrSetn1yvSvOhe9JQArAyzJ~Qyjx8ElMRGPr6ma6FWA7VrB4Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
    </div>
          
              <div className = "feetWingsInfo">
                   <span className = "ourProducts">Our Products</span>
                   <span className = "insights">Insights</span>
                   <span className = "smartYarn">Smart Yarn</span>
                   <span className = "about">About</span>
                   <span className = "contact">Contact</span>
              </div>
        </div>
    );
}