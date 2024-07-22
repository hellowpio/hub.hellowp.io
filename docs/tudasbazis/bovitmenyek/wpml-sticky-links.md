# WPML Sticky Links

## WPML Sticky Links funkcionalitása

A WPML Sticky Links egy olyan eszköz, amely megakadályozza, hogy az URL-ek változásai miatt a belső linkek megszakadjanak. Amikor létrehozol egy linket, a WPML automatikusan "ragadóssá" teszi azt. Ez azt jelenti, hogy nem az URL-t tárolja, hanem az oldal azonosítóját, ami soha nem változik. Amikor a linkelt oldalt megjeleníted, a WPML beilleszti az aktuális permalinket.

### Előnyei

1. **Automatikus URL-frissítés**: Ha az oldal URL-je megváltozik, a WPML automatikusan frissíti az összes linket, amelyek az adott oldalra mutatnak.
2. **Törött linkek elkerülése**: Megakadályozza, hogy az URL-változások miatt törött linkek keletkezzenek a webhelyeden.
3. **Egyszerű kezelés**: Könnyen kezelhető adminisztrációs felület, ahol gyorsan beállíthatod, hogy mely linkeket szeretnéd ragadóssá tenni.

## Működés más eszközökkel

A WPML Sticky Links zökkenőmentesen együttműködik több más WordPress bővítménnyel és eszközzel is:

- **WPML String Translation**: Lehetővé teszi, hogy a különböző nyelvi verziók közötti linkeket is ragadóssá tegyük.
- **WooCommerce**: Ha van egy többnyelvű e-kereskedelmi oldalad, a WPML Sticky Links gondoskodik arról, hogy minden termékoldalra mutató link mindig naprakész legyen.
- **Elementor**: Az Elementorral készült oldalak esetében is működik, biztosítva, hogy minden belső link ragadós maradjon.

## Konkrét helyzetek és gyakorlati példák

### Webhely átalakítások

Ha átalakítod a webhelyed struktúráját, például megváltoztatod az oldalak szülőjét vagy az URL-ek slug-ját, a WPML Sticky Links automatikusan frissíti az összes érintett linket. Ez különösen hasznos lehet nagyobb webhelyek esetében, ahol sok belső link található.

### Többnyelvű oldalak

Egy többnyelvű oldalon gyakran előfordulhat, hogy egy oldalt több nyelvre is lefordítasz. A WPML Sticky Links biztosítja, hogy minden nyelvi verzióban a megfelelő linkek jelenjenek meg.

### E-kereskedelmi oldalak

Egy WooCommerce áruházban gyakran változhatnak a termékek URL-jei promóciók vagy új termékkategóriák bevezetése miatt. A WPML Sticky Links gondoskodik arról, hogy minden termékre mutató link naprakész legyen.

## Jellemzők és képességek

### Linkek automatikus ragadóssá tétele

Amikor bekapcsolod a WPML Sticky Links modult, automatikusan ragadóssá teszi az összes bejegyzés testében található linket. Emellett lehetőséged van arra is, hogy a widgetekben és stringekben található linkeket is ragadóssá tedd.

### Törött linkek jelentése és javítása

A WPML Sticky Links jelentést készít az esetleges törött linkekről, és segít azok javításában. Ez különösen hasznos lehet nagyobb webhelyeken, ahol sok belső link található.

### Linkek visszaállítása

Ha valamilyen okból vissza szeretnéd állítani a ragadós linkeket normál permalinkekre, egyszerűen kattints a "Revert sticky URLs to permalinks" gombra.

### Többnyelvű oldalak támogatása

Lehetővé teszi, hogy olyan oldalakra mutató linkeket is létrehozzunk, amelyek más nyelveken vannak. Ehhez egy egyszerű filtert kell hozzáadni a theme functions.php fájlhoz.

## Szószedet

- **Sticky Links**: Olyan linkek, amelyek az oldal azonosítóját tárolják az URL helyett.
- **Permalink**: Az oldal állandó URL-je.
- **Slug**: Az URL azon része, amely az oldal nevét tartalmazza.
- **Widget**: Egy WordPress elem, amelyet az oldalsávban vagy más widget-területen helyezhetsz el.
- **Filter**: Egy PHP funkció, amely lehetővé teszi a WordPress alapértelmezett viselkedésének megváltoztatását.