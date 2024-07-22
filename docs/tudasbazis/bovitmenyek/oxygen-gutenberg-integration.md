# Oxygen Gutenberg Integration

## Funkcionalitás

Az Oxygen Gutenberg Integration lehetővé teszi, hogy az Oxygen segítségével megtervezett teljes oldalakat vagy egyes blokkokat közvetlenül a Gutenberg szerkesztőben használjunk és szerkesszünk. Az integráció lehetőséget biztosít arra, hogy az alábbi mezőtípusokat közvetlenül a Gutenbergben módosítsuk:

- Szöveg
- Formázott szöveg (Rich Text)
- Képek
- Ikonok
- Link URL-ek
- Szekció háttérképek

Ezzel a megoldással te vagy az ügyfeleid könnyedén végezhettek tartalommal kapcsolatos módosításokat anélkül, hogy a dizájn alapvető elemeit érintenétek.

## Blokk létrehozása

Oxygen blokkokat háromféleképpen hozhatsz létre:

1. Lépj be az Oxygen -> Block Library menübe és hozz létre egy új blokkot.
2. Kattints a szekció vagy div címkéjére a Structure panelben, majd válaszd a "Copy to Block" opciót.
3. Miután megterveztél egy oldalt, jelöld be a "Make This Full Page Editable In Gutenberg" jelölőnégyzetet az adott oldal Oxygen meta dobozában.

## Blokk használata a Gutenberg szerkesztőben

Ha egy blokkot hozzá szeretnél adni a Gutenberg szerkesztőben:

1. Kattints a **+** gombra a Gutenbergben és válaszd ki az **Oxygen Blocks** kategóriát.
2. Kattints a blokk nevére, hogy hozzáadd az oldaladhoz vagy bejegyzésedhez.

Ha egy teljes oldalt szeretnél hozzáadni, ami blokk formájában van elmentve:

1. Válaszd ki az **Oxygen Full Page Blocks** kategóriát.
2. Kattints a teljes oldal blokk nevére, hogy hozzáadd az oldaladhoz vagy bejegyzésedhez.

## Tartalom szerkesztése a Gutenberg szerkesztőben

A szövegeket, képeket és link szövegeket közvetlenül kattintással szerkesztheted a megfelelő elemre a szerkesztőben. Az ikonokat, háttérképeket és URL-eket a blokkok oldalsáv menüjében módosíthatod. Az oldalsáv mezők felett lebegve vagy kattintva az elem körvonala kék lesz, ami segít azonosítani a kapcsolódó elemet.

## Client Mode

Miután az összes Oxygen oldaladat vagy dizájnodat áthelyezted a Gutenbergbe, hatékonyan átválthatsz Client Mode-ra az alábbiak szerint:

1. Menj az **Oxygen -> Settings -> Post Type Manager** menübe és jelöld be azon bejegyzéstípusokat, amelyeknél szeretnéd elrejteni az Oxygen meta dobozt.
2. Ha te vagy az egyetlen adminisztrátori hozzáféréssel rendelkező felhasználó, menj a **Settings -> Role Manager** menübe és tiltsd le az Oxygen hozzáférést minden nem-adminisztrátori felhasználó számára.

## Blokk szerkesztése az Oxygenben

Egy használatban lévő blokk szerkesztése az Oxygenben minden helyen módosítja a blokk dizájnját, ahol az használatban van. A tartalmi változtatások, amelyeket a Gutenbergben végeztél, megmaradnak, kivéve, ha az elemeket törlöd a blokkból vagy az oldal dizájnjából.

## Nem támogatott elemek

Néhány elem, mint például a **Repeater** és **Dynamic Data**, nem támogatott a Gutenbergben. Ezek az elemek ugyan működnek a front end-en, de nem jelennek meg a Gutenberg szerkesztőben, helyettük egy helykitöltő lesz látható. A helykitöltő címkék megváltoztatásához egyszerűen nevezd át az elemet az Oxygen Structure Pane-jében.

## Gyakorlati példák

### Webshop termékoldalak
Az Oxygen és Gutenberg integrációval könnyedén készíthetsz egyedi termékoldalakat, amelyeket utána egyszerűen szerkeszthetővé tehetsz ügyfeleid számára a Gutenberg felületen.

### Blog bejegyzések
Egy blog bejegyzés dizájnját megtervezheted az Oxygennel, majd a tartalomkezelést ráhagyhatod azoknak, akik nem jártasak a dizájnban, hiszen könnyedén módosíthatják azt Gutenberg segítségével.

### Landing oldalak
Készíts gyönyörű landing oldalakat Oxygennel és tedd lehetővé marketing csapatod számára, hogy gyorsan és hatékonyan módosíthassák a tartalmakat közvetlenül a Gutenbergben.

## Szószedet

- **Oxygen**: Egy vizuális weboldalépítő eszköz.
- **Gutenberg**: A WordPress beépített blokk alapú tartalomszerkesztője.
- **Client Mode**: Üzemmód, amely korlátozza a felhasználók hozzáférését bizonyos adminisztratív funkciókhoz.
- **Meta box**: Egy kezelőfelület elem, amely kiegészítő információkat vagy funkciókat biztosít egy adott tartalomhoz.
- **Block Library**: Egy könyvtár, amely tárolja az Oxygennel készített blokkokat.
- **Structure Pane**: Az Oxygen szerkesztőjében található panel, amely a weboldal struktúráját mutatja.