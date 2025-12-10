---
title: "JetFormBuilder"
description: "Blokkalapú, Gutenbergre épülő WordPress űrlapépítő, dinamikus adatokkal és automatizált műveletekkel."
sidebar_label: "JetFormBuilder"
---

## Mi ez és milyen problémát old meg?

A JetFormBuilder egy natív, blokkalapú űrlapépítő WordPresshez. A WordPress szerkesztőben (Block Editor) rakhatod össze az űrlapokat, majd ugyanott vagy más oldalépítőkben jelenítheted meg. Az a célja, hogy ugyanazon a felületen tudd megtervezni az űrlapot, összekötni a WordPress‑adatokkal (CPT, taxonómiák, meta), és beküldés után automatizált műveleteket futtatni – kód nélkül. Ezzel kiváltod a külön drag‑and‑drop buildert, a styler plugint és az űrlap‑automatizálási bővítményeket.

## Hogyan működik röviden?

- Az adminon belül blokkokból állítod össze az űrlapot (mezők, gombok, több lépés, feltételek).
- Beállítod a beküldés utáni műveleteket (e‑mail, bejegyzés/felhasználó létrehozás, fizetés, webhook, átirányítás).
- Megjelenítés a frontend‑en Gutenberg blokkal, Elementor widgettel, Bricks elemmel vagy shortcode‑dal:
```
[jet_fb id="123"]
```
- A beküldések menthetők és listázhatók az adminban.

## Fő funkciók részletesen

### Mezők és logika
- **24+ mezőtípus**: szöveg, e‑mail, szám, választók (select, checkbox, radio), dátum/idő, range, kapcsoló, WYSIWYG, média, térkép stb.
- **Feltételes megjelenítés**: mezőket, szekciókat szabályokhoz kötve láthatóvá/eltüntethetővé teszel (pl. csak céges számlázásnál jelenjen meg az adószám).
- **Számított mezők**: képletekkel automatikusan számolsz (árkalkuláció, pontszám, szállítás).
- **Repeater csoportok**: tetszőleges számú ismétlődő adatblokk (pl. több résztvevő hozzáadása).
- **AJAX beküldés és input maszkok**: gyorsabb UX, formázott bevitellel (telefon, irányítószám).

### Többlépéses űrlapok és UX
- **Multi‑step** űrlapok és **progress bar** a hosszú folyamatokhoz.
- **Űrlapmentés** (Pro kiegészítő): automatikus piszkozat, későbbi folytatás.
- **Időzítés és limit** (Pro): űrlap nyitása/zárása időablakban, összes vagy felhasználónkénti beküldésszám korlátozása.

### Adatkezelés és műveletek (Post‑submit Actions)
- **E‑mail küldés**: admin és felhasználói értesítések, dinamikus tartalommal.
- **Bejegyzés beszúrása/frissítése**: bármely post type, taxonómiák és meta kezelése – ideális frontendes tartalombeküldéshez.
- **Felhasználó regisztráció/frissítés**: profilmezők, szerepkörök kezelése; Pro‑val akár e‑mail‑verifikációs és jelszó‑visszaállítási folyamatok.
- **Átirányítás, opciók frissítése, webhook/hook**: összekötés külső rendszerekkel, automatizációkkal.
- **Marketing integrációk**: tipikus e‑mail marketing és CRM szolgáltatók támogatása.

### Fizetések és e‑kereskedelem
- **Stripe és PayPal**: egyszeri és ismétlődő (recurring) fizetések.
- **WooCommerce Checkout**: egyedi űrlapból indított kosár/checkout folyamat.
- Pro bővítők finomhangoláshoz: előfizetések, visszatérő díjak, WooCommerce akciók.

### Spamvédelem és biztonság
- **Több captcha‑opció**: Google reCAPTCHA v3, hCaptcha, Cloudflare Turnstile, Friendly Captcha.
- Globális szinten vagy űrlaponként kapcsolhatod, külön **captcha blokk** is elérhető.

### AI űrlapgenerátor
- **OpenAI‑alapú “Generate Form with AI”**: rövid leírás alapján felépíti a mezőket (pl. regisztráció, álláspályázat). A használat korlátozott mennyiségű kéréshez kötött.

### Integrációk és kompatibilitás
- **JetEngine**: dinamikus mezők, CPT‑k és taxonómiák szoros integrációja.
- **JetStyleManager**: vizuális stílusozás a blokkszerkesztőben.
- **JetBooking/JetAppointment**: foglalási és időpontkezelési folyamatokhoz.
- **Oldalépítők**: szerkesztés a Block Editorban, megjelenítés Gutenberg blokkal, Elementor widgettel, Bricks elemmel vagy shortcode‑dal.
- **Külső automatizációk**: űrlapadatok továbbítása táblázatokba, CRM‑ekbe és más eszközökbe.

### Pro bővítmények – tipikus kiegészítések
- **Fizetés**: Stripe Subscriptions, PayPal Recurring, WooCommerce Cart & Checkout Action.
- **Adatbevitel/UX**: Drag & Drop File Upload, Signature, Advanced Color Picker, Hierarchical Select, Select Autocomplete, Address Autocomplete, PDF‑csatolmány, Formless Actions Endpoints.
- **Folyamatvezérlés**: Save Form Progress, Schedule Forms, Limit Form Responses.
- **Marketing/CRM**: MailerLite, MailPoet, ConvertKit, HubSpot, Moosend stb.

## Gyakorlati példák

- **Frontendes tartalombeküldés**: űrlap mezői hozzárendelve egy CPT meta mezőihez → beküldés után új bejegyzés jön létre, kategóriákkal és képpel.
- **Árajánlat‑kalkulátor fizetéssel**: termékválasztó + számított összeg → Stripe fizetés → e‑mail visszaigazolás és CRM lead.
- **Regisztráció és profilfrissítés**: több lépéses űrlap, feltételes mezők, felhasználó létrehozása/aktualizálása, opcionális e‑mail‑megerősítés.
- **WooCommerce indítás egyedi űrlapból**: variációk és mennyiségek kiválasztása → kosárfeltöltés → átirányítás a checkoutra.
- **Eseményjelentkezés limitált férőhellyel**: limitált beküldés, várólista webhooks‑szal.

## Előnyök és értékajánlat

- **Natív élmény**: mindent a blokk‑szerkesztőben építesz, kevesebb plugin‑függőség.
- **Kód nélküli automatizáció**: post/user műveletek, webhookok, marketing akciók beállításból.
- **Erős dinamikus adatkezelés**: CPT, taxonómiák és meta rugalmas kezelése.
- **E‑kereskedelmi rugalmasság**: egyszeri és ismétlődő fizetések, WooCommerce kapcsolódás.
- **Jobb űrlap‑UX**: multi‑step, mentés, időzítés, limitálás.
- **Többrétegű spamvédelem**: több captcha, finom elhelyezéssel.
- **Gyors indulás**: AI űrlapgenerálás és kész minták.

## Kinek ajánlott?

- **Ügynökségeknek és fejlesztőknek**: komplex ügyfélfolyamatok gyors, skálázható összeállítása.
- **Webshop‑tulajdonosoknak**: egyedi rendelési/előfizetési űrlapok WooCommerce‑szel vagy anélkül.
- **Tartalomgazdáknak és kiadóknak**: frontendes beküldés, szerkesztői workflow‑k.
- **Oktatási és nonprofit szervezeteknek**: jelentkezés, pályázat, adomány űrlapok, visszatérő támogatásokkal.
- **No‑code power usereknek**: feltételes logika, kalkulációk, automatizációk fejlesztő nélkül.

Ha natív, megbízható és bővíthető űrlaprendszert keresel WordPressre, amivel üzleti folyamatokat is össze tudsz kötni fizetésekkel és dinamikus adatokkal, a JetFormBuilder pontosan ezt adja meg – felesleges bonyolítás nélkül.