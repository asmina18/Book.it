import React, { useState, useEffect } from 'react';
import PropagateLoader from "react-spinners/PropagateLoader";
export function LoadingPage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    return (
        <>
            {loading ? (
                <PropagateLoader
                color="#e818d5" 
                loading={loading}
                size={10} 
    />
            ) : (
                <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center',width:'100%',height:'100vh'}}>
                    
                </div>
            )}
        </>
    );
}

