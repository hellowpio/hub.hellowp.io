# HelloWP Hub

A [HelloWP.io](https://hellowp.io) hivatalos dokumentációs portálja és tudásbázisa.

## Tartalom

### Dokumentáció
- **HelloTools** - Átfogó eszközkészlet WordPress fejlesztőknek
- **HelloIMG** - Képoptimalizáló API WebP és AVIF támogatással
- **Üzemeltetés** - WordPress karbantartás és üzemeltetés

### Tudásbázis
- **Fejlesztői eszközök** - Roots Stack, CI/CD, tesztelés, IDE-k
- **Hasznos eszközök** - Design, adatbázis, API tesztelés, biztonság
- **Oktatóanyagok** - Lépésről lépésre útmutatók
- **Hibaelhárítás** - Gyakori WordPress hibák megoldása

### Súgó
- Számlázás és előfizetések
- Partnerprogram
- Gyakori kérdések

## Technológia

- [Docusaurus 3](https://docusaurus.io/) - Modern statikus dokumentációs keretrendszer
- [React 19](https://react.dev/) - UI komponensek
- [Algolia](https://www.algolia.com/) - Keresés

## Fejlesztés

### Követelmények

- Node.js >= 20
- npm vagy yarn

### Telepítés

```bash
npm install
```

### Lokális fejlesztés

```bash
npm start
```

A fejlesztői szerver elindul a `http://localhost:3000` címen.

### Build

```bash
npm run build
```

A statikus fájlok a `build` mappába kerülnek.

## Docker

### Build

```bash
docker build -t hub-hellowp .
```

### Futtatás

```bash
docker run -d -p 8080:80 hub-hellowp
```

A site elérhető lesz: `http://localhost:8080`

## Közreműködés

1. Fork-old a repót
2. Hozz létre egy feature branch-et (`git checkout -b feature/uj-funkcio`)
3. Commit-old a változtatásokat (`git commit -m 'Add: új funkció'`)
4. Push-old a branch-et (`git push origin feature/uj-funkcio`)
5. Nyiss egy Pull Request-et

## Licensz

A forráskód [MIT](https://opensource.org/licenses/MIT) licensz alatt áll.
A weboldal tartalma [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) licensz alatt áll.

Copyright © [HelloWP.io](https://hellowp.io)
