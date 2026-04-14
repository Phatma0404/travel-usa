import { useEffect, useState } from "react";

const animationMap = {
  bounce: "animate-bounceIn",
  shake: "animate-shake",
  pulse: "animate-pulse",
  tada: "animate-tada",
  fade: "animate-fadeIn",
};

export default function Modal({ isOpen, onClose, easein = "fade", children }) {
  const [animate, setAnimate] = useState("");

  useEffect(() => {
    if (isOpen) {
      setAnimate(animationMap[easein] || animationMap.fade);
    }
  }, [isOpen, easein]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div
        className={`bg-white rounded-xl p-6 w-[420px] transform ${animate}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}

        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 bg-red-500 text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}
