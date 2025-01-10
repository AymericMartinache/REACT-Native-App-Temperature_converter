# 🌡️ Temp Converter App - Convertisseur de Température °C / °F

Cette application **React Native** permet de convertir des températures entre **degrés Celsius (°C)** et **degrés Fahrenheit (°F)**. Grâce à une interface intuitive et un design dynamique, l'application change de fond en fonction de la température saisie : **un fond chaud 🔥** pour des températures élevées, et **un fond froid ❄️** pour des températures basses.

---

## 🛠️ **Fonctionnalités principales**

1. **Saisie de température :** L'utilisateur peut entrer une température dans l'unité de son choix (°C ou °F).
2. **Conversion dynamique :** La température est automatiquement convertie dans l'autre unité.
3. **Thème visuel :**
    - Fond **froid** pour des températures basses (représenté par une image de glace).
    - Fond **chaud** pour des températures élevées (représenté par une image de soleil).
4. **Switch entre unités :** Un bouton permet de basculer rapidement entre Celsius et Fahrenheit.

---

## 🧰 **Technologies utilisées**

### 📱 **React Native**

-   Création de l'application mobile pour iOS et Android.
-   Gestion des composants dynamiques et des styles.

### 🖼️ **Expo**

-   Plateforme utilisée pour le démarrage rapide et la gestion du projet.
-   Scripts prédéfinis pour exécuter l'application sur Android, iOS et Web.

### 🛠️ **Modules et bibliothèques**

-   **ImageBackground :** Pour afficher les fonds dynamiques selon la température.
-   **useState et useEffect (React Hooks) :** Gestion des états et des effets (comme les changements de fond).
-   **StyleSheet :** Définition des styles en natif.

---

## 🗂️ **Structure du projet**

| **Dossier/Fichier**          | **Description**                                                                                          |
| ---------------------------- | -------------------------------------------------------------------------------------------------------- |
| `/assets/img/`               | Contient les images utilisées pour les fonds (`hot.png` et `cold.png`).                                  |
| `/Components/InputTemp/`     | Composant pour la saisie de température (avec unité affichée).                                           |
| `/Components/TempDisplay/`   | Composant pour afficher la température convertie avec l'unité opposée.                                   |
| `/Components/ConvertButton/` | Bouton permettant de basculer entre Celsius et Fahrenheit.                                               |
| `/services/temp-service.js`  | Contient les fonctions de logique métier, comme la conversion des températures et la détection du froid. |
| `App.js`                     | Point d'entrée principal de l'application. Gère les états globaux et les interactions entre composants.  |
| `constant.js`                | Définit les constantes par défaut (température initiale, unités, etc.).                                  |
| `App.style.js`               | Contient les styles globaux de l'application.                                                            |

---

## 📚 **Comment l'application a été réalisée**

1. **Création du projet :**

    - L'application a été démarrée avec **Expo CLI**, permettant un setup rapide.
    - Les images et fichiers de configuration ont été placés dans des dossiers bien organisés.

2. **Développement des composants :**

    - Chaque fonctionnalité est isolée dans un composant réutilisable.
    - Exemple : `InputTemp` gère la saisie, et `TempDisplay` affiche la conversion.

3. **Logique de conversion :**

    - Les conversions entre Celsius et Fahrenheit sont définies dans le fichier `/services/temp-service.js`.
    - Une fonction détecte si la température est inférieure ou égale à 0°C (ou 32°F), et ajuste le fond en conséquence.

4. **Gestion dynamique des états :**

    - Utilisation de **React Hooks** pour gérer :
        - La température entrée (`inputValue`).
        - L'unité sélectionnée (`currentUnit`).
        - Le fond affiché (`currentBackground`).

5. **Design et styles :**
    - Les styles sont définis avec `StyleSheet` pour garder un aspect natif.
    - Les images sont utilisées comme arrière-plan grâce à `ImageBackground`.

---

## 🚀 **Comment exécuter le projet**

### Prérequis

-   **Node.js** et **npm** installés sur votre machine.
-   **Expo CLI** installé globalement :
    npm install -g expo-cli

### Étapes pour démarrer

1. Installez les dépendances :

```bash
  npm install
```

2. Lancez l'application :

```bash
    npm start
```

3. Ouvrez l'application sur un émulateur ou un appareil physique :
    - Appuyez sur **`a`** pour Android.
    - Appuyez sur **`i`** pour iOS.
    - Scannez le QR code avec l'application **Expo Go**.

---
