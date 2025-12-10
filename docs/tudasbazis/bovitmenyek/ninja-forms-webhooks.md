---
title: "Ninja Forms - Webhooks"
description: "A Ninja Forms hivatalos Webhooks kiegészítője, amellyel űrlapadataidat HTTP kéréssel tetszőleges külső végpontra küldheted, kódolás nélkül."
sidebar_label: "Ninja Forms - Webhooks"
---

## Mi ez és milyen problémát old meg?

A Ninja Forms – Webhooks egy hivatalos kiegészítő, amellyel az űrlapbeküldéseket azonnal továbbíthatod bármely külső rendszer felé egyszerű **HTTP GET** vagy **POST** kérésként. Akkor hasznos, ha nincs kész beépülő integráció a célrendszerhez, mégis szeretnéd, hogy a beérkező adatok automatikusan bekerüljenek egy **CRM-be**, **helpdeskbe**, **marketing-automatizációba**, **belső API-ba** vagy bármely más szolgáltatásba.

## Hogyan működik?

Az űrlap szerkesztőjében az Emails & Actions fülön új **Webhooks** akciót adhatsz hozzá. Minden beküldésnél a bővítmény a beállított **Remote URL** címre küldi az általad definiált mezőket és értékeket. Több Webhooks akciót is hozzáadhatsz; mindegyik külön végpontra és formátumban küldhet.

### Fő funkciók, érthetően

- **HTTP metódus: GET vagy POST**
  - GET: a kulcs–érték párok a kérés **query string** részébe kerülnek.
  - POST: a kulcs–érték párok a kérés **törzsébe** kerülnek. API-khoz általában ezt érdemes választani.

- **Remote URL**
  - Ide érkezik az adat. Ez lehet külső szolgáltatás, saját szerver, felhőfunkció vagy bármilyen API-végpont, ami fogad kéréseket.

- **Kulcs–érték (ARGS) párok**
  - Szabadon nevezett kulcsokat adsz meg, amelyekhez űrlapmezőket társítasz **merge tagekkel** (pl. `{field:email}`) vagy **statikus értékeket** (pl. `"source": "website"`, `"api_key": "..."`).
  - Így pontosan azt a struktúrát állítod elő, amit a cél API elvár.

- **JSON-küldés**
  - A megadott ARGS tartalom egyetlen **JSON** törzzsé alakítható. POST esetén a bővítmény ehhez megfelelő **Content-Type** fejlécet állít be.
  - Hasznos összetett, beágyazott adatszerkezetekhez.

- **Run in Debug Mode**
  - Teszteléskor részletes visszajelzést kapsz a célrendszer válaszáról (például státuszkód, hibaüzenet). Élesítés után kapcsold ki.

- **Tesztelhetőség**
  - Könnyen kipróbálhatod egy tetszőleges teszt-végponttal, így látod, pontosan milyen payloadot küld a rendszer.

- **Fejlesztői finomságok**
  - A tartalomtípus és egyes fejlécek szűrőkkel testre szabhatók, ha speciális API-követelményekhez kell igazodni.

## Gyakorlati példák

### 1) GET kérés egyszerű lead rögzítéshez

Beállítás:
- Metódus: GET
- Remote URL: REMOTE_URL
- ARGS:
  - `name = {field:first_name} {field:last_name}`
  - `email = {field:email}`
  - `source = website`

Eredmény (lekérdezési karaktersor formában):
```text
REMOTE_URL?name={field:first_name}%20{field:last_name}&email={field:email}&source=website
```

### 2) POST JSON egy CRM-hez

Beállítás:
- Metódus: POST
- Küldés JSON-ként: bekapcsolva
- ARGS:
  - `contact.email = {field:email}`
  - `contact.name = {field:first_name} {field:last_name}`
  - `meta.source = website`
  - `auth.token = YOUR_API_KEY`

Kimenő törzs:
```json
{
  "contact": {
    "email": "{field:email}",
    "name": "{field:first_name} {field:last_name}"
  },
  "meta": {
    "source": "website"
  },
  "auth": {
    "token": "YOUR_API_KEY"
  }
}
```

### 3) Saját API meghívása jegy létrehozására

- Metódus: POST
- ARGS:
  - `title = Új űrlapbeküldés`
  - `requester = {field:email}`
  - `payload = {"message":"{field:message}","priority":"high"}`

Ha JSON-ként küldöd, a payload mező is beágyazott objektumként mehet tovább.

## Lépésről lépésre

1. Telepítsd és aktiváld a Webhooks kiegészítőt a Ninja Forms mellé.
2. Nyisd meg az űrlapodat > Emails & Actions > Add New Action > Webhooks.
3. Add meg a **Remote URL** értéket, válaszd a **GET** vagy **POST** metódust.
4. Állítsd be a **kulcs–érték párokat**: űrlapmezők merge tagjei és statikus értékek vegyesen.
5. Opcionális: kapcsold be a **JSON-küldést** és/vagy a **Debug Mode**-ot.
6. Küldj próba-beküldést, ellenőrizd a célrendszer válaszát, majd élesítsd.

## Előnyök és értékajánlat

- **Nincs kódolás**: néhány kattintással összekötöd az űrlapodat bármely API-végponttal.
- **Gyors bevezetés**: percek alatt kész integráció nélkül is működik.
- **Költségcsökkentés**: sok esetben kiválthatod a drága, harmadik fél automatizálókat.
- **Rugalmas adattérkép**: a kulcs–érték párokkal pontos, API-kompatibilis payloadot építesz.
- **Hatékony hibakeresés**: a Debug Mode miatt gyorsan látod, miért utasít el egy API egy kérést.

## Kinek ajánlott?

- **Webes ügynökségeknek és site buildereknek**: ha projektjeidben gyakran kell egyedi végpontokra továbbítani űrlapadatokat.
- **Marketing és értékesítési csapatoknak**: leadek azonnali továbbítása CRM-be, e-mail automatizálásba vagy táblázatba.
- **Ügyféltámogatásnak**: jegyek automatikus megnyitása űrlapbeküldésből.
- **Fejlesztőknek és IT-nak**: saját API-k, mikroszervizek, szerver nélküli funkciók meghívása űrlaptriggerről.

## Fontos technikai megjegyzések

- **Tartalomtípusok**: JSON-küldésnél a megfelelő Content-Type fejléc automatikusan beállításra kerül; igény szerint szűrőkkel testre szabható.
- **Biztonság és frissítés**: mindig a legfrissebb kiadást használd, mert fontos biztonsági és kompatibilitási javításokat tartalmazhat.
- **Követelmények**: a kiegészítő működéséhez támogatott WordPress, Ninja Forms és PHP környezet szükséges.

## Licenc és elérhetőség

A Webhooks külön éves előfizetéssel érhető el, és része a bővítménycsalád felsőbb csomagjainak is. Üzleti használatnál tervezd be az előfizetés megújítását a frissítések és támogatás miatt.

---

Szeretnél egy konkrét célrendszerhez mintakonfigurációt? Írd meg, milyen mezőid vannak és hova küldenéd az adatot, és adok kész ARGS-térképet és tesztelési lépéseket.