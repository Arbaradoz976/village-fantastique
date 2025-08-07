# Projet React Three.js - Modèles 3D avec Animations

Ce projet utilise React avec @react-three/fiber et @react-three/drei pour afficher des modèles 3D statiques et animés.

## Structure du Projet

```
src/
  components/
    Model.js          - Composant pour modèles statiques
    AnimatedModel.js  - Composant pour modèles animés
    Ground.js         - Composant sol
    Scene.js          - Scène principale
public/
  models/             - Dossier pour vos fichiers GLB
```

## Installation

```bash
npm install
```

## Utilisation

1. **Placez vos fichiers GLB dans `public/models/`**
   - Modèles statiques : `static-model-1.glb`, `static-model-2.glb`, etc.
   - Modèle animé : `animated-model.glb`

2. **Décommentez les composants dans `Scene.js`**
   - Remplacez les URLs par vos vrais fichiers GLB
   - Ajustez les positions et échelles selon vos besoins

3. **Démarrez le projet**
   ```bash
   npm start
   ```

## Composants

### Model (modèles statiques)
```javascript
<Model 
  url="/models/your-static-model.glb" 
  position={[x, y, z]} 
  scale={1}
/>
```

### AnimatedModel (modèles animés)
```javascript
<AnimatedModel 
  url="/models/your-animated-model.glb" 
  position={[x, y, z]} 
  scale={1}
/>
```

## Fonctionnalités

- ✅ Affichage de modèles 3D statiques
- ✅ Modèles animés avec contrôle par clic
- ✅ Sol avec ombres
- ✅ Éclairage et environnement
- ✅ Contrôles de caméra (zoom, rotation, panoramique)
- ✅ Interface utilisateur avec instructions

## Contrôles

- **Clic gauche + glisser** : Rotation de la caméra
- **Clic droit + glisser** : Panoramique
- **Molette** : Zoom
- **Clic sur modèle animé** : Démarre/arrête l'animation

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
"# village-fantastique" 
