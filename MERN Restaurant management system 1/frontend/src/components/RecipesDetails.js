// RecipesDetails.js
import React, { useState } from 'react';

const RecipesDetails = ({ fullText }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const displayText = isExpanded ? fullText : `${fullText.split(" ").slice(0, 30).join(" ")}...`;

  return (
    <div>
      {displayText}
      <button onClick={toggleExpanded}>
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
};

export default RecipesDetails;
