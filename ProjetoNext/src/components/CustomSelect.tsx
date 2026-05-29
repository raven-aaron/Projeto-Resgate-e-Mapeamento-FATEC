'use client'
import { Form } from 'react-bootstrap';
import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  controlId: string;
  label: string;
  options: Option[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  name?: string;
  disabled?: boolean;
}

export default function CustomSelect({
  controlId,
  label,
  options,
  value,
  onChange,
  name,
  disabled = false
}: CustomSelectProps) {
  return (
    <Form.Group className="mb-3" controlId={controlId} style={{ opacity: disabled ? 0.6 : 1 }}>
      <Form.Label style={{ fontWeight: 'bold' }}>{label}</Form.Label>
      <Form.Select
        value={value}
        onChange={onChange}
        name={name}
        disabled={disabled}
        style={{ backgroundColor: disabled ? '#f1f1f1' : '#ffffff' }}
      >
        <option value="" disabled>Selecione</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
}