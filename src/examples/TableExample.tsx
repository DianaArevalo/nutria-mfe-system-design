import React from 'react';
import { Table } from '../components/table';
import { Badge } from '../components/badge';
import { Card } from '../components/card';
import { Heading, MonoText, Text } from '../components/typography';

type AfiliadoRow = {
  nombre: string;
  estado: 'success' | 'pending' | 'danger';
  aportes: string;
  ultimoPago: string;
};

const AFILIADOS: AfiliadoRow[] = [
  { nombre: 'Oscar Tovar', estado: 'success', aportes: '$850.000', ultimoPago: '30/09/2026' },
  { nombre: 'Maria Rodriguez', estado: 'pending', aportes: '$420.000', ultimoPago: '28/09/2026' },
  { nombre: 'Pedro Gomez', estado: 'success', aportes: '$1.200.000', ultimoPago: '01/10/2026' },
];

const ESTADO_LABEL: Record<AfiliadoRow['estado'], string> = {
  success: 'Activo',
  pending: 'Pendiente',
  danger: 'Inactivo',
};

export const TableExample: React.FC = () => {
  return (
    <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '640px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <Heading level="h3">Afiliados</Heading>
        <Text>Tabla compuesta con Table.Header, Table.Body, Table.Row, Table.Head y Table.Cell.</Text>

        <Table aria-label="Afiliados, estado y aportes">
          <Table.Header>
            <Table.Row>
              <Table.Head>Afiliado</Table.Head>
              <Table.Head>Estado</Table.Head>
              <Table.Head>Aportes</Table.Head>
              <Table.Head>Último pago</Table.Head>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {AFILIADOS.map((afiliado) => (
              <Table.Row key={afiliado.nombre}>
                <Table.Cell>{afiliado.nombre}</Table.Cell>
                <Table.Cell>
                  <Badge variant={afiliado.estado}>{ESTADO_LABEL[afiliado.estado]}</Badge>
                </Table.Cell>
                <Table.Cell>
                  <MonoText>{afiliado.aportes}</MonoText>
                </Table.Cell>
                <Table.Cell>
                  <MonoText>{afiliado.ultimoPago}</MonoText>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>

      <Card style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <Heading level="h3">Últimos aportes</Heading>

        <Table>
          <Table.Header>
            <Table.Row>
              <Table.Head>Concepto</Table.Head>
              <Table.Head>Estado</Table.Head>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span>Salario</span>
                  <Text as="span">Periodo 2026-09</Text>
                </div>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="success">Pagado</Badge>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span>Aporte extraordinario</span>
                  <Text as="span">Periodo 2026-08</Text>
                </div>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="pending">Pendiente</Badge>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Card>
    </div>
  );
};

export default TableExample;
