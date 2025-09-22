// import React from "react";
// import {
//   FaSkype,
//   FaFacebookF,
//   FaLinkedinIn,
//   FaPinterestP,
//   FaBehance,
//   FaDribbble,
//   FaMedium,
//   FaTwitter,
//   FaPhoneAlt,
// } from "react-icons/fa";

// const ContactPage = () => {
//   return (
//     <section className="bg-[#041333] text-white py-10 px-6">
//       <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* LEFT SIDE */}
//         <div>
//           <h4 className="text-lg font-semibold">We Are Here To Help You</h4>
//           <h1 className="text-4xl md:text-5xl font-bold mt-2">
//             Let’s Transform Your <br /> Vision Into Value.
//           </h1>

//           <div className="mt-8">
//             <h3 className="text-xl font-semibold mb-3">Contact us</h3>
//             <div className="flex items-center gap-3 mb-3">
//               <FaSkype className="text-[#FF5E3A] text-xl" />
//               <span>biz.tecoreng</span>
//             </div>
//             <div className="flex items-center gap-3">
//               <FaPhoneAlt className="text-[#FF5E3A] text-xl" />
//               <span>+91 85117 46476</span>
//             </div>
//           </div>

//           <div className="mt-8">
//             <h3 className="text-xl font-semibold mb-2">Our Socials</h3>
//             <p className="text-sm text-gray-300 mb-4">
//               Don’t Miss To Follow Us On Our Social Networks Accounts.
//             </p>
//             <div className="flex gap-3">
//               <a href="#" className="bg-black p-2 rounded-full">
//                 <FaTwitter className="text-white" />
//               </a>
//               <a href="#" className="bg-[#1877f2] p-2 rounded-full">
//                 <FaFacebookF />
//               </a>
//               <a href="#" className="bg-[#0a66c2] p-2 rounded-full">
//                 <FaLinkedinIn />
//               </a>
//               <a href="#" className="bg-[#bd081c] p-2 rounded-full">
//                 <FaPinterestP />
//               </a>
//               <a href="#" className="bg-[#1769ff] p-2 rounded-full">
//                 <FaBehance />
//               </a>
//               <a href="#" className="bg-[#ea4c89] p-2 rounded-full">
//                 <FaDribbble />
//               </a>
//               <a href="#" className="bg-[#242424] p-2 rounded-full">
//                 <FaMedium />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="bg-white text-black rounded-3xl p-8 shadow-lg">
//           <h1 className="text-3xl font-bold">
//             Get in <span className="bg-[linear-gradient(90deg,_rgb(255,97,11)_7.69%,_rgb(252,183,162)_95.38%)] bg-clip-text text-transparent">touch</span>
//           </h1>
//           <p className="text-sm text-black-500 mt-1 font-medium">
//             We are always ready to help. There are many ways to contact us.
//             You may drop us a line, give us a call, send an email.
//           </p>

//           <form className="mt-6 space-y-4">
//             <input
//               type="text"
//               placeholder="Full Name"
//               className="w-full border-b border-gray-300 focus:outline-none py-2"
//             />
//             <div className="flex gap-2 items-center border-b border-gray-300 pb-2">
//               <img
//                 src="https://flagcdn.com/w20/in.png"
//                 alt="India"
//                 className="w-5 h-4"
//               />
//               <input
//                 type="text"
//                 placeholder="Contact number"
//                 className="w-full focus:outline-none"
//               />
//             </div>
//             <input
//               type="email"
//               placeholder="E-mail"
//               className="w-full border-b border-gray-300 focus:outline-none py-2"
//             />
//             <input
//               type="text"
//               placeholder="Let’s talk about your idea"
//               className="w-full border-b border-gray-300 focus:outline-none py-2"
//             />
//             <div className="border border-dashed border-gray-400 rounded-md p-6 text-center text-gray-500">
//               <input type="file" className="hidden" id="fileUpload" />
//               <label htmlFor="fileUpload" className="cursor-pointer">
//                 ⬆ Upload Additional file
//               </label>
//               <p className="text-xs mt-2">
//                 File size of your document should not exceed 2MB.
//               </p>
//             </div>

//             {/* Recaptcha Placeholder */}
//             <div className="border border-gray-300 rounded-md p-4 flex items-center gap-3">
//               <input type="checkbox" /> <span>I’m not a robot</span>
//             </div>

//             <button

//               type="submit"

//               className="w-full bg-gradient-to-r from-[#f68f6a] to-[#f62909] text-white font-semibold py-3 rounded-xl hover:from-[#f42a0b]  hover:to-[#e0897c] transition-transform hover:scale-105"
//             >
//               SUBMIT
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactPage;
import React, { useState } from "react";
import {
  FaSkype,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaBehance,
  FaDribbble,
  FaMedium,
  FaTwitter,
  FaPhoneAlt,
} from "react-icons/fa";
import FakeReCaptcha from "./FakeReCaptcha"; // import component

const ContactPage = () => {
  const [captchaChecked, setCaptchaChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaChecked) {
      alert("Please verify you are not a robot!");
      return;
    }
    // your form submit logic here
    alert("Form submitted successfully!");
  };

  return (
    <section className="bg-[#041333] text-white py-10 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* LEFT SIDE */}
        <div>
          <h4 className="text-lg font-semibold">We Are Here To Help You</h4>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">
            Let’s Transform Your <br /> Vision Into Value.
          </h1>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-3">Contact us</h3>
            <div className="flex items-center gap-3 mb-3">
              <FaSkype className="text-[#FF5E3A] text-xl" />
              <span>biz.tecoreng</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#FF5E3A] text-xl" />
              <span>+91 85117 46476</span>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">Our Socials</h3>
            <p className="text-sm text-gray-300 mb-4">
              Don’t Miss To Follow Us On Our Social Networks Accounts.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-black p-2 rounded-full">
                <FaTwitter className="text-white" />
              </a>
              <a href="#" className="bg-[#1877f2] p-2 rounded-full">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-[#0a66c2] p-2 rounded-full">
                <FaLinkedinIn />
              </a>
              <a href="#" className="bg-[#bd081c] p-2 rounded-full">
                <FaPinterestP />
              </a>
              <a href="#" className="bg-[#1769ff] p-2 rounded-full">
                <FaBehance />
              </a>
              <a href="#" className="bg-[#ea4c89] p-2 rounded-full">
                <FaDribbble />
              </a>
              <a href="#" className="bg-[#242424] p-2 rounded-full">
                <FaMedium />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white text-black rounded-3xl p-8 shadow-lg">
          <h1 className="text-3xl font-bold">
            Get in{" "}
            <span className="bg-[linear-gradient(90deg,_rgb(255,97,11)_7.69%,_rgb(252,183,162)_95.38%)] bg-clip-text text-transparent">
              touch
            </span>
          </h1>
          <p className="text-sm text-black-500 mt-1 font-medium">
            We are always ready to help. There are many ways to contact us. You
            may drop us a line, give us a call, send an email.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border-b border-gray-300 focus:outline-none py-2"
            />
            <div className="flex gap-2 items-center border-b border-gray-300 pb-2">
              <img
                src="https://flagcdn.com/w20/in.png"
                alt="India"
                className="w-5 h-4"
              />
              <input
                type="text"
                placeholder="Contact number"
                className="w-full focus:outline-none"
              />
            </div>
            <input
              type="email"
              placeholder="E-mail"
              className="w-full border-b border-gray-300 focus:outline-none py-2"
            />
            <input
              type="text"
              placeholder="Let’s talk about your idea"
              className="w-full border-b border-gray-300 focus:outline-none py-2"
            />
            <div className="border border-dashed border-gray-400 rounded-md p-6 text-center text-gray-500">
              <input type="file" className="hidden" id="fileUpload" />
              <label htmlFor="fileUpload" className="cursor-pointer">
                ⬆ Upload Additional file
              </label>
              <p className="text-xs mt-2">
                File size of your document should not exceed 2MB.
              </p>
            </div>

            {/* Static ReCaptcha */}
            <FakeReCaptcha onChange={setCaptchaChecked} />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#f68f6a] to-[#f62909] text-white font-semibold py-3 rounded-xl hover:from-[#f42a0b]  hover:to-[#e0897c] transition-transform hover:scale-105"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
