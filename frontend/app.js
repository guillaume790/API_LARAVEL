const API_URL = "http://api_laravel.test:8080/api/taches";
let filtre = "toutes";

// --- Thème sombre ---
document.getElementById("themeBtn").onclick = () => {
    document.body.classList.toggle("dark");
};

// --- Charger les tâches ---
async function chargerTaches() {
    const response = await fetch(API_URL);
    const taches = await response.json();

    let tachesFiltrees = taches;

    if (filtre === "actives") {
        tachesFiltrees = taches.filter(t => !t.terminee);
    }
    if (filtre === "terminees") {
        tachesFiltrees = taches.filter(t => t.terminee);
    }

    const liste = document.getElementById("liste");
    liste.innerHTML = "";

    tachesFiltrees.forEach(t => {
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = t.titre;
        if (t.terminee) span.classList.add("terminee");

        const btnTerminer = document.createElement("button");
        btnTerminer.className = "btn btn-termine";
        btnTerminer.innerHTML = t.terminee
            ? '<i class="fa-solid fa-rotate-left"></i>'
            : '<i class="fa-solid fa-check"></i>';
        btnTerminer.onclick = () => toggleTerminee(t.id, !t.terminee);

        const btnSupprimer = document.createElement("button");
        btnSupprimer.className = "btn btn-supprimer";
        btnSupprimer.innerHTML = '<i class="fa-solid fa-trash"></i>';
        btnSupprimer.onclick = () => supprimerTache(t.id);

        li.appendChild(span);
        li.appendChild(btnTerminer);
        li.appendChild(btnSupprimer);

        liste.appendChild(li);
    });

    const restantes = taches.filter(t => !t.terminee).length;
    document.getElementById("compteur").textContent =
        `${restantes} tâche(s) restante(s)`;
}

// --- Ajouter une tâche ---
async function ajouterTache() {
    const titre = document.getElementById("titre").value;

    if (!titre.trim()) return;

    await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ titre })
    });

    document.getElementById("titre").value = "";
    chargerTaches();
}

// --- Cocher / décocher ---
async function toggleTerminee(id, etat) {
    await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ terminee: etat })
    });

    chargerTaches();
}

// --- Supprimer ---
async function supprimerTache(id) {
    await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    chargerTaches();
}

// --- Filtre ---
function setFiltre(f) {
    filtre = f;
    chargerTaches();
}

// --- Charger au démarrage ---
chargerTaches();
