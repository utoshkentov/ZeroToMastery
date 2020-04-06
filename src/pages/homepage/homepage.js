import React from 'react';
import "./homepage.style.scss"
import Directory from "../../components/directory/Directory";

const HomepageComponent = (props) => {
    return (
        <div className="homepage">
            <Directory/>
        </div>
    );
};

export default HomepageComponent;