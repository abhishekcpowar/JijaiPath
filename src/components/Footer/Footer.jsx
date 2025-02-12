import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#FBF6EE] text-gray-700">
      {/* Main Footer Content */}
      <div className="bg-red-500 text-white py-6">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Office Section */}
          <div>
            <h3 className="text-lg font-bold mb-2">Office</h3>
            <p className="text-sm">
              मार्केटयार्ड व्यापारी संकुल गाळा नंबर ९४, बस स्टैंड जवळ जत ता. जत, जि. सांगली
            </p>
          </div>

          {/* Timing Section */}
          <div>
            <h3 className="text-lg font-bold mb-2">Timing</h3>
            <p className="text-sm">Sat - Wed 10:00 AM - 5:00 PM</p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-bold mb-2">Contact</h3>
            <p className="text-sm flex items-center">
              <FaPhone className="mr-2" /> +91 9960227840
            </p>
            <p className="text-sm flex items-center">
              <FaPhone className="mr-2" /> 0234 4796395
            </p>
            <p className="text-sm flex items-center">
              <FaEnvelope className="mr-2" /> jijaiurbanpat@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Horizontal Links Section */}
      <div className="bg-[#e5f50c] text-center py-4 px-4 text-sm">
        © जिजाई अर्बन को-ऑप. क्रेडिट सोसायटी लि. जत
      </div>
    </footer>
  );
};

export default Footer;
