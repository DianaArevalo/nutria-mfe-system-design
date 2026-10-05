import React, { useState } from 'react';
import { Badge, type BadgeVariant } from '../components/badge';
import { Button } from '../components/button';
import { MonoText } from '../components/typography';

const STATUS_OPTIONS: Array<{ variant: BadgeVariant; label: string }> = [
  { variant: 'success', label: 'Activo' },
  { variant: 'pending', label: 'Pendiente' },
  { variant: 'danger', label: 'Inactivo' },
];

export const BadgeExample: React.FC = () => {
  const [status, setStatus] = useState<BadgeVariant>('success');
  const selected = STATUS_OPTIONS.find((option) => option.variant === status);

  return (
    <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <Badge variant="success">Activo</Badge>
        <Badge variant="pending">Pendiente</Badge>
        <Badge variant="danger">Inactivo</Badge>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {STATUS_OPTIONS.map((option) => (
          <Button
            key={option.variant}
            variant={option.variant === status ? 'primary' : 'outline'}
            onClick={() => setStatus(option.variant)}
          >
            {option.label}
          </Button>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
        <Badge variant={status}>{selected?.label}</Badge>
        <MonoText>variant="{status}"</MonoText>
      </div>
    </div>
  );
};

export default BadgeExample;
