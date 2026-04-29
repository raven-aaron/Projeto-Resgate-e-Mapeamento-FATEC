'use client'
import { Button } from 'react-bootstrap';
import React from 'react';

interface CustomButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export default function CustomButton({ children, onClick, type = "button", className = "" }: CustomButtonProps) {
  return (
    <Button 
      className={`btn-custom ${className}`} 
      onClick={onClick} 
      type={type}
    >
      {children}
    </Button>
  );
}