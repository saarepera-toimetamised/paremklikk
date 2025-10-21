'use client';

import { useState } from 'react';

const outlets = [
  // News
  { name: 'BBC News', category: 'news', url: 'https://www.bbc.com/news' },
  { name: 'The Guardian', category: 'news', url: 'https://www.theguardian.com/international' },
  { name: 'CNN', category: 'news', url: 'https://www.cnn.com' },
  { name: 'Al Jazeera', category: 'news', url: 'https://www.aljazeera.com' },
  { name: 'Reuters', category: 'news', url: 'https://www.reuters.com' },
  { name: 'Associated Press', category: 'news', url: 'https://apnews.com' },
  { name: 'France 24', category: 'news', url: 'https://www.france24.com/en/' },
  { name: 'Deutsche Welle', category: 'news', url: 'https://www.dw.com/en/top-stories/s-9097' },
  { name: 'NPR', category: 'news', url: 'https://www.npr.org/sections/news/' },
  { name: 'Yle Uutiset', category: 'news', url: 'https://yle.fi/uutiset' },
  { name: 'Aftonbladet', category: 'news', url: 'https://www.aftonbladet.se' },
  { name: 'DR Nyheder', category: 'news', url: 'https://www.dr.dk/nyheder' },
  { name: 'NRK', category: 'news', url: 'https://www.nrk.no' },
  { name: 'RÚV', category: 'news', url: 'https://www.ruv.is/frett' },
  { name: 'Neatkarīgā', category: 'news', url: 'https://neatkariga.nra.lv' },
  { name: '15min', category: 'news', url: 'https://www.15min.lt' },
  { name: 'Gazeta Wyborcza', category: 'news', url: 'https://wyborcza.pl' },
  { name: 'NHK World', category: 'news', url: 'https://www3.nhk.or.jp/nhkworld/' },
  { name: 'Yonhap News', category: 'news', url: 'https://en.yna.co.kr' },
  { name: 'RTHK', category: 'news', url: 'https://news.rthk.hk/rthk/en' },
  { name: 'CNA', category: 'news', url: 'https://www.channelnewsasia.com' },
  { name: 'The Hindu', category: 'news', url: 'https://www.thehindu.com' },
  { name: 'Bangkok Post', category: 'news', url: 'https://www.bangkokpost.com' },
  { name: 'Tempo', category: 'news', url: 'https://en.tempo.co' },
  { name: 'ABC News AU', category: 'news', url: 'https://www.abc.net.au/news' },
  { name: 'NZ Herald', category: 'news', url: 'https://www.nzherald.co.nz' },
  { name: 'Folha', category: 'news', url: 'https://www1.folha.uol.com.br' },
  { name: 'La Nacion', category: 'news', url: 'https://www.lanacion.com.ar' },
  { name: 'Sermitsiaq', category: 'news', url: 'https://sermitsiaq.ag' },
  // Politics
  { name: 'Politico', category: 'politics', url: 'https://www.politico.com' },
  { name: 'Foreign Affairs', category: 'politics', url: 'https://www.foreignaffairs.com' },
  { name: 'The Economist', category: 'politics', url: 'https://www.economist.com' },
  // Business
  { name: 'Financial Times', category: 'business', url: 'https://www.ft.com' },
  { name: 'Bloomberg', category: 'business', url: 'https://www.bloomberg.com' },
  { name: 'Wall Street Journal', category: 'business', url: 'https://www.wsj.com' },
  { name: 'Forbes', category: 'business', url: 'https://www.forbes.com' },
  // Tech
  { name: 'TechCrunch', category: 'tech', url: 'https://techcrunch.com' },
  { name: 'The Verge', category: 'tech', url: 'https://www.theverge.com' },
  { name: 'Wired', category: 'tech', url: 'https://www.wired.com' },
  { name: 'Ars Technica', category: 'tech', url: 'https://arstechnica.com' },
  // Science
  { name: 'Nature', category: 'science', url: 'https://www.nature.com' },
  { name: 'Science', category: 'science', url: 'https://www.science.org' },
  { name: 'Scientific American', category: 'science', url: 'https://www.scientificamerican.com' },
  { name: 'New Scientist', category: 'science', url: 'https://www.newscientist.com' },
  // Sports
  { name: 'ESPN', category: 'sports', url: 'https://www.espn.com' },
  { name: 'The Athletic', category: 'sports', url: 'https://theathletic.com' },
  { name: 'Sky Sports', category: 'sports', url: 'https://www.skysports.com' },
  // Culture
  { name: 'Variety', category: 'culture', url: 'https://variety.com' },
  { name: 'Rolling Stone', category: 'culture', url: 'https://www.rollingstone.com' },
  { name: 'Pitchfork', category: 'culture', url: 'https://pitchfork.com' },
  { name: 'The Atlantic', category: 'culture', url: 'https://www.theatlantic.com' },
  { name: 'New Yorker', category: 'culture', url: 'https://www.newyorker.com' },
  // Opinion
  { name: 'Vox', category: 'opinion', url: 'https://www.vox.com' },
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

  const filteredOutlets = selectedCategory === 'all' 
    ? outlets 
    : outlets.filter(o => o.category === selectedCategory);

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
              className="border-3 border-black p-5 bg-white"
              style={{ borderWidth: '3px' }}
            >
              <h3 className="text-xl font-bold text-black uppercase tracking-tight">
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
              <li>• Vali kategooria või vaata kõiki</li>
              <li>• Vajuta ORIG - avab originaalkeelne leht</li>
              <li>• Vajuta EESTI - avab Google Translate'itud versioon eesti keeles</li>
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
              SULGE LISAINFO
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
                <p className="text-sm mt-1">→ Mõni leht küsib "Press & Hold" või captcha lahendamist. Tee see ära ja seejärel töötab.</p>
              </div>

              <div className="border-l-4 border-black pl-4">
                <p className="font-bold">✗ CA 10% VÕIB OLLA AEGLASEM VÕI AJUTISELT KÄTTESAAMATU</p>
                <p className="text-sm mt-1">→ Mõnikord ei pruugi tõlge kohe töötada. Proovi hiljem uuesti või kasuta brauseri sisseehitatud tõlget.</p>
              </div>
            </div>

            <div className="mt-4 border-2 border-black p-3 bg-gray-50">
              <p className="text-sm text-black">
                <strong>⚙ SEE MUUTUB PIDEVALT:</strong> Väljaanded muudavad oma süsteeme päevade ja nädalatega. See, mis täna blokeerib, võib homme töötada ja vastupidi.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t-2 border-black">
              <p className="text-sm text-black">
                <strong>💡 NIPP CHROME'I BRAUSERIS:</strong> Kui Google Translate automaatselt ei tööta, proovi brauseri sisseehitatud tõlget: parema hiireklahviga klõps lehel → "Tõlgi eesti keelde" või klõpsa paremal üleval kolme täppi ja vali rippmenüüst "Translate/tõlgi" → eesti keel.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}