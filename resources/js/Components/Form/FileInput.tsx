import React, { useState, useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { fileSize } from '@/utils';

interface FileInputProps {
  name?: string;
  error?: string;
  onChange?: (file: File | null) => void;
}

export default function FileInput({ name, error, onChange }: FileInputProps) {
  const fileInput = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);

  function handleBrowse() {
    fileInput?.current?.click();
  }

  function handleRemove() {
    setFile(null);
    onChange?.(null);
  }

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    const files = e.currentTarget?.files as FileList;
    const file = files[0] || null;

    setFile(file);
    onChange?.(file);
  }

  return (
    <div className={`border rounded ${error ? 'border-danger' : 'border-secondary-subtle'}`}>
      <Form.Control
        id={name}
        ref={fileInput}
        type="file"
        className="d-none"
        onChange={handleChange}
        isInvalid={!!error}
      />
      {!file && (
        <div className="p-2">
          <BrowseButton text="Browse" onClick={handleBrowse} />
        </div>
      )}
      {file && (
        <div className="d-flex align-items-center justify-content-between p-2">
          <div className="text-truncate pe-2">
            {file?.name}
            <span className="ms-1 text-secondary small">
              ({fileSize(file?.size)})
            </span>
          </div>
          <BrowseButton text="Remove" onClick={handleRemove} />
        </div>
      )}
    </div>
  );
}

interface BrowseButtonProps {
  text: string;
  onClick?: () => void;
}

function BrowseButton({ text, onClick }: BrowseButtonProps) {
  return (
    <Button
      size="sm"
      variant="secondary"
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
