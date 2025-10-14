import React, { useState } from 'react';

const ImageWithLoader = ({ src, alt, rounded }) => {

    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            <div className={`w-full h-full ${rounded} flex items-center justify-center bg-gray-100`}>
                <span className="animate-spin border-4 border-t-transparent border-gray-400 rounded-full w-8 h-8"></span>
            </div>
            <img
                src={src}
                alt={alt}
                className={`w-full h-full object-cover transition-opacity duration-500 ${!isLoading ? "opacity-100" : "opacity-0"
                    }`}
                onLoad={() => setIsLoading(false)}
            />
        </>
    )
};

export default ImageWithLoader; // on hold