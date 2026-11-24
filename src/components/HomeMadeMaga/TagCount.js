import React, { useEffect, useState } from 'react';

function TagCount({tag}) {
  const [tagCount, setTagCount] = useState(0);

  useEffect(() => {
    const tagElements = document.getElementsByTagName(tag);
    const count = tagElements.length;
    setTagCount(count);
  }, []);

  return (
    <span>
      {tagCount}
    </span>
  );
}

export default TagCount;