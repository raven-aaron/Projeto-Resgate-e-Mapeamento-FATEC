'use client'
import { Form, Row, Col } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';

interface PropriedadesUpload {
  controlId: string;
  label: string;
  aoMudar: (arquivos: FileList | null) => void;
}

export default function UploadFotoPet({
  controlId,
  label,
  aoMudar
}: PropriedadesUpload) {
  const [previas, setPrevias] = useState<string[]>([]);

  const manipularArquivos = (e: React.ChangeEvent<HTMLInputElement>) => {
    const arquivosselecionados = e.target.files;
    aoMudar(arquivosselecionados);

    if (arquivosselecionados) {
      const arrayArquivos = Array.from(arquivosselecionados);
      const urls = arrayArquivos.map(arquivo => URL.createObjectURL(arquivo));
      setPrevias(urls);
    }
  };

  return (
    <Form.Group className="mb-3" controlId={controlId}>
      <Form.Label style={{ fontWeight: 'bold' }}>{label}</Form.Label>
      
      <div className="areaUploadFoto position-relative rounded mb-3" style={{ height: '100px', backgroundColor: '#f8f9fa', border: '2px dashed #ced4da', overflow: 'hidden' }}>
        <Form.Control
          type="file"
          accept="image/*"
          multiple
          name="fotos"
          onChange={manipularArquivos}
          style={{ height: '100%', cursor: 'pointer', opacity: 0, position: 'absolute', top: 0, left: 0, zIndex: 3, width: '100%' }}
        />
        <div className="d-flex align-items-center justify-content-center w-100 h-100" style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
          <span className="text-muted">Clique para adicionar fotos do Pet</span>
        </div>
      </div>

      <Row className="g-2">
        {previas.map((url, index) => (
          <Col key={index} xs={4} md={3}>
            <div style={{ height: '100px', overflow: 'hidden', borderRadius: '8px', border: '1px solid #dee2e6' }}>
              <img src={url} alt={`Previa ${index}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </Col>
        ))}
      </Row>
    </Form.Group>
  );
}