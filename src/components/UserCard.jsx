import React from 'react'

const UserCard = () => {
  return (
    <div className="min-h-screen bg-zinc-100 flex items-center justify-center p-6">

      {/* User Card */}
      <div className="w-full max-w-sm bg-white border border-zinc-200 rounded-3xl shadow-xl overflow-hidden">

        {/* Top Section */}
        <div className="h-28 bg-zinc-400"></div>

        {/* Profile Image */}
        <div className="flex justify-center -mt-16">
          <img
            // src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
            alt="User"
            className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>

        {/* User Info */}
        <div className="px-7 pb-8 pt-4">

          {/* Name */}
          <div className="text-center mb-7">
            <h1 className="text-2xl font-bold text-zinc-900">
              Mohammed Aftab
            </h1>

          </div>

          {/* Details */}
          <div className="space-y-4">

            {/* Email */}
            <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-4">
              <p className="text-xs font-medium text-zinc-500 uppercase tracking-wide">
                Email
              </p>

              <p className="text-sm font-semibold text-zinc-800 mt-1">
                aftab@example.com
              </p>
            </div>


            {/* Phone */}
            <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-4">
              <p className="text-xs font-medium text-zinc-500 uppercase tracking-wide">
                Phone Number
              </p>

              <p className="text-sm font-semibold text-zinc-800 mt-1">
                +91 98765 43210
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default UserCard
