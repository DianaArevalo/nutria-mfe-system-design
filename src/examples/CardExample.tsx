import React from "react";
import { Card } from "../components/card";
import { Badge } from "../components/badge";
import { Button } from "../components/button";
import { Heading, MonoText, Text } from "../components/typography";

export const CardExample: React.FC = () => {
  return (
    <div
      style={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        maxWidth: "400px",
      }}
    >
      <Card>
        <h2 style={{ margin: 0 }}>Información del afiliado</h2>
        <p style={{ margin: 0 }}>Datos del afiliado...</p>
      </Card>

      <Card style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <Heading level="h3">Semanas cotizadas</Heading>
        <Text>Último período informado por el afiliado.</Text>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <MonoText>980 / 1.250</MonoText>
          <MonoText>78%</MonoText>
        </div>
      </Card>

      <Card
        style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <Heading level="h3">María Rodríguez</Heading>
          <Badge variant="success">Activo</Badge>
        </div>
        <Text>Empresa demo · 43 aportes registrados</Text>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          <Button variant="outline">Ver detalle</Button>
          <Button variant="primary">Editar afiliado</Button>
        </div>
      </Card>
    </div>
  );
};

export default CardExample;
