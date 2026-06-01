# NOVO ACADEMY — Claude Handoff & Project Memory

> **Wichtig für jede Claude-Instanz:** Halte diese Datei aktuell. Nach jeder bedeutenden Änderung (neue Features, Bugfixes, neue Kurse, Deployment-Änderungen, Supabase-Schema-Änderungen) wird diese Datei sofort aktualisiert, damit die nächste Instanz — auf jedem Computer — nahtlos weiterarbeiten kann.

---

## 1. Projektübersicht

**NOVO ACADEMY** ist die offizielle Trainingsplattform von Novogenia GmbH.  
- 22 Kurse auf **Deutsch** + 22 Kurse auf **Englisch** (44 total)
- Themen: Genetik-Beratung, Gewicht, Ernährung, Sport, Detox, Burnout, Biologisches Alter, Supplements, Beauty, Pharmakogenetik, Werbrecht
- Nutzer können sich registrieren, Kurse absolvieren, Tests bestehen und ein **Zertifikat als PDF** herunterladen
- Admin-Panel für Nutzerverwaltung und Statistiken

**Live-URL:** https://novogenia.github.io/novo-academy/  
**GitHub-Repo:** https://github.com/novogenia/novo-academy  
**Lokaler Dev-Server:** http://localhost:5181/ (Port fix in vite.config.js)

---

## 2. Tech Stack

| Was | Womit |
|---|---|
| Frontend | React 18 + Vite 5 |
| Auth & DB | Supabase (eu-central-1, Projekt-Ref: `whjxtrrztfzhjqtsyqqf`) |
| Certificate PDF | pdf-lib + @pdf-lib/fontkit (Montserrat TTF) |
| Deployment | GitHub Pages via GitHub Actions |
| Fonts | Montserrat (@fontsource + lokale TTFs in /public/fonts/) |

---

## 3. Lokale Entwicklung

```bash
# Abhängigkeiten installieren
npm install

# .env.local anlegen (NICHT in Git committen!)
cp .env.example .env.local
# Dann .env.local befüllen (siehe Abschnitt 5)

# Dev-Server starten
npm run dev
# → http://localhost:5181/

# Produktions-Build
npm run build
```

**Ohne .env.local** fällt die App auf einen lokalen Mock-Auth (localStorage) zurück — UI ist voll nutzbar zum Entwickeln, aber kein echtes Supabase.

---

## 4. Dateistruktur

```
app/
├── src/
│   ├── App.jsx          — Haupt-App: alle Seiten, Routing, Komponenten
│   ├── data.js          — Deutsche Kursinhalte + i18n-Strings (t(lang, key))
│   ├── data.en.js       — Englische Kursinhalte (COURSES_EN, CATEGORIES_EN)
│   ├── auth.js          — Supabase Auth + Progress-Speicherung (mit Mock-Fallback)
│   ├── generateCert.js  — Zertifikat-PDF-Generator (pdf-lib)
│   └── styles.css       — Design-System (CSS-Variablen, alle Komponenten)
├── public/
│   ├── course-materials/  — PDFs, PPTX pro Kurs
│   ├── thumbnails/        — Kurs-Vorschaubilder
│   ├── fonts/             — Montserrat-TTFs (Light/Regular/Medium/SemiBold/Bold)
│   ├── cert-template.pdf  — Leeres Zertifikat-Design (wird mit pdf-lib befüllt)
│   ├── novogenia-logo.png — Logo für Zertifikat-Vorschau
│   └── signature.png      — Unterschrift für Zertifikat
├── supabase/
│   └── admin-schema.sql   — Vollständiges DB-Schema (profiles, RLS, Trigger, is_admin())
├── .github/workflows/
│   └── deploy.yml         — GitHub Actions: Build + Deploy auf GitHub Pages
├── .env.local             — ⚠️ NICHT in Git! Supabase-Keys (lokal anlegen)
├── .env.example           — Vorlage für .env.local
├── vite.config.js         — Vite-Konfig (base: /novo-academy/, port: 5181)
└── CLAUDE.md              — Diese Datei (Projekt-Gedächtnis)
```

---

## 5. Umgebungsvariablen (.env.local)

```
VITE_SUPABASE_URL=https://whjxtrrztfzhjqtsyqqf.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indoanh0cnJ6dGZ6aGpxdHN5cXFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAxNTk1MjQsImV4cCI6MjA5NTczNTUyNH0.aTklTt_kQqzyMCjx24XZvI1YZ0XMlUdxAsXegXfPXoo
```

> Der Anon-Key ist ein **Public Key** — er ist im Frontend-Bundle sichtbar und absichtlich so designed. Niemals den `service_role`-Key ins Frontend!

**GitHub Secrets** (für Deploy-Pipeline, bereits konfiguriert):
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

---

## 6. Supabase-Schema

Das vollständige Schema liegt in `supabase/admin-schema.sql`. Zusammenfassung:

### Tabellen

**`profiles`** — spiegelt `auth.users`, erweitert um App-Felder:
```sql
id          uuid PRIMARY KEY (= auth.users.id)
email       text
name        text        -- Anzeigename (User kann setzen)
lang        text        -- 'de' | 'en'
is_admin    boolean     DEFAULT false
created_at  timestamptz
last_seen_at timestamptz
deleted_at  timestamptz -- Soft-Delete (NULL = aktiv)
```

**`user_progress`** — ein Row pro User pro Kurs:
```sql
user_id     uuid (→ auth.users.id)
course_uid  text        -- eindeutige Kurs-ID aus data.js / data.en.js
watched     boolean
progress    integer
test_passed boolean
test_score  integer
updated_at  timestamptz
UNIQUE(user_id, course_uid)
```

### Trigger & Funktionen
- `handle_new_user()` — Trigger: legt automatisch ein `profiles`-Row bei jedem Signup an
- `is_admin()` — Security-Definer-Funktion: gibt `true` zurück wenn der aktuelle User Admin ist (für RLS)

### RLS-Policies
- User liest/schreibt nur eigene Rows
- Admin (via `is_admin()`) liest/schreibt alle Rows
- Soft-Delete: `deleted_at IS NOT NULL` = gelöschter User (kein Hard-Delete)

### Admin-User
```sql
UPDATE profiles SET is_admin = true WHERE email = 'evolutionnext696@gmail.com';
```

---

## 7. Architektur-Entscheidungen (wichtig zu verstehen)

### Asset-Pfade (GitHub Pages Subpath)
Die App läuft unter `/novo-academy/` (nicht Root). Alle Assets brauchen dieses Präfix.
- **`assetUrl(path)`** in `data.js` — für einzelne Asset-Pfade: `assetUrl('/signature.png')`
- **`prefixAssetPaths(obj)`** in `data.js` — walkt COURSES/HOME und prefixiert alle Asset-Strings
- **`_BASE`** in `generateCert.js` — für Font- und Template-URLs im PDF-Generator

### Sprachsystem
- **`LangContext`** + **`useLang()`** Hook in `App.jsx` — Sprache wird durch die ganze App propagiert
- **`t(lang, key)`** + i18n-Dictionary in `data.js` — alle UI-Strings übersetzt (60+ Keys)
- **`updateMyLang(lang)`** in `auth.js` — persistiert Sprache in Supabase profiles
- Kurse haben separates `lang`-Feld: `COURSES` (DE) in `data.js`, `COURSES_EN` in `data.en.js`

### Auth-Fallback
`auth.js` prüft via `USE_REAL`-Flag ob Supabase-Env-Vars gesetzt sind. Wenn nicht → localStorage-Mock. Das erlaubt lokales Entwickeln ohne Supabase-Account.

### Zertifikat (Multi-Page)
- Max. 16 Kurse pro Seite (`MAX_MODULES_PER_PAGE = 16`)
- Bei >16 Kursen: `pdf-lib` kopiert die Template-Seite mehrfach via `copyPages()`
- `drawCertPage()` zeichnet den jeweiligen Kurs-Slice auf jede Seite

### Namen aus E-Mail
- `prettyNameFromEmail(email)` — leitet lesbaren Namen aus E-Mail ab (z.B. `john.doe@...` → `John Doe`)
- `bestDisplayName(name, email)` — nimmt `name` wenn gesetzt, sonst `prettyNameFromEmail(email)`

---

## 8. Kurs-Struktur

### Deutsche Kurse (`src/data.js`)
22 Kurse in 10 Kategorien. Kurse haben folgende Felder:
- `id`, `uid` (UUID, stabil), `lang: 'de'`
- `youtubeId` (Single-Video) **oder** `videoSegments[]` (Multi-Video)
- `questions[]` (Multiple-Choice-Test)
- `documents[]` (downloadbare PDFs/PPTX)
- `contentType: 'course' | 'faq' | 'training'`

### Englische Kurse (`src/data.en.js`)
22 Kurse, spiegelbildlich zu DE, mit `lang: 'en'` und eigenen UUIDs.

### Videos — Aktueller Stand (Stand: Juni 2026)

**Vorhandene EN-Videos:**

| Kurs | YouTube-ID |
|---|---|
| The Gene-Diet: Scientific Basis | p02EmbTNRqE |
| Eat Healthy by Your Genes: Scientific Basis | pRU2p2Banno |
| Athletic Performance: Scientific Basis | cdsMJEPUv5A |
| Detoxification: Scientific Basis | DbRx4Kjqkes |
| Biological Age: Scientific Basis | udTodouyDsA |
| Healthy Skin & Appearance: Scientific Basis | IgNeWJ6tTng |
| Gene-Diet Consultation Training | 12 Segmente (siehe data.en.js) |
| Nutrition Consultation Training | 22 Segmente (siehe data.en.js) |
| Detox Consultation Training | 4 Segmente (aus Nutrition-Serie) |

**Fehlende EN-Videos (noch nicht aufgenommen):**
- Burnout & Stress: Scientific Basis (`bo-sci-en`)
- Burnout & Stress: Consultation Training (`bo-report-en`)
- Biological Age: Consultation Training (`ba-report-en`)
- Personalized Supplementation: Scientific Basis (`supp-sci-en`) — falsches Video entfernt, wartet auf richtiges
- Drug Intolerance / Pharmacogenetics: Scientific Basis (`pharma-sci-en`)

---

## 9. Admin-Panel

Erreichbar über das Zahnrad-Icon (nur für `is_admin = true` User sichtbar).

### Features
- **Dashboard** — Nutzer-Statistiken: Gesamt, Aktiv (≥1 Kurs), Wachstum, Zertifikate, Sprach-Split
- **Nutzerliste** — alle User mit Details, Kurs-Status-Toggles
- **User-Aktionen** (Dropdown-Menü pro User):
  - Alle Fortschritte zurücksetzen
  - Umbenennen
  - Admin-Status vergeben/entziehen
  - Soft-Delete / Wiederherstellen
  - „Gelöschte anzeigen"-Toggle in der Toolbar

### Admin-Accounts
- `evolutionnext696@gmail.com` (Daniel Wallerstorfer) — Haupt-Admin

---

## 10. Deployment

### GitHub Actions (`.github/workflows/deploy.yml`)
- Trigger: Push auf `main`
- Build: `npm run build` mit Supabase-Secrets aus GitHub Repository Secrets
- Deploy: `peaceiris/actions-gh-pages` auf Branch `gh-pages`

### Manuell deployen
```bash
git add .
git commit -m "feat: beschreibung"
git push origin main
# → GitHub Actions baut automatisch und deployed
```

### GitHub Pages Einstellungen
- Repo: `https://github.com/novogenia/novo-academy`
- Branch: `gh-pages` (wird von Actions verwaltet)
- Base URL: `/novo-academy/` (konfiguriert in `vite.config.js`)

---

## 11. Bekannte offene Punkte / TODOs

### Hoch-Priorität
- [ ] Fehlende EN-Videos aufnehmen (siehe Abschnitt 8)
- [ ] EN-Version der Werberichtlinie PDF (aktuell zeigt `legal-basics-en` keine Downloads)

### Mittel-Priorität
- [ ] Demo-Reports auf Englisch übersetzen (aktuell nur DE verfügbar; EN-Kurse zeigen keine Downloads)
- [ ] Save-Progress Debounce (Race Condition bei schnellem Klicken)
- [ ] `loadProgress`-Race-Condition beim initialen Load

### Niedrig-Priorität
- [ ] `confirm()` / `alert()` durch schönere Modal-UX ersetzen
- [ ] Aria-Labels auf Englisch für Screen-Reader (`scroll-btn`, `FullVideo`)
- [ ] Hard-Delete von `auth.users` (bräuchte Edge Function mit `service_role`-Key; aktuell nur Soft-Delete)

---

## 12. Wichtige Muster (Code-Konventionen)

### Neuen DE-Kurs hinzufügen
1. Objekt in `COURSES`-Array in `src/data.js` einfügen
2. `uid` muss eine eindeutige UUID sein (nie doppelt verwenden)
3. `initialWatched: false, initialTestPassed: false` immer setzen
4. Assets mit `assetUrl('/pfad/zur/datei')` referenzieren

### Neuen EN-Kurs hinzufügen
1. Objekt in `COURSES_EN`-Array in `src/data.en.js` einfügen
2. Gleiche Regeln wie DE, `lang: 'en'` setzen
3. Wenn kein Video vorhanden: `youtubeId` weglassen (App zeigt automatisch "VIDEO COMING SOON")

### Neuen i18n-String hinzufügen
1. Key zum Dictionary in `data.js` (Funktion `t()`) hinzufügen
2. Beide Sprachen (`de` + `en`) befüllen
3. Im Code: `const tl = useT(); tl('meinKey')` oder `t(lang, 'meinKey')`

### CSS-Variablen (Design-System)
```css
--wine: #5e0047       /* Hauptfarbe Novogenia */
--wine-soft: #f5e9ef  /* Heller Hover-Hintergrund */
--border: #e0d8df
--text: #1a1a1a
--muted: #8a7a88
```

---

## 13. Supabase Dashboard

- URL: https://supabase.com/dashboard/project/whjxtrrztfzhjqtsyqqf
- Region: eu-central-1 (Frankfurt)
- Auth-Anbieter: Email/Passwort + Google OAuth
- Google OAuth Callback: `https://whjxtrrztfzhjqtsyqqf.supabase.co/auth/v1/callback`
- Site URL: `https://novogenia.github.io/novo-academy/`

---

## 14. Google OAuth (Supabase)

- Google Cloud Console Projekt: `novo-academy-497920`
- OAuth-Client konfiguriert für: `https://whjxtrrztfzhjqtsyqqf.supabase.co/auth/v1/callback`
- Redirect URLs in Supabase: `https://novogenia.github.io/novo-academy/`

---

## 15. Änderungslog (neueste zuerst)

| Datum | Änderung |
|---|---|
| 2026-06-01 | `prettyNameFromEmail()` + `bestDisplayName()` — Namen aus E-Mail werden kapitalisiert für Zertifikat-Vorschlag |
| 2026-06-01 | Admin: Soft-Delete / Undelete, Rename, Admin-Promote, Progress-Reset (User-Actions-Menü) |
| 2026-06-01 | Multi-Page Zertifikat: >16 Kurse splitten auf mehrere PDF-Seiten |
| 2026-06-01 | Admin-Panel: Dashboard (Statistiken + Sparkline) + Nutzerliste + Kurs-Toggles |
| 2026-06-01 | Fix: Neue Signups starten ohne vorzertifizierte Kurse (`buildInitialState()` gibt immer false) |
| 2026-06-01 | Supabase-Integration: Auth, Fortschritt, Profile, RLS, is_admin() |
| 2026-06-01 | GitHub Pages Deployment + Google OAuth |
| 2026-06-01 | EN-Übersetzung: alle UI-Strings, LangContext, t()-Dictionary |
| 2026-06-01 | Asset-Pfad-Fix: assetUrl() + prefixAssetPaths() für /novo-academy/ Subpath |
| 2026-06-01 | Englische Kursinhalte (data.en.js) mit korrekten Video-IDs |

---

## 16. Hinweis für die nächste Claude-Instanz

Bitte halte **diese Datei aktuell** nach jeder bedeutenden Änderung:
- Neue Features → Abschnitt 15 (Changelog) + ggf. Abschnitt 7/8/9
- Neue Kurse oder Videos → Abschnitt 8
- Schema-Änderungen → Abschnitt 6
- Neue TODOs → Abschnitt 11
- Deployment-Änderungen → Abschnitt 10

Ziel: Wer diese Datei liest + Zugriff auf den Ordner hat, kann sofort auf jedem Computer weiterarbeiten — ohne diese Konversation zu kennen.
