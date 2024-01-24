import React from 'react';

const Heading = ({ title }) => {
    return (
        <div className="bg-black text-white py-3 px-2 fs-4 fw-bolder rounded">
            {title}
        </div>
    );
};

export default Heading;