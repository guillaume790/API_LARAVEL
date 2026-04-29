# API_LARAVEL

Objectifs : Créer une API Laravel qui gère des tâches, et une interface JavaScript qui les affiche et les modifie.

#  Résumé du travail réalisé — API Todo List (Laravel)

## 1. Création du projet Laravel

## 2. Branche `api-test`

Première branche exploratoire pour valider les concepts de base d'une API Laravel.

* **Routes API** : Configuration des routes dans `routes/api.php` avec préfixe `/api`.
* **Controller** : Création d'un `TestController` avec méthodes `index()` et `show($id)`.
* **Retour JSON** : Implémentation de réponses JSON simples pour tester les endpoints.
* **Validation** : Tests de validation basique des entrées.
* **Thunder Client** : Tous les endpoints ont été testés et validés avec Thunder Client (collection associée dans le projet).
* **Résultat** : API fonctionnelle, prête pour l'extension.

## 3. Branche `taches-crud` (développement principal)

Seconde branche implémentant la logique complète CRUD pour les tâches, utilisant Eloquent ORM pour la couche modèle.

* **Modèle Eloquent** :
  * Création du modèle `Tache` (fichier `app/Models/Tache.php`) avec les attributs `titre`, `description`, `est_terminee`, `user_id`.
  * Configuration `$fillable` pour l'assignation de masse et casting des champs.
  * Relation `belongsTo(User)` pour lier chaque tâche à son auteur.
* **Contrôleur API** :
  * `TacheController` avec les 7 méthodes RESTful : `index`, `store`, `show`, `update`, `destroy`, ainsi que des helpers si nécessaire.
  * Utilisation des requêtes `TacheRequest` pour valider les entrées.
  * Retour systématique de réponses JSON avec codes HTTP appropriés (200, 201, 404, 422, 500).
* **Requêtes de validation** :
  * `StoreTacheRequest` et `UpdateTacheRequest` avec règles de validation pour `titre` (requis, min:3, max:255) et `description` (optionnelle, max:500).
* **Tests API (Thunder Client)** :
  * Collection Thunder Client complète pour tester tous les endpoints CRUD.
  * Tests effectués pour : création, lecture (liste et détail), mise à jour, suppression, gestion d'erreurs (validation, ressource non trouvée).
  * Vérification des codes de statut et de la structure des réponses JSON.
* **Authentification (optionnel)** :
  * Laravel Breeze fournit l'authentification de base (non requise pour les tests selon les spécifications).

## 4. Technologies utilisées

* **Backend** : Laravel 10/11, PHP 8.x.
* **Base de données** : MySQL (ou SQLite pour les tests locaux).
* **ORM** : Eloquent (gestion des modèles, requêtes, relations, casting).
* **Validation** : Form Requests Laravel.
* **API Testing** : Thunder Client (extension VS Code) — collection fournie.
* **Frontend** : Interface JavaScript vanilla (consommation des endpoints API).

## 5. Lancer le projet

```bash
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```

L'API est alors disponible sur `http://localhost:8000/api/...`

## Utilisation de l’IA

Ce projet a été développé en intégrant des outils d’assistance à l’écriture de code basés sur l’intelligence artificielle (Microsoft Copilot).  
L’IA a été utilisée pour :
- accélérer la rédaction de portions de code,
- proposer des améliorations structurelles,
- générer des idées d’interface,
- optimiser la lisibilité du projet.

Toutes les décisions techniques, l’architecture et l’intégration finale ont été réalisées manuellement.

