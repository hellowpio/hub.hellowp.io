---
title: "JetFormBuilder Limit Form Responses"
description: "JetFormBuilder Pro kiegészítő űrlapbeküldések globális és felhasználói szintű korlátozására, rugalmas üzenetkezeléssel és resetelhető számlálóval."
sidebar_label: "JetFormBuilder Limit Form Responses"
---

## Mi ez és milyen problémát old meg?

A Limit Form Responses a JetFormBuilder Pro hivatalos kiegészítője, amellyel korlátozhatod, hogy egy űrlapból mennyi beküldést fogadsz el összesen, illetve felhasználónként. Ezzel megakadályozod a túljelentkezést, lezárod az űrlapot, amikor betelt a kapacitás, és kiszűröd a duplikált vagy visszaélésszerű beküldéseket. Tipikusan eseményregisztrációk, szavazások, pályázati és regisztrációs űrlapok, illetve kurzusbeadások kontrolljára használják.

## Fő funkciók és működés

### Összesített beküldési limit
Beállíthatod, hogy egy űrlap hány „sikeres” beküldést fogadjon. Amint a plafon eléri a megadott számot, az űrlap lezárható, és egy **Closed message** jelenik meg. Fontos: csak a ténylegesen sikeres beküldések számítanak, ezért érdemes a validációt és az utófeldolgozást pontosan beállítani.

### Felhasználónkénti korlátozás
Megadhatod, hogy egy felhasználó hányszor küldheti be ugyanazt az űrlapot. Az azonosítás több módon történhet:
- **IP-cím**: gyors és egyszerű, de NAT/VPN/proxy miatt nem mindig pontos.
- **Cookie** és **session**: könnyen megkerülhető törléssel vagy böngészőváltással.
- **Bejelentkezett felhasználó**: a legmegbízhatóbb, ha van felhasználói fiók.

A **Maximum submissions** határozza meg a felhasználónkénti limitet. A **Reset interval** napi/heti/havi/éves vagy soha opcióval automatikusan nullázza a személyes számlálót (pl. heti 1 szavazás).

### Üzenetkezelés és testreszabás
Külön üzeneteket állíthatsz be:
- **Closed message**: amikor az összlimitet elérte az űrlap.
- **Restricted message**: amikor a felhasználó elérte az egyéni limitet.
- **Error message**: beküldéskor jelentkező hibák (pl. nem bejelentkezett, limit túllépés).

Az üzenetek stílusát testreszabhatod, és **shortcode-okat** is használhatsz dinamikus tartalmakhoz.

Példa üzenetek:
```
Closed message: A jelentkezés lezárult – a férőhelyek beteltek.
Restricted message: Már beküldted ezt az űrlapot. Próbáld újra a következő időszakban.
Error message: A beküldési limitet elérted. További beküldés nem engedélyezett.
```

### Limitellenőrzés a beküldéskor
A „**Prevent Default on submission**” opcióval a bővítmény nemcsak betöltéskor ellenőrzi a limiteket, hanem a beküldés pillanatában is. Így akkor sem jut át duplikált beküldés, ha valaki megkerüli a felületi ellenőrzést.

### Kompatibilitás és együttműködés
- Bármely WordPress témával működik.
- Más JetFormBuilder Pro add-onokkal kombinálható, pl. a **Schedule Forms** megnyitási/lezárási időzítőjével. Bármelyik feltétel teljesül előbb (limit vagy határidő), az lezárja az űrlapot.

## Gyakorlati példák

- **Eseményregisztráció**: 100 férőhelyig fogadsz jelentkezést. A 101. próbálkozásnál az űrlap lezárva, a Closed message jelenik meg.
- **Szavazás/verseny**: felhasználónként 1 beküldés. IP- vagy bejelentkezés alapú korlátozást használsz, hogy ne legyenek duplikált szavazatok.
- **Kurzus beadás**: maximum 2 próbálkozás hallgatónként, havi reset intervallummal.
- **Regisztrációs űrlap**: egyszeri beküldés a visszaélések és botok mérséklésére.
- **Álláspályázat**: időszakos toborzásnál összlimit és felhasználónkénti limit kombinációja.

## Telepítés és beállítás

1. **Telepítés**
   - Vezérlőpult > JetFormBuilder > Addons > Limit Form Responses > Install > Activate.

2. **Konfigurálás az űrlapon**
   - Vezérlőpult > JetFormBuilder > Forms > válaszd az űrlapot > jobb oldali panel „Limit Form Responses”.
   - Állítsd be:
     - **Limit** (összes sikeres beküldés plafonja).
     - **Closed message**, **Error message** (shortcode támogatással).
     - **Restrict users from multiple responses** bekapcsolása.
     - **Restrict by**: IP, logged-in, cookie, session.
     - **Maximum submissions** felhasználónként.
     - **Reset interval**: nap/hét/hónap/év/soha.
     - **Restricted message** ismételt beküldés esetére.

## Best practice és megfontolások

- Az összlimit csak a **sikeres** beküldéseket számolja – gondoskodj a helyes validációról és hibakezelésről.
- **IP-alapú** korlátozásnál kalkulálj NAT/VPN/proxy hatásokkal; kritikus esetekben a **bejelentkezett felhasználó** azonosítás a legmegbízhatóbb.
- A **Reset interval** segítségével időszakos aktivitást szabályozhatsz (pl. heti szavazás).
- Írj világos, segítőkész **üzeneteket** (Closed/Restricted/Error), szükség esetén dinamikus tartalommal.
- Kombináld **CAPTCHA**-val és egyéb spamszűréssel a visszaélésvédelemhez.
- Hasznos párosítás a **Schedule Forms** add-on: időkorlát + beküldési limit együtt ad teljes kontrollt.

## Kinek ajánlott?

- **Rendezvényszervezőknek**: férőhely- és túljelentkezés-kezelés.
- **Oktatási intézményeknek és trénereknek**: beadások/próbálkozások limitálása.
- **Marketing csapatoknak**: promóciók, early-bird kampányok kontrollja.
- **HR-nek**: pályázati hullámok kordában tartása.
- **Kutatóknak/felméréskészítőknek**: adatminőség javítása, duplikációk elkerülése.

## Előnyök és értékajánlat

- **Kapacitáskontroll**: pontosan annyi beküldést engedsz be, amennyit kezelni tudsz.
- **Adatminőség**: duplikált beküldések visszaszorítása, tisztább statisztika.
- **Szerverterhelés csökkentése**: kevesebb felesleges beküldés és feldolgozás.
- **Rugalmasság**: többféle azonosítás, resetelhető számláló, testreszabható üzenetek.
- **Idő- és költségmegtakarítás**: kevesebb manuális szűrés, átláthatóbb folyamatok.

## Licencelés röviden

A Limit Form Responses a JetFormBuilder **Pro** csomag részét képező kiegészítő. Az aktuális csomagokat és árakat mindig a hivatalos csatornákon ellenőrizd.