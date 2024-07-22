# WP Grid Builder - Caching

A WP Grid Builder caching funkciója lehetővé teszi, hogy a rácsok és sablonok szűrésekor gyorsabban töltődjenek be az oldalak a tartalom és a facetek (szűrők) gyorsítótárazásával. Ez a funkció növeli a teljesítményt azáltal, hogy az adatokat egy egyedi táblában tárolja. Fontos megjegyezni, hogy a gyorsítótár nem használható feltételes vagy véletlenszerű sorrendben megjelenített tartalom esetén, mert ebben az esetben egyetlen verzió kerül tárolásra és megjelenítésre a feltételektől függetlenül.

## Legfontosabb jellemzők

### Aszinkron kérések gyorsítótárazása
Az összes aszinkron kérés gyorsítótárazása jelentősen csökkenti a betöltési időt, különösen akkor, ha sok szűrőt használsz az oldalon.

### Egyéni oldalak gyorsítótárának törlése
Lehetőséged van egyenként törölni az egyes oldalak gyorsítótárát, ami nagyban segíti a karbantartást és a frissítéseket.

### Globális gyorsítótár törlése
Az összes oldal gyorsítótárának globális törlése is elérhető, amely hasznos lehet nagyobb változtatások után.

### Facetek vagy rácsok kizárása a gyorsítótárból
Bizonyos faceteket vagy rácsokat kizárhatsz a gyorsítótárazásból, hogy elkerüld az olyan helyzeteket, amikor a gyorsítótár problémákat okozhat.

### Gyorsítótár élettartamának szabályozása
Beállíthatod a gyorsítótár élettartamát, ami segít optimalizálni a rendszer teljesítményét és karbantartását.

### WP-CLI parancsok
A WP-CLI parancsok segítségével könnyedén törölheted vagy takaríthatod a gyorsítótárat. Ez különösen hasznos lehet automatizált feladatok esetén.

## Használat

Amint az add-on aktiválva van, egy új "Caching" menü jelenik meg a WP Grid Builder globális beállításai között. Az adminisztrációs sávban is elérhető egy menüpont a gyorsítótár törlésére. Alapértelmezés szerint a plugin minden kérését gyorsítótárazza az összes rácsból és facetből. Azonban lehetőséged van kizárni rácsokat és faceteket a globális beállításokban.

**Ajánlott: Zárd ki a keresési faceteket a gyorsítótárból**, hogy elkerüld a végtelen számú eredmény kombináció gyorsítótárazását. A keresési facetek esetén ugyanis végtelen számú szűrési kombináció létezhet.

## Gyakorlati példák

### eCommerce oldalak
Az eCommerce oldalak esetén, ahol sok terméket és szűrőt kell kezelni, a gyorsítótárazás jelentősen csökkentheti az oldal betöltési idejét, javítva ezzel a felhasználói élményt és növelve a konverziókat.

### Portfólió oldalak
Portfólió oldalak esetén, ahol sok kép és projekttartalom található, a gyorsítótárazás segít abban, hogy a látogatók zökkenőmentesen böngészhessenek anélkül, hogy hosszú betöltési időket tapasztalnának.

### Blog oldalak
Blog oldalak esetén, ahol sok cikk és kategória található, a gyorsítótárazás lehetővé teszi, hogy az olvasók gyorsan hozzáférjenek a különböző tartalmakhoz, anélkül, hogy várakozniuk kellene az oldal betöltésére.

## Szószedet

- **Aszinkron kérés**: Olyan kérés, amely nem blokkolja a fő folyamatot, hanem párhuzamosan fut.
- **Facet**: Szűrőelem, amely lehetővé teszi a felhasználók számára, hogy specifikus kritériumok alapján szűrjék a tartalmat.
- **Globális beállítások**: Az egész oldalra vonatkozó beállítások.
- **WP-CLI**: A WordPress parancssori eszközkészlete, amely lehetővé teszi az adminisztratív feladatok végrehajtását parancssorból.
- **Gyorsítótár**: Ideiglenes tárhely, amelyben gyakran használt adatok tárolódnak a gyorsabb hozzáférés érdekében.