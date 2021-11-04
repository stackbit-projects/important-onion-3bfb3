import * as React from 'react';
// src/components/Callout.js

const Callout = ({ annotationPrefix, body }) => {
  return (
    <div data-sb-field-path={annotationPrefix}>
      <p data-sb-field-path=".body">{body}</p>
    </div>
  )
}

export default Callout