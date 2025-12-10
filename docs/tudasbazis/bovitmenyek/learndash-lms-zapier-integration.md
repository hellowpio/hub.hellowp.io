---
title: "LearnDash LMS - Zapier Integration"
description: "Hivatalos LearnDash kiegészítő, amellyel no-code automatizmusokkal kapcsolhatod össze a LearnDash eseményeit és műveleteit több ezer külső alkalmazással a Zapieren keresztül."
sidebar_label: "LearnDash LMS - Zapier Integration"
---

## Mi ez és milyen problémát old meg?

A LearnDash – Zapier Integration egy hivatalos kiegészítő, amely közvetlen hidat épít a LearnDash és a Zapier között. Így az oktatási rendszeredben történő események (beiratkozás, kurzus- vagy kvízteljesítés stb.) automatikus folyamatokat indíthatnak külső eszközökben, és fordítva: külső triggerek alapján LearnDash-műveleteket végezhetsz. Megszünteti a manuális export–import kényszert, csökkenti a hibákat és felgyorsítja a tanulói életciklushoz kapcsolódó adminisztrációt.

## Hogyan működik?

- A bővítmény a WordPress adminban külön menüpontot ad (LearnDash LMS > Zapier).  
- API-kulcsos hitelesítéssel kapcsolódik a Zapierhez: a Zap létrehozásakor a LearnDash appot választod, majd megadod a webhelyedet és az API-kulcsot.  
- Az újabb kiadásban a kapcsolódás a hivatalos LearnDash Zapier-appon át történik (nem kell kézi webhookokat állítgatni). A régi, webhookos “Legacy” mód továbbra is elérhető, de új integrációkhoz nem ajánlott.

## Fő funkciók, érthetően

### LearnDash → Zapier triggerek (amikor ez megtörténik…)

- **Beiratkozás kurzusra**: amint egy felhasználó kurzushoz jut, adat megy a Zapiernek (pl. CRM-be felvétel).
- **Beiratkozás csoportra**: csoporttagság indulásakor automatikus műveleteket indíthatsz (pl. jogosultság kiosztása más rendszerekben).
- **Csoport teljesítve**: akkor fut, amikor a tanuló egy teljes csoportkövetelményt teljesít.
- **Kurzus / Lecke / Téma teljesítve**: haladáskor jelzést küld, ami lehet e-mail, címkézés, jelentés, bármi.
- **Kvíz elindítva / Kvíz teljesítve**: indulásnál vagy befejezéskor rögzítheted az eredményeket, indíthatsz értesítést vagy következő lépést.
- **Esszé beküldve**: esszé beadásakor pl. helpdesk ticket nyitható vagy értékelési folyamat indítható.

### Zapier → LearnDash akciók (tedd ezt…)

- **Felhasználó hozzáadása kurzushoz**: külső esemény (pl. fizetés, CRM-címke) alapján beiratás.
- **Felhasználó eltávolítása kurzusról**: hozzáférés visszavonása szabály vagy lejárat szerint.
- **Felhasználó hozzáadása csoporthoz**: vállalati ügyfelek vagy cohort-ok automatikus kezelése.
- **Felhasználó eltávolítása csoportból**: tagságok tisztítása, lifecycle zárása automatizáltan.

## Gyakorlati példák

- **Fizetés → Beiratás**: amikor egy vásárlás sikeres, a tanuló automatikusan megkapja a kurzus-hozzáférést.
- **Kurzusteljesítés → E-mail kampány**: a végzettek promóciós vagy upsell kampányba kerülnek.
- **Kvíz eredmények → Táblázat**: minden kvízteljesítés adatai Google Sheetsbe kerülnek heti riporthoz.
- **Esszé beküldve → Helpdesk**: automatikus ticket, hogy a mentor időben értékeljen.
- **Csoporttagság indul → Csapatértesítés**: Slack/Teams jelzés az oktatói stábnak.

## Előnyök és értékajánlat

- **Időmegtakarítás**: megszűnik a kézi adatmozgatás és a “dupla admin”.
- **Kevesebb hiba**: automatizált, ismételhető folyamatokkal csökkented a tévesztéseket.
- **Gyors reagálás**: a tanulói eseményekre azonnali, személyre szabott lépések indulnak.
- **Skálázhatóság**: több ezer appal kapcsolódsz kódolás nélkül.
- **Kétirányú vezérlés**: nem csak adatot küldesz, hanem jogosultságokat is állítasz külső triggerekből.

## Kinek ajánlott?

- **Online akadémiák és tréningcégek**: marketing, CRM és e-kereskedelem összekötésére.
- **Vállalati L&D/HR**: csoportos beiratások, jogosultságciklusok és riportálás automatizálására.
- **Ügynökségek és rendszergazdák**: skálázható, karbantartható no-code integrációk kialakítására.
- **Oktatók és kurzusüzemeltetők**: akik szeretnének kevesebb adminnal és több automatizmussal működni.

## Telepítés és beállítás (áttekintés)

1. Nyisd meg a LearnDash LMS > Add-Ons menüt, telepítsd és aktiváld a “Zapier for LearnDash” kiegészítőt. (Vagy töltsd fel ZIP-ből a Bővítmények felületen.)
2. A LearnDash LMS > Zapier > Settings oldalon hozd létre/jegyezd fel az API-kulcsot.
3. A Zapierben hozz létre egy új Zapot, válaszd a LearnDash appot, és hitelesíts a webhelyeddel és az API-kulccsal.
4. Válassz triggert vagy akciót, teszteld a kapcsolatot, majd kapcsold élesbe.

Tipp: ha a hitelesítés elakad, gyakran cache vagy biztonsági plugin blokkolja a LearnDash Zapier végpontot. Whitelisteld a “learndash-integration=zapier” lekérdezési végpontot a cache/security szabályokban.

## Fontos részletek és korlátozások

- Az **“Enrolled into course”** trigger nem működik **Open Access** kurzusoknál.
- Zapier-fiók szükséges; a haladó funkciók (szűrők, több-lépéses zapok stb.) egyes csomagokban érhetők el.
- A kiegészítő hivatalos LearnDash add-on; aktív LearnDash licenc mellett érhető el.
- Verziótámogatás irányadóan a WordPress aktuális és az azt megelőző főverzióira terjed ki; minimum WordPress 6.1 használata javasolt.

## Fejlesztői kiterjeszthetőség

A Zapier felé küldött payload testre szabható a következő filterrel:

```php
add_filter( 'learndash_zapier_api_payload', function( $payload, $event, $context ) {
    // Példa: egyedi felhasználói meta hozzáadása
    if ( ! empty( $payload['user_id'] ) ) {
        $payload['user_custom_id'] = get_user_meta( $payload['user_id'], 'crm_contact_id', true );
    }
    // Példa: kurzus meta hozzáadása
    if ( ! empty( $payload['course_id'] ) ) {
        $payload['course_level'] = get_post_meta( $payload['course_id'], 'ld_level', true );
    }
    return $payload;
}, 10, 3 );
```

## Összegzés

Ezzel a kiegészítővel a LearnDash eseményeit és jogosultságkezelését könnyedén összekötheted a teljes tech stackeddel. Az újabb, hivatalos appos működés egyszerűbb beállítást és stabilabb kapcsolatot ad, miközben a régi webhookos mód továbbra is elérhető. Ha szeretnél, készítek neked egy gyors beállítási checklistet vagy minta Zapokat a konkrét eszközeidre (CRM, e-mail, számlázás), hogy azonnal értéket termeljen az automatizálás.