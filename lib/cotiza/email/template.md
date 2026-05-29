# Email template — Opera Studio cotización

Plain text para mandar el link de cotización al cliente. Copy-paste
directo a Brevo dashboard, Gmail, o cualquier cliente. Cuando
automaticemos vía Brevo API en una sesión futura, este mismo template
se renderea con los placeholders sustituidos.

---

## Convenciones de placeholders

| Placeholder | Qué va |
|---|---|
| `{{first_name}}` | Primer nombre del cliente (ej. "Verónica") |
| `{{brand}}` | Marca o empresa (ej. "REWIRE") |
| `{{number}}` | Número de coti (ej. "2026-003") |
| `{{slug}}` | Slug completo (ej. "2026-003-rewire-psicologia-4r2vp") |
| `{{base_amount}}` | Monto base sin símbolo (ej. "190") |
| `{{currency}}` | Moneda (ej. "USD") |
| `{{validity_days}}` | Días de vigencia (default `30`) |

## Cabeceras (mismas en ambas variantes)

```
From: Opera Studio <hola@operastud.io>
Reply-to: hola@operastud.io
Subject: Cotización {{number}} · {{brand}}
```

---

## Variante A · Coti CON add-ons

```
Hola {{first_name}},

Gracias por compartir el brief. Aquí está tu cotización:

→ https://operastud.io/cotiza/{{slug}}

Adentro vas a encontrar:

  [ 01 ]  Alcance del sitio base · ${{base_amount}} {{currency}}
  [ 02 ]  Add-ons opcionales que decides si activas
  [ 03 ]  Timeline, pagos y siguientes pasos

Vigencia {{validity_days}} días. Si tienes preguntas o quieres
ajustar algo, respondes este correo y agendamos un meet rápido.

operate. compose. measure.

Opera Studio
operastud.io
```

---

## Variante B · Coti SIN add-ons (scope completo)

```
Hola {{first_name}},

Gracias por compartir el brief. Aquí está tu cotización:

→ https://operastud.io/cotiza/{{slug}}

Adentro vas a encontrar:

  [ 01 ]  Alcance agrupado por operate · compose · measure
  [ 02 ]  Total, timeline y pagos
  [ 03 ]  Siguientes pasos y notas

Vigencia {{validity_days}} días. Si tienes preguntas o quieres
ajustar algo, respondes este correo y agendamos un meet rápido.

operate. compose. measure.

Opera Studio
operastud.io
```

---

## Reglas de voz

- Frase corta. La coti es el showpiece, el email solo lo entrega.
- Em-dashes `—` para pausas, NO guiones simples.
- `·` middle dot como separador.
- Sin "¡!", sin "Saludos cordiales", sin "Espero esto sea de su interés".
- "Tú", no "usted". Cercano sin ser informal.
- Sign-off siempre con el chant: `operate. compose. measure.`

## Para cuando automaticemos vía Brevo (sesión futura)

Generamos una versión HTML del template con:
- Header con wordmark `operastud.io` (signal-color period)
- Body en sans del sistema (Tahoma/Arial fallback)
- CTA pill estilo del nav del sitio
- Footer con redes y location

Por ahora, plain text rinde mejor para 1:1 leads. HTML aplica
cuando empecemos a mandar campaigns o newsletters.
