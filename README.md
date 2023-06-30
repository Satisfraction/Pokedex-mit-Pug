# Gruppenprojekt Pokedex mit Pug

Dieses Gruppenprojekt wurde am 27.07. bis 28.07. durchgeführt und beinhaltet eine Pokedex-Anwendung mit Pug.

## Projektbeschreibung

Das Ziel dieses Projekts ist es, eine Pokedex-Anwendung zu erstellen, die mit Hilfe von Pug als Template Engine entwickelt wird. Die Anwendung ermöglicht es, Pokémon-Details anzuzeigen und verschiedene Informationen zu den Pokémon abzurufen.

## Installationsanleitung

1. Stelle sicher, dass [Node.js](https://nodejs.org) auf deinem System installiert ist.
2. Klonen Sie dieses Repository: `git clone <Repository-URL>`
3. Navigiere in das Projektverzeichnis: `cd pugdex`
4. Installiere die Abhängigkeiten, indem du den folgenden Befehl ausführst: `npm install`

## Verwendung

Führe die folgenden Schritte aus, um die Anwendung zu starten:

1. Kompiliere die Pug-Dateien: `npm run compile-pug`
2. Starte den Server: `npm start`
3. Öffne einen Webbrowser und gehe zur Adresse [http://localhost:3000](http://localhost:3000)

## Dateistruktur

Die wichtigsten Dateien und Verzeichnisse in diesem Projekt sind wie folgt:

- `index.js` - Die Hauptanwendungsdatei, die den Server startet und Routen definiert.
- `src/` - Das Verzeichnis enthält die Pug-Dateien für die Anzeige der Pokémon-Liste und Pokémon-Details.
- `public/` - Das Verzeichnis enthält die kompilierten Pug-Dateien und die statischen Assets (CSS und JS).

## Probleme und bekannte Fehler

- Unvollständige Daten in der `Pokemon.json`: Aufgrund von fehlenden oder unvollständigen Daten konnten einige Pokémon-Details nicht korrekt angezeigt werden. Wir mussten dann die Daten in der `Pokemon.json` händisch korrigieren bzw. nachtragen.
- Fehler beim Rendern der Pug-Templates: Es sind mehrfach Fehler beim Rendern der Pug-Dateien aufgetreten, insbesondere bei Syntaxfehlern oder falsch formatierten Tags. Diese wurden von uns nach langen Debugging Sessions behoben.


## Abhängigkeiten

- [pug](https://www.npmjs.com/package/pug) - Version 3.0.2

## Autoren

- [Satisfraction](https://github.com/Satisfraction)
- [lindnech](https://github.com/lindnech)
- [JTyga](https://github.com/JTyga)
- [Necmettin58](https://github.com/Necmettin58)

## Lizenz

Dieses Projekt ist unter der [MIT-Lizenz](LICENSE) lizenziert.

