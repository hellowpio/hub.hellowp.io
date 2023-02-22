import React, { useState, useEffect } from 'react';

function MemberCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://discordapp.com/api/guilds/937681858668404776/widget.json');
      const data = await response.json();
      setCount(data.presence_count);
    };

    const interval = setInterval(() => {
      fetchData();
    }, 60000);

    fetchData();

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="discord-counter">
      {count}
    </span>
  );
}

export default MemberCounter;
