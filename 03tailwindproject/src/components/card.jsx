import React from 'react'

function card({username , btnText="visit me"} ) {
    console.log(username);
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white">
      <img
        src="https://picsum.photos/400/250"
        alt="Card"
        className="w-full h-48 object-cover"
      />

      <div className="p-4 margin-10">
        <h2 className="text-xl font-bold mb-2">{username}</h2>
        <p className="text-gray-600 text-sm">
          This is a simple React card with Tailwind styling.
        </p>

        <button className="mt-3 px-4 py-2 bg-black text-white rounded-lg">
         {btnText}
        </button>
      </div>
    </div>
  )
}

export default card
