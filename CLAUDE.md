# CLAUDE.md

## Projekt áttekintés

Ez a HelloWP.io hivatalos dokumentációs portálja és tudásbázisa. Magyar nyelvű WordPress dokumentáció Docusaurus 2 keretrendszerrel.

**Weboldal:** https://hub.hellowp.io

## Struktúra

```
docs/
├── dokumentacio/     # HelloPack dokumentáció
│   └── hellopack/    # Bővítménykezelő útmutatók
├── tudasbazis/       # Tudásbázis
│   └── bovitmenyek/  # 300+ WordPress bővítmény leírása
└── sugo/             # Súgó és hibaelhárítás
```

## Technológia

- **Framework:** Docusaurus 2.4.0
- **Node.js:** >= 20
- **Nyelv:** Magyar (hu)

## Fejlesztési parancsok

```bash
npm install          # Függőségek telepítése
npm start            # Fejlesztői szerver (localhost:3000)
npm run build        # Produkciós build
```

## Docker

```bash
docker build -t hub-hellowp .
docker run -d -p 8080:80 hub-hellowp
```

## Git workflow

### Repók

- **Fork:** https://github.com/trueqap/hub.hellowp.io
- **Upstream:** https://github.com/hellowpio/hub.hellowp.io

### Változtatások feltöltése

1. Commit a fork-ba:
```bash
git add -A
git commit -m "docs: Leírás"
git push origin main
```

2. PR létrehozása és merge a központi repóba:
```bash
gh pr create --repo hellowpio/hub.hellowp.io --head trueqap:main --base main --title "Cím" --body "Leírás"
gh pr merge <PR_SZÁM> --repo hellowpio/hub.hellowp.io --merge
```

### Gyors merge (egy lépésben)

```bash
git add -A && git commit -m "docs: Változtatás leírása" && git push origin main
gh pr create --repo hellowpio/hub.hellowp.io --head trueqap:main --base main --title "Cím" --body "Leírás"
gh pr merge <PR_SZÁM> --repo hellowpio/hub.hellowp.io --merge
```

## Dokumentáció formátum

- **Fájltípus:** MDX (Markdown + JSX)
- **Frontmatter:** title, description, sidebar_position
- **Képek:** /static/img/ mappába

## Fontos fájlok

- `docusaurus.config.js` - Fő konfiguráció
- `sidebars.js` - Navigáció struktúra
- `nginx.conf` - Nginx konfig Docker-hez
- `.github/dependabot.yml` - Automatikus függőség frissítések
