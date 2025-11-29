---
title: "JetFormBuilder Schedule Forms"
description: "Pro-kiegészítő a JetFormBuilderhez, amellyel űrlapokat pontos időablakhoz köthetsz; automatikus nyitás/zárás, Pending/Expired üzenetek és beküldéskori ellenőrzés."
sidebar_label: "JetFormBuilder Schedule Forms"
---

## Mi ez és milyen problémát old meg?

A **Schedule Forms** a JetFormBuilder űrlapkészítő **Pro**-kiegészítője. Segítségével egy űrlapot előre beállított **kezdő** és **záró** dátum/idő szerint jeleníthetsz meg vagy rejthetsz el. Így az űrlap csak a kijelölt időablakban látható és beküldhető. Ezzel megszűnik a kézi nyitogatás/zárás, csökken a hibázás esélye, és garantáltan tartod a határidőket. Bármely WordPress témával működik.

## Fő funkciók és működés

- **Időzített űrlap-megjelenítés**
  - Beállíthatod, hogy az űrlap csak egy adott napon, egy **dátumtartományon** belül, vagy egy pontos **időpontra** (óra:perc) időzítve legyen elérhető. Az időablakon kívül az űrlap automatikusan rejtett, a látogató pedig állapotüzenetet kap.

- **Kezdő (From) és záró (To) dátum/idő**
  - A beállításnál hónap/nap/év + **óra:perc** pontossággal adsz meg időket. Ez lehetővé teszi a percre pontos kampányokat, jelentkezési ablakokat, szavazások zárását stb.

- **Pending és Expired üzenetek**
  - A nyitás előtt **Pending message**, a zárás után **Expired message** jelenik meg. Mindkettő **shortcode-barát**, így könnyen beilleszthetsz dinamikus elemeket (például visszaszámlálót vagy dátumot). Az üzenetek **stílusa** egységesen állítható, hogy illeszkedjen a márkádhoz.

- **Beküldéskori ellenőrzés**
  - Nem csak a megjelenítésnél, hanem **beküldéskor is ellenőrzi** az időablakot. Ez kizárja a „megkerüléses” beküldéseket (pl. ha valaki közvetlen URL-lel próbálkozik), így a lezárt űrlap valóban lezárt.

- **Egyszerű kezelés a JetFormBuilderen belül**
  - A kiegészítőt a JetFormBuilder **Addons** felületén telepíted és aktiválod, majd az egyes űrlapok jobb oldali paneljén kapcsolod be az időzítést. Nem kell külön bővítménykezelő workflow.

## Gyakorlati példák

- **Pályázati/jelentkezési űrlap**: Állítsd be, hogy hétfő 08:00-tól péntek 16:00-ig legyen elérhető. Nyitás előtt „Hamarosan nyitunk”, zárás után „Lezárva” üzenet jelenik meg.
- **Eseményregisztráció**: Nyisd meg a regisztrációt egy adott napon 10:00-kor, zárd 18:00-kor. Kombináld beadáslimittel, hogy akár idő előtt is zárjon, ha betelt a keret.
- **Időkorlátos akció vagy kuponigénylés**: 24 órás „flash sale” űrlap percre pontos zárással.
- **Szavazás/feedback**: Zárd a formot a kampány utolsó napján 23:59-kor; minden késői próbálkozás elutasításra kerül.

## Előnyök és értékajánlat

- **Határidő-biztos működés**: a szerveroldali beküldés-ellenőrzés tényleg lezár.
- **Automatizált nyitás/zárás**: nincs többé kézi publikálgatás; kevesebb hiba, kisebb üzemeltetési teher.
- **Egyértelmű státuszkommunikáció**: Pending/Expired üzenetekkel nem maradnak kérdések.
- **Percre pontos időzítés**: alkalmas rövid kampányokra és szigorú deadline-okra.
- **Skálázható és kompatibilis**: bármely témával működik, és jól kombinálható más JetFormBuilder kiegészítőkkel.

## Kinek ajánlott?

- **Oktatás**: beadandók, vizsgajelentkezések.
- **HR és pályázatkezelés**: álláspályázatok beadási ablakai.
- **Rendezvényszervezés**: korlátozott idejű regisztrációk.
- **Marketing/e-kereskedelem**: akciók, promóciós űrlapok.
- **Közösségek és non-profit**: szavazások, közgyűlési regisztrációk.

## Telepítés és alapbeállítás

1. Előfeltétel: aktív **JetFormBuilder** bővítmény (ingyenes alap).
2. Menj a WordPress Vezérlőpultban a JetFormBuilder > Addons részre, telepítsd és aktiváld a **Schedule Forms** kiegészítőt.
3. Nyisd meg a kívánt űrlapot (JetFormBuilder > Forms), a jobb oldali panelen keresd a **Form Schedule** szekciót.
4. Kapcsold be az **Enable** opciót, állítsd be a **From** és **To** időpontokat (dátum + idő).
5. Add meg a **Pending** és **Expired** üzeneteket (shortcode-okat is használhatsz), majd mentsd és publikáld az űrlapot.

Példák üzenetekre:
```
Pending:
A jelentkezés hamarosan nyílik. Kérjük, nézz vissza később.
[countdown to="2025-03-01 10:00"]

Expired:
A jelentkezési időszak lezárult. További információkért keresd ügyfélszolgálatunkat.
```

## Kombinációk

- **Limit Form Responses**: szabályozza a beadások számát (globálisan vagy felhasználónként), reset intervallummal és shortcode-os üzenetekkel. A Schedule Forms-szal együtt használva a formot az **idő lejárta** vagy a **limit elérése** közül amelyik előbb bekövetkezik, az zárja.

## Rendszerkövetelmények, licenc, árképzés

- Minimum rendszer: **PHP 7.3+**, **MySQL 5.6+**. A JetFormBuilder Gutenberg-alapú; a Pro add-onok a JetFormBuilderen belül telepíthetők és kezelhetők.
- Licenc/árképzés: a Schedule Forms a **JetFormBuilder Pro** csomag része. Előfizetés 1 webhelyre **49 USD/év**, korlátlan webhelyre **129 USD/év**; elérhetők **lifetime** csomagok is.
- Fejlesztő: **Crocoblock** (Jetimpex Inc.), „Made in Ukraine”.

## Legjobb gyakorlatok

- **Üzenetek megírása**: légy rövid és egyértelmű; ha kell, használd a shortcode-okat dinamikus dátum/idő vagy visszaszámláló megjelenítéséhez.
- **Tesztelés**: élesítés előtt állíts be közeli időpontokat és próbáld ki a megjelenést, majd egy tesztbeküldéssel ellenőrizd a beküldéskori kontrollt.
- **Időzóna ellenőrzése**: győződj meg róla, hogy a WordPress időzóna-beállítás megfelel a kommunikált határidőknek.
- **Kvóta + időzítés**: nagy érdeklődés esetén kombináld beadáslimittel a garantált és stabil működésért.

Összefoglalva: a Schedule Forms percre pontos, megbízható időzítést ad az űrlapjaidhoz, automatikus nyitás/zárás logikával, jól testreszabható státuszkommunikációval és szerveroldali védelemmel — mindezt egyszerű beállítás mellett. Ha határidőket kell tartanod, ez a kiegészítő neked való.