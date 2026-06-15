<p align="center">
  <img src="public/logo.svg" alt="Langdom Contracts" width="280" />
</p>
<h1 align="center" style="border-bottom: none">
  Langdom Contracts
</h1>
<h3 align="center">
  Plataforma de assinatura digital do Langdom Instituto de Idiomas
</h3>
<p align="center">
  <em>API-first • Self-hosted • Embeddable • Contratos de matrícula digitais</em>
</p>

<p align="center">
  <strong>Produção:</strong> <a href="https://contracts.langdom.com.br">contracts.langdom.com.br</a>
</p>

---

## O que é

**Langdom Contracts** é a plataforma interna de assinatura digital do Langdom, usada para contratos de matrícula e outros documentos. É baseada em um fork self-hosted do DocuSeal, com branding e integração customizados para o ecossistema Langdom.

## Funcionalidades principais

- Builder de formulários PDF (WYSIWYG)
- 16+ tipos de campo (Assinatura, Data, Arquivo, Checkbox, Telefone, etc.)
- Múltiplos signatários por documento
- E-mails automatizados via SMTP
- Assinatura PDF com certificado
- Verificação de assinatura e trilha de auditoria
- Experiência mobile otimizada
- API REST e componentes embeddable
- API de templates HTML (usada pelo backend Langdom)

## Quick Start (desenvolvimento)

```sh
# Pré-requisitos: Ruby, Node.js, PostgreSQL, Redis
bin/setup
DATABASE_URL=postgresql://localhost/docuseal_development REDIS_URL=redis://localhost:6379 bin/rails s
```

### Docker Compose

```sh
sudo HOST=contracts.langdom.com.br docker compose up
```

## API

Autenticação via header `X-Auth-Token`. A API é compatível com o formato DocuSeal.

### Criar template a partir de HTML

```bash
curl -X POST https://contracts.langdom.com.br/api/templates/html \
  -H "X-Auth-Token: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "html": "<h1>Contrato</h1><p>{{Nome}}, concordo.</p><p>{{Assinatura|signature}}</p>",
    "name": "Contrato Matrícula"
  }'
```

### Enviar para assinatura

```bash
curl -X POST https://contracts.langdom.com.br/api/submissions \
  -H "X-Auth-Token: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "template_id": 1,
    "send_email": true,
    "submitters": [{ "role": "Aluno", "email": "aluno@example.com" }]
  }'
```

## Documentação interna

| Documento | Descrição |
| --------- | --------- |
| [Implementation Plan](docs/IMPLEMENTATION_PLAN.md) | Fases de implementação |
| [Embedding Guide](docs/EMBEDDING.md) | Arquitetura de embedding |
| [Stripe Payments](docs/STRIPE_PAYMENTS.md) | Integração Stripe |

## Paleta visual (Langdom)

| Token | Cor |
| ----- | --- |
| Primary | `#1E3A5F` |
| Primary Light | `#2563EB` |
| Surface | `#F8FAFC` |
| Card | `#FFFFFF` |

## Créditos

O motor de assinatura é baseado no projeto open-source [DocuSeal](https://github.com/docusealco/docuseal). O branding, integração e deploy são propriedade do **Langdom Instituto de Idiomas**.

## Licença

AGPLv3 com termos adicionais do upstream DocuSeal. Ver [LICENSE](LICENSE) e [LICENSE_ADDITIONAL_TERMS](LICENSE_ADDITIONAL_TERMS).
