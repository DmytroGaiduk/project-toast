import React from 'react';

function useEscape(func) {

    React.useEffect(() => {
        function handleKeyDown(event) {
            if (event.code === 'Escape') {
                func(event)
                //setToasts([]);
            }
        }

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [func]);

}

export default useEscape