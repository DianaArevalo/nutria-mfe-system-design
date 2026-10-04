import React from 'react';
import { Heading, Text, MonoText } from '../components/typography';

export const TypographyExample: React.FC = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <Heading level="h1">Afiliados</Heading>
      <Heading level="h2">Semanas cotizadas</Heading>
      <Heading level="h3">Información del afiliado</Heading>
      <Text>Información general del afiliado.</Text>
      <MonoText>43.221.098</MonoText>
      <div style={{ marginTop: '1rem' }}>
        <MonoText>980 / 1.250</MonoText>
      </div>
    </div>
  );
};

export default TypographyExample;
