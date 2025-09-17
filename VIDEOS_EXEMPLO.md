# Como Adicionar Mais Vídeos do YouTube

## 📹 Estrutura do Array de Vídeos

Para adicionar novos vídeos, edite o array `videos` no arquivo `src/App.jsx`:

```jsx
const videos = [
  { 
    id: 1, 
    titulo: "Apresentação do Programa", 
    thumbnail: heroVideo, 
    duracao: "3:45", 
    youtubeId: "WoGkyUBBZ7g" 
  },
  { 
    id: 2, 
    titulo: "Depoimento Ana Clara", 
    thumbnail: antesDepois1, 
    duracao: "2:30", 
    youtubeId: "WoGkyUBBZ7g" 
  },
  // Adicione novos vídeos aqui
  { 
    id: 5, 
    titulo: "Novo Vídeo Tutorial", 
    thumbnail: novaImagem, 
    duracao: "4:20", 
    youtubeId: "SEU_ID_DO_YOUTUBE_AQUI" 
  }
]
```

## 🔗 Como Obter o ID do YouTube

### Opção 1: Da URL do Vídeo
- URL: `https://www.youtube.com/watch?v=WoGkyUBBZ7g`
- ID: `WoGkyUBBZ7g`

### Opção 2: Da URL Compartilhada
- URL: `https://youtu.be/WoGkyUBBZ7g`
- ID: `WoGkyUBBZ7g`

### Opção 3: Da URL de Incorporação
- URL: `https://www.youtube.com/embed/WoGkyUBBZ7g`
- ID: `WoGkyUBBZ7g`

## 🖼️ Como Adicionar Novas Thumbnails

1. **Adicione a imagem** na pasta `src/assets/`
2. **Importe no topo do arquivo**:
```jsx
import novaImagem from './assets/nova_imagem.png'
```
3. **Use no array de vídeos**:
```jsx
thumbnail: novaImagem
```

## 🎯 Exemplo Completo

```jsx
// Import da nova imagem
import novoVideoThumbnail from './assets/novo_video_thumbnail.png'

// Array de vídeos atualizado
const videos = [
  { 
    id: 1, 
    titulo: "Apresentação do Programa", 
    thumbnail: heroVideo, 
    duracao: "3:45", 
    youtubeId: "WoGkyUBBZ7g" 
  },
  { 
    id: 2, 
    titulo: "Depoimento Ana Clara", 
    thumbnail: antesDepois1, 
    duracao: "2:30", 
    youtubeId: "WoGkyUBBZ7g" 
  },
  { 
    id: 3, 
    titulo: "Resultados em 120 dias", 
    thumbnail: antesDepois2, 
    duracao: "4:15", 
    youtubeId: "WoGkyUBBZ7g" 
  },
  { 
    id: 4, 
    titulo: "Técnica Exclusiva", 
    thumbnail: antesDepois3, 
    duracao: "5:20", 
    youtubeId: "WoGkyUBBZ7g" 
  },
  // NOVO VÍDEO
  { 
    id: 5, 
    titulo: "Tutorial Completo Crioharmonização", 
    thumbnail: novoVideoThumbnail, 
    duracao: "8:30", 
    youtubeId: "NOVO_ID_DO_YOUTUBE" 
  }
]
```

## ⚙️ Configurações do Player

O player do YouTube já está configurado com as seguintes opções:

- `autoplay=1` - Vídeo inicia automaticamente
- `rel=0` - Não mostra vídeos relacionados
- `modestbranding=1` - Logo do YouTube discreto
- `showinfo=0` - Não mostra informações do vídeo
- `controls=1` - Mostra controles de reprodução

## 🚀 Funcionalidades Implementadas

✅ **Modal responsivo** que se adapta a diferentes tamanhos de tela  
✅ **Autoplay** do vídeo quando o modal é aberto  
✅ **Controles de reprodução** completos  
✅ **Fechamento do modal** com botão X  
✅ **Reset do player** quando o modal é fechado/reaberto  
✅ **Suporte a múltiplos vídeos** na lista  
✅ **Thumbnails personalizados** para cada vídeo  

## 📱 Responsividade

O modal é totalmente responsivo e funciona em:
- 📱 Dispositivos móveis
- 💻 Tablets
- 🖥️ Desktops
- 🖥️ Telas grandes

## 🔧 Personalização

Você pode personalizar:
- **Cores** do modal
- **Tamanho** do player
- **Animações** de abertura/fechamento
- **Estilo** dos botões
- **Layout** das informações do vídeo 