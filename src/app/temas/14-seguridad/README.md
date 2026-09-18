# 14 — Seguridad / transversales

Temas que cruzan Angular, browser y API al autenticar una Persona.

## Contenido

- **JWT** — access/refresh, Bearer, claims (`rol`)
- **CORS** — restricción del browser entre orígenes
- **XSS** — robo de token desde JS; Angular escapa por defecto
- **CSRF** — requests con cookies automáticas
- **Cookies vs JWT** — dónde guardar el token (memoria / storage / HttpOnly)

## Preguntas típicas

- ¿Por qué no conviene `localStorage` para el access token?
- Diferencia CORS vs autenticación
- SameSite cookies y CSRF
- Qué hace un interceptor de auth en Angular
