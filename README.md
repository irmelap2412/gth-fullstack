## Struktura Projekta

### `index.js`

- Instancira Express server  
- Dodaje predefinisane i custom middleware funkcije  
- Registruje rute za svaku grupu endpointa (npr. `/restaurants`)  
- Pokreće server na definisanom portu  

---

### `routes`

Za svaku grupu endpointa kreira se poseban fajl koji:

- Instancira `Router` objekat  
- Dodaje HTTP metode (`GET`, `POST`, itd.) sa odgovarajućim handlerima  
- Eksportuje router kao default  

---

### `controllers`

Sadrži funkcije koje služe kao handleri za rute. Svaka funkcija:

- Prima parametre `(req, res)`  
- Implementira logiku za odgovarajući endpoint  
- Eksportuje se kao `const` funkcija  

---

### `middleware`

Sadrži custom middleware funkcije:

- Svaka funkcija je u zasebnom fajlu  
- Eksportuje se kao `default`   

---

### Zadaća

1. **Dohvatanje svih restorana iz određenog grada**  
   Dodati/Izmijeniti GET endpoint koji filtrira restorane po gradu (npr. `/restaurants?city=Sarajevo`)  

2. **Middleware za error handling**  
   Napraviti middleware koji prima error objekat i na osnovu njega postavlja status i body response objekta  

3. **Opcionalno: Dodati CRUD endpointe za dish i order entitete**    
