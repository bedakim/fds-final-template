import React from 'react';

//WithLoading 반환함

export default function withLoading(WrappedComponent) {
  return function WithLoading(props) {
    const { loading, ...rest } = props;
    if (loading) {
      return 'loading...';
    } else {
      return <WrappedComponent {...rest} />;
    }
  };
}
