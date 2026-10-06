import React, { useState } from "react";
import { Input } from "../components/input";
import { Badge } from "../components/badge";
import { Card } from "../components/card";
import { Table } from "../components/table";
import { Heading, MonoText, Text } from "../components/typography";

type Afiliado = {
  nombre: string;
  estado: "success" | "pending";
  aportes: string;
  ultimoPago: string;
};

const AFILIADOS: Afiliado[] = [
  {
    nombre: "Oscar Tovar",
    estado: "success",
    aportes: "$850.000",
    ultimoPago: "30/09/2026",
  },
  {
    nombre: "Maria Rodriguez",
    estado: "pending",
    aportes: "$420.000",
    ultimoPago: "28/09/2026",
  },
  {
    nombre: "Pedro Gomez",
    estado: "success",
    aportes: "$1.200.000",
    ultimoPago: "01/10/2026",
  },
  {
    nombre: "Ana Martinez",
    estado: "success",
    aportes: "$310.000",
    ultimoPago: "25/09/2026",
  },
];

const ESTADO_LABEL: Record<Afiliado["estado"], string> = {
  success: "Activo",
  pending: "Pendiente",
};

export const InputExample: React.FC = () => {
  const [search, setSearch] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const query = search.trim().toLowerCase();
  const filteredAfiliados = query
    ? AFILIADOS.filter((afiliado) =>
        afiliado.nombre.toLowerCase().includes(query),
      )
    : AFILIADOS;

  return (
    <div
      style={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        maxWidth: "640px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <Heading level="h3">Buscar afiliado</Heading>
        <Text>
          El texto escrito vive en el estado de este ejemplo. Input es un input
          controlado.
        </Text>

        <label
          htmlFor="buscar-afiliado"
          style={{
            fontSize: "0.8125rem",
            color: "var(--nutria-color-ink-soft)",
          }}
        >
          Nombre del afiliado
        </label>

        <Input
          id="buscar-afiliado"
          name="afiliado"
          type="search"
          value={search}
          onChange={handleChange}
          placeholder="Buscar afiliado"
          autoComplete="off"
        />

        <MonoText>
          {filteredAfiliados.length} de {AFILIADOS.length} afiliados
        </MonoText>
      </div>

      <Card
        style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
      >
        {filteredAfiliados.length > 0 ? (
          <Table aria-label="Afiliados filtrados">
            <Table.Header>
              <Table.Row>
                <Table.Head>Afiliado</Table.Head>
                <Table.Head>Estado</Table.Head>
                <Table.Head>Aportes</Table.Head>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {filteredAfiliados.map((afiliado) => (
                <Table.Row key={afiliado.nombre}>
                  <Table.Cell>{afiliado.nombre}</Table.Cell>
                  <Table.Cell>
                    <Badge variant={afiliado.estado}>
                      {ESTADO_LABEL[afiliado.estado]}
                    </Badge>
                  </Table.Cell>
                  <Table.Cell>
                    <MonoText>{afiliado.aportes}</MonoText>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        ) : (
          <Text>Sin resultados para “{search}”.</Text>
        )}
      </Card>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <Heading level="h3">Estados</Heading>
        <Input disabled placeholder="Búsqueda no disponible" />
        <Input aria-invalid="true" defaultValue="R-123" readOnly />
      </div>
    </div>
  );
};

export default InputExample;
