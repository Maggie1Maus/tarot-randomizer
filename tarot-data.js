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
          "Behalte deinen Humor, wenn etwas nicht sofort glattläuft."
        ],
        shortTake: "Kurz gesagt: Heute lohnt sich ein mutiger erster Schritt."
      },
      reversed: {
        buzzwords: ["Überhastung", "Zerstreuung", "Erdung"],
        summary: "Umgekehrt erinnert dich der Narr daran, nicht in jeden Impuls blind hineinzuspringen. Heute hilft dir ein kurzer Realitätscheck mehr als schneller Aktionismus.",
        dayImpulses: [
          "Prüfe vor einer Zusage, ob du wirklich Zeit und Energie dafür hast.",
          "Lenke deine Aufmerksamkeit auf eine Sache statt auf zehn kleine Nebenbaustellen.",
          "Erdende Routinen wie Essen, Trinken oder frische Luft bringen dich zurück zu dir."
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
        summary: "Der Magier zeigt: Du hast heute mehr Einfluss, als du vielleicht glaubst. Deine Worte, Entscheidungen und kleinen Handlungen können viel in Bewegung bringen.",
        dayImpulses: [
          "Nimm dir ein Vorhaben bewusst vor und zieh es konzentriert durch.",
          "Sprich klar aus, was du willst oder brauchst.",
          "Nutze vorhandene Mittel, statt auf perfekte Bedingungen zu warten."
        ],
        shortTake: "Kurz gesagt: Heute liegt Kraft in deiner klaren Absicht."
      },
      reversed: {
        buzzwords: ["Selbstzweifel", "Verzettelung", "Innere Sammlung"],
        summary: "Umgekehrt zeigt der Magier eine verstreute Energie. Heute geht es weniger darum, mehr zu tun, sondern deine Aufmerksamkeit wieder zu bündeln.",
        dayImpulses: [
          "Begrenze dich auf das Wichtigste und lass Nebenschauplätze ruhen.",
          "Verwechsle Unsicherheit nicht mit fehlender Fähigkeit.",
          "Rede dir selbst nicht klein, bevor du überhaupt begonnen hast."
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
        buzzwords: ["Intuition", "Stille", "Feingefühl"],
        summary: "Die Hohepriesterin macht deinen Tag leiser, aber nicht weniger klar. Antworten kommen heute eher aus dem Spüren als aus lauter Aktivität.",
        dayImpulses: [
          "Nimm ein unterschwelliges Bauchgefühl ernst.",
          "Lass zwischen Reiz und Reaktion einen kleinen Moment Stille entstehen.",
          "Beobachte erst, bevor du dich festlegst."
        ],
        shortTake: "Kurz gesagt: Heute weiß dein Inneres oft mehr als dein Kopf."
      },
      reversed: {
        buzzwords: ["Innere Unruhe", "Unsicherheit", "Rückverbindung"],
        summary: "Umgekehrt deutet die Hohepriesterin auf ein übergehen deiner inneren Stimme hin. Heute hilft dir weniger Außenlärm und mehr Ehrlichkeit mit dir selbst.",
        dayImpulses: [
          "Frage dich, welche Gefühle du gerade wegschiebst.",
          "Triff keine Entscheidung nur, um die Unsicherheit schnell loszuwerden.",
          "Zieh dich kurz zurück, wenn alles zu laut wird."
        ],
        shortTake: "Kurz gesagt: Höre wieder hin, statt dich selbst zu übertönen."
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
        buzzwords: ["Fülle", "Wärme", "Nährung"],
        summary: "Die Herrscherin bringt eine weiche, freundliche Energie in deinen Tag. Heute darfst du dem nachgehen, was dich wachsen, aufatmen oder aufblühen lässt.",
        dayImpulses: [
          "Sorge gut für deinen Körper und deinen Rhythmus.",
          "Schenk etwas oder jemandem bewusst Aufmerksamkeit und Zuneigung.",
          "Vertrau darauf, dass auch Genuss produktiv sein darf."
        ],
        shortTake: "Kurz gesagt: Heute nährst du dich am besten mit Freundlichkeit."
      },
      reversed: {
        buzzwords: ["Leermachen", "Selbstfürsorge", "Ungleichgewicht"],
        summary: "Umgekehrt zeigt die Herrscherin, dass du vielleicht mehr gibst als du gerade tragen kannst. Heute ist Nähren wichtiger als noch mehr leisten.",
        dayImpulses: [
          "Setz eine Grenze dort, wo du dich schon länger auslaugst.",
          "Achte darauf, ob du Bedürfnisse anderer über deine eigenen stellst.",
          "Erlaube dir eine Pause ohne schlechtes Gewissen."
        ],
        shortTake: "Kurz gesagt: Fürsorge beginnt heute zuerst bei dir."
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
        buzzwords: ["Struktur", "Verantwortung", "Stabilität"],
        summary: "Der Herrscher lädt dich ein, deinem Tag eine klare Form zu geben. Ordnung, Abgrenzung und Verbindlichkeit tun dir heute gut.",
        dayImpulses: [
          "Triff eine klare Entscheidung statt weiter zu schieben.",
          "Bring eine chaotische Ecke deines Tages in eine einfache Struktur.",
          "Sprich Grenzen ruhig und sachlich aus."
        ],
        shortTake: "Kurz gesagt: Heute entsteht Ruhe durch klare Ordnung."
      },
      reversed: {
        buzzwords: ["Starre", "Kontrolle", "Druck"],
        summary: "Umgekehrt warnt der Herrscher davor, alles mit Kontrolle lösen zu wollen. Heute darfst du Führung zeigen, ohne dich selbst zu verhärten.",
        dayImpulses: [
          "Prüfe, ob du gerade Sicherheit mit Strenge verwechselst.",
          "Lass eine Kleinigkeit bewusst lockerer laufen.",
          "Vertrauen kann heute wirksamer sein als Druck."
        ],
        shortTake: "Kurz gesagt: Stabilität braucht heute Herz, nicht Härte."
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
        summary: "Der Hierophant legt heute den Fokus auf das, was dir wirklich Halt gibt. Vertraute Routinen, gute Ratschläge oder bewusste Rituale können dir Orientierung geben.",
        dayImpulses: [
          "Frag dich, welcher Wert heute dein Handeln leiten soll.",
          "Hol dir Rat von jemandem, dem du vertraust.",
          "Tu etwas Vertrautes, das dich innerlich sammelt."
        ],
        shortTake: "Kurz gesagt: Heute findest du Richtung in dem, was sich für dich wahr anfühlt."
      },
      reversed: {
        buzzwords: ["Enge", "Innere Reibung", "Neuausrichtung"],
        summary: "Umgekehrt zeigt der Hierophant, dass alte Muster oder Regeln gerade nicht mehr ganz passen. Heute darfst du hinterfragen, was du nur aus Gewohnheit übernimmst.",
        dayImpulses: [
          "Mach dir bewusst, welche Erwartung nicht mehr zu dir passt.",
          "Erlaub dir, einen eigenen Weg zu wählen, auch wenn er ungewohnt ist.",
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
        summary: "Die Liebenden erinnern dich heute daran, nicht nur sinnvoll, sondern auch stimmig zu wählen. Beziehungen, Begegnungen und Entscheidungen wollen mit dem Herzen abgeglichen werden.",
        dayImpulses: [
          "Wähl das, was sich für dich innerlich ehrlich anfühlt.",
          "Suche heute echte Verbindung statt oberflächlicher Harmonie.",
          "Sprich offen aus, was dir wirklich wichtig ist."
        ],
        shortTake: "Kurz gesagt: Heute führt dich Echtheit weiter als bloße Vernunft."
      },
      reversed: {
        buzzwords: ["Zerrissenheit", "Unklarheit", "Selbsttreue"],
        summary: "Umgekehrt zeigen die Liebenden eine innere Spaltung. Heute hilft es, zuerst die Verbindung zu dir selbst wiederherzustellen, bevor du im Außen eine Wahl triffst.",
        dayImpulses: [
          "Frag dich, wo du dich gerade verbiegst, um es allen recht zu machen.",
          "Verschiebe eine wichtige Entscheidung, wenn du innerlich noch zerrissen bist.",
          "Rede dir deine Gefühle nicht aus, nur weil sie unbequem sind."
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
        buzzwords: ["Vorwärtsdrang", "Ausrichtung", "Disziplin"],
        summary: "Der Wagen bringt Tempo und Zielklarheit. Heute kommst du gut voran, wenn du deine Energie bewusst auf eine Richtung bündelst.",
        dayImpulses: [
          "Setz dir für den Tag ein klares Hauptziel.",
          "Bleib in Bewegung, auch wenn nicht alles perfekt vorbereitet ist.",
          "Lenke deine Energie dahin, wo wirklich Fortschritt möglich ist."
        ],
        shortTake: "Kurz gesagt: Heute gewinnt, wer seine Kraft gezielt steuert."
      },
      reversed: {
        buzzwords: ["Verzettelung", "Gegenzug", "Selbststeuerung"],
        summary: "Umgekehrt zeigt der Wagen, dass zu viele Richtungen gleichzeitig an dir ziehen. Heute hilft dir nicht mehr Tempo, sondern besseres Lenken.",
        dayImpulses: [
          "Lass Dinge weg, die nur Lautstärke erzeugen, aber nicht weiterbringen.",
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
        buzzwords: ["Sanfte Stärke", "Mut", "Innere Ruhe"],
        summary: "Die Kraft zeigt dir heute eine Form von Stärke, die nicht laut sein muss. Mit Geduld, Freundlichkeit und Standhaftigkeit erreichst du mehr als mit Härte.",
        dayImpulses: [
          "Bleib auch in angespannten Momenten freundlich zu dir selbst.",
          "Reagiere bewusst statt impulsiv.",
          "Vertrau darauf, dass leise Konsequenz heute wirksamer ist als Druck."
        ],
        shortTake: "Kurz gesagt: Heute ist deine sanfte Standhaftigkeit deine größte Kraft."
      },
      reversed: {
        buzzwords: ["Erschöpfung", "Selbstkritik", "Nervensystem"],
        summary: "Umgekehrt zeigt die Kraft, dass du vielleicht gerade mehr spannst als tragen kannst. Heute ist es stark, Tempo rauszunehmen und dich zu entlasten.",
        dayImpulses: [
          "Nimm wahr, wo du innerlich gegen dich kämpfst.",
          "Gib dir mehr Milde statt mehr Druck.",
          "Wähle heute das Beruhigende, nicht das Aufputschende."
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
        buzzwords: ["Rückzug", "Einsicht", "Innere Klarheit"],
        summary: "Der Eremit macht deinen Tag stiller und konzentrierter. Nicht alles muss sofort geteilt oder gelöst werden; manche Antworten reifen im eigenen Tempo.",
        dayImpulses: [
          "Gib dir heute bewusst Raum für einen stillen Moment.",
          "Schau nach innen, bevor du im Außen nach Bestätigung suchst.",
          "Reduziere Reizüberflutung, wenn du merkst, dass alles zu viel wird."
        ],
        shortTake: "Kurz gesagt: Heute findest du viel in der ruhigen Begegnung mit dir selbst."
      },
      reversed: {
        buzzwords: ["Isolation", "Rückzugsschleife", "Kontakt"],
        summary: "Umgekehrt kann der Eremit auf ein zu starkes Einigeln hinweisen. Heute hilft dir nicht endloses Grübeln, sondern ein kleiner, ehrlicher Kontaktpunkt nach aussen.",
        dayImpulses: [
          "Zieh dich nicht nur aus Gewohnheit zurück.",
          "Teil eine Sorge mit jemandem, statt sie alleine schwer werden zu lassen.",
          "Verwechsle Stille nicht mit Abschottung."
        ],
        shortTake: "Kurz gesagt: Heute darf Rückzug heilsam sein, aber nicht einsam machen."
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
        summary: "Das Rad des Schicksals zeigt: Etwas kommt in Bewegung. Heute lohnt es sich, offen auf Veränderungen zu reagieren, statt sie krampfhaft festhalten zu wollen.",
        dayImpulses: [
          "Bleib flexibel, wenn etwas anders läuft als geplant.",
          "Nimm eine unerwartete Wendung als mögliche Chance wahr.",
          "Vertrau darauf, dass nicht alles kontrolliert werden muss, um gut zu werden."
        ],
        shortTake: "Kurz gesagt: Heute bringt Bewegung neue Möglichkeiten mit."
      },
      reversed: {
        buzzwords: ["Widerstand", "Stillstand", "Loslassen"],
        summary: "Umgekehrt zeigt das Rad, dass du vielleicht an etwas festhältst, das sich bereits verändert. Heute wird es leichter, wenn du weniger gegen den Fluss arbeitest.",
        dayImpulses: [
          "Prüfe, wo du aus Angst festhältst.",
          "Nimm kleinen Wandel an, bevor er sich stärker aufdrängt.",
          "Reagiere anpassungsfähig statt verbissen."
        ],
        shortTake: "Kurz gesagt: Heute wird es leichter, wenn du mitgehst statt gegenhältst."
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
          "Benenn eine Situation heute möglichst sachlich und wahr.",
          "Übernimm Verantwortung für deinen Anteil.",
          "Wähle, was stimmig und fair ist, nicht nur bequem."
        ],
        shortTake: "Kurz gesagt: Heute schafft Ehrlichkeit den besten Ausgleich."
      },
      reversed: {
        buzzwords: ["Verdrängung", "Schieflage", "Selbstehrlichkeit"],
        summary: "Umgekehrt zeigt die Gerechtigkeit, dass etwas gerade nicht ganz im Gleichgewicht ist. Heute hilft dir ein ehrlicher Blick auf das, was du lieber vermeiden würdest.",
        dayImpulses: [
          "Rechtfertige dich nicht vorschnell, sondern hör erst hin.",
          "Prüfe, wo du eine unangenehme Wahrheit weichzeichnest.",
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
        summary: "Der Gehängte unterbricht das übliche Tempo. Heute bringt dir ein anderer Blickwinkel oft mehr als schneller Fortschritt.",
        dayImpulses: [
          "Mach bewusst eine kleine Pause, bevor du weiterdrückst.",
          "Betrachte ein Problem einmal aus der Gegenrichtung.",
          "Lass etwas kurz in der Schwebe, wenn Reifung nötig ist."
        ],
        shortTake: "Kurz gesagt: Heute liegt Gewinn darin, nicht sofort weiterzudrücken."
      },
      reversed: {
        buzzwords: ["Festhängen", "Widerstand", "Neubetrachtung"],
        summary: "Umgekehrt zeigt der Gehängte, dass du vielleicht schon länger an derselben Stelle kreist. Heute hilft eine echte Kurskorrektur mehr als weiteres Ausharren.",
        dayImpulses: [
          "Frag dich ehrlich, ob dein Warten gerade noch sinnvoll ist.",
          "Versuch nicht, einen alten Blickwinkel krampfhaft zu retten.",
          "Eine kleine Veränderung kann festgefahrene Energie lösen."
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
          "Räum etwas weg, das innerlich oder äußerlich überlebt ist.",
          "Erkenne einen Abschluss als Teil von Wachstum an.",
          "Halte nicht an einer Form fest, die dir nicht mehr entspricht."
        ],
        shortTake: "Kurz gesagt: Heute öffnet Loslassen einen neuen Raum."
      },
      reversed: {
        buzzwords: ["Festhalten", "Übergang", "Zögern"],
        summary: "Umgekehrt zeigt der Tod, dass du vielleicht an einer alten Haut festhältst. Heute wird es sanfter, wenn du einen nötigen Abschied nicht weiter aufschiebst.",
        dayImpulses: [
          "Frag dich, was du innerlich schon länger verabschiedet hast.",
          "Lass kleinen Wandel zu, statt großen Umbruch zu provozieren.",
          "Vertrau darauf, dass ein Ende nicht gleich Leere bedeutet."
        ],
        shortTake: "Kurz gesagt: Heute wird Wandel leichter, wenn du aufhörst, ihn zu verhindern."
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
        summary: "Die Mäßigkeit bringt heute eine ausgleichende, heilsame Stimmung. Kleine, stimmige Schritte wirken jetzt nachhaltiger als extreme Ausschläge.",
        dayImpulses: [
          "Finde ein gesundes Mittelmass statt Alles-oder-Nichts.",
          "Mische Pflicht und Erholung bewusst miteinander.",
          "Nimm dir Zeit für etwas, das dich sanft reguliert."
        ],
        shortTake: "Kurz gesagt: Heute liegt die Stärke in der guten Balance."
      },
      reversed: {
        buzzwords: ["Extreme", "Ungeduld", "Nachjustierung"],
        summary: "Umgekehrt zeigt die Mäßigkeit, dass dein inneres System gerade nach Ausgleich ruft. Heute hilft dir weniger Übertreibung und mehr feines Nachjustieren.",
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
        buzzwords: ["Lösung", "Befreiung", "Eigenmacht"],
        summary: "Umgekehrt zeigt der Teufel, dass du schon dabei bist, dich aus etwas zu lösen. Heute lohnt es sich, diese Bewegung zu stärken und ihr zu vertrauen.",
        dayImpulses: [
          "Feiere auch kleine Zeichen von innerer Unabhängigkeit.",
          "Mach nicht wieder klein, was du bereits erkannt hast.",
          "Wähl heute bewusst das, was dich freier atmen lässt."
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
          "Nutze einen Störmoment, um neu und ehrlicher auszurichten."
        ],
        shortTake: "Kurz gesagt: Heute schafft radikale Klarheit neuen Boden."
      },
      reversed: {
        buzzwords: ["Innerer Druck", "Vermeidung", "Entlastung"],
        summary: "Umgekehrt zeigt der Turm oft einen aufgestauten Druck. Heute hilft es, ehrlich zu entladen, bevor sich die Spannung unnötig verstärkt.",
        dayImpulses: [
          "Benenn lieber früh, was dich überfordert oder stört.",
          "Vermeidung macht die Sache heute eher schwerer als leichter.",
          "Schaffe bewusst Raum für Entlastung."
        ],
        shortTake: "Kurz gesagt: Heute wird es ruhiger, wenn du den Druck nicht weiter festhältst."
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
        summary: "Der Stern bringt heute leise Heilung und einen freundlichen Blick nach vorn. Nicht alles muss schon gelöst sein, damit Hoffnung wieder spürbar wird.",
        dayImpulses: [
          "Richte deinen Blick auf das, was wieder leichter werden darf.",
          "Sei heute bewusst zart mit dir selbst.",
          "Gib einer stillen Hoffnung Raum, ohne sie sofort beweisen zu müssen."
        ],
        shortTake: "Kurz gesagt: Heute erinnert dich etwas daran, dass Licht wiederkommt."
      },
      reversed: {
        buzzwords: ["Erschöpfung", "Zweifel", "Lichtspur"],
        summary: "Umgekehrt zeigt der Stern, dass Hoffnung gerade leiser geworden sein kann. Heute reicht es, eine kleine Lichtspur wahrzunehmen, statt gleich große Zuversicht zu erzwingen.",
        dayImpulses: [
          "Sprich liebevoll mit dir, wenn du dich müde oder enttäuscht fühlst.",
          "Suche nach kleinen Zeichen von Gutem, nicht nach dem großen Beweis.",
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
        buzzwords: ["Zwischentöne", "Gefühle", "Traumlogik"],
        summary: "Der Mond macht den Tag fein, empfindsam und etwas geheimnisvoll. Nicht alles ist heute glasklar, aber vieles ist bedeutungsvoll.",
        dayImpulses: [
          "Achte auf Stimmungen, Träume oder subtile Zeichen.",
          "Nimm Unsicherheit wahr, ohne sofort eine harte Antwort zu erzwingen.",
          "Lass Raum für das, was erst allmählich deutlich wird."
        ],
        shortTake: "Kurz gesagt: Heute ist nicht alles klar, aber vieles spricht leise mit dir."
      },
      reversed: {
        buzzwords: ["Entwirrung", "Klärung", "Realitätssinn"],
        summary: "Umgekehrt kann der Mond anzeigen, dass sich Verwirrung langsam lichtet. Heute helfen dir sanfte Klarheit und ehrliches Benennen.",
        dayImpulses: [
          "Hol eine diffuse Sorge aus dem Nebel ins Konkrete.",
          "Unterscheide Gefühl von Tatsache, ohne das Gefühl abzuwerten.",
          "Prüfe, was wirklich da ist und was nur Befürchtung war."
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
        summary: "Die Sonne bringt Helligkeit, Wärme und einen ehrlichen Schwung in deinen Tag. Was gut ist, darf heute auch wirklich gut sein.",
        dayImpulses: [
          "Zeig dich lieber offen als kleinmachend bescheiden.",
          "Nimm Freude bewusst an, statt sie gleich zu relativieren.",
          "Tu etwas, das deine Lebendigkeit spürbar macht."
        ],
        shortTake: "Kurz gesagt: Heute darf es leicht, hell und lebendig sein."
      },
      reversed: {
        buzzwords: ["Gebremste Freude", "Überstrahlung", "Echtheit"],
        summary: "Umgekehrt zeigt die Sonne, dass Freude gerade etwas verdeckt oder überzogen sein kann. Heute geht es um echte Helligkeit, nicht um Show.",
        dayImpulses: [
          "Frag dich, ob du gerade etwas überspielst.",
          "Lass auch leise Freude gelten, sie muss nicht spektakulär sein.",
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
        summary: "Das Gericht bringt heute eine aufweckende Energie. Etwas in dir weiß vielleicht schon länger, was jetzt dran ist.",
        dayImpulses: [
          "Nimm einen inneren Ruf ernst, den du lange vertagt hast.",
          "Vergangenheit darf heute Erkenntnis sein, nicht nur Gepäck.",
          "Tu einen klaren Schritt in Richtung Wahrhaftigkeit."
        ],
        shortTake: "Kurz gesagt: Heute ruft dich etwas in eine stimmigere Zukunft."
      },
      reversed: {
        buzzwords: ["Aufschub", "Selbsturteil", "Versöhnung"],
        summary: "Umgekehrt zeigt das Gericht oft einen strengen Blick auf dich selbst oder ein Zögern vor dem nötigen Schritt. Heute hilft dir Milde mehr als Selbstverurteilung.",
        dayImpulses: [
          "Lass alte Fehler nicht über deine Gegenwart bestimmen.",
          "Verschiebe eine wichtige Erkenntnis nicht weiter.",
          "Begegne dir so, dass Entwicklung möglich bleibt."
        ],
        shortTake: "Kurz gesagt: Heute führt dich Vergebung weiter als Selbstgericht."
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
          "Würdige einen Weg oder Fortschritt, den du schon geschafft hast.",
          "Schliess etwas bewusst ab, statt es offen auslaufen zu lassen.",
          "Spüre nach, wo du heute bereits mehr angekommen bist als früher."
        ],
        shortTake: "Kurz gesagt: Heute darf sich etwas voll und stimmig anfühlen."
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
    buzzword: "Gefühl",
    summaryFocus: "deine Gefühle, Beziehungen und innere Resonanz",
    impulseLead: "Achte heute bewusst auf das, was sich emotional stimmig anfühlt.",
    reversedFocus: "deine Gefühle gerade unterdrückt, überladen oder schwer einzuordnen sind",
    reversedLead: "Sei ehrlich mit dem, was du fühlst, ohne dich darin zu verlieren."
  },
  swords: {
    label: "Schwerter",
    symbol: "✶",
    imageSuitEn: "Swords",
    buzzword: "Klarheit",
    summaryFocus: "deine Gedanken, Entscheidungen und innere Wahrheit",
    impulseLead: "Formuliere heute klarer, was Sache ist und was du brauchst.",
    reversedFocus: "dein Denken gerade kreist, zuspitzt oder dich unnötig unter Druck setzt",
    reversedLead: "Entschärfe heute innere Härte durch Klarheit und Pausen."
  },
  pentacles: {
    label: "Münzen",
    symbol: "◉",
    imageSuitEn: "Pentacles",
    buzzword: "Verankerung",
    summaryFocus: "deinen Alltag, deinen Körper und das konkrete Leben hier und jetzt",
    impulseLead: "Kümmere dich heute um das, was dir Stabilität und Boden gibt.",
    reversedFocus: "dein Alltag gerade zu schwer, unsicher oder aus dem Gleichgewicht geraten ist",
    reversedLead: "Hol dich heute in einfache, machbare Schritte zurück."
  }
};

const minorRankConfigs = {
  "Ass": {
    numberText: "Ass",
    buzzwords: ["Aufbruch", "Impuls"],
    summaryStart: "Das Ass eröffnet einen frischen Abschnitt und lenkt den Blick auf",
    impulses: [
      "Greif einen neuen Impuls auf, bevor er wieder im Alltag untergeht.",
      "Vertrau einer kleinen Anfangsenergie, auch wenn sie noch zart ist."
    ],
    shortTake: "Kurz gesagt: Heute steckt Kraft in einem frischen Anfang.",
    reversedBuzzwords: ["Anlaufhemmung", "Unklarer Start"],
    reversedStart: "Umgekehrt zeigt das Ass, dass ein Anfang stockt oder noch keine klare Form findet, besonders rund um",
    reversedImpulses: [
      "Überfordere einen neuen Anfang nicht sofort mit zu hohen Erwartungen.",
      "Prüfe, was du brauchst, damit ein Vorhaben wirklich ins Rollen kommt."
    ],
    reversedShortTake: "Kurz gesagt: Heute braucht ein Anfang erst noch Raum und Richtung."
  },
  "Zwei": {
    numberText: "Zwei",
    buzzwords: ["Wahl", "Abstimmung"],
    summaryStart: "Die Zwei bringt heute eine Situation, in der Abwägen und feine Abstimmung wichtig werden, besonders für",
    impulses: [
      "Höre nicht nur auf das Lauteste, sondern auch auf den leiseren Gegenpol.",
      "Bring zwei Bedürfnisse in ein sinnvolleres Gleichgewicht."
    ],
    shortTake: "Kurz gesagt: Heute gewinnt, was gut aufeinander abgestimmt ist.",
    reversedBuzzwords: ["Innere Spannung", "Unentschlossenheit"],
    reversedStart: "Umgekehrt zeigt die Zwei eine Reibung oder ein Pendeln zwischen zwei Polen, besonders bei",
    reversedImpulses: [
      "Lass dich nicht von Hin-und-her-Energie zermürben.",
      "Wähle lieber einen klaren kleinen Schritt als endloses Abwägen."
    ],
    reversedShortTake: "Kurz gesagt: Heute will eine Unsicherheit in Bewegung kommen."
  },
  "Drei": {
    numberText: "Drei",
    buzzwords: ["Entfaltung", "Miteinander"],
    summaryStart: "Die Drei lässt heute etwas wachsen, sich zeigen oder mit anderen in Fluss kommen, besonders in Bezug auf",
    impulses: [
      "Teile eine Idee, ein Gefühl oder einen Plan, statt alles für dich zu behalten.",
      "Nutze Resonanz und Zusammenarbeit als Verstärker."
    ],
    shortTake: "Kurz gesagt: Heute darf etwas sichtbarer werden und sich entfalten.",
    reversedBuzzwords: ["Reibung", "Stockende Entwicklung"],
    reversedStart: "Umgekehrt zeigt die Drei, dass Wachstum gerade zäher läuft oder Abstimmung fehlt, vor allem bei",
    reversedImpulses: [
      "Prüfe, wo Missverständnisse oder unklare Erwartungen bremsen.",
      "Erlaube Entwicklung ohne sie zu erzwingen."
    ],
    reversedShortTake: "Kurz gesagt: Heute braucht Entwicklung mehr Ruhe und bessere Abstimmung."
  },
  "Vier": {
    numberText: "Vier",
    buzzwords: ["Stabilität", "Struktur"],
    summaryStart: "Die Vier richtet deinen Tag auf Stabilisierung und Halt aus, besonders rund um",
    impulses: [
      "Schaffe heute eine kleine feste Struktur, die dich entlastet.",
      "Würdige, was bereits stabil trägt, statt nur Neues zu jagen."
    ],
    shortTake: "Kurz gesagt: Heute tut dir Boden unter den Füßen gut.",
    reversedBuzzwords: ["Starre", "Festhalten"],
    reversedStart: "Umgekehrt zeigt die Vier, dass Stabilität in Starrheit kippen kann, besonders bei",
    reversedImpulses: [
      "Lockere eine Gewohnheit, die nur noch aus Pflicht weiterläuft.",
      "Sicherheit darf heute beweglich bleiben."
    ],
    reversedShortTake: "Kurz gesagt: Heute braucht Stabilität etwas mehr Luft."
  },
  "Fünf": {
    numberText: "Fünf",
    buzzwords: ["Reibung", "Lernmoment"],
    summaryStart: "Die Fünf bringt Spannung oder einen kleinen Stresstest in den Tag, vor allem bei",
    impulses: [
      "Sieh einen Konflikt als Hinweis, nicht sofort als Niederlage.",
      "Frag dich, was du aus einer Reibung mitnehmen kannst."
    ],
    shortTake: "Kurz gesagt: Heute liegt Wachstum mitten in der Reibung.",
    reversedBuzzwords: ["Entschärfung", "Neuordnung"],
    reversedStart: "Umgekehrt zeigt die Fünf, dass eine Spannung sich lösen oder neu sortieren will, besonders bei",
    reversedImpulses: [
      "Entziehe einer unnötigen Zuspitzung bewusst Energie.",
      "Lenke die Aufmerksamkeit auf Lösung statt auf Schuld."
    ],
    reversedShortTake: "Kurz gesagt: Heute darf aus Reibung langsam wieder Bewegung werden."
  },
  "Sechs": {
    numberText: "Sechs",
    buzzwords: ["Ausgleich", "Fliessen"],
    summaryStart: "Die Sechs bringt eine freundlichere, ausgeglichenere Schwingung in deinen Tag, besonders für",
    impulses: [
      "Nimm Hilfe, Harmonie oder Erleichterung bewusst an.",
      "Suche heute das Verbindende statt das Trennende."
    ],
    shortTake: "Kurz gesagt: Heute will etwas wieder in einen schöneren Fluss kommen.",
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
    buzzwords: ["Prüfung", "Innere Ausrichtung"],
    summaryStart: "Die Sieben fordert dich heute dazu auf, genauer hinzusehen und bewusster zu wählen, besonders bei",
    impulses: [
      "Prüfe, was echt tragfähig ist und was nur schön klingt.",
      "Bleib bei dir, auch wenn das Außen stark zieht."
    ],
    shortTake: "Kurz gesagt: Heute will dein Weg bewusster ausgerichtet werden.",
    reversedBuzzwords: ["Unklarheit", "Verzettelung"],
    reversedStart: "Umgekehrt zeigt die Sieben, dass Orientierung oder Fokus gerade schwanken, besonders rund um",
    reversedImpulses: [
      "Lass dich nicht von zu vielen Optionen gleichzeitig nervös machen.",
      "Wähle lieber Klarheit als blinden Aktionismus."
    ],
    reversedShortTake: "Kurz gesagt: Heute braucht dein Kurs wieder mehr innere Richtung."
  },
  "Acht": {
    numberText: "Acht",
    buzzwords: ["Bewegung", "Dynamik"],
    summaryStart: "Die Acht bringt Tempo und Verschiebung in den Tag, besonders für",
    impulses: [
      "Nutze Schwung, wenn du merkst, dass etwas in Bewegung kommt.",
      "Halte dein System schlicht, damit Tempo nicht zu Chaos wird."
    ],
    shortTake: "Kurz gesagt: Heute kann sich vieles schneller sortieren als gedacht.",
    reversedBuzzwords: ["Stau", "Überforderung"],
    reversedStart: "Umgekehrt zeigt die Acht, dass Bewegung stockt oder dich überrollt, besonders bei",
    reversedImpulses: [
      "Verlangsame bewusst, wenn dein Inneres nicht mehr mitkommt.",
      "Ordne zuerst, bevor du weiter beschleunigst."
    ],
    reversedShortTake: "Kurz gesagt: Heute ist dosiertes Tempo klüger als Vollgas."
  },
  "Neun": {
    numberText: "Neun",
    buzzwords: ["Reife", "Bilanz"],
    summaryStart: "Die Neun bringt Tiefe, Reife und einen Blick auf das, was sich bereits aufgebaut hat, besonders bei",
    impulses: [
      "Würdige heute, was du schon gelernt oder getragen hast.",
      "Spüre nach, was kurz vor der Vollendung steht."
    ],
    shortTake: "Kurz gesagt: Heute zeigt sich, was in dir bereits gereift ist.",
    reversedBuzzwords: ["Erschöpfung", "Unruhe"],
    reversedStart: "Umgekehrt zeigt die Neun, dass etwas an deine Grenzen oder in alte Sorgen führt, besonders rund um",
    reversedImpulses: [
      "Lass Reife nicht in Verbissenheit kippen.",
      "Entlaste dich bewusst, wenn etwas zu schwer auf dir lastet."
    ],
    reversedShortTake: "Kurz gesagt: Heute braucht Reife mehr Milde und weniger Druck."
  },
  "Zehn": {
    numberText: "Zehn",
    buzzwords: ["Abschluss", "Übergang"],
    summaryStart: "Die Zehn zeigt einen Zyklus, der heute rund werden oder sich wandeln möchte, besonders bei",
    impulses: [
      "Bring etwas zu Ende, damit neue Energie frei wird.",
      "Erkenne, was heute an einen Wendepunkt kommt."
    ],
    shortTake: "Kurz gesagt: Heute will ein Abschnitt bewusst abgeschlossen werden.",
    reversedBuzzwords: ["Überladung", "Festhalten"],
    reversedStart: "Umgekehrt zeigt die Zehn, dass etwas übervoll oder schwer geworden ist, besonders in Bezug auf",
    reversedImpulses: [
      "Lass los, was du nur noch mit Aufwand mitschleppst.",
      "Schliesse einen Kreis lieber sauber als perfektionistisch."
    ],
    reversedShortTake: "Kurz gesagt: Heute wird es leichter, wenn du Überladung nicht weiter trägst."
  },
  "Bube": {
    numberText: "Bube",
    buzzwords: ["Botschaft", "Neugier"],
    summaryStart: "Der Bube bringt frische Wahrnehmung und kleine Zeichen in deinen Tag, besonders rund um",
    impulses: [
      "Bleib offen für eine Nachricht, Idee oder Begegnung mit frischer Energie.",
      "Erlaube dir, etwas mit Anfängergeist zu betrachten."
    ],
    shortTake: "Kurz gesagt: Heute kommt ein kleiner neuer Impuls auf dich zu.",
    reversedBuzzwords: ["Unruhe", "Kindliche Reaktion"],
    reversedStart: "Umgekehrt zeigt der Bube, dass Unreife oder Nervosität mit hineinspielen, besonders bei",
    reversedImpulses: [
      "Reagiere heute nicht zu vorschnell auf jede kleine Regung.",
      "Lass eine Nachricht oder Emotion erst kurz sacken."
    ],
    reversedShortTake: "Kurz gesagt: Heute braucht frische Energie etwas mehr Reife und Ruhe."
  },
  "Ritter": {
    numberText: "Ritter",
    buzzwords: ["Einsatz", "Vorwärtsenergie"],
    summaryStart: "Der Ritter bringt Einsatz und Bewegung in den Tag, besonders bei",
    impulses: [
      "Nutze Tatendrang gezielt statt dich zu verzetteln.",
      "Bring Mut in eine Sache, die schon länger auf Handlung wartet."
    ],
    shortTake: "Kurz gesagt: Heute will Energie in Handlung übersetzt werden.",
    reversedBuzzwords: ["Übereifer", "Ruckeln"],
    reversedStart: "Umgekehrt zeigt der Ritter, dass Vorwärtsdrang holprig, ungestüm oder ziellos werden kann, besonders bei",
    reversedImpulses: [
      "Prüfe dein Tempo, bevor du etwas überrennst.",
      "Richte Aktion an Sinn aus, nicht nur an innerer Unruhe."
    ],
    reversedShortTake: "Kurz gesagt: Heute braucht Tatkraft mehr Richtung als Tempo."
  },
  "Königin": {
    numberText: "Königin",
    buzzwords: ["Reife", "Tiefe"],
    summaryStart: "Die Königin bringt eine stille, reife Präsenz in deinen Tag, besonders rund um",
    impulses: [
      "Vertrau heute deiner reifen Wahrnehmung mehr als fremdem Lärm.",
      "Handle nicht laut, sondern stimmig und getragen."
    ],
    shortTake: "Kurz gesagt: Heute wirkt innere Reife stärker als äußere Lautstärke.",
    reversedBuzzwords: ["Rückzug", "Unsicherheit"],
    reversedStart: "Umgekehrt zeigt die Königin, dass ihre reife Kraft gerade verdeckt oder empfindlich ist, besonders bei",
    reversedImpulses: [
      "Zieh dich nicht zu weit in dich zurück, wenn du eigentlich etwas fühlst.",
      "Stärke deine innere Sicherheit durch sanfte Selbsttreue."
    ],
    reversedShortTake: "Kurz gesagt: Heute will deine Tiefe gesehen, aber auch geschützt werden."
  },
  "König": {
    numberText: "König",
    buzzwords: ["Souveränität", "Führung"],
    summaryStart: "Der König richtet deinen Tag auf klare, reife Gestaltung aus, besonders bei",
    impulses: [
      "Treffe eine Entscheidung mit ruhiger Souveränität.",
      "Führe heute über Klarheit und Haltung, nicht über Druck."
    ],
    shortTake: "Kurz gesagt: Heute trägt dich eine reife, klare Führungskraft.",
    reversedBuzzwords: ["Härte", "Verlust von Mitte"],
    reversedStart: "Umgekehrt zeigt der König, dass Führung gerade zu streng oder unsicher werden kann, besonders bei",
    reversedImpulses: [
      "Prüfe, ob du gerade kontrollierst statt bewusst zu leiten.",
      "Finde zurück in eine ruhigere, menschlichere Form von Autorität."
    ],
    reversedShortTake: "Kurz gesagt: Heute braucht Führung mehr Mitte und weniger Härte."
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
