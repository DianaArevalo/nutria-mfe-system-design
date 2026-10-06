import React from "react";
import { Breadcrumb } from "../components/breadcrumb";
import { Card } from "../components/card";
import { Heading, Text } from "../components/typography";

export const BreadcrumbExample: React.FC = () => {
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
        <Heading level="h3">Breadcrumb simple</Heading>

        <Breadcrumb>
          <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
          <Breadcrumb.Item href="/afiliados">Afiliados</Breadcrumb.Item>
          <Breadcrumb.Item current>Detalle del afiliado</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <Heading level="h3">Varios niveles</Heading>

        <Breadcrumb>
          <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
          <Breadcrumb.Item href="/empresas">Empresas</Breadcrumb.Item>
          <Breadcrumb.Item href="/empresas/nutria">
            NutriaDemo S.A.
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/afiliados">Afiliados</Breadcrumb.Item>
          <Breadcrumb.Item href="/afiliados/oscar-tovar">Ficha</Breadcrumb.Item>
          <Breadcrumb.Item current>Semanas cotizadas</Breadcrumb.Item>
        </Breadcrumb>

        <Text>
          Los href son rutas de ejemplo: Breadcrumb no implementa routing.
        </Text>
      </div>

      <Card
        style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
      >
        <Breadcrumb>
          <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
          <Breadcrumb.Item href="/aportes">Aportes</Breadcrumb.Item>
          <Breadcrumb.Item current>Detalle del aporte</Breadcrumb.Item>
        </Breadcrumb>

        <Heading level="h3">Detalle del aporte</Heading>
      </Card>
    </div>
  );
};

export default BreadcrumbExample;
