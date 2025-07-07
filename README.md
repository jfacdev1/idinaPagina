# 🎮 IDINA - Landing Page

<div align="center">
  <img src="https://via.placeholder.com/200x80/00d4ff/ffffff?text=IDINA" alt="IDINA Logo" />
  
  **City Survival: Language Quest**
  
  *El único juego donde aprender idiomas es cuestión de supervivencia*
  
  [![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
  [![Version](https://img.shields.io/badge/Version-1.0.0-green.svg)](package.json)
  [![Status](https://img.shields.io/badge/Status-Beta-orange.svg)](https://github.com/user/repo)
</div>

---

## 🚀 Descripción del Proyecto

Landing page oficial para **IDINA**, el videojuego 3D revolucionario que combina supervivencia urbana con aprendizaje de idiomas. Los jugadores son transportados a ciudades extranjeras donde deben aprender el idioma local para sobrevivir, progresar y escapar.

### ✨ Características Principales
- 🌆 **4 Ciudades Únicas**: Neo-Tokyo, Barceloneta, Little London, Café Paris
- 🎤 **Reconocimiento de Voz**: Habla real con NPCs
- 🎯 **Sistema Gamificado**: Logros, rankings y progreso social
- 🌍 **Mundo 3D Inmersivo**: Ciudades fotorrealistas y culturalmente auténticas

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Versión | Propósito |
|-----------|---------|-----------|
| HTML5 | Latest | Estructura semántica |
| CSS3 | Latest | Estilos y animaciones |
| JavaScript | ES6+ | Interactividad |
| Google Fonts | - | Tipografías (Orbitron, Inter) |

---

## 📁 Estructura del Proyecto

```
idina-landing-page/
├── 📄 index.html              # Página principal
├── 📁 css/
│   ├── 🎨 style.css           # Estilos principales
│   ├── 📱 responsive.css      # Media queries
│   └── ✨ animations.css      # Animaciones CSS
├── 📁 js/
│   ├── ⚡ main.js             # Funcionalidad principal
│   ├── 🎠 slider.js           # Carrusel de ciudades
│   └── 📊 animations.js       # Animaciones JavaScript
├── 📁 assets/
│   ├── 🖼️ images/            # Imágenes y gráficos
│   ├── 🎵 audio/             # Efectos de sonido
│   └── 📹 videos/            # Videos promocionales
├── 📄 README.md              # Este archivo
└── 📄 LICENSE                # Licencia del proyecto
```

---

## 🚀 Instalación y Uso

### Opción 1: Descarga Directa
```bash
# Clona el repositorio
git clone https://github.com/tu-usuario/idina-landing-page.git

# Navega al directorio
cd idina-landing-page

# Abre en tu navegador
open index.html
```

### Opción 2: Servidor Local
```bash
# Usando Python (recomendado)
python -m http.server 8000

# Usando Node.js
npx http-server

# Usando PHP
php -S localhost:8000
```

### Opción 3: Live Server (VS Code)
1. Instala la extensión **Live Server**
2. Haz clic derecho en `index.html`
3. Selecciona "Open with Live Server"

---

## 🎨 Personalización

### Colores del Tema
```css
:root {
  --primary-color: #00d4ff;    /* Azul cyberpunk */
  --secondary-color: #ff6b35;  /* Naranja gaming */
  --accent-color: #b942f5;     /* Púrpura futurista */
  --dark-bg: #0a0a0a;          /* Negro profundo */
  --dark-surface: #1a1a1a;     /* Gris oscuro */
}
```

### Tipografías
- **Títulos**: Orbitron (Futurista gaming)
- **Texto**: Inter (Moderna y legible)

### Configuración de Animaciones
```javascript
// Velocidad de animaciones
const ANIMATION_SPEED = 1000; // milisegundos

// Delay entre elementos
const STAGGER_DELAY = 200; // milisegundos
```

---

## 📱 Responsive Design

| Dispositivo | Breakpoint | Características |
|-------------|------------|-----------------|
| 📱 Móvil | < 768px | Menú hamburguesa, stack vertical |
| 📱 Tablet | 768px - 1024px | Grid adaptativo, navegación completa |
| 💻 Desktop | > 1024px | Experiencia completa, efectos avanzados |

---

## ⚡ Funcionalidades

### 🔧 JavaScript Modules

#### 1. Navegación Suave
```javascript
// Scroll suave a secciones
smoothScroll('#features', 1000);
```

#### 2. Carrusel de Ciudades
```javascript
// Auto-play cada 5 segundos
const slider = new CitySlider({
  autoplay: true,
  interval: 5000
});
```

#### 3. Animaciones de Entrada
```javascript
// Observer para animaciones
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
});
```

---

## 🎯 Secciones de la Landing Page

### 1. 🦸 Hero Section
- Video de fondo o imagen impactante
- Título principal con efecto typing
- CTA principal: "JUGAR GRATIS AHORA"

### 2. 🎮 Game Features
- **Supervivencia Lingüística**: Barra de comprensión
- **Reconocimiento de Voz**: Interacción real
- **Mundo 3D**: Ciudades inmersivas
- **Progreso Gamificado**: Logros y rankings

### 3. 🌍 Available Cities
- **Neo-Tokyo** (Japonés) - Cyberpunk
- **Barceloneta** (Español) - Costera
- **Little London** (Inglés) - Victoriana
- **Café Paris** (Francés) - Bohemia

### 4. 💰 Pricing Plans
- **GRATIS**: 2 horas diarias, 1 ciudad
- **PREMIUM**: $9.99/mes, acceso ilimitado
- **SEASON PASS**: $19.99/temporada, exclusivo

---

## 🔧 Optimización y Performance

### SEO Básico
```html
<!-- Meta tags esenciales -->
<meta name="description" content="IDINA - Juego 3D de supervivencia lingüística">
<meta name="keywords" content="juego, idiomas, 3D, supervivencia, aprendizaje">
<meta name="author" content="Idiomas Naturales Gaming S.A">
```

### Performance Tips
- ✅ **Lazy Loading**: Imágenes cargadas bajo demanda
- ✅ **Minificación**: CSS y JS comprimidos
- ✅ **Optimización**: Fuentes y assets comprimidos
- ✅ **Caching**: Headers apropiados para cache

---

## 🌐 Browsers Compatibles

| Browser | Versión Mínima | Status |
|---------|---------------|--------|
| Chrome | 60+ | ✅ Full Support |
| Firefox | 55+ | ✅ Full Support |
| Safari | 12+ | ✅ Full Support |
| Edge | 79+ | ✅ Full Support |
| Opera | 47+ | ✅ Full Support |

---

## 📈 Analytics y Tracking

### Google Analytics 4
```javascript
// Eventos de conversión
gtag('event', 'click_cta', {
  'event_category': 'engagement',
  'event_label': 'hero_button'
});
```

### Métricas Clave
- **Bounce Rate**: < 40%
- **Time on Page**: > 3 minutos
- **Conversion Rate**: > 5%
- **Mobile Usage**: ~60%

---

## 🚀 Deployment

### GitHub Pages
```bash
# Push a rama gh-pages
git checkout -b gh-pages
git push origin gh-pages
```

### Netlify
```bash
# Deploy directo desde repositorio
# Configuración automática
```

### Vercel
```bash
# Deploy con Vercel CLI
npx vercel
```

---

## 🤝 Contribuciones

¿Quieres contribuir? ¡Excelente! Sigue estos pasos:

1. **Fork** el repositorio
2. **Crea** una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. **Commit** tus cambios (`git commit -m 'Añadir nueva característica'`)
4. **Push** a la rama (`git push origin feature/nueva-caracteristica`)
5. **Abre** un Pull Request

### 📝 Guías de Contribución
- Usa **commits semánticos**: `feat:`, `fix:`, `docs:`, `style:`
- Añade **tests** si es posible
- Actualiza la **documentación**
- Sigue el **code style** existente

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 👥 Equipo de Desarrollo

### Desarrolladores Principales
- **Juan Fernando Araujo Castellanos** - *Game Developer*
- **Genesis Nathaly Rivas Herrera** - *Game Designer*

### Empresa
**Idiomas Naturales Gaming S.A**  
*Revolucionando el aprendizaje de idiomas a través del gaming*

---

## 📞 Contacto y Soporte

### 🌐 Links Oficiales
- **Website**: [www.idina-game.com](https://www.idina-game.com)
- **Discord**: [discord.gg/idina](https://discord.gg/idina)
- **Twitter**: [@IDINAGame](https://twitter.com/IDINAGame)
- **YouTube**: [IDINA Gaming](https://youtube.com/IDINAGaming)

### 📧 Contacto
- **Email**: support@idina-game.com
- **Business**: business@idina-game.com
- **Press**: press@idina-game.com

---

## 🎮 ¡Únete a la Revolución!

*"No solo aprendes un idioma, vives una aventura que nunca olvidarás"*

<div align="center">
  
  [🎮 JUGAR GRATIS](https://www.idina-game.com/play) | [📱 DESCARGAR](https://www.idina-game.com/download) | [💬 COMMUNITY](https://discord.gg/idina)
  
  **¡El futuro del aprendizaje de idiomas está aquí!**
  
</div>

---

<div align="center">
  <sub>Built with ❤️ by the IDINA Team</sub>
</div>