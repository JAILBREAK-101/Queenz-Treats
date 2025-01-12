import React from "react";
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

// Disable the spinner
// nprogress.configure({ showSpinner: false });

export const PageLoader = () => {

// Start nprogress when the component mounts
  React.useEffect(() => {
    nprogress.start(); 
    return () => {
      // Complete nprogress when the component unmounts
      nprogress.done(); 
    };
  }, []);

    return (
        <div className="flex justify-center items-center min-h-screen">
            
            <p>Loading...</p>
    </div>
    );
};
