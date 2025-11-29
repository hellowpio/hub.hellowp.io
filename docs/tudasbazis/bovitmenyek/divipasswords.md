---
title: "DiviPasswords"
description: "Divi-kiegészítő, amellyel jelszóval védhetsz bármely Divi szekciót, sort, oszlopot vagy modult; a védett tartalom feloldásig teljesen eltűnik a DOM-ból."
sidebar_label: "DiviPasswords"
---

## Mi ez és milyen problémát old meg?

A **DiviPasswords** egy Divi-bővítmény, amellyel jelszóval zárható bármely Divi-elem (szekció, sor, oszlop, modul – beleértve a DonDivi modulokat is). A lényege: a védett HTML-t a rendszer teljesen **eltávolítja a DOM-ból**, és csak akkor illeszti vissza, amikor a látogató helyes jelszót ad meg. Így a tartalom nem bukkan fel az oldal forrásában, és nem olvasható ki egyszerű vizuális eszközökkel.

Ezzel gyorsan megoldhatod azokat a helyzeteket, amikor csak egy-egy **blokkot** szeretnél védeni (pl. prémium letöltés, űrlap, árlista-részlet), anélkül, hogy komplett tagsági rendszert építenél.

Megjegyzés: Ne keverd össze más, hasonló nevű bővítményekkel; a DiviPasswords natív Divi-integrációt és elem-szintű beállítást használ.

## Fő funkciók, érthetően

- **Elem-szintű védelem**: Bármely Section, Row, Column vagy Module jelszó mögé zárható. Így nem az egész oldal, csak a kijelölt rész lesz védett.
- **Teljes DOM-elrejtés**: A védett HTML-t a rendszer nem rendereli, amíg nincs feloldás. Ez mérsékli a “forrásból kiszivárgás” kockázatát.
- **Testreszabható beléptető űrlap**: Cím (alap: “RESTRICTED ACCESS”), helyőrző, gombszöveg, űrlapszín, valamint **lakat ikon** vagy saját kép választható, hogy passzoljon a designhoz.
- **Jelszó megjegyzése (opció)**: Munkamenet-süti (cookie neve: `divi_passwords`). A böngésző bezárásakor lejár, így jó kompromisszum a kényelem és biztonság között.
- **Natív beállítási hely**: Az adott Divi elem paneljén, az **Advanced > Password** fülön kapcsolhatod és konfigurálhatod.
- **Jelszó-szabályok**: A mező nem lehet üres; tiltott karakterek: `&`, `<`, `>`.

## Hogyan működik?

A bővítmény a védett elemet ideiglenesen **jelszóűrlapra cseréli**. Sikeres ellenőrzés után kéri le és illeszti vissza a tartalmat a DOM-ba. A folyamatot WordPress noncék védik; ha ezeket a noncékat agresszívan cache-eli a tárhelyed vagy a pluginod, hibaüzenetet láthatsz. Ilyenkor állítsd a cache élettartamát kb. **10–12 órára** a noncék lejáratához igazítva.

## Konkrét, gyakorlati példák

- **Prémium letöltések**: Egy gomb és a fájl-URL csak jelszó után kerül a DOM-ba.
- **Űrlapok védelme**: Partneri vagy belső regisztrációs űrlapot zárolhatsz, így nem minden látogató tölti ki.
- **Prémium szekciók**: Árazási oldalon “rejtett” csomagajánlat, ami csak meghívott ügyfeleknek látható.
- **E-mail aláírások, kontaktblokk**: Csak bizonyos partnereknek jelenjen meg egyedi elérhetőség.

## Telepítés és első lépések

1. Követelmény: aktív **Divi Theme**.
2. Telepítés: Plugins > Add New > Upload (ZIP feltöltése), majd aktiválás.
3. Ha DonDivin keresztül vásároltad: licenc megadása a WordPress adminban (DonDivi > Licenses).
4. Használat:
   - Nyisd meg a védendő elemet a Divi Builderben.
   - Advanced > Password: kapcsold be a **Password Protection**-t.
   - Adj meg jelszót (ne használj `&`, `<`, `>` karaktereket).
   - Állítsd be a cím/placeholder/gombszöveg/űrlapszín mezőket, valamint ikont vagy képet.
   - Opcionálisan engedélyezd a **Remember Password** funkciót.
   - Mentsd az oldalt és tesztelj bejelentkezett és inkognitó ablakban is.

## Haladó testreszabás

- **CSS horgok** (gyakori szelektorok):
  ```
  .dd-password-protect, form, .et-pb-icon, h4, .dd-password, .dd-password-error, button
  ```
- **JS esemény**: Tartalom feloldásakor `divipasswords` esemény fut. Használd JS-függő elemek újrainicializálására:
  ```js
  document.addEventListener('divipasswords', (e) => {
    // pl. slider/galéria/3rd-party modul újraindítása
  });
  ```
- **Egyedi modulok támogatása**: Add hozzá a saját modul slugját a filterhez:
  ```php
  add_filter('divi_passwords_supported_modules', function ($modules) {
      $modules[] = 'my_custom_module_slug';
      return $modules;
  });
  ```

## Hibaelhárítás

- “An error has occurred” üzenet: jellemzően cache-elt **nonce** okozza. Állítsd a cache TTL-t 10–12 órára, ürítsd a gyorsítótárat, majd próbáld újra.
- “Széteső” JS-elemek feloldás után: az init kód a betöltéskor futott, a védett HTML viszont csak később került a DOM-ba. Oldd meg a `divipasswords` eseményre való **újrainicializálással** vagy használj Divi/DonDivi natív modulokat.

## Előnyök és értékajánlat

- **Perc alatt használható** elem-szintű zárás, tagsági rendszer nélkül.
- **Kevesebb kiszivárgás**: a védett HTML nem jelenik meg a forrásban feloldásig.
- **Natív szerkesztőélmény**: nincs shortcode-kényszer; minden a megszokott Divi panelen.
- **Fejlesztőbarát**: CSS szelektorok, JS esemény és filter a finomhangoláshoz.
- **Költséghatékony**: gyors megoldás light-membership jellegű igényekre.

## Kinek ajánlott?

- **Divi-t használó webes ügynökségeknek**: gyorsan átadható, ügyfél-specifikus zárt blokkok.
- **Tartalomkészítőknek és oktatóknak**: prémium anyagok és letöltések szekciószinten védhetők.
- **Kisvállalkozásoknak**: zárt ajánlatok, partneri űrlapok, belső információk.
- **Fejlesztőknek**: egyedi modulok és JS-függő komponensek kontrollált feloldása.

## Árazás és elérhetőség – összkép

A DiviPasswords önálló termékként is elérhető, és a DonDivi bővítmények az Elegant Themes felvásárlását követően bizonyos Divi Pro szolgáltatáscsomagok részeként bónuszként is hozzáférhetők. A pontos hozzáférés és ár időszakonként változhat.

## Fontos különbségtétel

Létezik más, hasonló nevű “protect” bővítmény is a Divi ökoszisztémában, eltérő kezelőfelülettel és működéssel. Ez az oldal kifejezetten a **DiviPasswords** bővítményt dokumentálja.