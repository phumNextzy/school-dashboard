import React from "react";

interface AlertProps {
  text: string;
  status: "success" | "error";
}

function Alert({ text, status }: AlertProps) {
  const bgColor = status === "success" ? "bg-green-50" : "bg-red-50";
  const textColor = status === "success" ? "text-green-800" : "text-red-800";
  
  return (
    <div
      className={`p-4 mb-4 text-sm rounded-lg ${bgColor} ${textColor}`}
      role="alert"
    >
      <span className="font-medium">{status.charAt(0).toUpperCase() + status.slice(1)} alert!</span> {text}
    </div>
  );
}

export default Alert;