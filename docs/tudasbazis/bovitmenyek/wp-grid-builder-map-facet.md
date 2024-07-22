# WP Grid Builder - Map Facet

A WP Grid Builder Map Facet funkció lehetővé teszi, hogy térképeket készíts Google Maps, Mapbox vagy Leaflet segítségével, melyek szűrhető elemekként működnek. Ez az add-on lehetőséget biztosít arra, hogy markereket jeleníts meg (posztokat, kifejezéseket vagy felhasználókat) a térképen hosszúsági és szélességi koordináták alapján. Továbbá opcionálisan szűrheti a tartalmat a térkép mozgatásakor.

## Kulcsfunkciók

### Térkép API támogatás
- **Google Maps API**: Integrálható a Google Maps szolgáltatásaival.
- **Mapbox API**: Támogatja a Mapbox API-t.
- **Leaflet API**: Nyílt forráskódú lehetőségként támogatja a Leaflet API-t.

### Geolokációs mező
- **Google & Mapbox API-k**: Keresés és szűrés hely alapján.
- **Böngésző Geolocation API**: A felhasználó aktuális helyzetének észlelése IP alapján.

### Marker cluster támogatás
Több marker csoportosítása a térképen, hogy átláthatóbb legyen a megjelenítés.

### Térkép mozgatására szűrhető tartalom
A térkép mozgatásával dinamikusan frissülő tartalom.

### Fejlett egyedi mezők támogatása
Kompatibilis az **Advanced Custom Fields** bővítménnyel, ami lehetővé teszi, hogy könnyedén adj hozzá koordinátákat posztokhoz.

## Használat

### Facet létrehozása
1. Hozz létre egy új facettet, válaszd a **Facet Action > Filter** és a **Filter Type > Map** opciókat.
2. Válaszd ki a térkép típusát (Google Maps, Mapbox vagy Leaflet), és finomhangold a térkép viselkedését, markereket, klasztereket és kontrollokat.

### Távolság szerinti rendezés
- Használhatsz **Sort facet**-et, hogy távolság alapján rendezd az eredményeket, amelyeket a Geolocation facet szűrt.
- A tartalmat csak akkor lehet távolság alapján rendezni, ha a Geolocation facet szűrte.

### Koordináták hozzáadása
Ez az add-on egyedi mezőket kínál lat/lng koordináták hozzáadásához posztokhoz, felhasználókhoz vagy kifejezésekhez közvetlenül az előnézeti módban.

## Példák a használatra

### Ingatlanok keresése térképen
Egy ingatlanügynökségi weboldalon lehetőséget biztosíthatsz az érdeklődőknek, hogy térképen keressenek ingatlanokat. A felhasználók pánikolhatnak a térképen, és az eredmények azonnal frissülnek.

### Éttermek keresése közelben
Egy étteremkereső weboldalon a látogatók megadhatják aktuális helyzetüket és megtalálhatják a legközelebbi éttermeket. A Geolocation funkció automatikusan felismeri a felhasználó helyzetét.

### Turisztikai attrakciók megjelenítése
Egy városi turizmus weboldalon térképen keresztül bemutathatod a helyi látnivalókat és attrakciókat. A felhasználók könnyedén navigálhatnak a térképen és megtalálhatják az érdekes helyeket.

## Szószedet
- **API**: Alkalmazásprogramozási felület.
- **Geolocation**: Helymeghatározás.
- **Marker**: Jelölő elem a térképen.
- **Facet**: Szűrő elem.
- **Advanced Custom Fields (ACF)**: Fejlett egyedi mezők bővítmény.
- **Lat/Lng**: Hosszúsági és szélességi koordináták.