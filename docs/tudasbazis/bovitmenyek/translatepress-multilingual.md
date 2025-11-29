---
title: "TranslatePress - Multilingual"
description: "Frontend, vizuális fordítószerkesztő WordPresshez – teljes webhely kézi vagy automatikus fordítása, nyelvváltóval és erős SEO-támogatással."
sidebar_label: "TranslatePress - Multilingual"
---

## Mi ez és milyen problémát old meg?

A TranslatePress egy önhostolt, GPL licencű többnyelvű bővítmény WordPresshez. A teljes webhelyet a frontenden fordíthatod, pont ott, ahol látod a tartalmat. Ezzel megszűnik a “kontekstus nélküli” fordítás: nem kell külön felületek és admin képernyők között ugrálnod, mindent élő előnézettel, WYSIWYG módon intézhetsz. A fordítások a saját adatbázisodban tárolódnak, így a tartalom a te tulajdonod.

## Hogyan működik röviden?

- Megnyitod a vizuális fordítószerkesztőt, rákattintasz egy szöveg- vagy UI-elemre, majd megadod a fordítást.  
- A módosítás azonnal látható előnézetben.  
- Az automatikus fordítás (TP AI/Google/DeepL) minden sztringet egyszer fordít le, és az eredményt lokálisan eltárolja – gyors és költséghatékony.  
- A nyelvváltót rugalmasan elhelyezheted a sablonban, menüben, blokkban vagy shortcode-dal.

Fejlesztője a Cozmoslabs (TranslatePress csapat).

## Fő funkciók, érthetően

- **Frontend, vizuális fordító**: “Amit látsz, azt fordítod.” Fordíthatók a statikus és dinamikus elemek, űrlapok, oldalépítők kimenetei, WooCommerce felületek.
- **Manuális és automatikus fordítás**:  
  - Ingyenesben saját Google Translate kulccsal, plusz egy alap AI-keret kipróbáláshoz.  
  - Prémiumban beépített TranslatePress AI keret és DeepL integráció. A generált fordítások adatbázisban maradnak.
- **Nyelvváltó több formában**: menüelem, lebegő kapcsoló, Gutenberg blokk vagy shortcode. Testreszabhatod a megjelenést és az elhelyezést.
- **Dinamikus sztringek és nagy blokkok**: a gettext sztringek, widgetek és komplex HTML blokkok (Translation Blocks) is fordíthatók.
- **Képek és média fordítása**: nyelvenként más képet, alt szöveget, médiát állíthatsz be.
- **WooCommerce és oldalépítők támogatása**: termékek, kosár/pénztár üzenetek, valamint vizuális építők kimenetei natívan kezelve.
- **Útvonalak kizárása/engedélyezése**: finoman szabályozhatod, mit fordítson a rendszer.
- **Nyelvfüggő tartalommegjelenítés**: shortcode-dal feltételesen jeleníthetsz meg blokkokat nyelv szerint.
- **SEO-támogatás (prémium kiegészítő)**: meta címek/leírások, kép altok, közösségi címkék és URL-slugok fordítása; hreflang jelölés és többnyelvű XML sitemap a népszerű SEO bővítményekkel.
- **Speciális kiegészítők**: korlátlan nyelv (Extra Languages), fordítói fiókok admin jog nélkül, szerepkör szerinti böngészés fordításhoz, nyelv alapú menük, automatikus nyelvfelismerés, DeepL automatikus fordítás.

## Gyakorlati példák

- **WooCommerce bolt**: Fordítsd a termékleírásokat, variációkat, kosár- és pénztárüzeneteket. A SEO kiegészítővel lokalizálhatod a kategória- és termék-slugokat, valamint beállíthatod a hreflang címkéket, így a keresők nyelvenként megfelelő oldalt indexelnek.
- **Oldalépítővel készült landing**: A vizuális szerkesztő az oldalépítő kimenetét mutatja, így egy kattintással fordíthatod a hero címet, CTA gombot, űrlapmezőket. Képeket és ikonokat is cserélhetsz nyelvenként.
- **Zárt tartalmak fordítása**: A szerepkör szerinti böngészés kiegészítővel úgy látod a webhelyet, mint egy konkrét felhasználói szerepkör, így a dinamikus, csak tagoknak látható szövegek is kontextusban fordíthatók.

## Előnyök és értékajánlat

- **Kontekstuális munka**: nincs több találgatás, minden a helyén fordítható.  
- **Költség- és teljesítményelőny**: az automatikus fordítás egyszer történik, a tárolt eredmény újrafelhasználható.  
- **Tulajdonjog és rugalmasság**: a fordításaid a te adatbázisodban maradnak, nincs kiszolgáltatottság.  
- **Erős SEO**: lokalizált metaelemek, slugok és hreflang jelölés a jobb nemzetközi láthatóságért.  
- **Skálázhatóság**: kezdhetsz két nyelvvel, majd bármikor bővítheted korlátlanra.

## Kinek ajánlott?

- **KKV-k és vállalati oldalak**: gyors, megbízható többnyelvűsítés, marketing- és SEO-előnyökkel.  
- **Webáruházak**: WooCommerce-hez optimalizált fordítás és SEO.  
- **Ügynökségek és fejlesztők**: vizuális folyamat, delegálható fordítói fiókok, jól illeszthető meglévő stackbe.  
- **Tartalomkészítők, nonprofitok, oktatási projektek**: egyszerű bevezetés, alacsony fenntartási költség.

## Gyorsstart és alapbeállítás

1. Telepítsd és aktiváld a bővítményt a tárházból.  
2. Beállítások → TranslatePress: válaszd ki az alapértelmezett és a másodlagos nyelvet.  
3. Kapcsold be az automatikus fordítást (opcionális), állítsd be a szolgáltatót és a kereteket.  
4. Helyezd el a nyelvváltót menüben, widgetben vagy blokkban, vagy használd a shortcode-ot:  
   ```
   [language-switcher]
   ```  
5. Admin sáv → Translate Site: nyisd meg a vizuális szerkesztőt, kattints a sztringekre és fordíts.  
6. Ellenőrizd a fontos oldalak SEO-mezőit (prémium SEO kiegészítővel).

Nyelvfüggő tartalom megjelenítése például így:
```
[trp_language language="de"]
Ez a blokk csak németül jelenik meg.
[/trp_language]
```

## Megjegyzések a licencekről és az automatikus fordításról

A beépített AI fordítási keret és több haladó funkció prémium csomagokban érhető el. A generált fordítások az adatbázisban maradnak, nem járnak le. További AI-szavak szükség szerint vásárolhatók. Az ingyenes kiadás két nyelvet kezel; korlátlan nyelvhez az Extra Languages kiegészítő szükséges.

---

Lényeg: a TranslatePress vizuális, gyors és skálázható megoldás, amellyel a teljes WordPress webhelyedet kényelmesen, kontextusban fordíthatod, erős SEO- és e-kereskedelmi támogatással – úgy, hogy a fordítások felett te rendelkezel.