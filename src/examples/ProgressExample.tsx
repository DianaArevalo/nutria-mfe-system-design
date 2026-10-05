import React, { useState } from "react";
import { Progress } from "../components/progress";
import { Badge } from "../components/badge";
import { Button } from "../components/button";
import { Card } from "../components/card";
import { Heading, MonoText, Text } from "../components/typography";

export const ProgressExample: React.FC = () => {
  const [value, setValue] = useState(60);

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
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <Progress value={0} />
        <Progress value={25} />
        <Progress value={50} />
        <Progress value={75} />
        <Progress value={100} />
      </div>

      <Progress value={65} label="Progreso de afiliación" showValue />

      <Card
        style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
      >
        <Text>
          El valor 60 es estado de este ejemplo. El porcentaje que muestra
          Progress es un valor derivado de las props value y max.
        </Text>
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="outline"
            onClick={() => setValue((prev) => Math.max(0, prev - 10))}
          >
            -10
          </Button>
          <Button
            variant="outline"
            onClick={() => setValue((prev) => Math.min(100, prev + 10))}
          >
            +10
          </Button>
          <MonoText>value={value}</MonoText>
        </div>
        <Progress value={value} label="Progreso de afiliación" showValue />
      </Card>

      <Card
        style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
      >
        <Heading level="h3">Estado de afiliación</Heading>
        <Progress value={65} label="Progreso de registro" showValue />
        <div>
          <Badge variant="pending">En proceso</Badge>
        </div>
      </Card>
    </div>
  );
};

export default ProgressExample;
