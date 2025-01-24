import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [show, setShow] = useState(false);
  const faqs = [
    {
      question: "Ordering and Shipping",
      answer:
        "Find answers to questions about the ordering process, shipping options, delivery times, and tracking your ceramic product shipments.",
    },
    {
      question: "Product Care and Maintenance",
      answer:
        "Learn how to care for and maintain your ceramic products to ensure their longevity and beauty. Get tips on cleaning, handling, and preserving your pieces.",
    },
    {
      question: "Returns and Refunds",
      answer:
        "Discover our policies on returns and refunds. This section explains how to initiate a return, the eligibility criteria, and the refund process for your ceramic purchases.",
    },
    {
      question: "Custom Orders and Personalization",
      answer:
        "Interested in custom or personalized ceramic products? Here, you’ll find information on how to place custom orders and personalize your items to make them uniquely yours.",
    },
    {
      question: "Contact and Customer Support",
      answer:
        "Have questions or need assistance? Find details on how to get in touch with our customer support team, including contact information and response times. We’re here to help with any inquiries you may have.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container gap-5 mx-auto mt-20 bg-[#F1F4F1]">
      <div className="flex p-10  flex-wrap items-center justify-center  min-h-[700px]">
        <div>
          <h1 className="text-5xl text-main pb-2">FAQs</h1>
          <p className="text-lg text-gray-500 w-[500px] md:w-full">
            Find answers to common questions about our ceramic products,
            ordering, shipping, care, and more. If you need further information,
            feel free to contact our support team.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-[40%] lg:w-full">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-4 w-full border "
              onClick={() => toggleFAQ(index)}
            >
              <div
                className="text-main font-bold py-2 text-lg "
                onClick={() => setShow(!show)}
              >
                {show === false ? (
                  <div className="flex justify-between items-center">
                    {faq.question}
                    <FaAngleDown />
                  </div>
                ) : (
                  <div className="flex justify-between items-center">
                    {faq.question}
                    <FaAngleUp />
                  </div>
                )}
              </div>
              {activeIndex === index && (
                <div className="text-gray-500 py-2 transition duration-500">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex lg:flex-col ">
        <img src="./footer-cta.jpg" alt="" className="w-[50%] lg:w-full" />
        <div className="bg-main p-10 text-white w-[50%] lg:w-full md:h-[400px] h-[550px] ">
          <div className="md:text-center relative w-full h-full ">
            <div className="absolute top-[50%] transform translate-y-[-50%] lg:left-[50%] lg:translate-x-[-50%]">
              <h1 className="text-5xl lg:text-3xl leading-snug pb-10 w-[550px] lg:w-[450px]">
                Uncover the World of Ceramic Artistry Start Your Journey Here!
              </h1>
              <button className="uppercase py-3 px-10 text-white transition duration-500 font-bold bg-main border-2  hover:text-main hover:bg-white hover:border-main">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
