'use client';

import { useState } from 'react';

const outlets = [
  // News - English
  { name: 'BBC News', category: 'news', url: 'https://www.bbc.com/news', language: 'English', languageLocal: 'inglise', countryCode: 'GB' },
  { name: 'The Guardian', category: 'news', url: 'https://www.theguardian.com/international', language: 'English', languageLocal: 'inglise', countryCode: 'GB' },
  { name: 'CNN', category: 'news', url: 'https://www.cnn.com', language: 'English', languageLocal: 'inglise', countryCode: 'US' },
  { name: 'Reuters', category: 'news', url: 'https://www.reuters.com', language: 'English', languageLocal: 'inglise', countryCode: 'GB' },
  { name: 'Associated Press', category: 'news', url: 'https://apnews.com', language: 'English', languageLocal: 'inglise', countryCode: 'US' },
  { name: 'NPR', category: 'news', url: 'https://www.npr.org/sections/news/', language: 'English', languageLocal: 'inglise', countryCode: 'US' },
  { name: 'NHK World', category: 'news', url: 'https://www3.nhk.or.jp/nhkworld/', language: 'English', languageLocal: 'inglise', countryCode: 'JP' },
  { name: 'Yonhap News', category: 'news', url: 'https://en.yna.co.kr', language: 'English', languageLocal: 'inglise', countryCode: 'KR' },
  { name: 'RTHK', category: 'news', url: 'https://news.rthk.hk/rthk/en', language: 'English', languageLocal: 'inglise', countryCode: 'HK' },
  { name: 'CNA', category: 'news', url: 'https://www.channelnewsasia.com', language: 'English', languageLocal: 'inglise', countryCode: 'SG' },
  { name: 'The Hindu', category: 'news', url: 'https://www.thehindu.com', language: 'English', languageLocal: 'inglise', countryCode: 'IN' },
  { name: 'Bangkok Post', category: 'news', url: 'https://www.bangkokpost.com', language: 'English', languageLocal: 'inglise', countryCode: 'TH' },
  { name: 'Tempo', category: 'news', url: 'https://en.tempo.co', language: 'English', languageLocal: 'inglise', countryCode: 'ID' },
  { name: 'ABC News AU', category: 'news', url: 'https://www.abc.net.au/news', language: 'English', languageLocal: 'inglise', countryCode: 'AU' },
  { name: 'NZ Herald', category: 'news', url: 'https://www.nzherald.co.nz', language: 'English', languageLocal: 'inglise', countryCode: 'NZ' },
  
  // News - German (Deutsch)
  { name: 'Der Spiegel', category: 'news', url: 'https://www.spiegel.de', language: 'Deutsch', languageLocal: 'saksa', countryCode: 'DE' },
  { name: 'Die Zeit', category: 'news', url: 'https://www.zeit.de', language: 'Deutsch', languageLocal: 'saksa', countryCode: 'DE' },
  { name: 'Süddeutsche Zeitung', category: 'news', url: 'https://www.sueddeutsche.de', language: 'Deutsch', languageLocal: 'saksa', countryCode: 'DE' },
  { name: 'Frankfurter Allgemeine', category: 'news', url: 'https://www.faz.net', language: 'Deutsch', languageLocal: 'saksa', countryCode: 'DE' },
  { name: 'Tagesschau', category: 'news', url: 'https://www.tagesschau.de', language: 'Deutsch', languageLocal: 'saksa', countryCode: 'DE' },
  { name: 'Die Welt', category: 'news', url: 'https://www.welt.de', language: 'Deutsch', languageLocal: 'saksa', countryCode: 'DE' },
  { name: 'Handelsblatt', category: 'business', url: 'https://www.handelsblatt.com', language: 'Deutsch', languageLocal: 'saksa', countryCode: 'DE' },
  { name: 'Bild', category: 'news', url: 'https://www.bild.de', language: 'Deutsch', languageLocal: 'saksa', countryCode: 'DE' },
  { name: 'Deutsche Welle', category: 'news', url: 'https://www.dw.com/de', language: 'Deutsch', languageLocal: 'saksa', countryCode: 'DE' },
  { name: 'Tagesspiegel', category: 'news', url: 'https://www.tagesspiegel.de', language: 'Deutsch', languageLocal: 'saksa', countryCode: 'DE' },
  
  // News - French (Français)
  { name: 'Le Monde', category: 'news', url: 'https://www.lemonde.fr', language: 'Français', languageLocal: 'prantsuse', countryCode: 'FR' },
  { name: 'Le Figaro', category: 'news', url: 'https://www.lefigaro.fr', language: 'Français', languageLocal: 'prantsuse', countryCode: 'FR' },
  { name: 'Libération', category: 'news', url: 'https://www.liberation.fr', language: 'Français', languageLocal: 'prantsuse', countryCode: 'FR' },
  { name: 'France 24', category: 'news', url: 'https://www.france24.com/fr/', language: 'Français', languageLocal: 'prantsuse', countryCode: 'FR' },
  { name: "L'Express", category: 'news', url: 'https://www.lexpress.fr', language: 'Français', languageLocal: 'prantsuse', countryCode: 'FR' },
  { name: 'Le Parisien', category: 'news', url: 'https://www.leparisien.fr', language: 'Français', languageLocal: 'prantsuse', countryCode: 'FR' },
  { name: 'Mediapart', category: 'news', url: 'https://www.mediapart.fr', language: 'Français', languageLocal: 'prantsuse', countryCode: 'FR' },
  { name: 'Les Échos', category: 'business', url: 'https://www.lesechos.fr', language: 'Français', languageLocal: 'prantsuse', countryCode: 'FR' },
  { name: 'RFI', category: 'news', url: 'https://www.rfi.fr', language: 'Français', languageLocal: 'prantsuse', countryCode: 'FR' },
  { name: 'Le Point', category: 'news', url: 'https://www.lepoint.fr', language: 'Français', languageLocal: 'prantsuse', countryCode: 'FR' },
  
  // News - Spanish (Español)
  { name: 'El País', category: 'news', url: 'https://elpais.com', language: 'Español', languageLocal: 'hispaania', countryCode: 'ES' },
  { name: 'El Mundo', category: 'news', url: 'https://www.elmundo.es', language: 'Español', languageLocal: 'hispaania', countryCode: 'ES' },
  { name: 'ABC España', category: 'news', url: 'https://www.abc.es', language: 'Español', languageLocal: 'hispaania', countryCode: 'ES' },
  { name: 'La Vanguardia', category: 'news', url: 'https://www.lavanguardia.com', language: 'Español', languageLocal: 'hispaania', countryCode: 'ES' },
  { name: 'El Periódico', category: 'news', url: 'https://www.elperiodico.com', language: 'Español', languageLocal: 'hispaania', countryCode: 'ES' },
  { name: 'La Nación', category: 'news', url: 'https://www.lanacion.com.ar', language: 'Español', languageLocal: 'hispaania', countryCode: 'AR' },
  { name: 'Clarín', category: 'news', url: 'https://www.clarin.com', language: 'Español', languageLocal: 'hispaania', countryCode: 'AR' },
  { name: 'El Universal', category: 'news', url: 'https://www.eluniversal.com.mx', language: 'Español', languageLocal: 'hispaania', countryCode: 'MX' },
  { name: 'Reforma', category: 'news', url: 'https://www.reforma.com', language: 'Español', languageLocal: 'hispaania', countryCode: 'MX' },
  { name: 'El Tiempo', category: 'news', url: 'https://www.eltiempo.com', language: 'Español', languageLocal: 'hispaania', countryCode: 'CO' },
  
  // News - Italian (Italiano)
  { name: 'La Repubblica', category: 'news', url: 'https://www.repubblica.it', language: 'Italiano', languageLocal: 'itaalia', countryCode: 'IT' },
  { name: 'Corriere della Sera', category: 'news', url: 'https://www.corriere.it', language: 'Italiano', languageLocal: 'itaalia', countryCode: 'IT' },
  { name: 'La Stampa', category: 'news', url: 'https://www.lastampa.it', language: 'Italiano', languageLocal: 'itaalia', countryCode: 'IT' },
  { name: 'Il Sole 24 Ore', category: 'business', url: 'https://www.ilsole24ore.com', language: 'Italiano', languageLocal: 'itaalia', countryCode: 'IT' },
  { name: 'Il Messaggero', category: 'news', url: 'https://www.ilmessaggero.it', language: 'Italiano', languageLocal: 'itaalia', countryCode: 'IT' },
  { name: 'Il Fatto Quotidiano', category: 'news', url: 'https://www.ilfattoquotidiano.it', language: 'Italiano', languageLocal: 'itaalia', countryCode: 'IT' },
  { name: 'ANSA', category: 'news', url: 'https://www.ansa.it', language: 'Italiano', languageLocal: 'itaalia', countryCode: 'IT' },
  
  // News - Swedish (Svenska)
  { name: 'Dagens Nyheter', category: 'news', url: 'https://www.dn.se', language: 'Svenska', languageLocal: 'rootsi', countryCode: 'SE' },
  { name: 'Svenska Dagbladet', category: 'news', url: 'https://www.svd.se', language: 'Svenska', languageLocal: 'rootsi', countryCode: 'SE' },
  { name: 'Aftonbladet', category: 'news', url: 'https://www.aftonbladet.se', language: 'Svenska', languageLocal: 'rootsi', countryCode: 'SE' },
  { name: 'Expressen', category: 'news', url: 'https://www.expressen.se', language: 'Svenska', languageLocal: 'rootsi', countryCode: 'SE' },
  { name: 'Göteborgs-Posten', category: 'news', url: 'https://www.gp.se', language: 'Svenska', languageLocal: 'rootsi', countryCode: 'SE' },
  { name: 'Sydsvenskan', category: 'news', url: 'https://www.sydsvenskan.se', language: 'Svenska', languageLocal: 'rootsi', countryCode: 'SE' },
  { name: 'Dagens Industri', category: 'business', url: 'https://www.di.se', language: 'Svenska', languageLocal: 'rootsi', countryCode: 'SE' },
  
  // News - Norwegian (Norsk)
  { name: 'Aftenposten', category: 'news', url: 'https://www.aftenposten.no', language: 'Norsk', languageLocal: 'norra', countryCode: 'NO' },
  { name: 'VG', category: 'news', url: 'https://www.vg.no', language: 'Norsk', languageLocal: 'norra', countryCode: 'NO' },
  { name: 'NRK', category: 'news', url: 'https://www.nrk.no', language: 'Norsk', languageLocal: 'norra', countryCode: 'NO' },
  { name: 'Dagbladet', category: 'news', url: 'https://www.dagbladet.no', language: 'Norsk', languageLocal: 'norra', countryCode: 'NO' },
  { name: 'Dagens Næringsliv', category: 'business', url: 'https://www.dn.no', language: 'Norsk', languageLocal: 'norra', countryCode: 'NO' },
  { name: 'Bergens Tidende', category: 'news', url: 'https://www.bt.no', language: 'Norsk', languageLocal: 'norra', countryCode: 'NO' },
  
  // News - Danish (Dansk)
  { name: 'Politiken', category: 'news', url: 'https://politiken.dk', language: 'Dansk', languageLocal: 'taani', countryCode: 'DK' },
  { name: 'DR Nyheder', category: 'news', url: 'https://www.dr.dk/nyheder', language: 'Dansk', languageLocal: 'taani', countryCode: 'DK' },
  { name: 'Berlingske', category: 'news', url: 'https://www.berlingske.dk', language: 'Dansk', languageLocal: 'taani', countryCode: 'DK' },
  { name: 'Jyllands-Posten', category: 'news', url: 'https://jyllands-posten.dk', language: 'Dansk', languageLocal: 'taani', countryCode: 'DK' },
  { name: 'Ekstra Bladet', category: 'news', url: 'https://ekstrabladet.dk', language: 'Dansk', languageLocal: 'taani', countryCode: 'DK' },
  { name: 'BT', category: 'news', url: 'https://www.bt.dk', language: 'Dansk', languageLocal: 'taani', countryCode: 'DK' },
  
  // News - Finnish (Suomi)
  { name: 'Helsingin Sanomat', category: 'news', url: 'https://www.hs.fi', language: 'Suomi', languageLocal: 'soome', countryCode: 'FI' },
  { name: 'Yle Uutiset', category: 'news', url: 'https://yle.fi/uutiset', language: 'Suomi', languageLocal: 'soome', countryCode: 'FI' },
  { name: 'Ilta-Sanomat', category: 'news', url: 'https://www.is.fi', language: 'Suomi', languageLocal: 'soome', countryCode: 'FI' },
  { name: 'Iltalehti', category: 'news', url: 'https://www.iltalehti.fi', language: 'Suomi', languageLocal: 'soome', countryCode: 'FI' },
  { name: 'Kauppalehti', category: 'business', url: 'https://www.kauppalehti.fi', language: 'Suomi', languageLocal: 'soome', countryCode: 'FI' },
  { name: 'Turun Sanomat', category: 'news', url: 'https://www.ts.fi', language: 'Suomi', languageLocal: 'soome', countryCode: 'FI' },
  
  // News - Dutch (Nederlands)
  { name: 'NOS', category: 'news', url: 'https://nos.nl', language: 'Nederlands', languageLocal: 'hollandi', countryCode: 'NL' },
  { name: 'De Volkskrant', category: 'news', url: 'https://www.volkskrant.nl', language: 'Nederlands', languageLocal: 'hollandi', countryCode: 'NL' },
  { name: 'NRC', category: 'news', url: 'https://www.nrc.nl', language: 'Nederlands', languageLocal: 'hollandi', countryCode: 'NL' },
  { name: 'De Telegraaf', category: 'news', url: 'https://www.telegraaf.nl', language: 'Nederlands', languageLocal: 'hollandi', countryCode: 'NL' },
  { name: 'Trouw', category: 'news', url: 'https://www.trouw.nl', language: 'Nederlands', languageLocal: 'hollandi', countryCode: 'NL' },
  { name: 'Het Parool', category: 'news', url: 'https://www.parool.nl', language: 'Nederlands', languageLocal: 'hollandi', countryCode: 'NL' },
  
  // News - Polish (Polski)
  { name: 'Gazeta Wyborcza', category: 'news', url: 'https://wyborcza.pl', language: 'Polski', languageLocal: 'poola', countryCode: 'PL' },
  { name: 'Rzeczpospolita', category: 'news', url: 'https://www.rp.pl', language: 'Polski', languageLocal: 'poola', countryCode: 'PL' },
  { name: 'Onet', category: 'news', url: 'https://wiadomosci.onet.pl', language: 'Polski', languageLocal: 'poola', countryCode: 'PL' },
  { name: 'Fakt', category: 'news', url: 'https://www.fakt.pl', language: 'Polski', languageLocal: 'poola', countryCode: 'PL' },
  { name: 'TVN24', category: 'news', url: 'https://tvn24.pl', language: 'Polski', languageLocal: 'poola', countryCode: 'PL' },
  
  // News - Portuguese (Português)
  { name: 'Público', category: 'news', url: 'https://www.publico.pt', language: 'Português', languageLocal: 'portugali', countryCode: 'PT' },
  { name: 'Expresso', category: 'news', url: 'https://expresso.pt', language: 'Português', languageLocal: 'portugali', countryCode: 'PT' },
  { name: 'Jornal de Notícias', category: 'news', url: 'https://www.jn.pt', language: 'Português', languageLocal: 'portugali', countryCode: 'PT' },
  { name: 'Observador', category: 'news', url: 'https://observador.pt', language: 'Português', languageLocal: 'portugali', countryCode: 'PT' },
  { name: 'Folha de S.Paulo', category: 'news', url: 'https://www1.folha.uol.com.br', language: 'Português', languageLocal: 'portugali', countryCode: 'BR' },
  { name: 'O Globo', category: 'news', url: 'https://oglobo.globo.com', language: 'Português', languageLocal: 'portugali', countryCode: 'BR' },
  { name: 'Estado de S. Paulo', category: 'news', url: 'https://www.estadao.com.br', language: 'Português', languageLocal: 'portugali', countryCode: 'BR' },
  
  // News - Icelandic (Íslenska)
  { name: 'RÚV', category: 'news', url: 'https://www.ruv.is/frett', language: 'Íslenska', languageLocal: 'islandi', countryCode: 'IS' },
  { name: 'Morgunblaðið', category: 'news', url: 'https://www.mbl.is', language: 'Íslenska', languageLocal: 'islandi', countryCode: 'IS' },
  { name: 'Fréttablaðið', category: 'news', url: 'https://www.frettabladid.is', language: 'Íslenska', languageLocal: 'islandi', countryCode: 'IS' },
  { name: 'Vísir', category: 'news', url: 'https://www.visir.is', language: 'Íslenska', languageLocal: 'islandi', countryCode: 'IS' },
  
  // News - Latvian (Latviešu)
  { name: 'Delfi Latvia', category: 'news', url: 'https://www.delfi.lv', language: 'Latviešu', languageLocal: 'läti', countryCode: 'LV' },
  { name: 'Neatkarīgā', category: 'news', url: 'https://neatkariga.nra.lv', language: 'Latviešu', languageLocal: 'läti', countryCode: 'LV' },
  { name: 'LSM.lv', category: 'news', url: 'https://www.lsm.lv', language: 'Latviešu', languageLocal: 'läti', countryCode: 'LV' },
  { name: 'Apollo.lv', category: 'news', url: 'https://www.apollo.lv', language: 'Latviešu', languageLocal: 'läti', countryCode: 'LV' },
  
  // News - Lithuanian (Lietuvių)
  { name: '15min', category: 'news', url: 'https://www.15min.lt', language: 'Lietuvių', languageLocal: 'leedu', countryCode: 'LT' },
  { name: 'Delfi Lithuania', category: 'news', url: 'https://www.delfi.lt', language: 'Lietuvių', languageLocal: 'leedu', countryCode: 'LT' },
  { name: 'LRT', category: 'news', url: 'https://www.lrt.lt', language: 'Lietuvių', languageLocal: 'leedu', countryCode: 'LT' },
  { name: 'Bernardinai', category: 'news', url: 'https://www.bernardinai.lt', language: 'Lietuvių', languageLocal: 'leedu', countryCode: 'LT' },
  
  // News - Ukrainian (Українська)
  { name: 'Ukrainska Pravda', category: 'politics', url: 'https://www.pravda.com.ua', language: 'Українська', languageLocal: 'ukraina', countryCode: 'UA' },
  { name: 'Suspilne Novyny', category: 'politics', url: 'https://suspilne.media', language: 'Українська', languageLocal: 'ukraina', countryCode: 'UA' },
  { name: 'LB.ua', category: 'news', url: 'https://lb.ua', language: 'Українська', languageLocal: 'ukraina', countryCode: 'UA' },
  { name: 'Hromadske', category: 'news', url: 'https://hromadske.ua', language: 'Українська', languageLocal: 'ukraina', countryCode: 'UA' },
  
  // News - Arabic (العربية)
  { name: 'Al Jazeera', category: 'news', url: 'https://www.aljazeera.net', language: 'العربية', languageLocal: 'araabia', countryCode: 'QA' },
  { name: 'Al Arabiya', category: 'news', url: 'https://www.alarabiya.net', language: 'العربية', languageLocal: 'araabia', countryCode: 'SA' },
  { name: 'BBC Arabic', category: 'news', url: 'https://www.bbc.com/arabic', language: 'العربية', languageLocal: 'araabia', countryCode: 'GB' },
  
  // News - Czech (Čeština)
  { name: 'iDNES.cz', category: 'news', url: 'https://www.idnes.cz', language: 'Čeština', languageLocal: 'tšehhi', countryCode: 'CZ' },
  { name: 'Aktuálně.cz', category: 'news', url: 'https://www.aktualne.cz', language: 'Čeština', languageLocal: 'tšehhi', countryCode: 'CZ' },
  { name: 'Novinky.cz', category: 'news', url: 'https://www.novinky.cz', language: 'Čeština', languageLocal: 'tšehhi', countryCode: 'CZ' },
  
  // News - Greenlandic (Kalaallisut)
  { name: 'Sermitsiaq', category: 'news', url: 'https://sermitsiaq.ag', language: 'Kalaallisut', languageLocal: 'grööni', countryCode: 'GL' },
  
  // Politics - English
  { name: 'Politico', category: 'politics', url: 'https://www.politico.com', language: 'English', languageLocal: 'inglise', countryCode: 'US' },
  { name: 'Foreign Affairs', category: 'politics', url: 'https://www.foreignaffairs.com', language: 'English', languageLocal: 'inglise', countryCode: 'US' },
  { name: 'The Kyiv Independent', category: 'politics', url: 'https://kyivindependent.com', language: 'English', languageLocal: 'inglise', countryCode: 'UA' },
  
  // Business - English
  { name: 'Financial Times', category: 'business', url: 'https://www.ft.com', language: 'English', languageLocal: 'inglise', countryCode: 'GB' },
  { name: 'Bloomberg', category: 'business', url: 'https://www.bloomberg.com', language: 'English', languageLocal: 'inglise', countryCode: 'US' },
  { name: 'Wall Street Journal', category: 'business', url: 'https://www.wsj.com', language: 'English', languageLocal: 'inglise', countryCode: 'US' },
  { name: 'Forbes', category: 'business', url: 'https://www.forbes.com', language: 'English', languageLocal: 'inglise', countryCode: 'US' },
  
  // Tech - English
  { name: 'TechCrunch', category: 'tech', url: 'https://techcrunch.com', language: 'English', languageLocal: 'inglise', countryCode: 'US' },
  { name: 'The Verge', category: 'tech', url: 'https://www.theverge.com', language: 'English', languageLocal: 'inglise', countryCode: 'US' },
  { name: 'Wired', category: 'tech', url: 'https://www.wired.com', language: 'English', languageLocal: 'inglise', countryCode: 'US' },
  { name: 'Ars Technica', category: 'tech', url: 'https://arstechnica.com', language: 'English', languageLocal: 'inglise', countryCode: 'US' },
  
  // Science - English
  { name: 'Nature', category: 'science', url: 'https://www.nature.com', language: 'English', languageLocal: 'inglise', countryCode: 'GB' },
  { name: 'Science', category: 'science', url: 'https://www.science.org', language: 'English', languageLocal: 'inglise', countryCode: 'US' },
  { name: 'Scientific American', category: 'science', url: 'https://www.scientificamerican.com', language: 'English', languageLocal: 'inglise', countryCode: 'US' },
  { name: 'New Scientist', category: 'science', url: 'https://www.newscientist.com', language: 'English', languageLocal: 'inglise', countryCode: 'GB' },
  
  // Sports - English
  { name: 'ESPN', category: 'sports', url: 'https://www.espn.com', language: 'English', languageLocal: 'inglise', countryCode: 'US' },
  { name: 'The Athletic', category: 'sports', url: 'https://theathletic.com', language: 'English', languageLocal: 'inglise', countryCode: 'US' },
  { name: 'Sky Sports', category: 'sports', url: 'https://www.skysports.com', language: 'English', languageLocal: 'inglise', countryCode: 'GB' },
  
  // Culture - English
  { name: 'Variety', category: 'culture', url: 'https://variety.com', language: 'English', languageLocal: 'inglise', countryCode: 'US' },
  { name: 'Rolling Stone', category: 'culture', url: 'https://www.rollingstone.com', language: 'English', languageLocal: 'inglise', countryCode: 'US' },
  { name: 'Pitchfork', category: 'culture', url: 'https://pitchfork.com', language: 'English', languageLocal: 'inglise', countryCode: 'US' },
  { name: 'The Atlantic', category: 'culture', url: 'https://www.theatlantic.com', language: 'English', languageLocal: 'inglise', countryCode: 'US' },
  { name: 'New Yorker', category: 'culture', url: 'https://www.newyorker.com', language: 'English', languageLocal: 'inglise', countryCode: 'US' },
  
  // Opinion - English
  { name: 'Vox', category: 'opinion', url: 'https://www.vox.com', language: 'English', languageLocal: 'inglise', countryCode: 'US' },
];

const categories = [
  { id: 'all', label: 'KÕIK' },
  { id: 'news', label: 'UUDISED' },
  { id: 'politics', label: 'POLIITIKA' },
  { id: 'business', label: 'MAJANDUS' },
  { id: 'tech', label: 'TEHNOLOOGIA' },
  { id: 'science', label: 'TEADUS' },
  { id: 'sports', label: 'SPORT' },
  { id: 'culture', label: 'KULTUUR' },
  { id: 'opinion', label: 'ARVAMUS' },
];

const getTranslatedUrl = (url: string) => {
  return `https://translate.google.com/translate?sl=auto&tl=et&u=${encodeURIComponent(url)}`;
};

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLanguage, setSelectedLanguage] = useState('all');

  // Unikaalsed keeled
  const languages = Array.from(new Set(outlets.map(o => o.language)))
    .sort()
    .map(lang => ({
      id: lang,
      label: lang,
      labelLocal: outlets.find(o => o.language === lang)?.languageLocal || ''
    }));

  // Filtreerimine
  const filteredOutlets = outlets.filter(outlet => {
    const categoryMatch = selectedCategory === 'all' || outlet.category === selectedCategory;
    const languageMatch = selectedLanguage === 'all' || outlet.language === selectedLanguage;
    return categoryMatch && languageMatch;
  });

  return (
    <div className="min-h-screen bg-white font-mono pb-24">
  <header className="border-b-4 border-black">
    <div className="max-w-7xl mx-auto px-4 py-6">
    
    {/* LOGO JA PEALKIRI (Lihtsustatud) */}
    <div>
        <h1 className="text-5xl font-bold text-black track">
            <img src="/mu_favicon_512.png" alt="MU logo" className="inline-block h-10 w-10 mr-2" />
            PAREMKLIKK
        </h1>
    </div>
    
    {/* VABADUSE TEKST */}
    <p className="text-sm text-black mt-2 text-center">
        Vabadus saada emakeelset infot reaalajas ühest kohast ja omal valikul → peab leppima toimetamata masintõlkega → loe ja telli, mida tahad.
    </p>
    
</div>
</header>

{/* 1. Nool ALLAPOOLE (Viib juhendi algusesse) */}
<a 
    href="#instruktsioonid-algus" 
    style={{
        position: 'fixed', 
        top: '150px', 
        right: '15px', 
        zIndex: 9999, 
        backgroundColor: 'black', 
        color: 'white', 
        width: '30px', 
        height: '30px', 
        lineHeight: '30px', 
        textAlign: 'center', 
        borderRadius: '4px', 
        fontSize: '20px', 
        textDecoration: 'none', 
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
        display: 'block' 
    }}
>
    ↓
</a>

{/* 2. Nool ÜLESPOOLE (Viib lehe algusesse) */}
<a 
    href="#" // Viib lehe ülesossa
    style={{
        position: 'fixed', 
        top: '100px', // Kõrgemal kui allapoole keriv nool (150px)
        right: '15px', 
        zIndex: 9999, 
        backgroundColor: 'black', 
        color: 'white', 
        width: '30px', 
        height: '30px', 
        lineHeight: '30px', 
        textAlign: 'center', 
        borderRadius: '4px', 
        fontSize: '20px', 
        textDecoration: 'none', 
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
        display: 'block' 
    }}
>
    ↑
</a>
<main className="max-w-7xl mx-auto px-4 py-8">
        {/* Language Filter - MITMES REAS */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-black mb-3 uppercase">
            KEEL:
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
            <button
              onClick={() => setSelectedLanguage('all')}
              className={`px-3 py-2 border-2 border-black font-bold text-xs transition-all ${
                selectedLanguage === 'all'
                  ? 'bg-black text-white'
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              KÕIK KEELED
            </button>
            {languages.map(lang => (
              <button
                key={lang.id}
                onClick={() => setSelectedLanguage(lang.id)}
                className={`px-3 py-2 border-2 border-black font-bold text-xs transition-all ${
                  selectedLanguage === lang.id
                    ? 'bg-black text-white'
                    : 'bg-white text-black hover:bg-gray-100'
                }`}
              >
                <div>{lang.label}</div>
                <div className="text-[10px] opacity-70">[{lang.labelLocal}]</div>
              </button>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-black mb-3 uppercase">
            KATEGOORIA:
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 border-2 border-black font-bold text-sm transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-black text-white'
                    : 'bg-white text-black hover:bg-gray-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4 pb-4 border-b-2 border-black">
          <p className="text-sm font-bold text-black">
            Näitan {filteredOutlets.length} väljaannet
          </p>
        </div>

        {/* Outlets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredOutlets.map((outlet, index) => (
            <div
              key={index}
              className="border-3 border-black p-4 bg-white hover:bg-gray-50 transition-colors"
              style={{ borderWidth: '3px' }}
            >
              <div className="mb-3">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-lg font-bold text-black pr-2">
                    {outlet.name}
                  </h3>
                  <span className="px-2 py-1 border-2 border-black font-bold text-xs flex-shrink-0 text-black bg-white">
                    {outlet.countryCode}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-black">
                  <span className="px-2 py-1 bg-black text-white font-bold">
                    {outlet.language}
                  </span>
                  <span className="px-2 py-1 border border-black font-bold">
                    {categories.find(c => c.id === outlet.category)?.label}
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <a
                  href={outlet.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-3 py-2 border-2 border-black bg-white hover:bg-gray-100 text-center font-bold text-sm transition-all text-black"
                >
                  ORIG
                </a>
                <a
                  href={getTranslatedUrl(outlet.url)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-3 py-2 border-2 border-black bg-black text-white hover:bg-gray-800 text-center font-bold text-sm transition-all"
                >
                  EESTI
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t-4 border-black bg-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div id="instruktsioonid-algus"className="text-center mb-8 pb-8 border-b-2 border-black">
            <p className="text-2xl font-bold text-black mb-2">
              Valik peab olema. Aru peab saama.
            </p>
            <p className="text-sm text-black">
              Küsimused: <a href="mailto:info@paremklikk.ee" className="underline">info@paremklikk.ee</a>
            </p>
            <p className="text-xs text-gray-600 mt-2">
              © paremklikk.ee
            </p>
          </div>

          <div className="border-3 border-black p-6 mb-6" style={{ borderWidth: '3px' }}>
            <h3 className="text-2xl font-bold text-black mb-4 uppercase">
              Kuidas kasutada:
            </h3>
            <ul className="space-y-2 text-black">
              <li>• Vali keel või vaata kõiki keeli</li>
              <li>• Vali kategooria või vaata kõiki kategooriaid</li>
              <li>• Vajuta ORIG - avab originaalkeelse lehe</li>
              <li>• Vajuta EESTI - avab Google Translate'itud versiooni eesti keeles</li>
              <li>• Maksumüür → saate iga kuu lugeda piiratud arvu artikleid täies mahus ilma tellimuseta</li>
            </ul>

            <div className="mt-4 border-2 border-black p-4 bg-gray-50">
              <p className="text-sm text-black">
                <strong>⚠ MASINTÕLGE VÕTAB 5-15 SEKUNDIT:</strong> Google Translate peab lehe esmalt laadima ja tõlkima. Ole kannatlik! Vana arvuti võib olla aeglasem, aga töötab ikka.
              </p>
            </div>
          </div>

          <div className="border-3 border-black p-6 mb-6" style={{ borderWidth: '3px' }}>
            <h3 className="text-xl font-bold text-black mb-4 uppercase border-b-2 border-black pb-2">
              KASULIK TEADA
            </h3>
            
            <h4 className="text-lg font-bold text-black mb-3">
              Kuidas väljaanded Google Translate'iga töötavad:
            </h4>

            <div className="space-y-4 text-black">
              <div className="border-l-4 border-black pl-4">
                <p className="font-bold">✓ CA 70% AVANEB KOHE</p>
                <p className="text-sm mt-1">→ Eesti keeles, artiklid tõlgitud, kõik töötab ideaalselt!</p>
              </div>

              <div className="border-l-4 border-black pl-4">
                <p className="font-bold">⚠ CA 20% VÕIB KÜSIDA KINNITUST</p>
                <p className="text-sm mt-1">→ Mõni leht küsib «Press & Hold» või captcha lahendamist</p>
                <p className="text-sm mt-1">→ Küpsiste popup: kliki «Nõustu kõigiga» ära ENNE kui vajutad Google Translate'i «Sain aru»</p>
                <p className="text-sm mt-1">→ Google Translate hoiatus: kliki «Sain aru» (mitte «Mine algsele URL-ile»)</p>
                <p className="text-sm mt-1">→ Kui jääb tsüklisse (popup tuleb tagasi): vajuta «Mine algsele URL-ile» ja kasuta brauseri tõlget</p>
              </div>

              <div className="border-l-4 border-black pl-4">
                <p className="font-bold">✗ CA 10% VÕIB OLLA AEGLASEM VÕI AJUTISELT KÄTTESAAMATU</p>
                <p className="text-sm mt-1">→ Mõnikord ei pruugi tõlge kohe töötada</p>
                <p className="text-sm mt-1">→ Kui Google Translate popup tsüklisse jääb, kasuta brauseri sisseehitatud tõlget (vaata NIPP allpool)</p>
              </div>
            </div>

            <div className="mt-4 border-2 border-black p-3 bg-gray-50">
              <p className="text-sm text-black">
                <strong>⚙ SEE MUUTUB PIDEVALT:</strong> Väljaanded muudavad oma süsteeme päevade ja nädalatega. See, mis täna blokeerib, võib homme töötada ja vastupidi.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t-2 border-black">
              <p className="text-sm text-black mb-3">
                <strong>💡 NIPP BRAUSERIS TÕLKIMISEKS:</strong>
              </p>
              <p className="text-sm text-black mb-2">
                <strong>CHROME/EDGE/COMET:</strong>
              </p>
              <p className="text-sm text-black mb-1">
                1. Ava suvaline inglise-, soome-, saksa- või muu välismaine uudisteleht
              </p>
              <p className="text-sm text-black mb-1">
                2. Parem-klikk lehel → vali «Tõlgi eesti keelde»
              </p>
              <p className="text-sm text-black mb-3">
                VÕI klõpsa paremal üleval/mobiiltelefonis all kolme täppu → «Translate/Tõlgi» → vali eesti keel
              </p>
              <p className="text-sm text-black mb-3">
                <strong>SAFARI:</strong><br />
                Menüüribalt: View → Translation → Estonian
              </p>
              <p className="text-sm text-black">
                <strong>Sa saad lugeda KÕIKI maailma väljaandeid eesti keeles</strong> - ka neid, mis pole meie nimekirjas. Lihtsalt mine lehele ja kasuta paremat hiireklõpsu!
              </p>
              <p className="text-sm text-black">
                <strong>NB! Kui avad lehe Comet brauseris,</strong> võid ülevalt AI assistendi avada ja emakeeles fakte kontrollida ja huvitavaid lugusid edasi uurida...salvesta lehti järjehoidjatesse
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
