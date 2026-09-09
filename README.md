# Move+ Estúdio de Pilates — Landing Page (exemplo · Plano Profissional)

Projeto fictício de portfólio, construído para demonstrar exatamente o que está incluso no **Plano Profissional** (nível intermediário) da proposta comercial:

| Item do Plano Profissional | Onde aparece neste projeto |
|---|---|
| Copy revisada, direcionada a um público específico | Textos falam diretamente com quem sente dor nas costas por rotina sentada — não é texto genérico de "academia" |
| Integração com WhatsApp | Todos os CTAs (`Agendar aula grátis`, botão flutuante, cards de plano) usam links `wa.me` com mensagem pré-preenchida |
| Pixel de rastreamento (Meta/Google) | Placeholders comentados em `index.html` (dentro do `<head>`) e em `assets/js/script.js` (evento de clique no WhatsApp), prontos para receber o Pixel ID real do cliente |
| Otimização de velocidade | CSS e JS externos e enxutos, sem imagens pesadas — a peça visual de destaque é feita 100% em CSS (os "anéis de respiração" no hero) |
| 3 rodadas de ajuste | Não é código — é parte do processo comercial, descrito na proposta e no contrato |

## Estrutura

```
moveplus-pilates-landing-page/
├── index.html
├── assets/
│   ├── css/styles.css   # tokens de cor/tipografia no topo do arquivo (:root)
│   └── js/script.js     # accordion do FAQ + ponto de integração de eventos de conversão
└── README.md
```

## Como adaptar para um cliente real

1. Troque o número de WhatsApp `5511999998888` em todos os links `wa.me` de `index.html` (são 4 ocorrências) pelo número real do cliente.
2. Substitua os placeholders de Meta Pixel / Google Tag no `<head>` de `index.html` pelo snippet real fornecido pelo cliente.
3. Ajuste os textos de `index.html` e as variáveis de cor em `assets/css/styles.css` (`:root`) para a identidade do novo negócio.
4. Se o cliente tiver fotos profissionais, troque o bloco `.portrait-frame` (hoje um gradiente CSS) por uma tag `<img>`.

## Publicar

Mesmo fluxo dos demais projetos: Vercel ou Netlify (arraste a pasta ou conecte um repositório) para deploy gratuito com HTTPS.
