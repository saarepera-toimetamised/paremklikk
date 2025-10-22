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
  // News - Arabic
  { name: 'Al Jazeera', category: 'news', url: 'https://www.aljazeera.com', language: 'العربية', languageLocal: 'araabia', countryCode: 'QA' },
  // News - French
  { name: 'France 24', category: 'news', url: 'https://www.france24.com/en/', language: 'Français', languageLocal: 'prantsuse', countryCode: 'FR' },
  // News - German
  { name: 'Deutsche Welle', category: 'news', url: 'https://www.dw.com/en/top-stories/s-9097', language: 'Deutsch', languageLocal: 'saksa', countryCode: 'DE' },
  // News - Finnish
  { name: 'Yle Uutiset', category: 'news', url: 'https://yle.fi/uutiset', language: 'Suomi', languageLocal: 'soome', countryCode: 'FI' },
  // News - Swedish
  { name: 'Aftonbladet', category: 'news', url: 'https://www.aftonbladet.se', language: 'Svenska', languageLocal: 'rootsi', countryCode: 'SE' },
  // News - Danish
  { name: 'DR Nyheder', category: 'news', url: 'https://www.dr.dk/nyheder', language: 'Dansk', languageLocal: 'taani', countryCode: 'DK' },
  // News - Norwegian
  { name: 'NRK', category: 'news', url: 'https://www.nrk.no', language: 'Norsk', languageLocal: 'norra', countryCode: 'NO' },
  // News - Icelandic
  { name: 'RÚV', category: 'news', url: 'https://www.ruv.is/frett', language: 'Íslenska', languageLocal: 'islandi', countryCode: 'IS' },
  // News - Latvian
  { name: 'Neatkarīgā', category: 'news', url: 'https://neatkariga.nra.lv', language: 'Latviešu', languageLocal: 'läti', countryCode: 'LV' },
  // News - Lithuanian
  { name: '15min', category: 'news', url: 'https://www.15min.lt', language: 'Lietuvių', languageLocal: 'leedu', countryCode: 'LT' },
  // News - Polish
  { name: 'Gazeta Wyborcza', category: 'news', url: 'https://wyborcza.pl', language: 'Polski', languageLocal: 'poola', countryCode: 'PL' },
  // News - Portuguese
  { name: 'Folha', category: 'news', url: 'https://www1.folha.uol.com.br', language: 'Português', languageLocal: 'portugali', countryCode: 'BR' },
  // News - Spanish
  { name: 'La Nacion', category: 'news', url: 'https://www.lanacion.com.ar', language: 'Español', languageLocal: 'hispaania', countryCode: 'AR' },
  // News - Greenlandic
  { name: 'Sermitsiaq', category: 'news', url: 'https://sermitsiaq.ag', language: 'Kalaallisut', languageLocal: 'grööni', countryCode: 'GL' },
  // Politics - English
  { name: 'Politico', category: 'politics', url: 'https://www.politico.com', language: 'English', languageLocal: 'inglise', countryCode: 'US' },
  { name: 'Foreign Affairs', category: 'politics', url: 'https://www.foreignaffairs.com', language: 'English', languageLocal: 'inglise', countryCode: 'US' },
  { name: 'The Kyiv Independent', category: 'politics', url: 'https://kyivindependent.com', language: 'English', languageLocal: 'inglise', countryCode: 'UA' },
  // Politics - Ukrainian
  { name: 'Suspilne Novyny', category: 'politics', url: 'https://suspilne.media', language: 'Українська', languageLocal: 'ukraina', countryCode: 'UA' },
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
    <div className="min-h-screen bg-white font-mono">
      <header className="border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-5xl font-bold text-black tracking-tight flex items-center gap-3 flex-wrap">
            <img src="/mu_logo_1024.png" alt="MU logo" className="w-12 h-12 object-contain" />
            PAREMKLIKK
          </h1>
          <p className="text-lg text-black mt-2">
            Maailmauudised eesti keeles
          </p>
          <p className="text-sm text-gray-700 mt-1 border-t border-black pt-2">
            Vabadus saada emakeelset infot reaalajas ühest kohast ja omal valikul → peab leppima toimetamata masintõlkega → loe ja telli, mida tahad.
          </p>
        </div>
      </header>

      {/* KEELERIBA - ÜLEVAL */}
      <div className="border-b-4 border-black bg-white">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex gap-3 overflow-x-auto pb-2">
            <button
              onClick={() => setSelectedLanguage('all')}
              className={`px-5 py-2 border-2 border-black font-bold text-sm tracking-wide transition-all whitespace-nowrap ${
                selectedLanguage === 'all'
                  ? 'bg-black text-white'
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              KÕIK KEELED
            </button>
            {languages.map((lang) => (
              <button
                key={lang.id}
                onClick={() => setSelectedLanguage(lang.id)}
                className={`px-5 py-2 border-2 border-black font-bold text-sm tracking-wide transition-all whitespace-nowrap ${
                  selectedLanguage === lang.id
                    ? 'bg-black text-white'
                    : 'bg-white text-black hover:bg-gray-100'
                }`}
              >
                <span className="block">{lang.label}</span>
                <span className="block text-xs opacity-70">[{lang.labelLocal}]</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* KATEGOORIARIBA - ALLPOOL */}
      <div className="border-b-4 border-black bg-white">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex gap-3 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2 border-2 border-black font-bold text-sm tracking-wide transition-all ${
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
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredOutlets.map((outlet) => (
            <div
              key={outlet.name}
              className="border-3 border-black p-5 bg-white relative"
              style={{ borderWidth: '3px' }}
            >
              {/* RIIGIKOOD - PAREM ÜLASERV */}
              <div className="absolute top-3 right-3 text-sm font-bold text-black">
                [{outlet.countryCode}]
              </div>

              <h3 className="text-xl font-bold text-black uppercase tracking-tight pr-16">
                {outlet.name}
              </h3>
              <p className="text-sm text-gray-700 mt-2 uppercase tracking-wide">
                [{categories.find(c => c.id === outlet.category)?.label}]
              </p>
              
              <div className="mt-4 flex gap-2">
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
          <div className="text-center mb-8 pb-8 border-b-2 border-black">
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
                VÕI klõpsa paremal üleval kolme täppi → «Translate/Tõlgi» → vali eesti keel
              </p>
              <p className="text-sm text-black mb-3">
                <strong>SAFARI:</strong><br />
                Menüüribalt: View → Translation → Estonian
              </p>
              <p className="text-sm text-black">
                <strong>Sa saad lugeda KÕIKI maailma väljaandeid eesti keeles</strong> - ka neid, mis pole meie nimekirjas. Lihtsalt mine lehele ja kasuta paremat hiireklõpsu!
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
