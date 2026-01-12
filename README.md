# Projekt "Cozy Cat Intranet" (DT193G)

Den här delen av projektet utgörs av ett Vue-baserat användargrässnitt för en intern webbapplikation och har skapats för det fiktiva företaget "Cozy Cat". Syftet med applikationen är att anställda ska kunna hantera produkter och produktkategorier.

Lösningen för det här projektet utgörs av två delar: 
* Användargrässnitt: Presenteras i detta repository
 * REST API: **[API repository](https://github.com/gustafsson96/project-dt193g-backend.git)**

## Funktionalitet 
* Inloggning med användarnamn och lösenord
* Registrera en ny användare
* Autentisering med JWT
* Utloggning 
* Navigering via Vue Router
* Skyddade vyer via Navigation Guard
* Visa, skapa, uppdatera och radera produkter
* Visa, skapa, uppdatera och radera kategorier
* Justering av lagersaldo direkt i produkttabellen
* Användarfeedback

## Använda tekniker
* Vue 3 (Composition API)
* Vue Router
* JavaScript
* JWT
* Fetch för kommunkation med backend 
* Bootstrap 5

Data lagras i en Postgres-databas. 

## Views

### LoginView
Hanterar inloggning av en användare. Vid lyckad inloggning returnerar API:et ett JWT-token som sparas i localStorage. Användaren omdirigeras därefter till startvyn. 

### SignupView
Ett formulär för att registrera en ny användare. 

### StartView
Den första vyn en inloggad användare möts av som via fyra knappar länkar till applikationens innehåll. 

### ProductListView
Visar företagets produkter i en Bootstrap-tabell. Både produker och kategorier hämtas från API:et. Finns inga produkter visas i stället ett meddelande. Användaren kan uppdatera eller radera en produkt, samt uppdatera lagersaldo direkt i tabellen. Denna vy stödjer även filtrering av produkter baserat på en kategoris unika id. 

### AddProductView
Innehåller ett formulär för att skapa nya produkter. Har frontend-validering och skickar data till API:et via ett POST-anrop.

### CategoryListView
Visar företagets produktkategorier som Bootstrap-kort tillsammans med knappar för att uppdatera eller radera en kategori, samt möjligheten att filtrera produkter för vald kategori. 

### AddCategoryView
Innehåller ett formulär för att skapa nya kategorier. Har frontend-validering och skickar data till API:et via ett POST-anrop.

## Hierarki för nestade komponenter

* ProductListView --> ProductRow --> EditProductModal

* CategoryListView --> CategoryItem --> EditCategoryModal

## Installation

* Klona repository: git clone https://github.com/gustafsson96/project-dt193g-frontend.git 
* Navigera till projektmappen: cd projekt-mapp-namn
* Installera beroenden: npm install
* Se till att REST API:et körs lokalt på http://localhost:5000
* Starta utvecklingsserver: npm run dev
* Öppna applikationen i webbläsaren: http://localhost:5173

