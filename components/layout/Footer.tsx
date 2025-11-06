import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-6 text-center mt-10">
      <p className="text-gray-600">
        © {new Date().getFullYear()} ListingApp. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;