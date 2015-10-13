# Evaluation
[![Build Status](https://travis-ci.org/malteahrens/mvv-app.svg?branch=master)](https://travis-ci.org/malteahrens/mvv-app)
http://www.malteahrens.de/report/plato/index.html

# Einführung
Die Deutsche Bahn veröffentlicht seit 2011 eine "Pünktlichkeitsstatistik". [Diese Statistik](http://www.bahn.de/regional/view/regionen/bayern/info/puenktlichkeit_in_bayern.shtml) monatlich/jährlich aggregiert Werte. Die DB [argumentiert](http://www.bahn.de/p/view/mdb/bahnintern/fahrplan_und_buchung/reiseauskunft/p_nktlichkeitskommunikation/MDB101020-FAQ_Puenktlichkeit_2012.pdf), dass genauere Werte nicht interessant seien. Finde ich schon: interessant sind die Rohdaten... um die Statistik überprüfen zu können. Schön wäre es zu wissen, wieviele Menschen von den Zugausfällen betroffen sind!

# Dieses Projekt...
visualisiert Störungsmeldungen im Münchner ÖPNV. Das Projekt mvv-crawler ruft dazu alle 5 Minuten die Website http://www.s-bahn-muenchen.de/s_muenchen/view/service/aktuelle_betriebslage.shtml auf und speichert die Meldungen auf keen.io. Die gespeicherten Daten kann man auf unterschiedliche Arten abrufen:
* http://malteahrens.github.io/mvv-app/
* als Android APP

# Quellen
* http://www.s-bahn-muenchen.de/s_muenchen/view/service/aktuelle_betriebslage.shtml
* http://s-bahn-muenchen.hafas.de/bin/540/help.exe/dn?tpl=livefahrplan
