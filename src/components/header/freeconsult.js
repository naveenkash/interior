import React from 'react'
import '../../style/consult.css'

export default function freeconsult() {
    return (
        <div className="animated fadeInUp consult">
            <div className="discount-heading">
                <p><span>25%</span>DISCOUNT ON YOUR FIRST DESIGN</p>
            </div>
            <div className="craft">
                <h1>We craft affordable design</h1>
                <p>Your interior should still represent your style. No matter how large your space is or what your design preference is, these designer examples are designed to inspire you.</p>
            </div>
            <div className="email-consult">
                <div className="email-input">
                <input type="email" name="email" id="email" placeholder="Enter email address" />
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="envelope" className="svg-inline--fa fa-envelope fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path className="svgclr" fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path></svg></div>
                <div className="email-btn">
                    <div className="consult-btn">
                        <button>FREE CONSULT</button>
                    </div>
                    <div className="explore-more">
                       <a href="https://naveenkashyap.com"> <p> EXPLORE MORE </p> <span className="more-arrow"></span> </a>
                    </div>
                </div>
            </div>
        </div>
    )
}