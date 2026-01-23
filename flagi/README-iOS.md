# Flagi Państw - Aplikacja iOS

Aplikacja z flagami państw świata z funkcją wymowy nazw krajów po polsku i angielsku.

## Wymagania

- Node.js (v14 lub nowszy)
- npm
- Xcode (dla iOS)
- CocoaPods (zainstalowane przez `pod install`)

## Instalacja

1. Zainstaluj zależności:
```bash
npm install
```

2. Zsynchronizuj projekt z platformą iOS:
```bash
npx cap sync
```

## Otwieranie projektu w Xcode

Aby otworzyć projekt w Xcode:

```bash
npm run ios
```

Lub ręcznie:
```bash
npx cap open ios
```

To otworzy projekt w Xcode z katalogu `ios/App/App.xcworkspace`.

## Budowanie aplikacji

1. Otwórz projekt w Xcode (`ios/App/App.xcworkspace`)
2. Wybierz urządzenie docelowe (symulator lub fizyczne urządzenie)
3. Kliknij "Run" (⌘R) lub wybierz Product > Run

## Konfiguracja Signing

1. W Xcode, wybierz projekt "App" w nawigatorze
2. Wybierz target "App"
3. Przejdź do zakładki "Signing & Capabilities"
4. Wybierz swój Team (wymagane konto Apple Developer)
5. Xcode automatycznie wygeneruje Provisioning Profile

## Synchronizacja zmian

Po każdej zmianie w plikach HTML/CSS/JS w katalogu `www/`, wykonaj:

```bash
npx cap sync
```

To skopiuje zmiany do projektu iOS.

## Funkcjonalności

- ✅ Wyświetlanie flag wszystkich państw świata
- ✅ Oddzielna sekcja dla Unii Europejskiej
- ✅ Oddzielna sekcja dla krajów UE
- ✅ Wymowa nazw krajów po polsku i angielsku po kliknięciu
- ✅ Responsywny design
- ✅ Obsługa safe-area-inset dla iPhone z notchem

## Struktura projektu

```
flagi/
├── www/              # Pliki webowe (HTML, CSS, JS)
│   ├── index.html
│   ├── style.css
│   └── script.js
├── ios/              # Projekt iOS (Xcode)
│   └── App/
├── package.json
├── capacitor.config.json
└── README-iOS.md
```

## Uwagi

- Aplikacja używa Web Speech API do wymowy nazw krajów
- Flagi są ładowane z flagcdn.com
- Wymowa działa w przeglądarkach i aplikacjach natywnych obsługujących Web Speech API

