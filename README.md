# HelloWP Hub

A [HelloWP.io](https://hellowp.io) hivatalos dokumentációs portálja és tudásbázisa. 

## Tartalom

- **Dokumentáció** - HelloPack bővítménykezelő részletes útmutatói
- **Tudásbázis** - 300+ WordPress bővítmény magyar nyelvű leírása
- **Súgó** - Gyakori kérdések és hibaelhárítási útmutatók

## Technológia

- [Docusaurus 2](https://docusaurus.io/) - Modern statikus dokumentációs keretrendszer
- [React](https://reactjs.org/) - UI komponensek
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

Copyright © [HelloWP.io](https://hellowp.io). Minden jog fenntartva.
