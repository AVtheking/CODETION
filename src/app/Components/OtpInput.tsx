import { useEffect, useRef, useState } from "react";

/**
 * OtpInput is a component that renders a set of input fields for OTP (One Time Password) entry.
 * @param {Object} props - The properties that define the behavior of the OtpInput component.
 * @param {number} props.numberOfDigits - The number of digits in the OTP.
 * @param {function} props.onOtpComplete - The function to call when the OTP is completely entered.
 * @returns {JSX.Element} The rendered OtpInput component.
 */
export const OtpInput = ({
  numberOfDigits,
  onOtpComplete,
}: {
  numberOfDigits: number;
  onOtpComplete: (otp: string) => void;
}) => {
  // State to hold the OTP digits
  const [otp, setOtp] = useState<string[]>(new Array(numberOfDigits).fill(""));

  // Ref to hold the OTP input fields
  const otpBoxRefrence = useRef<HTMLInputElement[]>([]);

  // Effect to call onOtpComplete when all OTP fields are filled
  useEffect(() => {
    if (!otp.includes("")) {
      onOtpComplete(otp.join(""));
    }
  }, [otp, onOtpComplete]);

  /**
   * Handles the change event on the OTP input fields.
   * @param {string} value - The new value of the input field.
   * @param {number} index - The index of the input field in the OTP array.
   */
  const handleChange = (value: string, index: number) => {
    let newArr = [...otp];
    newArr[index] = value;
    setOtp(newArr);
    if (value && index < numberOfDigits - 1) {
      otpBoxRefrence.current[index + 1]?.focus();
    }
  };

  /**
   * Handles the key up event on the OTP input fields.
   * @param {React.KeyboardEvent<HTMLInputElement>} e - The key up event.
   * @param {number} index - The index of the input field in the OTP array.
   */
  const handleBackspaceAndKey = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && index > 0) {
      otpBoxRefrence.current[index - 1]?.focus();
    } else if (e.key === "ArrowLeft" && index > 0) {
      otpBoxRefrence.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < numberOfDigits - 1) {
      otpBoxRefrence.current[index + 1]?.focus();
    } else if (e.keyCode >= 48 && e.keyCode <= 57 && index < numberOfDigits - 1)
      otpBoxRefrence.current[index]?.focus();
  };

  return (
    <div className="flex bg-authContainer items-center gap-4">
      {otp.map((digit, index) => (
        <input
          key={index}
          value={digit}
          maxLength={1}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyUp={(e) => handleBackspaceAndKey(e, index)}
          ref={(reference) =>
            reference && (otpBoxRefrence.current[index] = reference)
          }
          className={`border w-12 h-auto text-white p-3 rounded-md block bg-transparent focus:border-2 focus:outline-none appearance-none`}
        />
      ))}
    </div>
  );
};
