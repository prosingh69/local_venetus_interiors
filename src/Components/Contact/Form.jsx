import { ArrowRight, Loader2, ChevronDown } from 'lucide-react'
import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'

const Form = () => {
  const [projectType, setProjectType] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const formRef = useRef();
  const GOOGLE_SHEET_API_URL = import.meta.env.VITE_GOOGLE_SHEET_API_URL;

  const HandleData = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(formRef.current);
    const projectLoc = formData.get("project_location") || "N/A";
    const userMsg = formData.get("message") || "";
    const selectedType = formData.get("project_type") === "Others" ? formData.get("other_project_type") : formData.get("project_type");

    const fullMessage = `Type: ${selectedType || 'N/A'}, Location: ${projectLoc}${userMsg ? `, Message: ${userMsg}` : ''}`;

    const dataForSheet = {
      user_name: formData.get("user_name"),
      user_email: formData.get("user_email"),
      user_phone: formData.get("user_phone"),
      project_type: selectedType,
      project_location: projectLoc,
      message: fullMessage
    };

    try {
      const promises = [];

      if (
        import.meta.env.VITE_EMAILJS_SERVICE_ID &&
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID &&
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      ) {
        promises.push(
          emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
          )
        );
      }

      if (GOOGLE_SHEET_API_URL) {
        promises.push(
          fetch(GOOGLE_SHEET_API_URL, {
            method: "POST",
            mode: "no-cors",
            headers: {
              "Content-Type": "text/plain;charset=utf-8",
            },
            body: JSON.stringify(dataForSheet),
          })
        );
      }

      if (promises.length > 0) {
        await Promise.all(promises);
      }

      toast.success("Thank you! Details submitted successfully.");
      e.target.reset();
      setProjectType("");

    } catch (error) {
      console.error('❌ Error:', error);
      toast.error("Something went wrong! Please try again or WhatsApp us.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <form ref={formRef} onSubmit={HandleData} className='rounded-xl sm:rounded-2xl bg-white p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100'>
        <h2 className='text-xl sm:text-2xl font-bold mb-5 text-gray-900 tracking-tight'>
          Get Instant Quotes with <span className="text-primary">No Hidden Fees</span>
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label className='block mb-1.5 text-xs sm:text-sm font-semibold text-gray-700'>Name *</label>
          <input
            type="text"
            name="user_name"
            placeholder='Your Name'
            className='border border-black/15 w-full rounded-lg sm:rounded-xl py-2.5 px-3.5 sm:px-4 text-sm sm:text-base focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all'
            required
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className='block mb-1.5 text-xs sm:text-sm font-semibold text-gray-700'>Phone No. *</label>
          <input
            type="tel"
            name="user_phone"
            placeholder='+91 XXXXX XXXXX'
            className='border border-black/15 w-full rounded-lg sm:rounded-xl py-2.5 px-3.5 sm:px-4 text-sm sm:text-base focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all'
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className='block mb-1.5 text-xs sm:text-sm font-semibold text-gray-700'>Email ID *</label>
          <input
            type="email"
            name="user_email"
            placeholder='yourname@gmail.com'
            className='border border-black/15 w-full rounded-lg sm:rounded-xl py-2.5 px-3.5 sm:px-4 text-sm sm:text-base focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all'
            required
          />
        </div>

        {/* Choose Project (Select Dropdown) */}
        <div className="mb-4">
          <label className='block mb-1.5 text-xs sm:text-sm font-semibold text-gray-700'>Choose Project *</label>
          <div className="relative">
            <select
              name="project_type"
              className='border border-black/15 w-full rounded-lg sm:rounded-xl py-2.5 px-3.5 sm:px-4 outline-none bg-white text-sm sm:text-base focus:border-primary focus:ring-1 focus:ring-primary/20 appearance-none cursor-pointer pr-10 transition-all'
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              required
            >
              <option value="" disabled>Select your project type</option>
              <option value="1 BHK Interior">1 BHK Interior</option>
              <option value="2 BHK Interior">2 BHK Interior</option>
              <option value="3 BHK Interior">3 BHK Interior</option>
              <option value="4 BHK / Villa">4 BHK / Villa</option>
              <option value="Modular Kitchen">Modular Kitchen</option>
              <option value="Full Home Transformation">Full Home Transformation</option>
              <option value="Others">Others</option>
            </select>
            <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* If Others is selected */}
        {projectType === 'Others' && (
          <div className="mb-4">
            <label className='block mb-1.5 text-xs sm:text-sm font-semibold text-gray-700'>Please Specify *</label>
            <input
              type="text"
              name="other_project_type"
              placeholder='Specify your custom project requirements'
              className='border border-black/15 w-full rounded-lg sm:rounded-xl py-2.5 px-3.5 sm:px-4 text-sm sm:text-base focus:border-primary outline-none transition-all'
              required
            />
          </div>
        )}

        {/* Project Location */}
        <div className="mb-4">
          <label className='block mb-1.5 text-xs sm:text-sm font-semibold text-gray-700'>Your Project Location</label>
          <input
            type="text"
            name="project_location"
            placeholder='e.g. Whitefield, HSR Layout, Sarjapur, Electronic City...'
            className='border border-black/15 w-full rounded-lg sm:rounded-xl py-2.5 px-3.5 sm:px-4 text-sm sm:text-base focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none transition-all'
          />
        </div>

        {/* Message / Additional Note */}
        <div className="mb-4">
          <label className='block mb-1.5 text-xs sm:text-sm font-semibold text-gray-700'>Message (Optional)</label>
          <textarea
            name="message"
            placeholder='Tell us any specific requirements or questions...'
            className='border border-black/15 w-full rounded-lg sm:rounded-xl py-2.5 px-3.5 sm:px-4 h-20 max-h-28 text-sm sm:text-base outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all resize-none'
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full text-white flex items-center justify-center gap-2 py-3 mt-2 rounded-xl bg-primary text-sm sm:text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all ${
            isLoading ? 'opacity-70 cursor-not-allowed' : 'active:scale-98 cursor-pointer hover:bg-primary-hover'
          }`}
        >
          <span>{isLoading ? 'Sending Quote Request...' : 'Get Instant Quote'}</span>
          {isLoading ? <Loader2 size={18} className="animate-spin" /> : <ArrowRight size={18} />}
        </button>

        <p className="text-center text-[12px] text-gray-500 pt-3">
          🔒 100% Privacy Protected · Zero Spam Calls
        </p>
      </form>
    </>
  )
}

export default Form
