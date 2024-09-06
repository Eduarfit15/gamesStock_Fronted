import React, { useEffect } from 'react';

const loadParticlesScripts = () => {
  const scriptParticles = document.createElement('script');
  scriptParticles.src = '/ScriptStyles/particles.min.js';
  document.body.appendChild(scriptParticles);

  const scriptApp = document.createElement('script');
  scriptApp.src = '/ScriptStyles/app.js';
  document.body.appendChild(scriptApp);
};

const MyComponent = () => {
  useEffect(() => {
    loadParticlesScripts();

    // Limpia los scripts cuando el componente se desmonta
    return () => {
      // Remueve los scripts
      const particlesScript = document.querySelector('script[src="/ScriptStyles/particles.min.js"]');
      const appScript = document.querySelector('script[src="/ScriptStyles/app.js"]');
      
      if (particlesScript && particlesScript.parentNode) {
        particlesScript.parentNode.removeChild(particlesScript);
      }

      if (appScript && appScript.parentNode) {
        appScript.parentNode.removeChild(appScript);
      }
    };
  }, []); // El segundo argumento vacío [] asegura que el efecto se ejecute solo una vez después de que el componente se monta

  return (
    <div id="particles-js">
      {/* Contenido del componente */}
    </div>
  );
};

export default MyComponent;
