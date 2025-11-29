---
title: "Contact Form 7 Multilingual"
description: "WPML hivatalos kiegészítője, amellyel a Contact Form 7 űrlapjaidat egyetlen helyen fordíthatod és több nyelven jelenítheted meg – duplikálás nélkül."
sidebar_label: "Contact Form 7 Multilingual"
---

## Mi ez és milyen problémát old meg?

A **Contact Form 7 Multilingual** (CF7ML) a WPML hivatalos integrációs bővítménye. Arra való, hogy a Contact Form 7 űrlapjaidat egyetlen példányban tartsd karban, miközben minden űrlapszöveg (mezőcímkék, gombok, placeholder-ek, rendszerüzenetek, e‑mail értesítések) a látogató nyelvén jelenik meg. Így elfelejtheted a nyelvenkénti űrlap-duplikálást és a fárasztó szinkronizálást.

## Követelmények és elérhetőség

Szükséges pluginek:
- **WPML**
- **WPML String Translation**
- **Contact Form 7**
- **Contact Form 7 Multilingual**

A CF7ML a WPML-előfizetés részeként érhető el a WPML-fiókod letöltési felületén. A bővítményt a WPML-t fejlesztő OnTheGoSystems készíti és tartja karban.

Megjegyzés: Ne keverd össze a Polylang-ot célzó, közösségi bővítménnyel – az más ökoszisztéma, nem a WPML-es integráció.

## Hogyan működik röviden

- Egyetlen űrlapot hozol létre a Contact Form 7-ben.
- A WPML → Translation Dashboard felületen kijelölöd az űrlapot fordításra.
- Fordítasz az **Advanced Translation Editorban** (kézzel, szakfordítóval vagy automatikusan).
- Ugyanaz az űrlap shortcode kerül minden nyelvi oldalra, de a látogató a saját nyelvén látja a szövegeket és az e‑mailek is azon a nyelven mennek ki.

Példa beágyazásra:
```
[contact-form-7 id="123" title="Kapcsolat"]
```
A shortcode minden nyelvi oldalon azonos marad; a CF7ML gondoskodik a helyes nyelvi tartalomról.

## Fő funkciók, érthetően

- **Teljes űrlapszöveg-fordítás**  
  Nem csak a mezőcímkék fordíthatók, hanem a gombfeliratok, a placeholder-ek, a hibák/sikerüzenetek és az e‑mail értesítések tárgya és törzse is. Így az űrlap minden felirata konzisztensen, anyanyelvi élménnyel jelenik meg.

- **Egypontos WPML-munkafolyamat**  
  A fordítást a WPML fordítási dashboardjáról indítod, és az ATE-ben kapsz jól strukturált, érthetően címkézett szövegblokkokat. Nem kell a CF7-sablonok között manuálisan vadászni a fordítandó részeket.

- **Automatikus fordítás támogatása**  
  Dönthetsz úgy, hogy a WPML automatikusan lefordítja az űrlapszövegeket, majd te csak finomhangolsz. Ez különösen gyors tömeges űrlap-kezelésnél.

- **Placeholder-ek és rendszerüzenetek kényelmes kezelése**  
  A korábban kényes elemek (pl. “Írd be az e‑mail címed”) külön fordítási egységként jelennek meg, így könnyen észreveszed és lefordítod őket.

- **Nyelvspecifikus e‑mail értesítések**  
  Ha a francia látogató tölt ki űrlapot, francia nyelvű visszaigazolást kap, és a belső értesítéseket is nyelv szerint testre szabhatod.

- **Folyamatos kompatibilitás**  
  A CF7 szerkesztő és struktúra változásaihoz a CF7ML rendszeresen ad ki kompatibilitási frissítéseket, hogy az űrlapszerkesztés és a fordítás zökkenőmentes maradjon.

## Gyakorlati példák

- **Egyszerű kapcsolatfelvételi űrlap**  
  Készítesz egy űrlapot magyarul. A WPML-ben elküldöd fordításra, majd ugyanazzal a shortcode-dal beilleszted az angol és német oldalra is. A gomb “Küldés” → “Send” → “Senden” lesz, a hibaüzenetek és köszönőszövegek is lokalizáltak.

- **Ajánlatkérés, több mezővel és visszaigazoló e‑maillel**  
  A tárgy, a válaszcím és a sablon szövege nyelvről nyelvre eltérhet. Például a francia piacon tegező megszólítást használsz, az angol oldalon formálisabb tónust – mindezt egyetlen űrlapból vezérled.

- **Karrier űrlap válogatott placeholder-ekkel**  
  A “Válaszd ki az önéletrajzot” vagy “LinkedIn profilod” mezők placeholder-jei fordíthatók és automatikusan kitölthetők. Nem maradnak “eldugott” angol szövegek.

## Előnyök és értékajánlat

- **Nincs duplikálás, kevesebb hiba**: Egy űrlapot tartasz karban, nem három-négy nyelvi másolatot.
- **Gyorsabb bevezetés**: Az automatikus fordítás és az ATE gyorsítja a publikálást.
- **Konzisztens élmény**: Minden felirat és e‑mail a látogató nyelvén, egységesen.
- **Költség- és időmegtakarítás**: Kevesebb tartalommenedzsment, kisebb emberi hibakockázat.
- **Skálázhatóság**: Új nyelv hozzáadása nem egyenlő új űrlapok létrehozásával – csak fordítasz.

## Célközönség

- **Többnyelvű vállalati és e‑kereskedelmi oldalak**, amelyek WPML-t használnak, és konzisztens űrlapélményt akarnak.
- **Ügynökségek**, amelyek sok ügyfél űrlapját kezelik és minimalizálnák a karbantartási terhet.
- **Marketing- és supportcsapatok**, akik nyelvspecifikus e‑mail-szövegeket és üzeneteket akarnak finoman szabályozni.

## Bevezetés lépésről lépésre

1. Telepítsd és aktiváld: WPML, WPML String Translation, Contact Form 7, Contact Form 7 Multilingual.
2. Hozd létre az űrlapot a Contact Form 7-ben.
3. Nyisd meg a WPML → Translation Dashboard felületet, jelöld ki az űrlapot fordításra.
4. Végezd el a fordítást az Advanced Translation Editorban (automatikus és/vagy kézi).
5. Illeszd be ugyanazt a CF7 shortcode-ot minden nyelvi oldalra – a tartalom nyelvfüggően jelenik meg.

## Gyors hibaelhárítás

- **Hiányzó fordítások**: Ellenőrizd, hogy az űrlap el lett-e küldve fordításra a Translation Dashboardon, és minden sztring jóvá van-e hagyva az ATE-ben.
- **Szerkesztőfelület problémák**: Frissítsd a Contact Form 7-et és a CF7ML-t; a CF7 szerkesztő változásaihoz a CF7ML kompatibilitási javításokat biztosít.
- **Nem forduló placeholder vagy üzenet**: Keresd meg az ATE-ben külön sztringként, vagy kapcsold be az automatikus fordítást a projektben.

--- 

A CF7ML lényege röviden: egy űrlap, több nyelv, teljes kontroll – a WPML fordítási folyamataiba illesztve, professzionális minőségben. Ha több nyelvet kezelsz, ez a leggyorsabb és legtisztább út a hibamentes űrlapokhoz.