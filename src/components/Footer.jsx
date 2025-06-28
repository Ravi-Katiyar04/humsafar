import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-blue-700 pt-8 text-sm text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Sections */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 pb-8 border-b border-gray-600">
          {/* Column 1 */}
          <div>
            <h3 className="font-semibold text-blue-400 mb-3 border-b-2 border-blue-400 inline-block">
              Popular Train Routes
            </h3>
            <ul className="space-y-1">
              <li><Link href="#">Bengaluru To Mysore Trains</Link></li>
              <li><Link href="#">Chandigarh To Delhi Trains</Link></li>
              <li><Link href="#">Jammu To Delhi Trains</Link></li>
              <li><Link href="#">Bengaluru To Delhi Trains</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold mb-3">Top Train Routes</h3>
            <ul className="space-y-1">
              <li><Link href="#">Bengaluru To Chennai Trains</Link></li>
              <li><Link href="#">Jaipur To Jodhpur Trains</Link></li>
              <li><Link href="#">Jodhpur To Jaipur Trains</Link></li>
              <li><Link href="#">Mumbai To Surat Trains</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold mb-3">Top IRCTC Trains</h3>
            <ul className="space-y-1">
              <li><Link href="#">Delhi To Jaipur Trains</Link></li>
              <li><Link href="#">Lucknow To Delhi Trains</Link></li>
              <li><Link href="#">Ahmedabad To Delhi Trains</Link></li>
              <li><Link href="#">Surat To Mumbai Trains</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-semibold mb-3">Popular Trains</h3>
            <ul className="space-y-1">
              <li><Link href="#">Jaipur To Delhi Trains</Link></li>
              <li><Link href="#">Mumbai To Ahmedabad Trains</Link></li>
              <li><Link href="#">Delhi To Ahmedabad Trains</Link></li>
              <li><Link href="#">Mumbai To Jaipur Trains</Link></li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h3 className="font-semibold mb-3">Plan Your Trip</h3>
            <ul className="space-y-1">
              <li><Link href="#">Chennai To Coimbatore Trains</Link></li>
              <li><Link href="#">Coimbatore To Chennai Trains</Link></li>
              <li><Link href="#">Goa To Mumbai Trains</Link></li>
              <li><Link href="#">Nagpur To Mumbai Trains</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-4 text-xs text-gray-400">
          <div className="mb-4">
            © 2025 Le Travenues Technology Ltd. India. All brands are trademarks of their respective owners. •
            <span className="ml-1">
              <Link href="#">Privacy</Link> • 
              <Link href="#">Terms of Use</Link> • 
              <Link href="#">Career</Link> • 
              <Link href="#">Customer Service</Link> • 
              <Link href="#">About Us</Link> • 
              <Link href="#">Investor Relations</Link> • 
              <Link href="#">CSR</Link>
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 mt-2 md:mt-0">
            <Link href="#"><i className="fab fa-facebook-f hover:text-blue-500"></i></Link>
            <Link href="#"><i className="fab fa-twitter hover:text-blue-500"></i></Link>
            <Link href="#"><i className="fab fa-instagram hover:text-pink-500"></i></Link>
            <Link href="#"><i className="fab fa-linkedin-in hover:text-blue-600"></i></Link>
            <Link href="#"><i className="fab fa-youtube hover:text-red-500"></i></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
