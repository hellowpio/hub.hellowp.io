# LearnDash LMS - Notifications

A LearnDash LMS - Notifications bővítmény lehetővé teszi, hogy automatikus e-mail értesítéseket küldj a felhasználóknak különböző események bekövetkeztekor. Az értesítések akkor kerülnek kiküldésre, amikor a felhasználó például befejez egy kurzust, elvégez egy leckét, sikeresen vagy sikertelenül teljesít egy kvízt stb. Az értesítések időzítését, címzettjeit és tartalmát teljes mértékben testre szabhatod.

## Funkciók

### Értesítések létrehozása

Az értesítések létrehozása során megadhatod:
- **Cím:** Az értesítés tárgysora.
- **E-mail tartalom:** Az üzenet szövege, amelyet a felhasználónak küldesz. Használhatsz formázási eszközöket, képeket illeszthetsz be, vagy saját HTML kódot is használhatsz.
- **E-mail trigger:** Az az esemény, amely kiváltja az értesítést (pl. "A felhasználó befejez egy kurzust").

### E-mail triggerek

Az értesítések kiváltó eseményei között szerepelhet:
- Felhasználó beiratkozik egy csoportba
- Felhasználó beiratkozik egy kurzusra
- Felhasználó befejez egy kurzust
- Felhasználó befejez egy leckét
- Ütemezett lecke elérhetővé válik a felhasználó számára
- Felhasználó befejez egy témát
- Felhasználó befejez egy kvízt
- Felhasználó sikeresen teljesít egy kvízt
- Felhasználó nem teljesít sikeresen egy kvízt
- Felhasználó beküld egy kvízt
- Egy esszé beküldésre kerül
- Egy esszékérdés értékelésre kerül
- Egy feladat feltöltésre kerül
- Egy feladat elfogadásra kerül
- Felhasználó nem jelentkezett be "X" napja
- "X" nappal a kurzus lejárta előtt
- "X" nappal a kurzus lejárta után

### Feltételek hozzáadása

Az értesítésekhez különböző feltételeket is megadhatsz:
- Felhasználó beiratkozott egy csoportba
- Felhasználó beiratkozott egy kurzusra
- Felhasználó befejezett egy kurzust
- Felhasználó befejezett egy leckét
- Felhasználó befejezett egy témát
- Felhasználó beküldött egy kvízt

### Rövidkódok használata

Az e-mail tartalmába dinamikus tartalmakat illeszthetsz be rövidkódokkal:
- A felhasználó keresztneve: `[ld_notifications field="user" show="first_name"]`
- A kurzus címe: `[ld_notifications field="course" show="title"]`
- Link a kurzus oldalára: `[ld_notifications field="course" show="url"]`

### Címzettek meghatározása

Az értesítéseket különböző címzetteknek küldheted:
- **Felhasználó:** Az értesítés elküldése a felhasználónak.
- **Csoportvezető:** Az értesítés elküldése a felhasználó csoportvezetőjének.
- **Admin:** Az értesítés elküldése az adminisztrátoroknak.
- **További címzettek:** Egyedi e-mail címek megadása.

### Késleltetés

Megadhatod, hogy az értesítés hány nappal az esemény bekövetkezte után kerüljön kiküldésre.

## Együttműködő eszközök

A LearnDash Notifications zökkenőmentesen együttműködik más eszközökkel és bővítményekkel, mint például:
- **WooCommerce:** Kurzusok értékesítésére.
- **MemberPress:** Tagsági rendszerek kezelésére.
- **Gravity Forms:** Egyedi űrlapok készítésére és feldolgozására.
- **Zapier:** Automatizálási folyamatok létrehozására különböző alkalmazások között.

## Gyakorlati példák

### Kurzus befejezésének értesítése

Amikor egy felhasználó befejez egy kurzust, automatikusan kap egy gratuláló e-mailt, amely tartalmazza a kurzus címét és egy linket a letölthető bizonyítványhoz.

### Inaktivitás figyelmeztetés

Ha egy felhasználó több mint 7 napig nem jelentkezik be az oldalra, automatikusan kap egy emlékeztető e-mailt, amely ösztönzi őt a visszatérésre és a tanulás folytatására.

### Kvíz sikertelenség értesítése

Amikor egy felhasználó nem teljesít sikeresen egy kvízt, kap egy e-mailt, amely tájékoztatja őt az eredményéről és javaslatokat ad a további tanuláshoz.

## Szószedet

- **Trigger:** Az az esemény vagy feltétel, amely kiváltja az értesítést.
- **Shortcode:** Rövid kódok, amelyek dinamikus tartalmakat illesztenek be az e-mailbe.
- **SMTP:** Simple Mail Transfer Protocol, amely az e-mailek küldésére szolgáló protokoll.
- **Cron job:** Időzített feladatok futtatására szolgáló mechanizmus.

Ez a részletes bemutatás segíthet abban, hogy hatékonyan használd a LearnDash LMS - Notifications bővítményt az oktatási platformodon.