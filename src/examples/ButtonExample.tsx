import React from 'react';
import { Button } from '../components/button';

export const ButtonExample: React.FC = () => {
  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <Button variant="primary" onClick={handleClick}>
          Editar afiliado
        </Button>
        <Button variant="outline" onClick={handleClick}>
          Ver historial laboral
        </Button>
        <Button variant="danger-outline" onClick={handleClick}>
          Desactivar
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <Button variant="primary" disabled>
          Disabled Primary
        </Button>
        <Button variant="outline" disabled>
          Disabled Outline
        </Button>
        <Button variant="danger-outline" disabled>
          Disabled Danger
        </Button>
      </div>
      <div>
        <Button variant="primary" className="custom-class" type="button">
          With custom class
        </Button>
      </div>
    </div>
  );
};

export default ButtonExample;