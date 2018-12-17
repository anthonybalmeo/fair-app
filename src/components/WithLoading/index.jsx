import React from 'react';
const WithLoading = (Component) => {
  return function WihLoadingComponent ({ isLoading, ...props }) {
    if (!isLoading) return (<Component {...props} />);
    return (<p>Loading data...</p>);
  }
}
export default WithLoading;