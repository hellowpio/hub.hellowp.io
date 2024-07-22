# Ninja Forms - Webhooks

A Ninja Forms Webhooks funkciója lehetővé teszi, hogy egyszerű POST vagy GET kérésekkel küldjünk adatokat egy adott URL-re, amikor egy űrlap benyújtásra kerül. Ez a funkció az űrlap műveletei között érhető el, és egy új művelet létrehozását igényli.

## Webhooks hozzáadása az űrlaphoz

Az Emails & Actions fülön kattints az Add New Action gombra, majd válaszd ki a Webhooks műveletet az Actions ablakban.

### Webhooks művelet beállítása

#### Remote URL

Az URL, amelyre az adatokat küldeni fogod.

#### Remote Method

- **GET**: Az adatok kérdésként kerülnek elküldésre az URL-be.
- **POST**: Az adatokat feldolgozásra küldi az URL-re.

#### ARGS

- **Key**: Az a név, amit az URL használ az elküldött mezőadatok megértéséhez.
- **Field**: Az a mező, amely tartalmazza a küldendő adatokat.

#### Advanced beállítások

- **Encode ARGS as a JSON string**: Lehetővé teszi, hogy az adatokat JSON formátumban kódold.
- **Run in Debug Mode**: Az adatok részletes módon kerülnek elküldésre a végpontra, ami hasznos lehet hibakeresés során.

## Példák és felhasználási módok

### Key/Field párok hozzáadása

Új key/field pár hozzáadásához kattints az "Add New" gombra. Példaként vegyük a következő űrlapadatokat:

- Name: "Ninja Zach"
- Email: "ninja@ninjaforms.com"
- Message: "Hey man, I really love the team’s new Webhooks extension! Way to go!"

### Key/Value párok térképezése

#### Statikus kulcs érték beállítása

Ha például egy API kulcsot kell megadnod (pl. abcdef123456), és a szolgáltatásod "id"-ként várja ezt, akkor használd az "id" kulcsot és másold be az API kulcsot a "field" mezőbe.

#### Mezőadatok térképezése egy kulcshoz

Például ha az API-d "name", "email" és "message" adatokat vár, akkor ezekhez a mezők listájában lévő "merge tag" ikon segítségével tudod hozzárendelni a megfelelő mezőket.

### Példa kimenetek

#### GET kérések

- JSON stringként egyetlen változóval 'myVar': `Remote URL:`
- JSON stringként: `Remote URL:`

#### POST beküldések

- JSON stringként egyetlen változóval 'myVar': `Remote URL:` Args: `myvar => {"id":"abcdef123456","name":"Zach","email":"zach@ninjaforms.com","message":"This is my message box text."}`
- JSON stringként: `Remote URL:` Args: `{"id":"abcdef123456","name":"Zach","email":"zach@ninjaforms.com","message":"This is my message text."}`

### Gyakorlati példák

1. **Integráció más eszközökkel**: A Webhooks lehetővé teszi, hogy adatokat küldj különböző külső szolgáltatásoknak, mint például Zapier, Slack, vagy Google Sheets.
2. **Automatizált értesítések**: Küldj értesítéseket egy CRM rendszerbe minden új űrlapbeküldésnél.
3. **Adatfeldolgozás**: Az űrlapadatokat közvetlenül egy adatbázisba vagy egy külső API-ba küldheted feldolgozásra.
4. **Real-time elemzés**: Az adatok valós idejű elemzése különböző analitikai eszközök segítségével.

## Szószedet

- **Webhooks**: Egy olyan módszer, amellyel adatokat lehet küldeni egy URL-re űrlap benyújtása után.
- **GET Method**: Kérésként küldi el az adatokat az URL-be.
- **POST Method**: Feldolgozásra küldi el az adatokat az URL-re.
- **ARGS**: A kulcs/mező párok meghatározása az adatok küldéséhez.
- **JSON**: JavaScript Object Notation, egy könnyű adatcsere formátum.

Ez a dokumentáció bemutatja, hogyan használhatod hatékonyan a Ninja Forms Webhooks funkcióját különböző helyzetekben és integrációkban.