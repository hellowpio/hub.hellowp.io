---
title: "MainWP Dashboard Lock Extension"
description: "A MainWP irányítópult nyilvános felületének elrejtésére és az admin/login oldalak több-rétegű védelmére szolgáló kiegészítő."
sidebar_label: "MainWP Dashboard Lock Extension"
---

## Mi ez és milyen problémát old meg?

A **MainWP Dashboard Lock Extension** a központi MainWP irányítópultod védelmét erősíti meg. Elrejti a nyilvános felületet, és **több rétegű hozzáférés-korlátozást** ad a **wp-admin** és **wp-login** oldalak elé. Ezzel minimalizálod a felfedezhetőséget, csökkented a botok és brute force támadások esélyét, és megelőzöd, hogy illetéktelenek egyáltalán eljussanak a bejelentkezési képernyőig.

## Hogyan működik? – Fő funkciók, érthetően

### Frontend Redirect (nyilvános felület elrejtése)
- Mit csinál: minden nem admin kérés (kezdőlap, oldal, bejegyzés) automatikusan **átirányításra** kerül egy általad megadott URL-re. Így a dashboard „láthatatlan”.
- Miért hasznos: a támadók nem látják a felületet, nem tudják feltérképezni az oldalt.
- Kivételek: bizonyos útvonalakat ki kell venni az átirányításból (pl. **REST API**).
- Megjegyzés: hatással lehet a **WP-Cron** működésére; ha gondot észlelsz időzített feladatoknál, ideiglenesen kapcsold ki az átirányítást vagy pontosítsd a kivételeket.

Példa kivételek megadására:
```
/wp-json
/favicon.ico
/robots.txt
```

### IP-alapú hozzáférés (Allow Login from IP)
- Mit csinál: a **wp-admin** és **wp-login.php** csak a megadott **IP-címekről** érhető el.
- Miért hasznos: már a WordPress előtt megállítja az illetéktelen kéréseket.
- Rugalmasság: több IP-t is megadhatsz (pl. iroda, otthon, VPN). Dinamikus IP esetén több, várható tartományt is felvehetsz.

Példa IP-listára:
```
203.0.113.10
198.51.100.22
198.51.100.0/24
```

### Másodlagos beléptetés – HTTP Basic Auth
Két külön védelmi ponttal:
- **Admin area lock**: a **/wp-admin** eléréséhez a böngésző először **Basic Auth** felhasználónév/jelszó párt kér.
- **Login page lock**: a **/wp-login.php** előtt ugyanez a másodlagos azonosítás kérődik le, még mielőtt a WordPress login képernyő megjelenne.

Miért hasznos: dinamikus IP-k esetén is erős „előszűrő”, drasztikusan csökkenti a brute force próbálkozásokat.  
Megjegyzés: egyes tárhelyeknél a Basic Auth sajátosságai átirányítási hurkot okozhatnak. Ha ilyet látsz, távolítsd el a zárolásokat és egyeztess a szolgáltatóval.

### Remove Locks (vészhelyzeti visszaállítás)
- Egy kattintással eltávolíthatod az összes zárolást, ha kizártad magad vagy hibát tapasztalsz.
- Ha nem tudsz belépni, manuálisan is törölheted a szabályokat a **.htaccess** fájlból. Mindig legyen kéznél **FTP/SFTP** hozzáférés vészhelyzet esetére.

### Beállítás a MainWP-ben
A MainWP irányítópulton belül az **Extensions > Dashboard Lock** felületen éred el a beállításokat. Külön dobozokban konfigurálhatod az átirányítást, az IP-whitelistet és a Basic Auth rétegeket.

## Gyakorlati példák

- Ügynökségi dashboard: átirányítod a nyilvános kéréseket a vállalati honlapra, kivételként meghagyod a **/wp-json** útvonalat, IP-whitelistbe felveszed az iroda és a VPN IP-it, plusz Basic Auth-ot is bekapcsolsz a **/wp-login.php** előtt. A botok nem jutnak el a WordPress loginig.
- Freelancer utazás közben: dinamikus hálózatok miatt főként **Basic Auth**-ra támaszkodsz, és néhány gyakran használt IP-t whitelistelsz. Ha valahol gond adódik a tárhelyen, a **Remove Locks**-szal azonnal visszaállítasz.
- Staging környezet: a frontendet teljesen elrejted átirányítással, a csapat IP-jeit engedélyezed, így az ügyfél véletlenül sem talál rá a tesztkörnyezetre.

## Előnyök és értékajánlat

- **Felismerhetőség csökkentése**: a dashboard gyakorlatilag eltűnik a kíváncsi szemek elől.
- **Támadási felület minimalizálása**: az **IP-whitelist** és a **Basic Auth** a WordPress előtt állítja meg a kéréseket.
- **Idő- és hibamegelőzés**: nem kell kézzel **.htaccess**-t szerkesztened; a bővítmény elvégzi, és egy gombbal vissza is tudod vonni.
- **Rugalmasság csapatoknak**: több IP kezelése, dinamikus IP-k támogatása, gyors vészhelyzeti visszaállítás.

## Kinek ajánlott?

- **WordPress ügynökségeknek** és **fejlesztői csapatoknak**, akik több webhelyet kezelnek egy központi MainWP dashboardból.
- **Rendszergazdáknak**, akik szeretnék a bejelentkezési felületet további rétegekkel védeni.
- **Freelancereknek** és **staging/sandbox** környezeteket használóknak, ahol fontos a láthatatlanság és az előzetes hozzáférés-szűrés.

## Kompatibilitás és fontos megjegyzések

- A megoldás **.htaccess** szabályokra épít, így natívan **Apache/LiteSpeed** alatt működik. **Nginx** esetén a .htaccess nem érvényesül, külön szerveroldali beállításokra lehet szükség.
- A **Frontend Redirect** befolyásolhatja a **WP-Cron** működését; finomhangold a kivételeket vagy kapcsold ki ideiglenesen.
- A **Basic Auth** egyes tárhelyeken tiltott vagy problémás lehet; hurkok esetén távolítsd el a zárolást és egyeztess a szolgáltatóval.
- Ez a kiegészítő nem helyettesíti az **erős jelszavakat**, a **2FA-t** vagy a **VPN**-t; rétegezve együtt a leghatékonyabb.

## Gyors beállítási lépések

1. Engedélyezd a **Frontend Redirect**-et, add meg a cél URL-t, és vedd ki a szükséges kivételeket:
   ```
   /wp-json
   /favicon.ico
   ```
2. Töltsd ki az **Allow Login from IP** mezőt a saját és a csapat IP-címeivel.
3. Kapcsold be a **Login page lock** és/vagy **Admin area lock** funkciót, állíts be külön Basic Auth felhasználót és jelszót.
4. Teszteld privát ablakból és mobilnetről is, majd készíts **visszaállítási tervet** (FTP/SFTP hozzáférés, **Remove Locks** ismerete).

Ezzel a beállítással a MainWP irányítópultod kevésbé lesz felfedezhető, és jóval ellenállóbb a tipikus támadásokkal szemben.