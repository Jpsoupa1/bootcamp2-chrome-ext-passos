# Lembrete de Pausa - Extensão para Chrome (Manifest V3)

![Licença MIT](https://img.shields.io/badge/Licença-MIT-blue.svg)

Projeto desenvolvido para o **Desafio de Entrega Inicial do Bootcamp II**. Trata-se de uma extensão simples para o Google Chrome que ajuda os usuários a praticarem a técnica Pomodoro, criando um lembrete de pausa após 25 minutos de trabalho focado.

**[Acesse a página do projeto aqui!]([LINK PARA SUA PÁGINA DO GITHUB PAGES])**

## 🚀 Em Ação

A interface da extensão é minimalista, focada em uma única ação: iniciar o timer.

![Screenshot da extensão Lembrete de Pausa](docs/screenshot-popup.png)

## ✨ Funcionalidades

-   ⏰ **Timer Pomodoro:** Inicie um timer de 25 minutos com um único clique no popup.
-   🔔 **Notificações Nativas:** Receba um alerta amigável no desktop quando o tempo acabar, sugerindo uma pausa.
-   🧘‍♀️ **Interface Minimalista:** Foco total na produtividade, sem distrações.
-   🚀 **Tecnologia Moderna:** Construída utilizando a mais recente especificação do Google, o Manifest V3.

## 🛠️ Tecnologias Utilizadas

-   **Manifest V3:** A mais recente especificação para extensões do Chrome, com foco em segurança e performance.
-   **HTML5** e **CSS3:** Para a estrutura e o estilo visual do popup.
-   **JavaScript (ES6+):** Para toda a lógica da extensão, manipulação de eventos e comunicação interna.
-   **Chrome APIs:** Utilização das APIs `chrome.alarms` para agendar o timer e `chrome.notifications` para exibir alertas ao usuário.

## 📦 Instalação e Uso (Modo Desenvolvedor)

Para instalar e testar a extensão localmente, siga os passos abaixo:

1.  Vá para a seção de **[Releases]([LINK PARA A SEÇÃO DE RELEASES DO SEU REPOSITÓRIO])** deste repositório.
2.  Baixe o arquivo `.zip` da versão mais recente (ex: `Lembrete-de-Pausa-v1.0.0.zip`).
3.  Descompacte este arquivo em uma pasta de sua preferência no seu computador.
4.  Abra o Google Chrome e navegue até a página de extensões: `chrome://extensions`.
5.  No canto superior direito, ative o **"Modo de desenvolvedor"** (Developer mode).
6.  Clique no botão **"Carregar sem compactação"** (Load unpacked).
7.  Selecione a pasta que você descompactou no passo 3.
8.  Pronto! A extensão será instalada e o ícone aparecerá na barra de ferramentas do seu navegador.

## 📂 Estrutura do Projeto

O código-fonte está organizado da seguinte maneira para facilitar a manutenção e escalabilidade:

```
/
├── icons/                # Ícones da extensão em diferentes tamanhos (16, 32, 48, 128)
├── src/                  # Código-fonte principal da extensão
│   ├── background/
│   │   └── service-worker.js # Lógica de fundo, criação de alarmes e notificações
│   └── popup/
│       ├── popup.html    # Estrutura HTML da interface do popup
│       ├── popup.css     # Estilos visuais do popup
│       └── popup.js      # Lógica de interação do popup (eventos de clique)
├── docs/                 # Arquivos para a página de apresentação no GitHub Pages
│   ├── index.html        # Página principal do projeto
│   ├── style.css         # Estilo da página
│   └── screenshot-*.png  # Imagens de demonstração
├── manifest.json         # O coração da extensão: define metadados, permissões e arquivos
└── README.md             # Este arquivo de documentação
```

## 📜 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Feito com ❤️ por **[SEU NOME OU USUÁRIO GITHUB]**.