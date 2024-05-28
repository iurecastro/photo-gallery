// Importa a biblioteca React
import React from 'react';

// Importa a função createRoot da biblioteca react-dom/client
import { createRoot } from 'react-dom/client';

// Importa o componente principal da aplicação
import App from './App';

// Importa a função defineCustomElements do pacote @ionic/pwa-elements/loader
import { defineCustomElements } from '@ionic/pwa-elements/loader';

// Seleciona o elemento com o ID 'root' no documento HTML
const container = document.getElementById('root');

// Cria a raiz do React a partir do contêiner selecionado
const root = createRoot(container!);

// Define os elementos customizados do Ionic PWA
defineCustomElements(window);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
