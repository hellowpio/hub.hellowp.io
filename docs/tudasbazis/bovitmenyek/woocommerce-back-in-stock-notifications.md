---
title: "WooCommerce Back In Stock Notifications"
description: "Hivatalos WooCommerce kiegészítő várólistákhoz és készletre érkezési értesítésekhez – automatizált e‑mailek, riportok és skálázható háttérfeldolgozás."
sidebar_label: "WooCommerce Back In Stock Notifications"
---

## Mi ez és milyen problémát old meg?

A WooCommerce Back In Stock Notifications egy hivatalos bővítmény, amellyel **várólistát** hozhatsz létre a készlethiányos termékekhez, majd **automatikus értesítő e‑maileket** küldhetsz, amikor újra elérhetővé válnak. Ezzel visszaszerzed az elveszett bevételeket, és pontosabb képet kapsz a **valós keresletről** – így könnyebben döntesz utánrendelésről és készlettervezésről.

## Hogyan működik röviden?

1. A termékoldalon – ha egy termék vagy variáció „Out of stock” – megjelenik a **feliratkozó űrlap** (vendégeknek e‑mail, bejelentkezettek egy kattintással).
2. Készletfeltöltéskor a rendszer – beállítható **minimális készletküszöb** figyelembevételével – automatikusan **sorba állítja és kiküldi** az értesítéseket.
3. A háttérfeldolgozást az **Action Scheduler** végzi, így nagy listák esetén is megbízható a kiküldés.
4. A vevő az e‑mailre kattintva visszatér a termékhez és megvásárolja.
5. A feliratkozás és leiratkozás a **Saját fiókból** is kezelhető; az e‑mailekben **egy kattintásos** leiratkozás található.

## Fő funkciók és mit csinálnak

### Várólisták és automatizált értesítések
- **Termék- és variációszintű feliratkozás:** változatoknál a választott attribútumokat eltárolja és az értesítőben meg is jeleníti, így a vevő pontosan azt kapja vissza, amire várt.
- **Automatikus triggerelés:** amikor a készlet „Out of stock” állapotról „In stock”-ra vált, indul az e‑mail. Beállítható **minimális készletküszöb**, hogy ne induljon feleslegesen jelzés 1–2 darabnál.
- **Ütemezett kiküldés:** az Action Scheduler sorban, megbízhatóan kezeli a nagy mennyiségű értesítést. Rövid időn belüli ismételt kifogyás‑feltöltés esetén a rendszer nem küld újra értesítést ugyanannak a címzettnek egy rövid védelmi időablakon belül.

### Felhasználói élmény és adatkezelés
- **Double opt‑in** (opcionális) a jogszerűség és tiszta listák érdekében.
- **Vendég feliratkozás** támogatott; beállíthatod, hogy kötelező‑e a bejelentkezés.
- **Saját fiók kezelőfelület:** feliratkozások áttekintése, megerősítő e‑mailek újraküldése, gyors leiratkozás.
- **Testreszabható űrlap- és gombszövegek**, hozzájáruló jelölőnégyzet, valamint a már feliratkozottak számának kijelzése a társadalmi bizonyítékhoz.

### Riportok és admin eszközök
- **Irányítópult** 30 napos aktivitásgrafikonnal és kimutatásokkal: „legkeresettebb”, „legrégebb óta várt”, „legtöbbet feliratkozott” termékek.
- **Értesítések listája:** szűrés e‑mail, termék vagy variáció szerint, **manuális értesítés** létrehozása egyedi ügyfélnek, **CSV export** e‑mail marketinghez vagy elemzéshez.

### Katalógus és e‑mail sablonok
- **Katalógusjelzés**: a listanézetben figyelemfelkeltő üzenet irányítja a felhasználót a termékoldali feliratkozásra.
- **Három testreszabható e‑mail sablon**: feliratkozás visszaigazolása, verifikáció, és készletre érkezési értesítés – mind a WooCommerce e‑mail beállításoknál szabható.

### Kompatibilitás és integrációk
- **HPOS** és **Cart/Checkout Blocks** kompatibilitás.
- **Product Bundles** támogatás: feliratkozás a teljesen készlethiányos bundle‑re; egyedi összeállításokra nincs külön feliratkozás.

## Gyakorlati példák

- **Divat webáruház (variációk):** A 42‑es méretű sportcipő elfogy. A vevő feliratkozik kifejezetten a 42‑es variációra. Amikor 10 darab érkezik, a bővítmény automatikusan küldi az értesítést, az e‑mailben világosan szerepel a méret.
- **Szezonális termékek:** A nyári limitált kiadás gyorsan elfogy. A várólisták megmutatják, melyik színre a legnagyobb az érdeklődés, így a következő rendelésnél ez a szín kap prioritást.
- **Csomagajánlatok:** Egy bundle nem elérhető. A feliratkozók értesítést kapnak, amikor ismét készleten van. Ha a bundle elemei külön állíthatók össze, arra nem jön létre feliratkozás.

## Előnyök és értékajánlat

- **Bevétel-visszaszerzés:** feliratkozóid automatikusan visszatérnek vásárolni.
- **Pontos keresletmérés:** a várólisták alapján magabiztosabb utánrendelési döntések.
- **Időmegtakarítás:** nincs manuális lista, nincs „Mikor lesz?” ügyfélszolgálati kör.
- **Skálázhatóság:** nagy mennyiségű értesítés megbízható háttérfolyamatokkal.
- **Adatvédelem és kontroll:** double opt‑in, kijelölt hozzájárulás, könnyű leiratkozás.

## Kinek ajánlott?

- **Variációkban gazdag boltoknak** (divat, cipő, sport): precíz variációszintű értesítések.
- **Limitált vagy kiszámíthatatlan készletű** üzleteknek: gyorsan visszahozható a kereslet.
- **B2B és nagy kosárértékű** termékeknél: az érdeklődés fenntartása kritikus a döntési ciklusban.
- **Új és növekvő webáruházaknak:** adat alapú készlettervezés és automatizált retenció.

## Üzemeltetési tudnivalók és tippek

- Ne **rejtsd el a készlethiányos termékeket** a WooCommerce készletbeállításoknál, különben az űrlap nem jelenik meg.
- Gondoskodj a **WP‑Cron/loopback** működéséről; nagy listákhoz használj **dedikált SMTP vagy e‑mail szolgáltatót** a kézbesíthetőségért.
- **„On backorder”** állapotnál nincs feliratkozás.
- Egy vevő/termék(variáció) kombinációra **egyszeri feliratkozás** engedélyezett.
- Az értesítések akkor indulnak, amikor a termék **In stock** állapotba vált; a **minimális készletküszöb** segít elkerülni a túl korai kiküldést.

```text
Bevezetési ellenőrzőlista
- Készletrejtés kikapcsolva
- WP‑Cron és loopback működik
- E‑mail küldés beállítva (SMTP/API)
- Double opt‑in és szövegek testreszabva
- Katalógus üzenet bekapcsolva (opcionális)
- Teszt: feliratkozás → feltöltés → értesítés
```

## Gyors bevezetés

1. Telepítsd és aktiváld a bővítményt.
2. Állítsd be a **General** opciókat: double opt‑in, vendégfeliratkozás, minimális készlet.
3. A **Product Page** résznél szabd testre az űrlap szövegeit, engedélyezd a hozzájáruló jelölőnégyzetet, és (opcionálisan) jelenítsd meg a feliratkozók számát.
4. Kapcsold be a **Catalog** üzenetet, hogy a listanézetből is a termékoldali feliratkozásra tereld a forgalmat.
5. Igazítsd a három **e‑mail sablont** a márkádhoz.
6. Teszteld: állíts be egy terméket készlethiányosra, iratkozz fel vendégként, majd töltsd fel a készletet és ellenőrizd a kiküldést az irányítópulton.

## Rendszerkövetelmények és teljesítmény

A bővítmény friss WordPress és WooCommerce környezetben működik, kompatibilis a **HPOS** és a **blokkos pénztár/kosár** megoldásokkal. A kiküldéseket az **Action Scheduler** futtatja háttérfeladatként; nagy mennyiségnél javasolt **dedikált e‑mail infrastruktúra** a stabil kézbesítéshez.

## Megjegyzés a beszerzésről

Ez egy **prémium** WooCommerce kiegészítő hivatalos támogatással és pénzvisszafizetési garanciával. A bevezetés gyors, a működés automatikus, az eredmény pedig mérhető: több visszatérő vásárló és tudatosabb készlettervezés.