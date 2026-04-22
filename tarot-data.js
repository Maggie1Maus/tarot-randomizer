const majorArcanaCards = [
  {
    name: "Der Narr",
    arcana: "Große Arkana",
    meta: "Nummer 0",
    symbol: "✦",
    imageNameEn: "The Fool",
    meanings: {
      upright: {
        buzzwords: ["Neubeginn", "Mut", "Leichtigkeit"],
        summary: "Der Narr bringt frische Luft in deinen Tag. Heute darfst du etwas neugieriger, verspielter und weniger verkopft an die Dinge herangehen.",
        dayImpulses: [
          "Sag eher ja zu einem kleinen Abenteuer als aus Gewohnheit ab.",
          "Starte lieber unperfekt als auf den perfekten Moment zu warten.",
          "Behalte deinen Humor, wenn etwas nicht sofort glattlaeuft."
        ],
        shortTake: "Kurz gesagt: Heute lohnt sich ein mutiger erster Schritt."
      },
      reversed: {
        buzzwords: ["Ueberhastung", "Zerstreuung", "Erdung"],
        summary: "Umgekehrt erinnert dich der Narr daran, nicht in jeden Impuls blind hineinzuspringen. Heute hilft dir ein kurzer Realitaetscheck mehr als schneller Aktionismus.",
        dayImpulses: [
          "Pruefe vor einer Zusage, ob du wirklich Zeit und Energie dafuer hast.",
          "Lenke deine Aufmerksamkeit auf eine Sache statt auf zehn kleine Nebenbaustellen.",
          "Erdende Routinen wie Essen, Trinken oder frische Luft bringen dich zurueck zu dir."
        ],
        shortTake: "Kurz gesagt: Geh los, aber nicht kopflos."
      }
    }
  },
  {
    name: "Der Magier",
    arcana: "Große Arkana",
    meta: "Nummer 1",
    symbol: "✦",
    imageNameEn: "The Magician",
    meanings: {
      upright: {
        buzzwords: ["Fokus", "Gestaltungskraft", "Klarheit"],
        summary: "Der Magier zeigt: Du hast heute mehr Einfluss, als du vielleicht glaubst. Deine Worte, Entscheidungen und kleinen Handlungen koennen viel in Bewegung bringen.",
        dayImpulses: [
          "Nimm dir ein Vorhaben bewusst vor und zieh es konzentriert durch.",
          "Sprich klar aus, was du willst oder brauchst.",
          "Nutze vorhandene Mittel, statt auf perfekte Bedingungen zu warten."
        ],
        shortTake: "Kurz gesagt: Heute liegt Kraft in deiner klaren Absicht."
      },
      reversed: {
        buzzwords: ["Selbstzweifel", "Verzettelung", "Innere Sammlung"],
        summary: "Umgekehrt zeigt der Magier eine verstreute Energie. Heute geht es weniger darum, mehr zu tun, sondern deine Aufmerksamkeit wieder zu buendeln.",
        dayImpulses: [
          "Begrenze dich auf das Wichtigste und lass Nebenschauplaetze ruhen.",
          "Verwechsle Unsicherheit nicht mit fehlender Faehigkeit.",
          "Rede dir selbst nicht klein, bevor du ueberhaupt begonnen hast."
        ],
        shortTake: "Kurz gesagt: Sammle deine Kraft, statt sie zu verstreuen."
      }
    }
  },
  {
    name: "Die Hohepriesterin",
    arcana: "Große Arkana",
    meta: "Nummer 2",
    symbol: "✦",
    imageNameEn: "The High Priestess",
    meanings: {
      upright: {
        buzzwords: ["Intuition", "Stille", "Feingefuehl"],
        summary: "Die Hohepriesterin macht deinen Tag leiser, aber nicht weniger klar. Antworten kommen heute eher aus dem Spueren als aus lauter Aktivitaet.",
        dayImpulses: [
          "Nimm ein unterschwelliges Bauchgefuehl ernst.",
          "Lass zwischen Reiz und Reaktion einen kleinen Moment Stille entstehen.",
          "Beobachte erst, bevor du dich festlegst."
        ],
        shortTake: "Kurz gesagt: Heute weiss dein Inneres oft mehr als dein Kopf."
      },
      reversed: {
        buzzwords: ["Innere Unruhe", "Unsicherheit", "Rueckverbindung"],
        summary: "Umgekehrt deutet die Hohepriesterin auf ein Uebergehen deiner inneren Stimme hin. Heute hilft dir weniger Aussenlaerm und mehr Ehrlichkeit mit dir selbst.",
        dayImpulses: [
          "Frage dich, welche Gefuehle du gerade wegschiebst.",
          "Triff keine Entscheidung nur, um die Unsicherheit schnell loszuwerden.",
          "Zieh dich kurz zurueck, wenn alles zu laut wird."
        ],
        shortTake: "Kurz gesagt: Hoere wieder hin, statt dich selbst zu uebertuenen."
      }
    }
  },
  {
    name: "Die Herrscherin",
    arcana: "Große Arkana",
    meta: "Nummer 3",
    symbol: "✦",
    imageNameEn: "The Empress",
    meanings: {
      upright: {
        buzzwords: ["Fuelle", "Waerme", "Naehrung"],
        summary: "Die Herrscherin bringt eine weiche, freundliche Energie in deinen Tag. Heute darfst du dem nachgehen, was dich wachsen, aufatmen oder aufbluehen laesst.",
        dayImpulses: [
          "Sorge gut fuer deinen Koerper und deinen Rhythmus.",
          "Schenk etwas oder jemandem bewusst Aufmerksamkeit und Zuneigung.",
          "Vertrau darauf, dass auch Genuss produktiv sein darf."
        ],
        shortTake: "Kurz gesagt: Heute naehrst du dich am besten mit Freundlichkeit."
      },
      reversed: {
        buzzwords: ["Leermachen", "Selbstfuersorge", "Ungleichgewicht"],
        summary: "Umgekehrt zeigt die Herrscherin, dass du vielleicht mehr gibst als du gerade tragen kannst. Heute ist Nachnaehren wichtiger als noch mehr leisten.",
        dayImpulses: [
          "Setz eine Grenze dort, wo du dich schon laenger auslaugst.",
          "Achte darauf, ob du Beduerfnisse anderer ueber deine eigenen stellst.",
          "Erlaube dir eine Pause ohne schlechtes Gewissen."
        ],
        shortTake: "Kurz gesagt: Fuersorge beginnt heute zuerst bei dir."
      }
    }
  },
  {
    name: "Der Herrscher",
    arcana: "Große Arkana",
    meta: "Nummer 4",
    symbol: "✦",
    imageNameEn: "The Emperor",
    meanings: {
      upright: {
        buzzwords: ["Struktur", "Verantwortung", "Stabilitaet"],
        summary: "Der Herrscher laedt dich ein, deinem Tag eine klare Form zu geben. Ordnung, Abgrenzung und Verbindlichkeit tun dir heute gut.",
        dayImpulses: [
          "Triff eine klare Entscheidung statt weiter zu schieben.",
          "Bring eine chaotische Ecke deines Tages in eine einfache Struktur.",
          "Sprich Grenzen ruhig und sachlich aus."
        ],
        shortTake: "Kurz gesagt: Heute entsteht Ruhe durch klare Ordnung."
      },
      reversed: {
        buzzwords: ["Starre", "Kontrolle", "Druck"],
        summary: "Umgekehrt warnt der Herrscher davor, alles mit Kontrolle loesen zu wollen. Heute darfst du Fuehrung zeigen, ohne dich selbst zu verhaerten.",
        dayImpulses: [
          "Pruefe, ob du gerade Sicherheit mit Strenge verwechselst.",
          "Lass eine Kleinigkeit bewusst lockerer laufen.",
          "Vertrauen kann heute wirksamer sein als Druck."
        ],
        shortTake: "Kurz gesagt: Stabilitaet braucht heute Herz, nicht Haerte."
      }
    }
  },
  {
    name: "Der Hierophant",
    arcana: "Große Arkana",
    meta: "Nummer 5",
    symbol: "✦",
    imageNameEn: "The Hierophant",
    meanings: {
      upright: {
        buzzwords: ["Werte", "Orientierung", "Lernen"],
        summary: "Der Hierophant legt heute den Fokus auf das, was dir wirklich Halt gibt. Vertraute Routinen, gute Ratschlaege oder bewusste Rituale koennen dir Orientierung geben.",
        dayImpulses: [
          "Frag dich, welcher Wert heute dein Handeln leiten soll.",
          "Hol dir Rat von jemandem, dem du vertraust.",
          "Tu etwas Vertrautes, das dich innerlich sammelt."
        ],
        shortTake: "Kurz gesagt: Heute findest du Richtung in dem, was sich fuer dich wahr anfuehlt."
      },
      reversed: {
        buzzwords: ["Enge", "Innere Reibung", "Neuausrichtung"],
        summary: "Umgekehrt zeigt der Hierophant, dass alte Muster oder Regeln gerade nicht mehr ganz passen. Heute darfst du hinterfragen, was du nur aus Gewohnheit uebernimmst.",
        dayImpulses: [
          "Mach dir bewusst, welche Erwartung nicht mehr zu dir passt.",
          "Erlaub dir, einen eigenen Weg zu waehlen, auch wenn er ungewohnt ist.",
          "Halte nicht an etwas fest, nur weil es immer so war."
        ],
        shortTake: "Kurz gesagt: Heute darfst du deinen eigenen Kompass nachjustieren."
      }
    }
  },
  {
    name: "Die Liebenden",
    arcana: "Große Arkana",
    meta: "Nummer 6",
    symbol: "✦",
    imageNameEn: "The Lovers",
    meanings: {
      upright: {
        buzzwords: ["Verbundenheit", "Herzenswahl", "Echtheit"],
        summary: "Die Liebenden erinnern dich heute daran, nicht nur sinnvoll, sondern auch stimmig zu waehlen. Beziehungen, Begegnungen und Entscheidungen wollen mit dem Herzen abgeglichen werden.",
        dayImpulses: [
          "Waehl das, was sich fuer dich innerlich ehrlich anfuehlt.",
          "Suche heute echte Verbindung statt oberflaechlicher Harmonie.",
          "Sprich offen aus, was dir wirklich wichtig ist."
        ],
        shortTake: "Kurz gesagt: Heute fuehrt dich Echtheit weiter als blosse Vernunft."
      },
      reversed: {
        buzzwords: ["Zerrissenheit", "Unklarheit", "Selbsttreue"],
        summary: "Umgekehrt zeigen die Liebenden eine innere Spaltung. Heute hilft es, zuerst die Verbindung zu dir selbst wiederherzustellen, bevor du im Aussen eine Wahl triffst.",
        dayImpulses: [
          "Frag dich, wo du dich gerade verbiegst, um es allen recht zu machen.",
          "Verschiebe eine wichtige Entscheidung, wenn du innerlich noch zerrissen bist.",
          "Rede dir deine Gefuehle nicht aus, nur weil sie unbequem sind."
        ],
        shortTake: "Kurz gesagt: Heute beginnt jede gute Wahl mit Selbsttreue."
      }
    }
  },
  {
    name: "Der Wagen",
    arcana: "Große Arkana",
    meta: "Nummer 7",
    symbol: "✦",
    imageNameEn: "The Chariot",
    meanings: {
      upright: {
        buzzwords: ["Vorwaertsdrang", "Ausrichtung", "Disziplin"],
        summary: "Der Wagen bringt Tempo und Zielklarheit. Heute kommst du gut voran, wenn du deine Energie bewusst auf eine Richtung buendelst.",
        dayImpulses: [
          "Setz dir fuer den Tag ein klares Hauptziel.",
          "Bleib in Bewegung, auch wenn nicht alles perfekt vorbereitet ist.",
          "Lenke deine Energie dahin, wo wirklich Fortschritt moeglich ist."
        ],
        shortTake: "Kurz gesagt: Heute gewinnt, wer seine Kraft gezielt steuert."
      },
      reversed: {
        buzzwords: ["Verzettelung", "Gegenzug", "Selbststeuerung"],
        summary: "Umgekehrt zeigt der Wagen, dass zu viele Richtungen gleichzeitig an dir ziehen. Heute hilft dir nicht mehr Tempo, sondern besseres Lenken.",
        dayImpulses: [
          "Lass Dinge weg, die nur Lautstaerke erzeugen, aber nicht weiterbringen.",
          "Unterbrich einen inneren Wettlauf, wenn er dich nur stressiger macht.",
          "Finde deinen Takt wieder, statt fremdem Druck hinterherzulaufen."
        ],
        shortTake: "Kurz gesagt: Heute bringt dir kluge Steuerung mehr als rohes Tempo."
      }
    }
  },
  {
    name: "Die Kraft",
    arcana: "Große Arkana",
    meta: "Nummer 8",
    symbol: "✦",
    imageNameEn: "Strength",
    meanings: {
      upright: {
        buzzwords: ["Sanfte Staerke", "Mut", "Innere Ruhe"],
        summary: "Die Kraft zeigt dir heute eine Form von Staerke, die nicht laut sein muss. Mit Geduld, Freundlichkeit und Standhaftigkeit erreichst du mehr als mit Haerte.",
        dayImpulses: [
          "Bleib auch in angespannten Momenten freundlich zu dir selbst.",
          "Reagiere bewusst statt impulsiv.",
          "Vertrau darauf, dass leise Konsequenz heute wirksamer ist als Druck."
        ],
        shortTake: "Kurz gesagt: Heute ist deine sanfte Standhaftigkeit deine groesste Kraft."
      },
      reversed: {
        buzzwords: ["Erschoepfung", "Selbstkritik", "Nervensystem"],
        summary: "Umgekehrt zeigt die Kraft, dass du vielleicht gerade mehr spannst als tragen kannst. Heute ist es stark, Tempo rauszunehmen und dich zu entlasten.",
        dayImpulses: [
          "Nimm wahr, wo du innerlich gegen dich kaempfst.",
          "Gib dir mehr Milde statt mehr Druck.",
          "Waehle heute das Beruhigende, nicht das Aufputschende."
        ],
        shortTake: "Kurz gesagt: Heute entsteht Kraft aus Nachsicht, nicht aus Kampf."
      }
    }
  },
  {
    name: "Der Eremit",
    arcana: "Große Arkana",
    meta: "Nummer 9",
    symbol: "✦",
    imageNameEn: "The Hermit",
    meanings: {
      upright: {
        buzzwords: ["Rueckzug", "Einsicht", "Innere Klarheit"],
        summary: "Der Eremit macht deinen Tag stiller und konzentrierter. Nicht alles muss sofort geteilt oder geloest werden; manche Antworten reifen im eigenen Tempo.",
        dayImpulses: [
          "Gib dir heute bewusst Raum fuer einen stillen Moment.",
          "Schau nach innen, bevor du im Aussen nach Bestaetigung suchst.",
          "Reduziere Reizueberflutung, wenn du merkst, dass alles zu viel wird."
        ],
        shortTake: "Kurz gesagt: Heute findest du viel in der ruhigen Begegnung mit dir selbst."
      },
      reversed: {
        buzzwords: ["Isolation", "Rueckzugsschleife", "Kontakt"],
        summary: "Umgekehrt kann der Eremit auf ein zu starkes Einigeln hinweisen. Heute hilft dir nicht endloses Gruebeln, sondern ein kleiner, ehrlicher Kontaktpunkt nach aussen.",
        dayImpulses: [
          "Zieh dich nicht nur aus Gewohnheit zurueck.",
          "Teil eine Sorge mit jemandem, statt sie alleine schwer werden zu lassen.",
          "Verwechsle Stille nicht mit Abschottung."
        ],
        shortTake: "Kurz gesagt: Heute darf Rueckzug heilsam sein, aber nicht einsam machen."
      }
    }
  },
  {
    name: "Das Rad des Schicksals",
    arcana: "Große Arkana",
    meta: "Nummer 10",
    symbol: "✦",
    imageNameEn: "Wheel of Fortune",
    meanings: {
      upright: {
        buzzwords: ["Wandel", "Timing", "Bewegung"],
        summary: "Das Rad des Schicksals zeigt: Etwas kommt in Bewegung. Heute lohnt es sich, offen auf Veraenderungen zu reagieren, statt sie krampfhaft festhalten zu wollen.",
        dayImpulses: [
          "Bleib flexibel, wenn etwas anders laeuft als geplant.",
          "Nimm eine unerwartete Wendung als moegliche Chance wahr.",
          "Vertrau darauf, dass nicht alles kontrolliert werden muss, um gut zu werden."
        ],
        shortTake: "Kurz gesagt: Heute bringt Bewegung neue Moeglichkeiten mit."
      },
      reversed: {
        buzzwords: ["Widerstand", "Stillstand", "Loslassen"],
        summary: "Umgekehrt zeigt das Rad, dass du vielleicht an etwas festhaeltst, das sich bereits veraendert. Heute wird es leichter, wenn du weniger gegen den Fluss arbeitest.",
        dayImpulses: [
          "Pruefe, wo du aus Angst festhaeltst.",
          "Nimm kleinen Wandel an, bevor er sich staerker aufdraengt.",
          "Reagiere anpassungsfaehig statt verbissen."
        ],
        shortTake: "Kurz gesagt: Heute wird es leichter, wenn du mitgehst statt gegenhaeltst."
      }
    }
  },
  {
    name: "Die Gerechtigkeit",
    arcana: "Große Arkana",
    meta: "Nummer 11",
    symbol: "✦",
    imageNameEn: "Justice",
    meanings: {
      upright: {
        buzzwords: ["Ausgleich", "Wahrheit", "Verantwortung"],
        summary: "Die Gerechtigkeit ruft heute nach Fairness und Klarheit. Ehrliche Entscheidungen, auch kleine, bringen dir innere Ruhe.",
        dayImpulses: [
          "Benenn eine Situation heute moeglichst sachlich und wahr.",
          "Uebernimm Verantwortung fuer deinen Anteil.",
          "Waehle, was stimmig und fair ist, nicht nur bequem."
        ],
        shortTake: "Kurz gesagt: Heute schafft Ehrlichkeit den besten Ausgleich."
      },
      reversed: {
        buzzwords: ["Verdrueckung", "Schieflage", "Selbstehrlichkeit"],
        summary: "Umgekehrt zeigt die Gerechtigkeit, dass etwas gerade nicht ganz im Gleichgewicht ist. Heute hilft dir ein ehrlicher Blick auf das, was du lieber vermeiden wuerdest.",
        dayImpulses: [
          "Rechtfertige dich nicht vorschnell, sondern hoer erst hin.",
          "Pruefe, wo du eine unangenehme Wahrheit weichzeichnest.",
          "Bringe heute wenigstens einen kleinen Punkt wieder in Balance."
        ],
        shortTake: "Kurz gesagt: Heute beginnt Ausgleich mit ungeschminkter Selbstehrlichkeit."
      }
    }
  },
  {
    name: "Der Gehängte",
    arcana: "Große Arkana",
    meta: "Nummer 12",
    symbol: "✦",
    imageNameEn: "The Hanged Man",
    meanings: {
      upright: {
        buzzwords: ["Perspektivwechsel", "Pause", "Hingabe"],
        summary: "Der Gehaengte unterbricht das uebliche Tempo. Heute bringt dir ein anderer Blickwinkel oft mehr als schneller Fortschritt.",
        dayImpulses: [
          "Mach bewusst eine kleine Pause, bevor du weiterdrueckst.",
          "Betrachte ein Problem einmal aus der Gegenrichtung.",
          "Lass etwas kurz in der Schwebe, wenn Reifung noetig ist."
        ],
        shortTake: "Kurz gesagt: Heute liegt Gewinn darin, nicht sofort weiterzudruecken."
      },
      reversed: {
        buzzwords: ["Festhaengen", "Widerstand", "Neubetrachtung"],
        summary: "Umgekehrt zeigt der Gehaengte, dass du vielleicht schon laenger an derselben Stelle kreist. Heute hilft eine echte Kurskorrektur mehr als weiteres Ausharren.",
        dayImpulses: [
          "Frag dich ehrlich, ob dein Warten gerade noch sinnvoll ist.",
          "Versuch nicht, einen alten Blickwinkel krampfhaft zu retten.",
          "Eine kleine Veraenderung kann festgefahrene Energie loesen."
        ],
        shortTake: "Kurz gesagt: Heute solltest du nicht nur aushalten, sondern neu hinsehen."
      }
    }
  },
  {
    name: "Der Tod",
    arcana: "Große Arkana",
    meta: "Nummer 13",
    symbol: "✦",
    imageNameEn: "Death",
    meanings: {
      upright: {
        buzzwords: ["Abschluss", "Wandlung", "Erneuerung"],
        summary: "Der Tod ist heute kein schlechtes Omen, sondern eine klare Wandlungskarte. Etwas Altes will losgelassen werden, damit etwas Neues Luft bekommt.",
        dayImpulses: [
          "Raeum etwas weg, das innerlich oder aeusserlich ueberlebt ist.",
          "Erkenne einen Abschluss als Teil von Wachstum an.",
          "Halte nicht an einer Form fest, die dir nicht mehr entspricht."
        ],
        shortTake: "Kurz gesagt: Heute oeffnet Loslassen einen neuen Raum."
      },
      reversed: {
        buzzwords: ["Festhalten", "Uebergang", "Zoegern"],
        summary: "Umgekehrt zeigt der Tod, dass du vielleicht an einer alten Haut festhaeltst. Heute wird es sanfter, wenn du einen noetigen Abschied nicht weiter aufschiebst.",
        dayImpulses: [
          "Frag dich, was du innerlich schon laenger verabschiedet hast.",
          "Lass kleinen Wandel zu, statt grossen Umbruch zu provozieren.",
          "Vertrau darauf, dass ein Ende nicht gleich Leere bedeutet."
        ],
        shortTake: "Kurz gesagt: Heute wird Wandel leichter, wenn du aufhoerst, ihn zu verhindern."
      }
    }
  },
  {
    name: "Die Mäßigkeit",
    arcana: "Große Arkana",
    meta: "Nummer 14",
    symbol: "✦",
    imageNameEn: "Temperance",
    meanings: {
      upright: {
        buzzwords: ["Balance", "Heilung", "Harmonie"],
        summary: "Die Maessigkeit bringt heute eine ausgleichende, heilsame Stimmung. Kleine, stimmige Schritte wirken jetzt nachhaltiger als extreme Ausschlaege.",
        dayImpulses: [
          "Finde ein gesundes Mittelmass statt Alles-oder-Nichts.",
          "Mische Pflicht und Erholung bewusst miteinander.",
          "Nimm dir Zeit fuer etwas, das dich sanft reguliert."
        ],
        shortTake: "Kurz gesagt: Heute liegt die Staerke in der guten Balance."
      },
      reversed: {
        buzzwords: ["Extreme", "Ungeduld", "Nachjustierung"],
        summary: "Umgekehrt zeigt die Maessigkeit, dass dein inneres System gerade nach Ausgleich ruft. Heute hilft dir weniger Uebertreibung und mehr feines Nachjustieren.",
        dayImpulses: [
          "Beobachte, wo du zwischen zu viel und zu wenig pendelst.",
          "Nimm Tempo raus, wenn du ungeduldig wirst.",
          "Kleine Korrekturen bringen heute mehr als drastische Massnahmen."
        ],
        shortTake: "Kurz gesagt: Heute heilt dich sanftes Nachjustieren mehr als jeder Extremkurs."
      }
    }
  },
  {
    name: "Der Teufel",
    arcana: "Große Arkana",
    meta: "Nummer 15",
    symbol: "✦",
    imageNameEn: "The Devil",
    meanings: {
      upright: {
        buzzwords: ["Muster", "Bindung", "Selbsterkenntnis"],
        summary: "Der Teufel zeigt heute, wo du leichter in alte Schleifen rutschst. Das ist keine Strafe, sondern eine Chance, etwas klarer zu sehen.",
        dayImpulses: [
          "Erkenne einen Trigger oder ein altes Muster bewusst an.",
          "Frag dich, was dir kurzfristig Erleichterung, aber langfristig Enge bringt.",
          "Mach heute wenigstens einen kleinen Schritt in mehr Freiheit."
        ],
        shortTake: "Kurz gesagt: Heute beginnt Freiheit mit ehrlichem Hinschauen."
      },
      reversed: {
        buzzwords: ["Loesung", "Befreiung", "Eigenmacht"],
        summary: "Umgekehrt zeigt der Teufel, dass du schon dabei bist, dich aus etwas zu loesen. Heute lohnt es sich, diese Bewegung zu staerken und ihr zu vertrauen.",
        dayImpulses: [
          "Feiere auch kleine Zeichen von innerer Unabhaengigkeit.",
          "Mach nicht wieder klein, was du bereits erkannt hast.",
          "Waehl heute bewusst das, was dich freier atmen laesst."
        ],
        shortTake: "Kurz gesagt: Heute darfst du einen alten Knoten lockern."
      }
    }
  },
  {
    name: "Der Turm",
    arcana: "Große Arkana",
    meta: "Nummer 16",
    symbol: "✦",
    imageNameEn: "The Tower",
    meanings: {
      upright: {
        buzzwords: ["Durchbruch", "Ehrlichkeit", "Befreiung"],
        summary: "Der Turm kann deinen Tag aufwecken. Was bisher wackelig war, will klarer werden, damit etwas Echtes an seine Stelle treten kann.",
        dayImpulses: [
          "Nimm eine unangenehme Erkenntnis lieber als Klarheit denn als Niederlage.",
          "Halte dich nicht an Fassaden fest, die schon Risse haben.",
          "Nutze einen Stoermoment, um neu und ehrlicher auszurichten."
        ],
        shortTake: "Kurz gesagt: Heute schafft radikale Klarheit neuen Boden."
      },
      reversed: {
        buzzwords: ["Innerer Druck", "Vermeidung", "Entlastung"],
        summary: "Umgekehrt zeigt der Turm oft einen aufgestauten Druck. Heute hilft es, ehrlich zu entladen, bevor sich die Spannung unnoetig verstaerkt.",
        dayImpulses: [
          "Benenn lieber frueh, was dich ueberfordert oder stoert.",
          "Vermeidung macht die Sache heute eher schwerer als leichter.",
          "Schaffe bewusst Raum fuer Entlastung."
        ],
        shortTake: "Kurz gesagt: Heute wird es ruhiger, wenn du den Druck nicht weiter festhaeltst."
      }
    }
  },
  {
    name: "Der Stern",
    arcana: "Große Arkana",
    meta: "Nummer 17",
    symbol: "✦",
    imageNameEn: "The Star",
    meanings: {
      upright: {
        buzzwords: ["Hoffnung", "Sanftheit", "Zuversicht"],
        summary: "Der Stern bringt heute leise Heilung und einen freundlichen Blick nach vorn. Nicht alles muss schon geloest sein, damit Hoffnung wieder spürbar wird.",
        dayImpulses: [
          "Richte deinen Blick auf das, was wieder leichter werden darf.",
          "Sei heute bewusst zart mit dir selbst.",
          "Gib einer stillen Hoffnung Raum, ohne sie sofort beweisen zu muessen."
        ],
        shortTake: "Kurz gesagt: Heute erinnert dich etwas daran, dass Licht wiederkommt."
      },
      reversed: {
        buzzwords: ["Erschoepfung", "Zweifel", "Lichtspur"],
        summary: "Umgekehrt zeigt der Stern, dass Hoffnung gerade leiser geworden sein kann. Heute reicht es, eine kleine Lichtspur wahrzunehmen, statt gleich grosse Zuversicht zu erzwingen.",
        dayImpulses: [
          "Sprich liebevoll mit dir, wenn du dich muede oder enttaeuscht fuehlst.",
          "Suche nach kleinen Zeichen von Gutem, nicht nach dem grossen Beweis.",
          "Vergleich dich heute nicht mit fremder Leuchtkraft."
        ],
        shortTake: "Kurz gesagt: Heute darf Hoffnung ganz klein anfangen."
      }
    }
  },
  {
    name: "Der Mond",
    arcana: "Große Arkana",
    meta: "Nummer 18",
    symbol: "✦",
    imageNameEn: "The Moon",
    meanings: {
      upright: {
        buzzwords: ["Zwischentoene", "Gefuehle", "Traumlogik"],
        summary: "Der Mond macht den Tag fein, empfindsam und etwas geheimnisvoll. Nicht alles ist heute glasklar, aber vieles ist bedeutungsvoll.",
        dayImpulses: [
          "Achte auf Stimmungen, Traeume oder subtile Zeichen.",
          "Nimm Unsicherheit wahr, ohne sofort eine harte Antwort zu erzwingen.",
          "Lass Raum fuer das, was erst allmaehlich deutlich wird."
        ],
        shortTake: "Kurz gesagt: Heute ist nicht alles klar, aber vieles spricht leise mit dir."
      },
      reversed: {
        buzzwords: ["Entwirrung", "Klaerung", "Realitaetssinn"],
        summary: "Umgekehrt kann der Mond anzeigen, dass sich Verwirrung langsam lichtet. Heute helfen dir sanfte Klarheit und ehrliches Benennen.",
        dayImpulses: [
          "Hol eine diffuse Sorge aus dem Nebel ins Konkrete.",
          "Unterscheide Gefuehl von Tatsache, ohne das Gefuehl abzuwerten.",
          "Pruefe, was wirklich da ist und was nur Befuerchtung war."
        ],
        shortTake: "Kurz gesagt: Heute wird manches klarer, sobald du genauer hinsiehst."
      }
    }
  },
  {
    name: "Die Sonne",
    arcana: "Große Arkana",
    meta: "Nummer 19",
    symbol: "✦",
    imageNameEn: "The Sun",
    meanings: {
      upright: {
        buzzwords: ["Freude", "Klarheit", "Lebenskraft"],
        summary: "Die Sonne bringt Helligkeit, Waerme und einen ehrlichen Schwung in deinen Tag. Was gut ist, darf heute auch wirklich gut sein.",
        dayImpulses: [
          "Zeig dich lieber offen als kleinmachend bescheiden.",
          "Nimm Freude bewusst an, statt sie gleich zu relativieren.",
          "Tu etwas, das deine Lebendigkeit spürbar macht."
        ],
        shortTake: "Kurz gesagt: Heute darf es leicht, hell und lebendig sein."
      },
      reversed: {
        buzzwords: ["Gebremste Freude", "Ueberstrahlung", "Echtheit"],
        summary: "Umgekehrt zeigt die Sonne, dass Freude gerade etwas verdeckt oder ueberzogen sein kann. Heute geht es um echte Helligkeit, nicht um Show.",
        dayImpulses: [
          "Frag dich, ob du gerade etwas ueberspielst.",
          "Lass auch leise Freude gelten, sie muss nicht spektakulaer sein.",
          "Such nach Klarheit statt nach guter Wirkung."
        ],
        shortTake: "Kurz gesagt: Heute wirkt Echtheit heller als jedes Blendwerk."
      }
    }
  },
  {
    name: "Das Gericht",
    arcana: "Große Arkana",
    meta: "Nummer 20",
    symbol: "✦",
    imageNameEn: "Judgement",
    meanings: {
      upright: {
        buzzwords: ["Erwachen", "Ruf", "Entscheidungskraft"],
        summary: "Das Gericht bringt heute eine aufweckende Energie. Etwas in dir weiss vielleicht schon laenger, was jetzt dran ist.",
        dayImpulses: [
          "Nimm einen inneren Ruf ernst, den du lange vertagt hast.",
          "Vergangenheit darf heute Erkenntnis sein, nicht nur Gepaeck.",
          "Tu einen klaren Schritt in Richtung Wahrhaftigkeit."
        ],
        shortTake: "Kurz gesagt: Heute ruft dich etwas in eine stimmigere Zukunft."
      },
      reversed: {
        buzzwords: ["Aufschub", "Selbsturteil", "Versoehnung"],
        summary: "Umgekehrt zeigt das Gericht oft einen strengen Blick auf dich selbst oder ein Zoegern vor dem noetigen Schritt. Heute hilft dir Milde mehr als Selbstverurteilung.",
        dayImpulses: [
          "Lass alte Fehler nicht ueber deine Gegenwart bestimmen.",
          "Verschiebe eine wichtige Erkenntnis nicht weiter.",
          "Begegne dir so, dass Entwicklung moeglich bleibt."
        ],
        shortTake: "Kurz gesagt: Heute fuehrt dich Vergebung weiter als Selbstgericht."
      }
    }
  },
  {
    name: "Die Welt",
    arcana: "Große Arkana",
    meta: "Nummer 21",
    symbol: "✦",
    imageNameEn: "The World",
    meanings: {
      upright: {
        buzzwords: ["Vollendung", "Ganzheit", "Ankommen"],
        summary: "Die Welt schenkt deinem Tag einen runden, integrierenden Ton. Du darfst heute sehen, was bereits gewachsen ist, statt nur auf das zu schauen, was noch fehlt.",
        dayImpulses: [
          "Wuerdige einen Weg oder Fortschritt, den du schon geschafft hast.",
          "Schliess etwas bewusst ab, statt es offen auslaufen zu lassen.",
          "Spuere nach, wo du heute bereits mehr angekommen bist als frueher."
        ],
        shortTake: "Kurz gesagt: Heute darf sich etwas voll und stimmig anfuehlen."
      },
      reversed: {
        buzzwords: ["Unfertiges", "Offene Schleife", "Abrundung"],
        summary: "Umgekehrt zeigt die Welt, dass noch etwas nach einem runden Abschluss ruft. Heute geht es weniger um Neues als um saubere Vollendung.",
        dayImpulses: [
          "Bring eine offene Schleife so gut es geht zu Ende.",
          "Mach Frieden mit einem Zwischenstand, wenn Perfektion blockiert.",
          "Runde ab, was innerlich noch lose herumliegt."
        ],
        shortTake: "Kurz gesagt: Heute wird es leichter, wenn du etwas wirklich rund abschliesst."
      }
    }
  }
];

const minorSuitConfigs = {
  staves: {
    label: "Stäbe",
    symbol: "♐",
    imageSuitEn: "Wands",
    buzzword: "Tatkraft",
    summaryFocus: "deinen Willen, deine kreative Energie und dein inneres Feuer",
    impulseLead: "Bring heute gezielt Bewegung in etwas, das dir wichtig ist.",
    reversedFocus: "dein Feuer gerade zu unruhig, hektisch oder zerstreut wirkt",
    reversedLead: "Nimm Tempo raus, damit deine Energie wieder Richtung bekommt."
  },
  cups: {
    label: "Kelche",
    symbol: "☽",
    imageSuitEn: "Cups",
    buzzword: "Gefuehl",
    summaryFocus: "deine Gefuehle, Beziehungen und innere Resonanz",
    impulseLead: "Achte heute bewusst auf das, was sich emotional stimmig anfuehlt.",
    reversedFocus: "deine Gefuehle gerade unterdrueckt, ueberladen oder schwer einzuordnen sind",
    reversedLead: "Sei ehrlich mit dem, was du fuehlst, ohne dich darin zu verlieren."
  },
  swords: {
    label: "Schwerter",
    symbol: "✶",
    imageSuitEn: "Swords",
    buzzword: "Klarheit",
    summaryFocus: "deine Gedanken, Entscheidungen und innere Wahrheit",
    impulseLead: "Formuliere heute klarer, was Sache ist und was du brauchst.",
    reversedFocus: "dein Denken gerade kreist, zuspitzt oder dich unnoetig unter Druck setzt",
    reversedLead: "Entschaerfe heute innere Haerte durch Klarheit und Pausen."
  },
  pentacles: {
    label: "Münzen",
    symbol: "◉",
    imageSuitEn: "Pentacles",
    buzzword: "Verankerung",
    summaryFocus: "deinen Alltag, deinen Koerper und das konkrete Leben hier und jetzt",
    impulseLead: "Kuemmere dich heute um das, was dir Stabilitaet und Boden gibt.",
    reversedFocus: "dein Alltag gerade zu schwer, unsicher oder aus dem Gleichgewicht geraten ist",
    reversedLead: "Hol dich heute in einfache, machbare Schritte zurueck."
  }
};

const minorRankConfigs = {
  "Ass": {
    numberText: "Ass",
    buzzwords: ["Aufbruch", "Impuls"],
    summaryStart: "Das Ass eröffnet einen frischen Abschnitt und lenkt den Blick auf",
    impulses: [
      "Greif einen neuen Impuls auf, bevor er wieder im Alltag untergeht.",
      "Vertrau einer kleinen Anfangsenergie, auch wenn sie noch zart ist."
    ],
    shortTake: "Kurz gesagt: Heute steckt Kraft in einem frischen Anfang.",
    reversedBuzzwords: ["Anlaufhemmung", "Unklarer Start"],
    reversedStart: "Umgekehrt zeigt das Ass, dass ein Anfang stockt oder noch keine klare Form findet, besonders rund um",
    reversedImpulses: [
      "Ueberfordere einen neuen Anfang nicht sofort mit zu hohen Erwartungen.",
      "Pruefe, was du brauchst, damit ein Vorhaben wirklich ins Rollen kommt."
    ],
    reversedShortTake: "Kurz gesagt: Heute braucht ein Anfang erst noch Raum und Richtung."
  },
  "Zwei": {
    numberText: "Zwei",
    buzzwords: ["Wahl", "Abstimmung"],
    summaryStart: "Die Zwei bringt heute eine Situation, in der Abwaegen und feine Abstimmung wichtig werden, besonders fuer",
    impulses: [
      "Hoere nicht nur auf das Lauteste, sondern auch auf den leiseren Gegenpol.",
      "Bring zwei Beduerfnisse in ein sinnvolleres Gleichgewicht."
    ],
    shortTake: "Kurz gesagt: Heute gewinnt, was gut aufeinander abgestimmt ist.",
    reversedBuzzwords: ["Innere Spannung", "Unentschlossenheit"],
    reversedStart: "Umgekehrt zeigt die Zwei eine Reibung oder ein Pendeln zwischen zwei Polen, besonders bei",
    reversedImpulses: [
      "Lass dich nicht von Hin-und-her-Energie zermuerben.",
      "Waehle lieber einen klaren kleinen Schritt als endloses Abwaegen."
    ],
    reversedShortTake: "Kurz gesagt: Heute will eine Unsicherheit in Bewegung kommen."
  },
  "Drei": {
    numberText: "Drei",
    buzzwords: ["Entfaltung", "Miteinander"],
    summaryStart: "Die Drei laesst heute etwas wachsen, sich zeigen oder mit anderen in Fluss kommen, besonders in Bezug auf",
    impulses: [
      "Teile eine Idee, ein Gefuehl oder einen Plan, statt alles fuer dich zu behalten.",
      "Nutze Resonanz und Zusammenarbeit als Verstaerker."
    ],
    shortTake: "Kurz gesagt: Heute darf etwas sichtbarer werden und sich entfalten.",
    reversedBuzzwords: ["Reibung", "Stockende Entwicklung"],
    reversedStart: "Umgekehrt zeigt die Drei, dass Wachstum gerade zaeher laeuft oder Abstimmung fehlt, vor allem bei",
    reversedImpulses: [
      "Pruefe, wo Missverstaendnisse oder unklare Erwartungen bremsen.",
      "Erlaube Entwicklung ohne sie zu erzwingen."
    ],
    reversedShortTake: "Kurz gesagt: Heute braucht Entwicklung mehr Ruhe und bessere Abstimmung."
  },
  "Vier": {
    numberText: "Vier",
    buzzwords: ["Stabilitaet", "Struktur"],
    summaryStart: "Die Vier richtet deinen Tag auf Stabilisierung und Halt aus, besonders rund um",
    impulses: [
      "Schaffe heute eine kleine feste Struktur, die dich entlastet.",
      "Wuerdige, was bereits stabil traegt, statt nur Neues zu jagen."
    ],
    shortTake: "Kurz gesagt: Heute tut dir Boden unter den Fuessen gut.",
    reversedBuzzwords: ["Starre", "Festhalten"],
    reversedStart: "Umgekehrt zeigt die Vier, dass Stabilitaet in Starrheit kippen kann, besonders bei",
    reversedImpulses: [
      "Lockere eine Gewohnheit, die nur noch aus Pflicht weiterlaeuft.",
      "Sicherheit darf heute beweglich bleiben."
    ],
    reversedShortTake: "Kurz gesagt: Heute braucht Stabilitaet etwas mehr Luft."
  },
  "Fünf": {
    numberText: "Fünf",
    buzzwords: ["Reibung", "Lernmoment"],
    summaryStart: "Die Fuenf bringt Spannung oder einen kleinen Stresstest in den Tag, vor allem bei",
    impulses: [
      "Sieh einen Konflikt als Hinweis, nicht sofort als Niederlage.",
      "Frag dich, was du aus einer Reibung mitnehmen kannst."
    ],
    shortTake: "Kurz gesagt: Heute liegt Wachstum mitten in der Reibung.",
    reversedBuzzwords: ["Entschaerfung", "Neuordnung"],
    reversedStart: "Umgekehrt zeigt die Fuenf, dass eine Spannung sich loesen oder neu sortieren will, besonders bei",
    reversedImpulses: [
      "Entziehe einer unnnoetigen Zuspitzung bewusst Energie.",
      "Lenke die Aufmerksamkeit auf Loesung statt auf Schuld."
    ],
    reversedShortTake: "Kurz gesagt: Heute darf aus Reibung langsam wieder Bewegung werden."
  },
  "Sechs": {
    numberText: "Sechs",
    buzzwords: ["Ausgleich", "Fliessen"],
    summaryStart: "Die Sechs bringt eine freundlichere, ausgeglichenere Schwingung in deinen Tag, besonders fuer",
    impulses: [
      "Nimm Hilfe, Harmonie oder Erleichterung bewusst an.",
      "Suche heute das Verbindende statt das Trennende."
    ],
    shortTake: "Kurz gesagt: Heute will etwas wieder in einen schoeneren Fluss kommen.",
    reversedBuzzwords: ["Ungleichgewicht", "Verzerrung"],
    reversedStart: "Umgekehrt zeigt die Sechs, dass etwas noch nicht ganz im Gleichgewicht ist, vor allem in Bezug auf",
    reversedImpulses: [
      "Achte darauf, wo du zu viel gibst oder zu wenig annimmst.",
      "Bring einen kleinen Bereich wieder in fairere Balance."
    ],
    reversedShortTake: "Kurz gesagt: Heute lohnt sich feines Nachjustieren im Miteinander."
  },
  "Sieben": {
    numberText: "Sieben",
    buzzwords: ["Pruefung", "Innere Ausrichtung"],
    summaryStart: "Die Sieben fordert dich heute dazu auf, genauer hinzusehen und bewusster zu waehlen, besonders bei",
    impulses: [
      "Pruefe, was echt tragfaehig ist und was nur schoen klingt.",
      "Bleib bei dir, auch wenn das Aussen stark zieht."
    ],
    shortTake: "Kurz gesagt: Heute will dein Weg bewusster ausgerichtet werden.",
    reversedBuzzwords: ["Unklarheit", "Verzettelung"],
    reversedStart: "Umgekehrt zeigt die Sieben, dass Orientierung oder Fokus gerade schwanken, besonders rund um",
    reversedImpulses: [
      "Lass dich nicht von zu vielen Optionen gleichzeitig nervoes machen.",
      "Waehle lieber Klarheit als blinden Aktionismus."
    ],
    reversedShortTake: "Kurz gesagt: Heute braucht dein Kurs wieder mehr innere Richtung."
  },
  "Acht": {
    numberText: "Acht",
    buzzwords: ["Bewegung", "Dynamik"],
    summaryStart: "Die Acht bringt Tempo und Verschiebung in den Tag, besonders fuer",
    impulses: [
      "Nutze Schwung, wenn du merkst, dass etwas in Bewegung kommt.",
      "Halte dein System schlicht, damit Tempo nicht zu Chaos wird."
    ],
    shortTake: "Kurz gesagt: Heute kann sich vieles schneller sortieren als gedacht.",
    reversedBuzzwords: ["Stau", "Ueberforderung"],
    reversedStart: "Umgekehrt zeigt die Acht, dass Bewegung stockt oder dich ueberrollt, besonders bei",
    reversedImpulses: [
      "Verlangsame bewusst, wenn dein Inneres nicht mehr mitkommt.",
      "Ordne zuerst, bevor du weiter beschleunigst."
    ],
    reversedShortTake: "Kurz gesagt: Heute ist dosiertes Tempo klueger als Vollgas."
  },
  "Neun": {
    numberText: "Neun",
    buzzwords: ["Reife", "Bilanz"],
    summaryStart: "Die Neun bringt Tiefe, Reife und einen Blick auf das, was sich bereits aufgebaut hat, besonders bei",
    impulses: [
      "Wuerdige heute, was du schon gelernt oder getragen hast.",
      "Spuere nach, was kurz vor der Vollendung steht."
    ],
    shortTake: "Kurz gesagt: Heute zeigt sich, was in dir bereits gereift ist.",
    reversedBuzzwords: ["Erschoepfung", "Unruhe"],
    reversedStart: "Umgekehrt zeigt die Neun, dass etwas an deine Grenzen oder in alte Sorgen fuehrt, besonders rund um",
    reversedImpulses: [
      "Lass Reife nicht in Verbissenheit kippen.",
      "Entlaste dich bewusst, wenn etwas zu schwer auf dir lastet."
    ],
    reversedShortTake: "Kurz gesagt: Heute braucht Reife mehr Milde und weniger Druck."
  },
  "Zehn": {
    numberText: "Zehn",
    buzzwords: ["Abschluss", "Uebergang"],
    summaryStart: "Die Zehn zeigt einen Zyklus, der heute rund werden oder sich wandeln moechte, besonders bei",
    impulses: [
      "Bring etwas zu Ende, damit neue Energie frei wird.",
      "Erkenne, was heute an einen Wendepunkt kommt."
    ],
    shortTake: "Kurz gesagt: Heute will ein Abschnitt bewusst abgeschlossen werden.",
    reversedBuzzwords: ["Ueberladung", "Festhalten"],
    reversedStart: "Umgekehrt zeigt die Zehn, dass etwas uebervoll oder schwer geworden ist, besonders in Bezug auf",
    reversedImpulses: [
      "Lass los, was du nur noch mit Aufwand mitschleppst.",
      "Schliesse einen Kreis lieber sauber als perfektionistisch."
    ],
    reversedShortTake: "Kurz gesagt: Heute wird es leichter, wenn du Ueberladung nicht weiter traegst."
  },
  "Bube": {
    numberText: "Bube",
    buzzwords: ["Botschaft", "Neugier"],
    summaryStart: "Der Bube bringt frische Wahrnehmung und kleine Zeichen in deinen Tag, besonders rund um",
    impulses: [
      "Bleib offen fuer eine Nachricht, Idee oder Begegnung mit frischer Energie.",
      "Erlaube dir, etwas mit Anfaengergeist zu betrachten."
    ],
    shortTake: "Kurz gesagt: Heute kommt ein kleiner neuer Impuls auf dich zu.",
    reversedBuzzwords: ["Unruhe", "Kindliche Reaktion"],
    reversedStart: "Umgekehrt zeigt der Bube, dass Unreife oder Nervositaet mit hineinspielen, besonders bei",
    reversedImpulses: [
      "Reagiere heute nicht zu vorschnell auf jede kleine Regung.",
      "Lass eine Nachricht oder Emotion erst kurz sacken."
    ],
    reversedShortTake: "Kurz gesagt: Heute braucht frische Energie etwas mehr Reife und Ruhe."
  },
  "Ritter": {
    numberText: "Ritter",
    buzzwords: ["Einsatz", "Vorwaertsenergie"],
    summaryStart: "Der Ritter bringt Einsatz und Bewegung in den Tag, besonders bei",
    impulses: [
      "Nutze Tatendrang gezielt statt dich zu verzetteln.",
      "Bring Mut in eine Sache, die schon laenger auf Handlung wartet."
    ],
    shortTake: "Kurz gesagt: Heute will Energie in Handlung uebersetzt werden.",
    reversedBuzzwords: ["Uebereifer", "Ruckeln"],
    reversedStart: "Umgekehrt zeigt der Ritter, dass Vorwaertsdrang holprig, ungestuem oder ziellos werden kann, besonders bei",
    reversedImpulses: [
      "Pruefe dein Tempo, bevor du etwas ueberrennst.",
      "Richte Aktion an Sinn aus, nicht nur an innerer Unruhe."
    ],
    reversedShortTake: "Kurz gesagt: Heute braucht Tatkraft mehr Richtung als Tempo."
  },
  "Königin": {
    numberText: "Königin",
    buzzwords: ["Reife", "Tiefe"],
    summaryStart: "Die Koenigin bringt eine stille, reife Praesenz in deinen Tag, besonders rund um",
    impulses: [
      "Vertrau heute deiner reifen Wahrnehmung mehr als fremdem Lärm.",
      "Handle nicht laut, sondern stimmig und getragen."
    ],
    shortTake: "Kurz gesagt: Heute wirkt innere Reife staerker als aeussere Lautstaerke.",
    reversedBuzzwords: ["Rueckzug", "Unsicherheit"],
    reversedStart: "Umgekehrt zeigt die Koenigin, dass ihre reife Kraft gerade verdeckt oder empfindlich ist, besonders bei",
    reversedImpulses: [
      "Zieh dich nicht zu weit in dich zurueck, wenn du eigentlich etwas fuehlst.",
      "Staerke deine innere Sicherheit durch sanfte Selbsttreue."
    ],
    reversedShortTake: "Kurz gesagt: Heute will deine Tiefe gesehen, aber auch geschuetzt werden."
  },
  "König": {
    numberText: "König",
    buzzwords: ["Souveraenitaet", "Fuehrung"],
    summaryStart: "Der Koenig richtet deinen Tag auf klare, reife Gestaltung aus, besonders bei",
    impulses: [
      "Treffe eine Entscheidung mit ruhiger Souveraenitaet.",
      "Fuehre heute ueber Klarheit und Haltung, nicht ueber Druck."
    ],
    shortTake: "Kurz gesagt: Heute traegt dich eine reife, klare Fuehrungskraft.",
    reversedBuzzwords: ["Haerte", "Verlust von Mitte"],
    reversedStart: "Umgekehrt zeigt der Koenig, dass Fuehrung gerade zu streng oder unsicher werden kann, besonders bei",
    reversedImpulses: [
      "Pruefe, ob du gerade kontrollierst statt bewusst zu leiten.",
      "Finde zurueck in eine ruhigere, menschlichere Form von Autoritaet."
    ],
    reversedShortTake: "Kurz gesagt: Heute braucht Fuehrung mehr Mitte und weniger Haerte."
  }
};

const minorRankToImageName = {
  "Ass": "Ace",
  "Zwei": "Two",
  "Drei": "Three",
  "Vier": "Four",
  "Fünf": "Five",
  "Sechs": "Six",
  "Sieben": "Seven",
  "Acht": "Eight",
  "Neun": "Nine",
  "Zehn": "Ten",
  "Bube": "Page",
  "Ritter": "Knight",
  "Königin": "Queen",
  "König": "King"
};

function createMinorMeaning(rankName, suitKey, orientation) {
  const rank = minorRankConfigs[rankName];
  const suit = minorSuitConfigs[suitKey];
  const isUpright = orientation === "upright";

  if (isUpright) {
    return {
      buzzwords: [rank.numberText, suit.buzzword, ...rank.buzzwords],
      summary: `${rank.summaryStart} ${suit.summaryFocus}. ${suit.impulseLead}`,
      dayImpulses: [
        rank.impulses[0],
        suit.impulseLead,
        rank.impulses[1]
      ],
      shortTake: rank.shortTake
    };
  }

  return {
    buzzwords: [rank.numberText, suit.buzzword, ...rank.reversedBuzzwords],
    summary: `${rank.reversedStart} ${suit.reversedFocus}. ${suit.reversedLead}`,
    dayImpulses: [
      rank.reversedImpulses[0],
      suit.reversedLead,
      rank.reversedImpulses[1]
    ],
    shortTake: rank.reversedShortTake
  };
}

function buildMinorArcanaCards() {
  const orderedRanks = Object.keys(minorRankConfigs);
  const orderedSuits = Object.keys(minorSuitConfigs);
  const cards = [];

  for (const suitKey of orderedSuits) {
    const suit = minorSuitConfigs[suitKey];
    for (const rankName of orderedRanks) {
      const rank = minorRankConfigs[rankName];
      cards.push({
        name: `${rankName} der ${suit.label}`,
        arcana: "Kleine Arkana",
        meta: `${rankName} • ${suit.label}`,
        symbol: suit.symbol,
        imageNameEn: `${minorRankToImageName[rankName]} of ${suit.imageSuitEn}`,
        meanings: {
          upright: createMinorMeaning(rankName, suitKey, "upright"),
          reversed: createMinorMeaning(rankName, suitKey, "reversed")
        }
      });
    }
  }

  return cards;
}

window.TAROT_DECK = [...majorArcanaCards, ...buildMinorArcanaCards()];
