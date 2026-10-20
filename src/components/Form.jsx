import React from 'react'

const Form = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-100 p-5">
      
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        
        <h1 className="text-2xl font-bold text-zinc-800 text-center mb-6">
          Create User
        </h1>

        <form className="space-y-5">

          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-2">
              Image URL
            </label>
            <input
              type="url"
              placeholder="Enter image URL"
              className="w-full px-4 py-3 border border-zinc-300 rounded-lg outline-none focus:border-blue-500"
            />
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-zinc-300 rounded-lg outline-none focus:border-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-zinc-300 rounded-lg outline-none focus:border-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-zinc-300 rounded-lg outline-none focus:border-blue-500"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full px-4 py-3 border border-zinc-300 rounded-lg outline-none focus:border-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            Create User
          </button>

        </form>
      </div>

    </div>
  )
}

export default Form