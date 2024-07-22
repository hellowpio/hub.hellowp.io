# WooCommerce Payment Gateway Based Fees

A WooCommerce Payment Gateway Based Fees egy olyan bővítmény, amely lehetővé teszi, hogy a kiválasztott fizetési mód alapján extra díjat adjunk hozzá a rendeléshez. A díjak automatikusan kiszámíthatók bizonyos termékek árára vagy a kosár teljes összegére alapozva, illetve a bolt adminisztrátora bármikor módosíthatja azokat a rendelésen. A díjak kézzel is hozzáadhatók, például ha a vásárló a fizetési mód megváltoztatását kéri a pénztárfolyamat befejezése után.

## Általános opciók áttekintése:

### Engedélyezés és letiltás
- Lehetőség van a további díjak engedélyezésére vagy letiltására az egész webhelyen anélkül, hogy adatokat törölnénk.
- Egyedi díjak engedélyezése egyetlen fizetési kapura vagy egyetlen termékre.

### Automatikus és kézi számítás
- A díjak automatikus kiszámítása minden egyes fizetési kapura vagy termékre.
- Az automatikusan kiszámított díj módosítása a rendelési oldalon.
- Kézi díj hozzáadása a rendeléshez, miután a felhasználó befejezte a pénztárfolyamatot.
- Kézi díj hozzáadása az adminisztrációs oldalon létrehozott rendelésekhez.

### Díjkorlátok meghatározása
- Maximum limit meghatározása, ameddig a díj hozzáadható a kosár szintjén.
- Maximum limit meghatározása egy termékre vonatkozóan.

### Adószámítás
- Támogatott az adószámítás a további díjakra is.

### Számítási módszerek
1. **Fix összeg**: Fix összeg hozzáadása.
2. **% hozzáadása a teljes összeghez**: Százalékos díj hozzáadása a termék árához vagy a rendelés teljes összegéhez.
3. **% beépítése a teljes összegbe**: A díj bizottsági ráta alapján kerül kiszámításra (a teljes rendelési összeg kerül kifizetésre).

### Többnyelvű támogatás
- WPML kompatibilis – a díjak elnevezése/titulusai lefordíthatók (WPML 4.2.8 vagy későbbi verzió szükséges).

Fontos megjegyezni, hogy jelenleg a bővítmény nem kompatibilis a Jetpack plugin automatizált adószolgáltatásával. Javasolt az "Automatizált adók letiltása" opció kiválasztása (Adó fül) a WooCommerce beállítási oldalon. A támogatás hamarosan elérhető lesz, amint harmadik féltől származó fejlesztők is csatlakozhatnak az automatizált adószámításhoz.

## Gyakorlati példák

1. **Banki átutalás költségei**: Egy webáruházban, ahol több fizetési mód is elérhető, például banki átutalás és online bankkártyás fizetés, lehetőség van arra, hogy banki átutalás választása esetén egy fix költséget adjunk hozzá a rendeléshez.
2. **Nemzetközi fizetési módok kezelése**: Olyan helyzetekben, amikor különböző országokból érkeznek rendelések, és bizonyos nemzetközi fizetési módok extra költségekkel járnak, ezek automatikusan hozzáadhatók a rendeléshez.
3. **Promóciók és kedvezmények**: Speciális promóciók esetén, ahol bizonyos fizetési módok választása esetén kedvezményt kínálunk, a rendszer automatikusan kalkulálja és alkalmazza a megfelelő díjakat.

## Szószedet

- **Bővítmény**: Egy kiegészítő program vagy modul, amely további funkciókat ad egy szoftverhez.
- **Fizetési kapu**: Egy szolgáltatás, amely lehetővé teszi az online fizetések feldolgozását.
- **Adminisztrátor**: A weboldal vagy webshop kezelője, aki hozzáfér az adminisztrációs felülethez.
- **WPML**: WordPress Multi-Language bővítmény, amely lehetővé teszi többnyelvű weboldalak létrehozását.
- **Automatizált adók**: Olyan szolgáltatás, amely automatikusan kiszámítja és alkalmazza az adókat egy rendelés során.

Ezekkel az információkkal könnyebben megértheted és hatékonyan alkalmazhatod a WooCommerce Payment Gateway Based Fees bővítményt, és maximalizálhatod annak előnyeit az online üzletedben.