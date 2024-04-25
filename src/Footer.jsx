import React, { useEffect, useState } from 'react';

function Footer() {

  const [timeSinceCreation, setTimeSinceCreation] = useState('');

  useEffect(() => {
    const projectCreationTime = new Date('April 24, 2024 23:47:00'); // Time the project was created

    const updateTimeSinceCreation = () => {
      const currentTime = new Date(); // Current time
      const timeDifference = currentTime - projectCreationTime; // Difference in milliseconds
      const seconds = Math.floor(timeDifference / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

      // Construct the time since creation string
      let timeSinceCreationString = '';
      if (days > 0) {
        timeSinceCreationString += days + ' days ';
      }
      if (hours > 0) {
        timeSinceCreationString += hours % 24 + ' hours ';
      }
      if (minutes > 0) {
        timeSinceCreationString += minutes % 60 + ' minutes ';
      }
      if (seconds > 0) {
        timeSinceCreationString += seconds % 60 + ' seconds ';
      }

      setTimeSinceCreation(timeSinceCreationString);
    };

    updateTimeSinceCreation(); // Call once initially

    // Update time every second
    const intervalId = setInterval(updateTimeSinceCreation, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="footer flex">
      <div className="flex">
        <p>This page was created {timeSinceCreation ? `about ${timeSinceCreation} ago` : ''} with a little help ? from GPT 🤨 😍</p>
      </div>
    </div>
  )
}

export default Footer