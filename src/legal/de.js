/* Rechtstexte DE — verbindliche Fassung (bei Abweichungen gilt Deutsch).
   Stand 19.11.2026, NOVO LEGAL. Grundlage: Prüfberichte 04 (Datenschutz)
   und 05 (Rechtstexte), Gegenprüfung 07. Firmendaten nur aus echten Quellen
   (Firmenbuch, novogenia.com). Struktur muss in allen Sprachen gleich sein
   (scripts/check-i18n.mjs prüft das). */
export default {
  imp: {
    title: 'Impressum und Offenlegung',
    operatorH: 'Betreiberin und Medieninhaberin',
    country: 'Österreich',
    seat: 'Rechtsform: GmbH · Sitz: Eugendorf',
    purposeH: 'Unternehmensgegenstand',
    purpose: 'Genetische Analysen (Labor) sowie Entwicklung und Vertrieb von Analysen und zugehörigen Produkten.',
    managingH: 'Geschäftsführung',
    registerH: 'Firmenbuch',
    court: 'Landesgericht Salzburg',
    uidH: 'UID-Nummer',
    contactH: 'Kontakt',
    emailL: 'E-Mail',
    phoneL: 'Telefon',
    authorityH: 'Aufsichtsbehörden',
    ministry: 'Bundesministerium für Arbeit, Soziales, Gesundheit, Pflege und Konsumentenschutz (BMASGPK)',
    ministryAddr: 'Stubenring 1, 1010 Wien',
    chamberH: 'Kammer und Berufsrecht',
    chamber: 'Mitglied der Wirtschaftskammer Salzburg. Berufsrechtliche Vorschriften: Gewerbeordnung 1994 und Gentechnikgesetz (GTG), abrufbar unter www.ris.bka.gv.at.',
    disclosureH: 'Offenlegung nach § 25 Mediengesetz',
    disclosure: [
      'Medieninhaberin: Novogenia GmbH, Sitz Eugendorf (Anschrift oben).',
      'Unternehmensgegenstand: siehe oben.',
      'Grundlegende Richtung: Information und Schulung zu den Analysen und Produkten der Novogenia GmbH.',
    ],
    contentH: 'Hinweis zu den Inhalten',
    content: 'Die Inhalte dienen der Schulung und allgemeinen Information. Sie ersetzen keine ärztliche Beratung, Diagnose oder Behandlung.',
    liabilityH: 'Haftung für Links',
    liability: 'Trotz sorgfältiger Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt verlinkter Seiten sind ausschließlich deren Betreiber verantwortlich.',
  },

  privacy: {
    title: 'Datenschutzerklärung',
    updated: 'Stand: 19. November 2026',
    sections: [
      { h: '1. Verantwortlicher', p: [
        'Novogenia GmbH, Strass 19, 5301 Eugendorf, Österreich. E-Mail: datenschutz@novogenia.com',
      ] },
      { h: '2. Aufruf der Website (Hosting)', p: [
        'NOVO ACADEMY wird über GitHub Pages der GitHub Inc. (USA) ausgeliefert. Beim Aufruf verarbeitet GitHub technisch notwendig deine IP-Adresse, Browser-Angaben, die aufgerufene Adresse und den Zeitpunkt (Server-Protokolle), um die Seite auszuliefern und vor Angriffen zu schützen. Rechtsgrundlage ist unser berechtigtes Interesse an einer sicheren und erreichbaren Website (Art. 6 Abs. 1 lit. f DSGVO). Die Server-Protokolle speichert GitHub nach seinen eigenen Vorgaben.',
        'Schriftarten liefern wir selbst aus. Dabei werden keine Daten an Google oder andere Dritte übertragen.',
      ] },
      { h: '3. Benutzerkonto', p: [
        'Für Kurse, Tests und Zertifikat brauchst du ein kostenloses Konto. Wir verarbeiten:',
      ], ul: [
        'E-Mail-Adresse und Passwort (das Passwort nur als verschlüsselter Prüfwert),',
        'deinen Namen (freiwillig; er erscheint auf deinem Zertifikat),',
        'deine Spracheinstellung,',
        'deinen Lernfortschritt: angesehene Kurse, deine Testantworten zur Auswertung, Ergebnis und Punktzahl,',
        'den Zeitpunkt der Registrierung und der letzten Nutzung.',
      ], p2: [
        'Zweck ist die Bereitstellung der Akademie mit Fortschritt und Zertifikat. Rechtsgrundlage ist der Nutzungsvertrag (Art. 6 Abs. 1 lit. b DSGVO). Die Zeitpunkte von Registrierung und letzter Nutzung werten wir zusätzlich zusammengefasst aus, um die Akademie zu verbessern (berechtigtes Interesse, Art. 6 Abs. 1 lit. f DSGVO).',
        'Ohne E-Mail-Adresse und Passwort ist kein Konto möglich; alle anderen Angaben sind freiwillig. Dein Zertifikat wird direkt in deinem Browser erzeugt und nicht an uns übertragen.',
      ] },
      { h: '4. Anmelden mit Google', p: [
        'Wenn du dich mit deinem Google-Konto anmeldest, übermittelt uns Google deinen Namen, deine E-Mail-Adresse, dein Profilbild und eine Google-Kennung. Google erfährt dabei, dass du dich bei NOVO ACADEMY anmeldest. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO. Die Nutzung ist freiwillig; du kannst dich auch mit E-Mail-Adresse und Passwort registrieren. Datenschutz bei Google: policies.google.com/privacy',
      ] },
      { h: '5. Datenbank und Anmeldung (Supabase)', p: [
        'Konto- und Fortschrittsdaten speichern wir bei der Supabase Inc. (USA) als Auftragsverarbeiter (Art. 28 DSGVO) auf Servern in Frankfurt am Main (EU). Ein Zugriff aus den USA ist nicht ausgeschlossen (siehe Punkt 10).',
      ] },
      { h: '6. YouTube-Videos', p: [
        'Die Kursvideos liegen auf YouTube (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland). Player und Vorschaubilder von YouTube laden wir erst, wenn du im Cookie-Hinweis „Alle akzeptieren“ wählst oder beim Video „Einwilligung erteilen“ klickst. Erst dann erhält Google deine IP-Adresse, Browser-Angaben und die Information, welches Video du ansiehst, und YouTube kann Cookies auf deinem Gerät speichern.',
        'Rechtsgrundlage ist deine Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 165 Abs. 3 TKG 2021). Für die Übertragung beim Einbetten sind wir mit Google gemeinsam verantwortlich, für die weitere Verarbeitung ist Google allein verantwortlich. Du kannst die Einwilligung jederzeit über „Cookie-Einstellungen“ unten auf jeder Seite widerrufen; die Verarbeitung bis zum Widerruf bleibt rechtmäßig. Datenschutz bei Google: policies.google.com/privacy',
      ] },
      { h: '7. Kursunterlagen zum Herunterladen', p: [
        'Manche Präsentationen und Beispielberichte liegen bei GitHub (GitHub Inc., USA). Wenn du eine solche Datei herunterlädst, erhält GitHub deine IP-Adresse und Browser-Angaben (Art. 6 Abs. 1 lit. b DSGVO).',
      ] },
      { h: '8. Support-Chat „Frag uns!“', p: [
        'Der Support-Chat ist ein KI-Assistent und öffnet sich in einem eigenen Fenster. Er wird für uns von TWOxTEN als Auftragsverarbeiter betrieben (Server in Frankfurt am Main). Zur Beantwortung werden deine Nachrichten über den Vermittlungsdienst OpenRouter (USA) an ein KI-Sprachmodell übertragen, derzeit von OpenAI (USA). Zur Qualitätskontrolle werden die Gespräche im Dienst Langfuse protokolliert. Gesprächsverläufe in der Chat-Datenbank werden nach 30 Tagen gelöscht; Protokolle zur Qualitätskontrolle werden nur so lange gespeichert, wie es für Fehleranalyse und Betrieb nötig ist.',
        'Rechtsgrundlage ist die Beantwortung deiner Anfrage (Art. 6 Abs. 1 lit. b DSGVO). Bitte gib im Chat keine Gesundheitsdaten, Testergebnisse oder Ausweisdaten ein.',
      ] },
      { h: '9. Speicherung auf deinem Gerät', p: [
        'NOVO ACADEMY setzt keine Werbe- oder Analyse-Cookies. Im lokalen Speicher deines Browsers (localStorage) legen wir nur ab, was für den Betrieb unbedingt nötig ist: deine Anmeldesitzung, deine Sprachwahl, deine Cookie-Entscheidung, einen Zwischenspeicher deines Lernfortschritts und einen Zähler fehlgeschlagener Anmeldeversuche zum Schutz deines Kontos. Rechtsgrundlage: § 165 Abs. 3 TKG 2021 (unbedingt erforderlich) und Art. 6 Abs. 1 lit. b und f DSGVO.',
        'Die Anmeldesitzung endet mit der Abmeldung; die übrigen Einträge bleiben, bis du die Website-Daten in deinem Browser löschst. YouTube-Cookies entstehen nur nach deiner Einwilligung (Punkt 6).',
      ] },
      { h: '10. Übermittlung in Drittländer', p: [
        'GitHub, Google, Supabase, OpenRouter und OpenAI haben ihren Sitz oder ihre Muttergesellschaft in den USA. Übermittlungen in die USA stützen sich auf den Angemessenheitsbeschluss der EU-Kommission zum EU-US Data Privacy Framework (für dort zertifizierte Unternehmen) oder auf Standardvertragsklauseln der EU-Kommission (Art. 46 Abs. 2 lit. c DSGVO).',
      ] },
      { h: '11. Wer Zugriff hat', p: [
        'Auf deine Konto- und Fortschrittsdaten haben nur du, die dafür berechtigten Mitarbeitenden der Novogenia GmbH (Verwaltung der Akademie) und unsere Auftragsverarbeiter im Rahmen ihrer Leistung Zugriff. Wir verkaufen keine Daten und geben sie nicht für Werbung weiter.',
      ] },
      { h: '12. Speicherdauer', p: [
        'Deine Kontodaten speichern wir, solange dein Konto besteht. Möchtest du dein Konto löschen lassen, schreib an datenschutz@novogenia.com; wir löschen dann dein Konto samt Fortschritt und Testergebnissen. Support-Chat: siehe Punkt 8. Server-Protokolle: nach den Vorgaben von GitHub (Punkt 2).',
      ] },
      { h: '13. Deine Rechte', p: [
        'Du hast das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18) und Datenübertragbarkeit (Art. 20). Eine Einwilligung kannst du jederzeit mit Wirkung für die Zukunft widerrufen (Art. 7 Abs. 3).',
        'Widerspruchsrecht: Soweit wir Daten auf Grundlage unseres berechtigten Interesses verarbeiten (Punkte 2, 3 und 9), kannst du aus Gründen, die sich aus deiner besonderen Situation ergeben, jederzeit widersprechen (Art. 21 DSGVO).',
        'Schreib dazu an datenschutz@novogenia.com.',
        'Beschwerderecht: Du kannst dich bei der Österreichischen Datenschutzbehörde beschweren (Barichgasse 40–42, 1030 Wien, www.dsb.gv.at) oder bei der Aufsichtsbehörde des Landes, in dem du wohnst oder arbeitest (Art. 77 DSGVO).',
      ] },
    ],
  },

  terms: {
    title: 'Nutzungsbedingungen',
    updated: 'Stand: 19. November 2026',
    sections: [
      { h: '1. Anbieterin und Geltung', p: [
        'NOVO ACADEMY (academy.novopilot.com) wird von der Novogenia GmbH, Strass 19, 5301 Eugendorf, Österreich, FN 323177 k, betrieben („wir“). Diese Bedingungen gelten für die Nutzung der Akademie, des Kontos, der Tests, der Zertifikate und der Unterlagen.',
      ] },
      { h: '2. Kostenlos', p: [
        'Die Nutzung ist kostenlos. Ein Anspruch auf bestimmte Inhalte oder auf ständige Verfügbarkeit besteht nicht. Wir können Inhalte ändern, ergänzen oder entfernen.',
      ] },
      { h: '3. Konto', p: [
        'Für Tests und Zertifikat brauchst du ein Konto. Deine Angaben müssen stimmen, vor allem der Name auf dem Zertifikat. Halte dein Passwort geheim. Du kannst die Nutzung jederzeit beenden und dein Konto per E-Mail an datenschutz@novogenia.com löschen lassen.',
      ] },
      { h: '4. Zertifikat', p: [
        'Das Zertifikat bestätigt, dass du die darauf genannten Module der NOVO ACADEMY abgeschlossen und die Tests bestanden hast. Es ist eine Bestätigung der Novogenia GmbH, kein staatlich anerkannter Abschluss und keine geschützte Berufsbezeichnung. Es berechtigt nicht zu genetischer Beratung und nicht zu ärztlicher Beratung, Diagnose oder Behandlung.',
        'Wir können ein Zertifikat für ungültig erklären, wenn es durch Täuschung oder Manipulation erlangt, auf einen falschen Namen ausgestellt oder verändert wurde.',
      ] },
      { h: '5. Inhalte und Unterlagen', p: [
        'Die Inhalte dienen der Schulung und allgemeinen Information; sie ersetzen keine ärztliche Beratung. Alle Videos, Texte und Unterlagen sind urheberrechtlich geschützt.',
        'Du darfst sie nur zu deiner eigenen Weiterbildung nutzen und, soweit eine Unterlage ausdrücklich dafür freigegeben ist, unverändert in deiner Beratung zu Produkten der Novogenia GmbH. Nicht erlaubt ist, Inhalte zu verändern, zu verkaufen, öffentlich zum Download anzubieten oder für andere Produkte oder Anbieter zu verwenden. Für Werbung, die du selbst gestaltest, bist du selbst verantwortlich.',
      ] },
      { h: '6. Faire Nutzung', p: [
        'Missbrauch ist nicht erlaubt, insbesondere automatisierte Abfragen, das Manipulieren von Tests, das Umgehen von Sicherheitsmaßnahmen und die Nutzung fremder Konten. Bei einem schweren Verstoß können wir das Konto sperren.',
      ] },
      { h: '7. Haftung', p: [
        'Wir erstellen die Inhalte sorgfältig, übernehmen aber keine Gewähr für Vollständigkeit und Aktualität. Wir haften im gesetzlichen Rahmen: unbeschränkt für Vorsatz, grobe Fahrlässigkeit und Personenschäden; für leichte Fahrlässigkeit nur, soweit das Gesetz einen Ausschluss nicht zulässt. Zwingende Rechte von Verbraucherinnen und Verbrauchern bleiben unberührt.',
      ] },
      { h: '8. Datenschutz', p: [
        'Wie wir personenbezogene Daten verarbeiten, steht in unserer Datenschutzerklärung.',
      ] },
      { h: '9. Anwendbares Recht', p: [
        'Es gilt österreichisches Recht unter Ausschluss seiner Verweisungsnormen. Bist du Verbraucherin oder Verbraucher, bleibt dir der Schutz der zwingenden Bestimmungen des Staates erhalten, in dem du deinen gewöhnlichen Aufenthalt hast.',
      ] },
      { h: '10. Sprachfassungen', p: [
        'Diese Bedingungen gibt es in mehreren Sprachen. Bei Abweichungen gilt die deutsche Fassung.',
      ] },
    ],
  },

  /* Hinweis unter dem Registrieren-Knopf; {terms}/{privacy} werden zu Links. */
  regNote: 'Mit der Registrierung oder Anmeldung (auch mit Google) gelten die {terms}. Wie wir deine Daten verarbeiten, steht in der {privacy}.',
  regTerms: 'Nutzungsbedingungen',
  regPrivacy: 'Datenschutzerklärung',
}
