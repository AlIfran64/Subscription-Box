import React from 'react';

const Copyrights = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-[#8EC63F] text-black text-md font-medium p-4">
      <aside>
        <p>Copyright © {new Date().getFullYear()} - All right reserved by FreshiKart.</p>
      </aside>
    </footer>
  );
};

export default Copyrights;