export const colors = {
  // 1. Cores de Fundo (Baseadas no Fundo Principal Pistache)
  background: {
    splash: "#D7E7B3", // Fundo Principal da Splash screen (Verde Claro)
    screen: "#E2EDD5", // Fundo Principal do Jogo (Verde Pistache/Claro)
    card: "#F1F1F1", // Fundo de Cards, Modals e Inputs (Branco Suave)
    darkOverlay: "#00291D", // Fundo Escuro para Overlays ou Destaque
    cream: "#FFF5CE", // Fundo Creme/Amarelado para Detalhes de UI
  },

  // 2. Cores de Ação e Interatividade (Os Botões Principais)
  action: {
    primary: "#00B37E", // Botão Principal "ATACAR", "Login", "Confirmar" (Verde Esmeralda Vibrante)
    secondary: "#098DD7", // Botão/Elemento Secundário (Azul Vibrante)
    sky: "#53AAFA", // Elemento Interativo Claro (Azul Céu Claro)
    border: "#D9D9D9", // Borda Padrão para Inputs/Cards
  },

  // 3. Cores de Texto e Tipografia
  text: {
    primary: "#00291D", // Texto Principal (Preto Profundo)
    secondary: "#106364", // Texto Secundário / Placeholder (Teal Médio)
    muted: "#8A5140", // Texto Suave / Hint (Marrom Muted)
    white: "#FFFFFF", // Texto em fundos escuros
  },

  // 4. Cores de Feedback (Sucesso, Aviso, Perigo/Dano)
  feedback: {
    success: "#6E804C", // Sucesso Suave / Vitória (Verde Oliva Muted)
    warning: "#F5A623", // Amarelo Alerta/Aviso (F5A623)
    alert: "#F3764F", // Alerta Forte / Dano Principal (Coral)
    danger: "#DC0D28", // Perigo Crítico / Barra de Vida Baixa (Vermelho Profundo)
    errorLight: "#FF847C", // Erro/Alerta Suave (Coral Claro)
  },

  // 5. Cores Adicionais / Destaques
  element: {
    highlightOrange: "#FFAC3A", // Destaque Amarelo-Laranja (Usado em ícones/moedas)
    highlightYellow: "#ECB853", // Destaque Amarelo Mostarda
    vibrantRed: "#FF5117", // Vermelho/Laranja Forte para ícones de dano
  },

  // 6. Cores para Gradientes
  gradient: {
    start: "#098DD7", // Azul Principal
    end: "#106364", // Teal Médio
  },

  // 7. Overlay (Para Modals, Dimming)
  overlay: {
    DEFAULT: "rgba(0, 41, 29, 0.7)", // Baseado no darkOverlay com transparência
    light: "rgba(241, 241, 241, 0.6)", // Baseado no card com transparência
  },
};
