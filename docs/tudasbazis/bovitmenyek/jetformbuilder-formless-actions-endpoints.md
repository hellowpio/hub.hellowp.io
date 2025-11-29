---
title: "JetFormBuilder Formless Actions Endpoints"
description: "JetFormBuilder PRO kiegészítő, amellyel a beküldés utáni műveleteket látható űrlap nélkül, gombbal vagy API-végponttal futtathatod."
sidebar_label: "JetFormBuilder Formless Actions Endpoints"
---

## Mi ez és milyen problémát old meg?

A Formless Actions Endpoints egy JetFormBuilder PRO addon, amellyel a JetFormBuilder űrlapok „post submit” műveleteit látható űrlap nélkül futtathatod. Vagyis a háttérben továbbra is egy bázis űrlap dolgozik, de a felhasználónak nem kell mezőket kitöltenie: egy gombkattintás, egy URL-paraméter, egy AJAX-kérés vagy egy REST API hívás indítja a folyamatot. Ezzel drasztikusan csökkentheted a felhasználói súrlódást és villámgyors moderációs, automatizációs lépéseket hozhatsz létre.

## Hogyan működik?

- Készítesz vagy kiválasztasz egy JetFormBuilder űrlapot, amelynek beállítod a beküldés utáni akcióit (pl. bejegyzés létrehozása/frissítése, e‑mail, rekordmentés).
- Az addonban létrehozol egy „route”-ot (végpontot), és hozzárendeled ehhez a bázis űrlapot.
- Megadod, hogyan induljon a folyamat: **WordPress AJAX**, **REST API Endpoint** vagy **URL Query String**.
- A Data Fields panelen megkapod a **Sample Request** mintát, amit beilleszthetsz gombokba, integrációkba vagy külső kliensekbe.
- Opcióként jogosultságot és naplózást kapcsolhatsz a végpontra.

## Fő funkciók, érthetően

- **Űrlap nélküli műveletfuttatás**: A bázis űrlap post submit akciói látható űrlap nélkül futnak. Például egy „Jóváhagyás” gomb meghívja az űrlap „Update Post Status” akcióját a háttérben.

- **Több indítási mód**:
  - **WordPress AJAX**: frontendi gombokhoz ideális, oldalfrissítés nélkül.
  - **REST API Endpoint**: saját névtérrel és útvonallal; JSON‑t fogad a bázis űrlap mezőstruktúrája szerint.
  - **URL Query String**: egyszerű hívás paraméterekkel (pl. gyors linkek).

- **„Base form” kiválasztása és mezőtérkép**: Minden végpont konkrét űrlaphoz kötött. A Data Fields részben látod, milyen mezők várhatók; a Sample Request alapján garantált a helyes adatformátum.

- **Funkcionális gombok a szerkesztőkben**: Elementor, Gutenberg és Bricks gombjaiban bekapcsolhatod a „Submit JetFormBuilder Form” opciót, kiválasztod a route‑ot, beilleszted a minta‑JSON‑t – és kész a láthatatlan beküldés.

- **Jogosultság‑korlátozás**: Az „Is restricted” kapcsolóval szabályozhatod, hogy bárki, bejelentkezett felhasználó, adott szerepkör vagy adott capability indíthassa a műveletet.

- **Kérések naplózása**: A „Log requests” bekapcsolásával auditálható, ki és mikor hívta a végpontot (sikeres/sikertelen kísérletek).

- **Kereszt‑site működés**: Ugyanazon vagy több külön WordPress között is küldhetsz/ fogadhatsz form‑adatokat REST‑en át.

- **Admin UI**: Aktiválás után a JetFormBuilder alatt megjelenik az **Endpoints** menü, ahol route‑okat hozol létre és szerkesztesz.

## Telepítés és beállítás röviden

1. Telepítsd a JetFormBuilder alap bővítményt, majd a PRO addont aktiváld (Formless Actions Endpoints).
2. Hozz létre egy bázis űrlapot, és állítsd be a Post Submit Actions lépéseit.
3. Lépj az Endpoints menübe, és kattints az „Add new route”-ra.
   - Related form: válaszd ki a bázis űrlapot.
   - Action type: AJAX / REST API / URL Query.
   - REST esetén add meg a „Route namespace” és „Route” értékeket (engedélyezett karakterekkel).
   - Kapcsold be az „Is restricted” és/vagy „Log requests” opciókat, ha szükséges.
4. A Data Fields szekcióból másold a **Sample Request**‑et.
5. Gombbeállítás (Elementor/Gutenberg/Bricks): kapcsold be a „Submit JetFormBuilder Form”-ot, válaszd ki a route‑ot, illeszd be a minta‑JSON‑t.
6. Eredmények: az akciók futása az űrlap beállításaitól függően menthető a Form Records alatt; a hívások a Log alapján visszanézhetők.

## Gyakorlati példák

### 1) Moderációs gombok listanézetben
- Két végpont: „publish” és „trash”.
- A gomb a Sample Request‑ben a megfelelő poszt‑azonosítót küldi.
- Kattintásra azonnal státuszváltás történik, űrlapnézet nélkül.

Példa minta‑JSON:
```json
{
  "post_id": 123,
  "status": "publish",
  "note": "Jóváhagyva"
}
```

### 2) Posztok létrehozása több webhelyen
- A fő oldalon egy űrlap fut, amely REST Request akcióval hívja a másik oldal végpontját.
- Mindkét oldalon egyezik a mezőtérkép a Sample Request alapján.

### 3) Egykattintásos gyorsművelet URL‑lel
- URL Query String típus: gyors link menedzsereknek.
```
https://példa.hu/?route=quick-trash&post_id=123&status=trash
```

## Biztonsági tippek

- REST útvonal neveit csak engedélyezett karakterekkel add meg; érdemes tisztítani a bemeneti értékeket.
- Frontendi gomboknál használj **wp‑nonce** és **CSRF** védelmet; a captcha nem releváns.
- Kereszt‑site hívásoknál kapcsold be az **Is restricted** opciót, és alkalmazz hitelesítést (például token vagy azonosított felhasználói jogosultság alapján).
- Kapcsold be a **Log requests**‑et auditcélra.

## Előnyök és érték

- **Kevesebb súrlódás**: nincs űrlapkitöltés, mégis lefutnak az űrlap‑akciók.
- **Gyorsabb munkafolyamatok**: moderáció, státuszváltás, törlés egy kattintással.
- **Rugalmasság**: ugyanaz a folyamat gombbal, AJAX‑szal, REST‑tel vagy URL‑lel is hívható.
- **Integrálhatóság**: külső rendszerekből is triggerezheted a JetFormBuilder folyamataidat.
- **Ellenőrzött hozzáférés**: role/capability alapú korlátozás és naplózás.

## Kinek ajánlott?

- **Tartalommoderátoroknak és szerkesztőknek**: villámgyors jóváhagyás/archiválás listanézetből.
- **Üzemeltetőknek több webhelyen**: központi űrlapról több oldalra publikálás.
- **Fejlesztőknek és integrátoroknak**: REST alapú adatszinkron és automatizáció.
- **SaaS/app készítőknek**: a WordPress, mint backend, űrlap‑alapú munkafolyamatok API‑ból hívva.

## Licenc és elérhetőség

A Formless Actions Endpoints PRO addonként érhető el a JetFormBuilderhez. A licenc díjas; a hivatalos kereskedelmi csatornán vásárolható meg.

## Összefoglalás

A Formless Actions Endpoints lényege, hogy a JetFormBuilderben beállított beküldés utáni akciókat látható űrlap nélkül tedd elérhetővé. Így gyorsabb moderációt, egyszerűbb frontendi műveleteket és hatékony REST‑alapú integrációkat kapsz, miközben a jogosultság‑kezelés és naplózás biztosítja a kontrollt és az auditálhatóságot.