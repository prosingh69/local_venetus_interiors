import { ArrowRight, Loader2, ChevronDown } from 'lucide-react'
import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'

const Form = () => {
  const [projectType, setProjectType] = useState("");
  const [isSelectFocused, setIsSelectFocused] = useState(false);
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

      <form ref={formRef} onSubmit={HandleData} className='rounded-xl sm:rounded-2xl bg-white p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 space-y-4 sm:space-y-4.5'>
        <h2 className='text-xl sm:text-2xl font-bold mb-2 text-gray-900 tracking-tight'>
          Get Instant Quotes with <span className="text-primary">No Hidden Fees</span>
        </h2>

        {/* Name */}
        <div className="relative">
          <input
            type="text"
            name="user_name"
            id="contact_user_name"
            required
            placeholder=" "
            className="peer w-full px-4 pt-4 pb-2.5 sm:pt-4.5 sm:pb-3 text-sm sm:text-base text-gray-900 bg-white border border-gray-300 rounded-xl outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder-transparent"
          />
          <label
            htmlFor="contact_user_name"
            className="absolute left-3.5 top-3.5 sm:top-4 px-1.5 bg-white text-xs sm:text-sm text-gray-400 font-normal transition-all duration-200 pointer-events-none origin-left 
            peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-primary peer-focus:font-semibold
            peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-600 peer-[:not(:placeholder-shown)]:font-medium"
          >
            Your Name <span className="text-primary">*</span>
          </label>
        </div>

        {/* Phone */}
        <div className="relative">
          <input
            type="tel"
            name="user_phone"
            id="contact_user_phone"
            required
            placeholder=" "
            className="peer w-full px-4 pt-4 pb-2.5 sm:pt-4.5 sm:pb-3 text-sm sm:text-base text-gray-900 bg-white border border-gray-300 rounded-xl outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder-transparent"
          />
          <label
            htmlFor="contact_user_phone"
            className="absolute left-3.5 top-3.5 sm:top-4 px-1.5 bg-white text-xs sm:text-sm text-gray-400 font-normal transition-all duration-200 pointer-events-none origin-left 
            peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-primary peer-focus:font-semibold
            peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-600 peer-[:not(:placeholder-shown)]:font-medium"
          >
            Phone Number <span className="text-primary">*</span>
          </label>
        </div>

        {/* Email */}
        <div className="relative">
          <input
            type="email"
            name="user_email"
            id="contact_user_email"
            required
            placeholder=" "
            className="peer w-full px-4 pt-4 pb-2.5 sm:pt-4.5 sm:pb-3 text-sm sm:text-base text-gray-900 bg-white border border-gray-300 rounded-xl outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder-transparent"
          />
          <label
            htmlFor="contact_user_email"
            className="absolute left-3.5 top-3.5 sm:top-4 px-1.5 bg-white text-xs sm:text-sm text-gray-400 font-normal transition-all duration-200 pointer-events-none origin-left 
            peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-primary peer-focus:font-semibold
            peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-600 peer-[:not(:placeholder-shown)]:font-medium"
          >
            Email Address <span className="text-primary">*</span>
          </label>
        </div>

        {/* Choose Project (Select Dropdown) */}
        <div className="relative">
          <select
            name="project_type"
            id="contact_project_type"
            value={projectType}
            onFocus={() => setIsSelectFocused(true)}
            onBlur={() => setIsSelectFocused(false)}
            onChange={(e) => setProjectType(e.target.value)}
            required
            className="w-full px-4 pt-4 pb-2.5 sm:pt-4.5 sm:pb-3 text-sm sm:text-base text-gray-900 bg-white border border-gray-300 rounded-xl outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer pr-10"
          >
            <option value="" disabled></option>
            <option value="1 BHK Interior" className="text-gray-900">1 BHK Interior</option>
            <option value="2 BHK Interior" className="text-gray-900">2 BHK Interior</option>
            <option value="3 BHK Interior" className="text-gray-900">3 BHK Interior</option>
            <option value="4 BHK / Villa" className="text-gray-900">4 BHK / Villa</option>
            <option value="Modular Kitchen" className="text-gray-900">Modular Kitchen</option>
            <option value="Full Home Transformation" className="text-gray-900">Full Home Transformation</option>
            <option value="Others" className="text-gray-900">Others</option>
          </select>
          <label
            htmlFor="contact_project_type"
            className={`absolute left-3.5 px-1.5 bg-white transition-all duration-200 pointer-events-none origin-left ${
              projectType || isSelectFocused
                ? '-top-2.5 left-3 text-xs font-semibold ' + (isSelectFocused ? 'text-primary' : 'text-gray-600')
                : 'top-3.5 sm:top-4 text-xs sm:text-sm text-gray-400 font-normal'
            }`}
          >
            Choose Project <span className="text-primary">*</span>
          </label>
          <ChevronDown
            className={`w-4 h-4 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-200 ${
              isSelectFocused ? 'rotate-180 text-primary' : 'text-gray-500'
            }`}
          />
        </div>

        {/* If Others is selected */}
        {projectType === 'Others' && (
          <div className="relative">
            <input
              type="text"
              name="other_project_type"
              id="contact_other_project_type"
              required
              placeholder=" "
              className="peer w-full px-4 pt-4 pb-2.5 sm:pt-4.5 sm:pb-3 text-sm sm:text-base text-gray-900 bg-white border border-gray-300 rounded-xl outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder-transparent"
            />
            <label
              htmlFor="contact_other_project_type"
              className="absolute left-3.5 top-3.5 sm:top-4 px-1.5 bg-white text-xs sm:text-sm text-gray-400 font-normal transition-all duration-200 pointer-events-none origin-left 
              peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-primary peer-focus:font-semibold
              peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-600 peer-[:not(:placeholder-shown)]:font-medium"
            >
              Please Specify Project <span className="text-primary">*</span>
            </label>
          </div>
        )}

        {/* Project Location */}
        <div className="relative">
          <input
            type="text"
            name="project_location"
            id="contact_project_location"
            placeholder=" "
            className="peer w-full px-4 pt-4 pb-2.5 sm:pt-4.5 sm:pb-3 text-sm sm:text-base text-gray-900 bg-white border border-gray-300 rounded-xl outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder-transparent"
          />
          <label
            htmlFor="contact_project_location"
            className="absolute left-3.5 top-3.5 sm:top-4 px-1.5 bg-white text-xs sm:text-sm text-gray-400 font-normal transition-all duration-200 pointer-events-none origin-left 
            peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-primary peer-focus:font-semibold
            peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-600 peer-[:not(:placeholder-shown)]:font-medium"
          >
            Project Location (e.g. Whitefield, Sarjapur, HSR...)
          </label>
        </div>

        {/* Message / Additional Note */}
        <div className="relative">
          <textarea
            name="message"
            id="contact_message"
            placeholder=" "
            rows="3"
            className="peer w-full px-4 pt-3.5 pb-2 text-sm sm:text-base text-gray-900 bg-white border border-gray-300 rounded-xl outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder-transparent resize-none h-24"
          />
          <label
            htmlFor="contact_message"
            className="absolute left-3.5 top-3.5 px-1.5 bg-white text-xs sm:text-sm text-gray-400 font-normal transition-all duration-200 pointer-events-none origin-left 
            peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-primary peer-focus:font-semibold
            peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-600 peer-[:not(:placeholder-shown)]:font-medium"
          >
            Message / Specific Requirements (Optional)
          </label>
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
