

const Header = () => {
  const handleNavigateSydney = () => {
    window.open("https://www.sydney.edu.au/", "_blank");
  };
  
  const handleNavigateAmt = () => {
    window.open("https://www.amt.edu.au/", "_blank");
  };
  

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <header className="fixed top-0 left-0 w-full h-[100px] bg-gradient-to-r from-[#f1dbdc] to-[#f66447] flex justify-between items-center px-6 md:px-12 shadow-lg z-50">
      {/* Logo Section */}
      <div className="flex items-center space-x-6">
        <div onClick={handleNavigateSydney} className="cursor-pointer">
          <img
            src="https://www.maths.usyd.edu.au/u/SMS/front/university_sydney_logo.png"
            alt="University of Sydney Logo"
            className="h-[60px] w-auto"
          />
        </div>
        <div onClick={handleNavigateAmt} className="cursor-pointer">
          <img
            src="https://i1.wp.com/www.amt.edu.au/wp-content/uploads/2018/12/cropped-amt-logo.png"
            alt="AMT Logo"
            className="h-[60px] w-auto"
          />
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="hidden md:flex space-x-8 text-white font-semibold">
        <button
          onClick={() => handleScrollToSection("about")}
          className="hover:text-gray-200 transition duration-300"
        >
          About
        </button>
        <button
          onClick={() => handleScrollToSection("fees")}
          className="hover:text-gray-200 transition duration-300"
        >
          Fees
        </button>
        <button
          onClick={() => handleScrollToSection("content")}
          className="hover:text-gray-200 transition duration-300"
        >
          Program Content
        </button>
        <button
          onClick={() => handleScrollToSection("faq")}
          className="hover:text-gray-200 transition duration-300"
        >
          FAQ
        </button>
      </nav>

      {/* Mobile Menu Placeholder */}
      <div className="md:hidden text-white">
        <button className="hover:text-gray-200">Menu</button>
      </div>
    </header>
  );
};

export default Header;
