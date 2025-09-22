import React, { useState } from "react";

export default function FakeReCaptcha({ onChange }) {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    if (onChange) onChange(newChecked);
  };

  return (
    <div className="flex items-center border border-gray-300 rounded shadow-sm p-3 w-full max-w-md bg-white">
      <input
        id="fake-recaptcha"
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className="w-5 h-5 accent-blue-600 border-gray-300"
      />
      <label
        htmlFor="fake-recaptcha"
        className="ml-2 text-gray-800 text-sm flex-1"
      >
        I’m not a robot
      </label>
      <img
        src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
        alt="recaptcha logo"
        className="w-6 h-6"
      />
    </div>
  );
}
