# 13 — Signal Forms

Formularios basados en signals (`@angular/forms/signals`).

## Ejemplo con Persona

Modelo `signal<PersonaFormModel>` → `form()` → inputs con `[formField]`.

## vs Reactive Forms (tema 07)

| Reactive Forms | Signal Forms |
|----------------|--------------|
| `FormBuilder` / `FormGroup` | `signal` + `form()` |
| `formControlName` | `[formField]` |
| `form.value` / `getRawValue()` | `model()` / `field().value()` |
| `Validators.required` | `required(schemaPath.campo)` en el schema |

## Preguntas típicas

- Qué es un `FieldTree`
- Cómo leer `valid()` / `errors()` / `touched()`
- Cuándo preferir Signal Forms vs Reactive Forms
