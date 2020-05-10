import React from 'react';
const withClass = (WrappedComponnt, className) =>(props)=> (
    <div className={className}>
        <WrappedComponnt {...props} />
    </div>
);
export default withClass;