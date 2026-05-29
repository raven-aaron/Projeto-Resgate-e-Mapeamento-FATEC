'use client'
import { Button } from 'react-bootstrap';
import React from 'react';

interface CustomButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
  className?: string;
}

export default function CustomButton({
  children,
  onClick,
  type = "button",
  style,
  className
}: CustomButtonProps) {
  return (
    <Button 
      type={type} 
      onClick={onClick} 
      style={style} 
      className={className}
    >
      {children}
    </Button>
  );
}