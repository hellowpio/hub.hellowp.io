---
title: "JetFormBuilder Advanced Color Picker"
description: "Pro kiegészítő a JetFormBuilderhez: rugalmas színmentés (HEX/RGB), átlátszóság és fejlett UI a Color Picker mezőhöz."
sidebar_label: "JetFormBuilder Advanced Color Picker"
---

## Mi ez és milyen problémát old meg?

A JetFormBuilder Advanced Color Picker egy Pro kiegészítő, amely a JetFormBuilder űrlapok beépített Color Picker mezőjét fejleszti tovább. Az alapmező csak HEX formátumban ment, míg ezzel az addonnal te döntöd el, hogy **HEX** vagy **RGB** értéket szeretnél menteni, és igény szerint bekapcsolhatod az **átlátszóság (alpha)** kezelését is. Így pontosabb, integráció-barát színadatot kapsz, amit gond nélkül felhasználhatsz profiloknál, bejegyzések megjelenítésénél, vagy bármilyen testreszabási folyamatnál.

## Fő funkciók részletesen

### Fejlett választófelület
A bővítmény egy **palettát** és egy intuitív **picker** felületet ad a Color Picker mezőhöz. A felhasználó vizuálisan választ színt, finomhangolhat árnyalatot és fényerőt, ami gyorsabb és kevesebb hibát eredményez, mint a kézi kódbeírás.

### Választható értékformátumok (HEX/RGB)
A „**Value Format**” beállítással meghatározhatod, hogy a mező **HEX** vagy **RGB** formátumban mentse az értéket. Ez megoldja azt a korlátot, hogy az alap Color Picker csak HEX-et tárol – ha külső rendszered, sablonod vagy CSS-dinamikád RGB-t igényel, egyszerűen átállíthatod.

### Átlátszóság (alpha) kezelése
A „**Show Alpha (opacity)**” kapcsolóval a felhasználó **átlátszóságot** is állíthat. Ez különösen hasznos kiemelésekhez, háttérszínekhez vagy overlay effektekhez, ahol a teljes fedettség helyett finomabb, áttetsző megjelenés kell.

### Egyszerű aktiválás az űrlapmezőben
A Color Picker mező opciói között egy „**Use Advanced Color Picker**” kapcsolóval engedélyezed az addon funkcióit. Így nem kell új mezőt felvenned, csak kibővíted a meglévő képességeit.

### Kompatibilitás és adathasználat
- A kiegészítő **bármely WordPress témával** együttműködik.
- A mentett színt felhasználhatod **User Meta**-ként, bejegyzésmeta-ként vagy feltételes logikában. Mélyebb meta-kezeléshez ajánlott a Crocoblock ökoszisztéma megfelelő eszközeit használni.

## Gyakorlati példák

- **Felhasználói regisztráció**: a felhasználó választ egy profil-színt, amit később a profilfejléchez, avatar-kerethez vagy kiemelésekhez használhatsz.
- **Beküldött bejegyzés űrlap**: a szerző kiválasztja a cikk háttér-, szakasz- vagy betűszínét, te pedig az adott formátumban elmented.
- **Szállítói/piactér jelentkezés**: a jelentkező megadja a márka alapszínét (RGB-ben, ha erre van szükség a branding rendszerben).
- **Megrendelési űrlap**: ajándékcsomagolás színének kiválasztása, szükség esetén átlátszósággal.
- **Design brief**: belsőépítészeti vagy arculati színek rögzítése pontos RGB és alpha értékekkel.

## Telepítés és követelmények

- **Előfeltétel**: aktív JetFormBuilder bővítmény.
- **Telepítés**: Vezérlőpult → JetFormBuilder > Addons → Advanced Color Picker → Install → Activate.
- Az Advanced Color Picker a **Pro csomag** része. Az árak és csomagok idővel változhatnak; vásárlás előtt ellenőrizd a hivatalos oldalon.

## Beállítás és használat

1. Menj a JetForms > Forms menübe, nyisd meg vagy hozd létre az űrlapod.
2. Adj hozzá egy **Color Picker** mezőt.
3. A jobb oldali panelen kapcsold be a **Use Advanced Color Picker** opciót.
4. A **Value Format**-nál válaszd a kívánt mentést: **HEX** vagy **RGB**.
5. Ha kell átlátszóság, kapcsold be a **Show Alpha (opacity)** kapcsolót.
6. Mentsd az űrlapot és teszteld a frontenden.

Példa a mentett érték felhasználására (User Meta-ból kiolvasva):

```php
$color = get_user_meta( get_current_user_id(), 'profile_color', true );
// $color lehet pl. "#1e90ff" vagy "rgb(30, 144, 255)" – attól függően, mit állítottál
echo '<div class="profile-badge" style="background:' . esc_attr( $color ) . ';">&nbsp;</div>';
```

## Előnyök és értékajánlat

- **Rugalmas adattárolás**: pontosan azt a formátumot adod át, amire a rendszered épül.
- **Átlátszóság támogatás**: professzionális megjelenítések és finom vizuális részletek.
- **Jobb UX, kevesebb hiba**: vizuális választó, kevesebb kézi kódbevitel.
- **Idő- és költségmegtakarítás**: nincs szükség egyedi fejlesztésre a formátumváltáshoz vagy alpha támogatáshoz.
- **Skálázható integráció**: a mentett érték könnyen köthető metaadatokhoz és sablonokhoz.

## Kinek ajánlott?

- **Weboldal-tulajdonosoknak és űrlapkészítőknek**, akik színadatot gyűjtenének a felhasználóktól.
- **Designereknak és fejlesztőknek**, akik RGB/alpha értékekkel dolgoznak (branding, UI elemek, overlay-ek).
- **Piactér- és közösségi oldalaknak**, ahol a felhasználói profilok vagy boltok egyedi színt használnak.
- **Tartalomkészítő platformoknak**, ahol a beküldött tartalom megjelenése színnel testreszabható.

## Megfontolások és korlátok

- **Nem önálló bővítmény**: a JetFormBuilder szükséges hozzá.
- Az alap Color Picker önmagában csak **HEX-ben ment**; a **HEX/RGB mentés** és az **alpha** ehhez az addonhoz kötött.
- Metaadatok fejlettebb kezeléséhez érdemes a Crocoblock ökoszisztéma megfelelő eszközeit használni.
- Témafüggetlen, de a mentett színt a saját sablonodban kell **célszerűen megjelenítened** (pl. inline stílus, CSS változók).

---

Röviden: ha űrlapban kérnél színt és fontos, hogy hogyan tárolod (HEX vagy RGB), illetve szeretnéd az átlátszóságot is kezelni, az Advanced Color Picker pontosan erre való. Egyszerre ad jobb felhasználói élményt és fejlesztőbarát, tiszta adatot.