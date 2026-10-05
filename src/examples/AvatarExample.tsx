import React from 'react';
import { Avatar } from '../components/avatar';
import { Badge } from '../components/badge';
import { Card } from '../components/card';
import { Heading } from '../components/typography';

const AVATAR_IMAGE_SRC =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" fill="%230F5C52"/><circle cx="32" cy="25" r="11" fill="%23E4EEEA"/><path d="M11 61c0-11.6 9.4-21 21-21s21 9.4 21 21z" fill="%23E4EEEA"/></svg>';

export const AvatarExample: React.FC = () => {
  return (
    <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
        <Avatar src={AVATAR_IMAGE_SRC} alt="Oscar Tovar" name="Oscar Tovar" />
        <Avatar name="Oscar Tovar" />
      </div>

      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
        <Avatar size="sm" name="Oscar Tovar" />
        <Avatar size="md" name="Oscar Tovar" />
        <Avatar size="lg" name="Oscar Tovar" />
      </div>

      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
        <Avatar size="sm" name="Maria Rodriguez" />
        <Avatar size="sm" name="Pedro" />
        <Avatar size="sm" name="Maria Fernanda Rodriguez" />
        <Avatar size="sm" />
      </div>

      <Card style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <Avatar size="lg" name="Oscar Tovar" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          <Heading level="h3">Oscar Tovar</Heading>
          <div>
            <Badge variant="success">Activo</Badge>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AvatarExample;
