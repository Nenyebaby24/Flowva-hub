import React from 'react';

const Jotform = () => {
  return (
    <div className="min-h-screen bg-[#F3F5F9] flex flex-col items-center py-12 px-4">
      {/* Brand Logo Header */}
      <div className="mb-8 bg-[#9333EA] p-6 rounded-lg flex flex-col items-center">
        {/* Replace with your actual Flowva SVG/Image */}
        <div className="w-12 h-12 border-4 border-white rounded-full mb-2 flex items-center justify-center">
            <span className="text-white font-bold">F</span>
        </div>
        <h1 className="text-white text-2xl font-bold tracking-tight">Flowva</h1>
      </div>

      {/* Form Card */}
      <div className="w-full max-auto max-w-[700px] bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
        <h2 className="text-[32px] font-bold text-[#2C3345] mb-10">Tell us about your brand</h2>

        <form className="space-y-6">
          {/* Name Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-[#2C3345] mb-1">Name</label>
              <input type="text" className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500" />
              <span className="text-xs text-gray-500 mt-1">First Name</span>
            </div>
            <div className="flex flex-col justify-end">
              <input type="text" className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500" />
              <span className="text-xs text-gray-500 mt-1">Last Name</span>
            </div>
          </div>

          {/* Email & Phone Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-[#2C3345] mb-1">E-mail</label>
              <input type="email" placeholder="ex: myname@example.com" className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500" />
              <span className="text-xs text-gray-500 mt-1">example@example.com</span>
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-[#2C3345] mb-1">Phone Number</label>
              <div className="flex gap-2">
                <input type="text" className="w-1/3 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                <input type="text" className="w-2/3 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500" />
              </div>
              <div className="flex gap-2">
                <span className="w-1/3 text-xs text-gray-500 mt-1">Area Code</span>
                <span className="w-2/3 text-xs text-gray-500 mt-1">Phone Number</span>
              </div>
            </div>
          </div>

          {/* Brand Details */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-[#2C3345] mb-1">Brand details</label>
            <textarea rows="5" className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"></textarea>
          </div>

          {/* Additional Instructions */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-[#2C3345] mb-1">Additional Instructions</label>
            <textarea rows="5" className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button className="bg-[#1EB763] hover:bg-[#19a358] text-white font-bold py-3 px-16 rounded-lg text-lg transition-colors">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Jotform;