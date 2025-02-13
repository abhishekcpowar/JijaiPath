import React from "react";
import "./service.css";
import star from "../../assets/images/star.png";
const Services = () => {
  return (
    <section className="p-4 sm:px-36 bg-white">
      <div className="container">
        <div className="main-title">
          <h2 className="text-[#E21C55] font-bold text-xl mb-4">आमच्या सेवा</h2>
          <span className="seperator"></span>
          <h5 className="mb-5 text-lg">
            सर्व बँकिंग सेवा एकाच छताखाली पुरवल्या जातात. काही ठळक सेवा
            खालीलप्रमाणे :
          </h5>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="services-process">
              <div className="item-service-process color-bg-1 wow fadeIn">
                <div className="head-service-process">
                  <div>
                    <h3 className="flex flex-col items-center justify-center">
                      <img
                        src={star}
                        alt=""
                        className="w-10 h-10 object-contain"
                      />
                      शेअर्स
                    </h3>
                  </div>
                </div>
                <div className="divisor-service-process">
                  <span className="circle-top">1</span>
                </div>
                <div className="info-service-process">
                  <h3>शेअर्स मधील गुंतवणूक </h3>
                  <p>
                    संस्था गेली काही वर्षे सातत्याने १५ % डिव्हिडंड (लाभांश) देत
                    आहे. नॉन ट्रान्स्फरेबल (विनाहस्तांतरित) शेअर्स मध्ये
                    <br />
                    कमीत कमी रु. १०००. 
                    <br />
                  </p>
                </div>
              </div>

              <div className="item-service-process color-bg-2 wow fadeIn">
                <div className="head-service-process">
                  <h3 className="flex flex-col items-center justify-center">
                    <img
                      src={star}
                      alt=""
                      className="w-10 h-10 object-contain"
                    />
                    ठेवी
                  </h3>
                </div>
                <div className="divisor-service-process">
                  <span className="circle-top">2</span>
                </div>
                <div className="info-service-process">
                  <h3>ठेवी योजना</h3>
                  <p>
                    ग्राहकांच्या गरजा
                    <br />
                    लक्षात घेऊन संस्था विविध डिपॉझिटस स्कीम (ठेव योजनां) राबवते.
                    कमी तसेच जास्त अवधीच्या या योजनांवर.
                    <br />
                  </p>
                </div>
              </div>

              <div className="item-service-process color-bg-3 wow fadeIn">
                <div className="head-service-process">
                  <h3 className="flex flex-col items-center justify-center">
                    <img
                      src={star}
                      alt=""
                      className="w-10 h-10 object-contain"
                    />
                    कर्ज
                  </h3>
                </div>
                <div className="divisor-service-process">
                  <span className="circle-top">3</span>
                </div>
                <div className="info-service-process">
                  <h3>सुलभ कर्ज</h3>
                  <p>
                    एक जबाबदार वित्तीय पतसंस्थेचे कर्तव्य पार पाडताना कर्जाचे
                    कारण, तारण व परतफेड ह्या बाबी लक्षात घेऊनच 
                    <br />
                    संस्था कर्ज देते.
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
