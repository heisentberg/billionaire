import React from 'react';

export default function BingAIMinimalIcon({ className = '' }) {
  return (
    <img
      src="/assets/image.png" // Relative path to your image in the public folder
      alt="Image Alt Text" // Add appropriate alt text for accessibility
      className={`h-9 w-9 object-center ${className}`} // Example: Use 'h-8' and 'w-8' for a slightly larger small size (adjust values as needed)
    />
  );
}