# 2. Tokens e temas

## 2.1 Regra de nomenclatura

Usar três níveis: `primitivo → semântico → componente`.

```text
green.400 → action.primary → button.primary.background
```

Componentes devem consumir tokens semânticos. Valores hex diretos são permitidos apenas na declaração de primitivas.

## 2.2 Paleta primitiva

**Confirmadas:** `green-400 #00F5A0` e `violet-500 #6E44FF`. Os demais tons são **recomendações DS** derivadas para estados e contraste.

```css
:root {
  --green-50: #eafff7; --green-100: #c8ffea; --green-200: #91ffd5;
  --green-300: #4dffc0; --green-400: #00f5a0; --green-500: #00cc85;
  --green-600: #00a66d; --green-700: #087f57; --green-800: #0c6447; --green-900: #0b523c;
  --violet-50: #f4f1ff; --violet-100: #e9e2ff; --violet-200: #d4c7ff;
  --violet-300: #b69aff; --violet-400: #916cff; --violet-500: #6e44ff;
  --violet-600: #5b2ee8; --violet-700: #4a23c2; --violet-800: #3e219c; --violet-900: #351f7d;
  --neutral-0: #ffffff; --neutral-50: #f7f8fa; --neutral-100: #eef0f4;
  --neutral-200: #d9dde5; --neutral-300: #b8bfcc; --neutral-400: #929baa;
  --neutral-500: #707a89; --neutral-600: #535d6b; --neutral-700: #3c4552;
  --neutral-800: #252c36; --neutral-850: #1a2029; --neutral-900: #11161d;
  --neutral-950: #090d12; --neutral-1000: #05070a;
  --red-400: #ff647c; --red-500: #ef4762; --amber-400: #ffbd4a;
  --blue-400: #4db7ff; --cyan-400: #26d9e8;
}
```

## 2.3 Tokens semânticos dark-first

```css
:root, [data-theme="dark"] {
  color-scheme: dark;
  --bg-canvas: var(--neutral-950);
  --bg-subtle: var(--neutral-900);
  --bg-surface: var(--neutral-850);
  --bg-elevated: var(--neutral-800);
  --bg-inverse: var(--neutral-50);
  --text-primary: var(--neutral-50);
  --text-secondary: var(--neutral-300);
  --text-muted: var(--neutral-400);
  --text-inverse: var(--neutral-950);
  --text-link: var(--green-300);
  --border-subtle: rgb(255 255 255 / 0.08);
  --border-default: rgb(255 255 255 / 0.14);
  --border-strong: rgb(255 255 255 / 0.24);
  --action-primary: var(--green-400);
  --action-primary-hover: var(--green-300);
  --action-primary-active: var(--green-500);
  --action-secondary: var(--violet-500);
  --focus-ring: var(--green-300);
  --status-success: var(--green-400);
  --status-warning: var(--amber-400);
  --status-error: var(--red-400);
  --status-info: var(--blue-400);
  --selection-bg: rgb(0 245 160 / 0.28);
}
```

Tema claro é **recomendação de compatibilidade**, não requisito do MVP. Se implementado, deve ser completo, sem inverter imagens ou depender de transparências do dark:

```css
[data-theme="light"] {
  color-scheme: light;
  --bg-canvas: var(--neutral-50); --bg-subtle: var(--neutral-100);
  --bg-surface: var(--neutral-0); --bg-elevated: var(--neutral-0);
  --text-primary: var(--neutral-950); --text-secondary: var(--neutral-700);
  --text-muted: var(--neutral-600); --border-subtle: rgb(9 13 18 / .10);
  --border-default: rgb(9 13 18 / .16); --border-strong: rgb(9 13 18 / .28);
  --text-link: var(--violet-700); --focus-ring: var(--violet-500);
}
```

## 2.4 Estados

- `hover`: mudança perceptível sem depender só de cor; pode combinar cor e elevação.
- `focus-visible`: ring de 2 px + offset de 2 px, nunca removido.
- `active`: redução sutil de brilho/elevação; escala mínima `0.99` apenas se não mover layout.
- `disabled`: contraste reduzido, cursor apropriado e bloqueio real; tooltip explica motivo quando necessário.
- `loading`: preserva largura, anuncia estado e impede submissão duplicada.
- `success/error`: ícone + texto + cor; nunca apenas cor.

## 2.5 Gradientes

```css
--gradient-brand: linear-gradient(135deg, #00f5a0 0%, #6e44ff 100%);
--gradient-brand-soft: linear-gradient(135deg, rgb(0 245 160 / .16), rgb(110 68 255 / .18));
--gradient-hero: radial-gradient(circle at 20% 10%, rgb(0 245 160 / .16), transparent 38%), radial-gradient(circle at 80% 20%, rgb(110 68 255 / .22), transparent 42%);
--gradient-fade: linear-gradient(180deg, transparent, var(--bg-canvas));
```

Não usar gradiente em texto corrido. Texto em gradiente é reservado a uma curta expressão de destaque e precisa de fallback sólido.

## 2.6 Spacing, sizing, radius e bordas

Base 4 px: `0, 1, 2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120, 160`.

- altura de controles: `sm 36`, `md 44`, `lg 52` px;
- alvo de toque mínimo: 44×44 px;
- ícones: 16/20/24/32 px;
- avatar: 24/32/40/48/64 px;
- radius: `sm 6`, `md 10`, `lg 16`, `xl 24`, `pill 9999` px;
- borda padrão: 1 px; forte/foco interno excepcional: 2 px.

## 2.7 Sombras e glows

```css
--shadow-sm: 0 1px 2px rgb(0 0 0 / .28);
--shadow-md: 0 8px 24px rgb(0 0 0 / .28);
--shadow-lg: 0 20px 60px rgb(0 0 0 / .38);
--glow-green: 0 0 32px rgb(0 245 160 / .18);
--glow-violet: 0 0 40px rgb(110 68 255 / .22);
```

Glows não devem reduzir contraste, substituir foco nem aparecer em todos os cards.

## 2.8 Mapeamento Tailwind sugerido

```ts
// tailwind.config.ts — adapte à versão instalada
export default {
  theme: {
    extend: {
      colors: {
        canvas: 'var(--bg-canvas)', surface: 'var(--bg-surface)',
        elevated: 'var(--bg-elevated)', foreground: 'var(--text-primary)',
        muted: 'var(--text-muted)', border: 'var(--border-default)',
        primary: 'var(--action-primary)', secondary: 'var(--action-secondary)',
        success: 'var(--status-success)', warning: 'var(--status-warning)',
        destructive: 'var(--status-error)', info: 'var(--status-info)',
      },
      fontFamily: { display: ['var(--font-display)'], sans: ['var(--font-sans)'] },
      borderRadius: { sm: '6px', md: '10px', lg: '16px', xl: '24px' },
      maxWidth: { content: '1280px', prose: '720px' },
    },
  },
} satisfies Config;
```

