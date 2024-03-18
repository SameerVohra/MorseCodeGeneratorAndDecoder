import React, { forwardRef } from "react";

interface InputBoxProps {
  label: string;
  text: string;
  onTextChange: (e: string) => void;
  isEnabled?: boolean;
  placeholder?: string;
}

const InputBox = forwardRef<HTMLInputElement, InputBoxProps>(
  ({ label, text, onTextChange, isEnabled = true, placeholder }, ref) => {
    return (
      <div className="mb-4">
        <label className="block text-gray-200 text-sm font-bold mb-2">
          {label}
        </label>
        <input
          ref={ref}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder={placeholder}
          value={text}
          onChange={(e) => onTextChange(e.target.value)}
          disabled={!isEnabled}
        />
      </div>
    );
  },
);

export default InputBox;
