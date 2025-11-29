---
title: "MB Revision"
description: "Meta Box prémium kiegészítő, amely a WordPress Revíziók funkcióját kiterjeszti az egyedi mezőkre: mentés, összehasonlítás, visszaállítás."
sidebar_label: "MB Revision"
---

## Mi ez és milyen problémát old meg?

Az **MB Revision** a Meta Box keretrendszer prémium bővítménye. A WordPress alapból csak a **címet** és a **tartalmat** verziózza; ezzel szemben az MB Revision a Meta Box-szal létrehozott **összes egyedi mezőt** is beleszámítja a revíziókba. Így teljes, visszaállítható előzményt kapsz a strukturált tartalomhoz, ami csökkenti a humán hibák kockázatát és felgyorsítja a hibákból való visszaállást.

## Hogyan működik?

- Amikor frissítesz egy bejegyzést, a WordPress revíziót készít.
- Az MB Revision automatikusan **átmásolja az egyedi mezőértékeket** az új revízióba.
- A Revíziók összehasonlító képernyőjén a cím és a tartalom alatt megjelennek a **Meta Box mezők változásai** is. A tömbös/csoportos adatok átlátható **JSON**-ként látszanak, a választós és „object” típusok (pl. taxonomy, post, user) pedig **címkékkel** jelennek meg.
- Bármelyik kiválasztott revízióból egy kattintással **visszaállíthatod** az értékeket a szülő bejegyzésre.

## Fő funkciók részletesen

- **Automatikus mezőmentés revízióba**: Nem kell külön megoldást írnod; minden Meta Box mező értéke belekerül az adott bejegyzés revíziójába.
- **Diff nézet egyedi mezőkhöz**: Pontosan látod, melyik mezőnél mi változott. A komplex, tömbös adatok JSON formátuma segít, hogy a különbségek egyértelműek legyenek.
- **Visszaállítás (rollback)**: Egy hibás frissítés után a korábbi állapotot teljes egészében, az **összes mezővel együtt** vissza tudod hozni.
- **Teljes mezőtípus-támogatás**: Működik a **MB Group** csoportmezőkkel, valamint választós és object mezőknél a diff nézet emberbarát címkéket mutat.
- **Szerkesztőségi audit**: Nyomon követheted, ki, mit, mikor módosított az egyedi mezőkben is – nem csak a fő tartalomban.

## Gyakorlati példák

- **Landing oldalak**: A hero szöveg, CTA-k, ikonok és szekciók mind egyedi mezőkben vannak. Ha egy kampány közben elállítasz valamit, egyetlen kattintással visszatérsz az előző, működő verzióhoz.
- **Termékadatok**: Specifikációk, árak, címkék – mind strukturált mezők. Ha véletlenül rossz adat kerül ki, azonnal, hiánytalanul visszaállíthatod.
- **Ügynökségi együttműködés**: Több szerkesztő dolgozik ugyanazon a projekten. A diff nézet megmutatja, pontosan mely mező változott, így gyors a review és a hibaelhárítás.

## Telepítés és előfeltételek

1. Telepítsd és aktiváld a **Meta Box** plugint, majd a **MB Revision** kiegészítőt.
2. Ellenőrizd, hogy a WordPress **revíziók nincsenek letiltva** (ne legyen globálisan kikapcsolva).
3. Ha egyedi bejegyzéstípusokat (CPT) használsz, azoknál legyen engedélyezve a **revisions** támogatás.
4. Engedélyezd a revíziót a meta box konfigurációban a **revision** beállítással.

### Példa: CPT támogatás beállítása

```php
register_post_type('project', [
    'label'    => 'Projektek',
    'public'   => true,
    'supports' => ['title', 'editor', 'revisions'], // fontos!
]);
```

### Példa: Meta Box revízió támogatás

```php
add_filter('rwmb_meta_boxes', function ($meta_boxes) {
    $meta_boxes[] = [
        'title'    => 'Projekt adatok',
        'revision' => true, // engedélyezi a revíziózást
        'fields'   => [
            ['id' => 'budget', 'type' => 'number', 'name' => 'Költségkeret'],
            ['id' => 'features', 'type' => 'group', 'name' => 'Funkciók', 'fields' => [
                ['id' => 'title', 'type' => 'text', 'name' => 'Cím'],
                ['id' => 'enabled', 'type' => 'checkbox', 'name' => 'Engedélyezve'],
            ]],
        ],
    ];
    return $meta_boxes;
});
```

## Használat

- Mentsd/frissítsd a bejegyzést: a rendszer revíziót készít, benne a **Meta Box mezők aktuális értékeivel**.
- Nyisd meg a **Revíziók** összehasonlítót a szerkesztő felületen.
- Nézd meg a változásokat (a mezőknél is), majd szükség esetén kattints a **visszaállítás** gombra, hogy a kiválasztott revízió teljes állapotát visszahozd.

## Korlátozások és fontos megjegyzések

- A revíziók csak **bejegyzésekhez és CPT-khez** érhetők el; **term meta**, **user meta** és **beállítási oldalak** nem támogatottak.
- A tárolt revíziók számát a WordPress szabályozza; ez hatással van az adatbázis-méretre és a visszaállítható előzmények mennyiségére.
- Egyes egyedi bejegyzéstípusoknál a revíziók csak akkor működnek, ha a post type **kifejezetten támogatja** a „revisions” funkciót.
- Ha oldalkészítőt vagy egyedi táblákat használsz, érdemes **staging** környezetben tesztelni a diff és visszaállítás folyamatát.

## Előnyök és értékajánlat

- **Időmegtakarítás**: percek alatt visszaállíthatod a mezők teljes állapotát, manuális javítás helyett.
- **Kockázatcsökkentés**: kevesebb hibalehetőség több szerkesztő mellett is.
- **Átláthatóság**: pontos diff a strukturált adatokhoz, még csoportok és kapcsolt objektumok esetén is.
- **Szerkesztőségi biztonság**: auditkész nyomvonal az egyedi mezőkben történt módosításokról.

## Kinek ajánlott?

- **Szerkesztőségek és ügynökségek**: ahol több ember dolgozik összetett, mezőalapú tartalmon.
- **E-kereskedelem és katalógusok**: ahol kritikus a pontos, strukturált adat.
- **Vállalati és projektoldalak**: sok csoportmezővel, moduláris szekciókkal.
- **Bárkinek**, aki Meta Box-szal épít strukturált tartalmat, és fontos számára a megbízható, visszaállítható változáskövetés.

## Kapcsolódó kiegészítők és kompatibilitás

- **MB Group**: csoportmezők revíziózása első osztályú támogatást kap.
- **MB Custom Table**: együttműködésre optimalizált; frissítések tartalmaznak kompatibilitási finomításokat.

## Összefoglalás

Az MB Revision a Meta Box egyedi mezőinek **teljes körű revíziózását** teszi lehetővé: ment, összehasonlít, visszaállít. Ha strukturált, mezőalapú tartalommal dolgozol, ez a bővítmény az egyik legbiztosabb módja annak, hogy gyorsan és biztonságosan kezeld a változásokat.