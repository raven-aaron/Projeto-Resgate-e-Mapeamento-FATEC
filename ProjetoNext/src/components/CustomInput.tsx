'use client'
import { Form } from 'react-bootstrap';
import React from 'react';

interface CustomInputProps {
  controlId: string;
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  name?: string;
}

export default function CustomInput({
  controlId,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  name
}: CustomInputProps) {
  return (
    <Form.Group className="mb-3" controlId={controlId}>
      <Form.Label style={{ fontWeight: 'bold' }}>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
      />
    </Form.Group>
  );
}