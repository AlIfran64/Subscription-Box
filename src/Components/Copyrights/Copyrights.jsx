import React from 'react';

const Copyrights = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-[#121212] text-white text-md p-6">
      <aside>
        <p>Copyright © {new Date().getFullYear()} - All right reserved by FreshiKart.</p>
      </aside>
    </footer>
  );
};

export default Copyrights;