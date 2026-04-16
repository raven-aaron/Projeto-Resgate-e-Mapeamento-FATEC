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
  name?: string;
}

export default function CustomInput({
  controlId,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
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
        name={name}
      />
    </Form.Group>
  );
}