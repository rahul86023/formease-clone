import React from 'react';
import './Tags.css'
function Tags({ keywords }) {
  return (
    <div className="tags-name">
      {keywords.map((item, index) => (
        <div key={index} className="tag-items">{item}</div>
      ))}
    </div>
  );
}

export default Tags;
