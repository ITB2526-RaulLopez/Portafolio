document.addEventListener('DOMContentLoaded', () => {

    /* ================================================= */
    /* 1. Funcionalitat DOM: Any Dinàmic al Peu de Pàgina */
    /* Aplica a totes les pàgines (index, projects, contact). */
    /* ================================================= */
    const currentYear = new Date().getFullYear();
    const footerElement = document.querySelector('footer p');
    
    if (footerElement) {
        // Cerca el text que conté l'any (p. ex., 2025) i el substitueix per l'any actual
        const baseText = footerElement.textContent.replace(/202[0-9]/, currentYear);
        footerElement.textContent = baseText;
    }


    /* ================================================= */
    /* 2. Funcionalitat de Formulari: Alerta de Confirmació */
    /* S'executa només a contact.html i gestiona l'enviament. */
    /* ================================================= */
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            
            // 1. Primer, comprovem si el formulari és vàlid segons HTML5 (required, pattern)
            if (contactForm.checkValidity()) {
                
                event.preventDefault(); // Evita l'enviament real (recarrega de pàgina)
                
                // 2. Mostra l'alerta de confirmació
                alert("Gràcies per contactar! El vostre missatge ha estat enviat.");
                
                // 3. Opcional: Netejar el formulari
                contactForm.reset(); 
            }
            // Si checkValidity() és false, el navegador mostrarà automàticament els missatges d'error d'HTML5.
        });
    }

    
    /* ================================================= */
    /* 3. Manipulació DOM: Afegir Element a la Llista d'Habilitats */
    /* S'executa només a index.html (o pàgines que tinguin l'aside). */
    /* ================================================= */
    const skillsList = document.querySelector('aside ul');

    if (skillsList) {
        const newSkillText = "Control de Versions (Git)";
        
        // 1. Crea el nou element de la llista (<li>)
        const newListItem = document.createElement('li');
        
        // 2. Estableix el seu contingut
        newListItem.textContent = newSkillText;
        
        // 3. Afegeix l'element a la llista d'habilitats de l'aside
        skillsList.appendChild(newListItem);
        
        // Opcional: Donar-li un estil per destacar que ha estat afegit per JS
        newListItem.style.fontStyle = 'italic';
    }

});