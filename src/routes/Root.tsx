import React from "react";
import PlatformNotice from "../components/PlatformNotice";
import QRForAndroid from "../components/QRForAndroid";
import Navbar from "../components/Navbar";

export default function Root() {
  const todayStr = (() => {
    const d = new Date();
    const dd = d.getDate();
    const mm = d.getMonth() + 1;
    const yyyy = d.getFullYear();
    return `${dd}.${mm}.${yyyy}`;
  })();

  const betaStart = new Date(2025, 9, 15, 0, 0, 0); // 15.10.2025
  function getRemaining() {
    const now = new Date().getTime();
    const diff = Math.max(0, betaStart.getTime() - now);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds };
  }
  const [remaining, setRemaining] = React.useState(getRemaining());
  React.useEffect(() => {
    const id = setInterval(() => setRemaining(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />

      <main className="container mx-auto px-4 py-10 space-y-16">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Zmaturuj s ľahkosťou</h1>
            <p className="text-lg opacity-80 mb-6">
              Stiahni Android preview a vyskúšaj si učenie na maturity už dnes.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 flex-wrap">
              <a href="https://release.matur.sk/matur-preview-0.5.2.apk" className="btn btn-primary">Stiahnuť preview (APK)</a>
              <div className="hidden sm:block">
                <QRForAndroid url={"https://release.matur.sk/matur-preview-0.5.2.apk"} />
              </div>
            </div>
            <div className="mt-6 flex items-center gap-4 flex-wrap">
              <a
                className="text-current hover:opacity-80"
                href="https://www.instagram.com/pr.matur.sk"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" ry="5"></rect>
                  <circle cx="12" cy="12" r="4"></circle>
                  <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"></circle>
                </svg>
              </a>
              <a
                className="text-current hover:opacity-80"
                href="https://x.com/prmatursk"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h2.772l-6.066 6.93 7.34 10.57h-6.451l-4.045-5.72-4.632 5.72H4.39l6.243-7.71L3.672 2.25h6.606l3.777 5.28 4.189-5.28z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <img src="/logo.png" alt="Matur logo" className="max-h-64 max-w-full h-auto" />
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          <div className="card bg-base-100 shadow">
            <div className="card-body">
              <h3 className="card-title">Zamerané na maturitu</h3>
              <p>
                Obsah a cvičenia sú priamo k maturitným okruhom: modelové otázky, postupy krok za krokom,
                vysvetlenia riešení a tipy na stratégiu. Krátke kvízy s okamžitou spätnou väzbou ti pomôžu
                rýchlo zistiť, čo už ovládaš a čo treba ešte precvičiť.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 shadow">
            <div className="card-body">
              <h3 className="card-title">Prispôsobené študentom</h3>
              <p>
                Krátke a zrozumiteľné lekcie, jazyk bez zbytočného „balastu“, adaptívne opakovanie podľa tvojich
                chýb, pripomenutia pred dôležitými termínmi a režimy učenia na 10/20/30 minút. Všetko tak, aby si sa
                vedel učiť aj popri iných povinnostiach.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 shadow">
            <div className="card-body">
              <h3 className="card-title">Pomôže ti uspieť</h3>
              <p>
                Prehľad pokroku, denné ciele, série (streaks) a odznaky pre motiváciu. Odporúčania tém podľa výsledkov,
                inteligentné pripomenutia a počas bety aj podpora pri nahlasovaní chýb — nech sa appka zlepšuje spolu s tebou.
              </p>
            </div>
          </div>
        </section>

        {/* Removed beta countdown/capacity section for preview */}

        {/* Removed beta explainer section for preview */}

        <section>
          <h2 className="text-2xl font-bold mb-4">Roadmapa</h2>
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
              <div className="timeline-middle">
                <div className="relative w-12 h-12 rounded-full ring-4 ring-blue-800 bg-blue-700/10 flex items-center justify-center">
                  <div className="w-7 h-7 rounded-[40%] bg-blue-600"></div>
                </div>
              </div>
              <div className="timeline-start md:text-end md:pr-6 mb-10">
                <div className="font-mono opacity-70">1.9.2025</div>
                <div className="text-lg font-semibold">Idea</div>
                <p>Vznikol nápad vytvoriť aplikáciu, ktorá pomôže maturantom.</p>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <div className="relative w-12 h-12 rounded-full ring-4 ring-blue-800 bg-blue-700/10 flex items-center justify-center">
                  <div className="w-7 h-7 rounded-[40%] bg-blue-600"></div>
                </div>
              </div>
              <div className="timeline-end md:ml-6 mb-10">
                <div className="font-mono opacity-70">5.9.2025</div>
                <div className="text-lg font-semibold">Prvé kroky</div>
                <p>Vznikla prvá kostra aplikácie. Zatiaľ len základ.</p>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <div className="relative w-12 h-12 rounded-full ring-4 ring-blue-800 bg-blue-700/10 flex items-center justify-center">
                  <div className="w-7 h-7 rounded-[40%] bg-blue-600"></div>
                </div>
              </div>
              <div className="timeline-start md:text-end md:pr-6 mb-10">
                <div className="font-mono opacity-70">11.9.2025</div>
                <div className="text-lg font-semibold">Prototyp</div>
                <p>Prvý funkčný prototyp. Aplikácia má nastavenia a základné funkcie.</p>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <div className="relative w-12 h-12 rounded-full ring-4 ring-blue-800 bg-blue-700/10 flex items-center justify-center">
                  <div className="w-7 h-7 rounded-[40%] bg-blue-600"></div>
                </div>
              </div>
              <div className="timeline-end md:ml-6 mb-10">
                <div className="font-mono opacity-70">20.9.2025</div>
                <div className="text-lg font-semibold">Alfa</div>
                <p>Prvá alfa spätná väzba od kamarátov. Vznikla admin konzola na lekcie, otázky a ďalšie.</p>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <div className="relative w-12 h-12 rounded-full ring-4 ring-blue-800 bg-blue-700/10 flex items-center justify-center">
                  <div className="w-7 h-7 rounded-[40%] bg-blue-600"></div>
                </div>
              </div>
              <div className="timeline-start md:text-end md:pr-6 mb-10">
                <div className="font-mono opacity-70">28.9.2025</div>
                <div className="text-lg font-semibold">Príprava uzavretej bety</div>
                <p>Príprava uzavretej bety a dokončenie kľúčových funkcií.</p>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <div className="relative w-12 h-12 rounded-full ring-4 ring-blue-300 bg-blue-200/40 flex items-center justify-center">
                  <div className="w-8 h-8 rotate-45 rounded-lg bg-blue-400"></div>
                </div>
              </div>
              <div className="timeline-end md:ml-6 mb-10">
                <div className="font-mono opacity-70">{todayStr}</div>
                <div className="text-lg font-semibold">Teraz - Prvá beta (uzavretá)</div>
                <p>Uzavretá beta je spustená – aktívne testujeme a zbierame spätnú väzbu.</p>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <div className="relative w-12 h-12 rounded-full ring-4 ring-gray-300 bg-gray-50 flex items-center justify-center">
                  <div className="w-9 h-9 rounded-full overflow-hidden" style={{backgroundImage: "repeating-linear-gradient(45deg, #d1d5db 0, #d1d5db 4px, #f3f4f6 4px, #f3f4f6 8px)"}}></div>
                </div>
              </div>
              <div className="timeline-start md:text-end md:pr-6 mb-10">
                <div className="font-mono opacity-70">December 2025 – Q1 2026</div>
                <div className="text-lg font-semibold">Verejná beta</div>
                <p>Verejné sprístupnenie bety, plný prístup, popritom pracujeme na finálnej verzii.</p>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <div className="relative w-12 h-12 rounded-full ring-4 ring-gray-300 bg-gray-50 flex items-center justify-center">
                  <div className="w-9 h-9 rounded-full overflow-hidden" style={{backgroundImage: "repeating-linear-gradient(45deg, #d1d5db 0, #d1d5db 4px, #f3f4f6 4px, #f3f4f6 8px)"}}></div>
                </div>
              </div>
              <div className="timeline-end md:ml-6 mb-10">
                <div className="font-mono opacity-70">Q2 – Q3 2026</div>
                <div className="text-lg font-semibold">Plné vydanie</div>
                <p>Oficiálne vydanie aplikácie.</p>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <div className="relative w-12 h-12 rounded-full ring-4 ring-gray-300 bg-gray-50 flex items-center justify-center">
                  <div className="w-9 h-9 rounded-full overflow-hidden" style={{backgroundImage: "repeating-linear-gradient(45deg, #d1d5db 0, #d1d5db 4px, #f3f4f6 4px, #f3f4f6 8px)"}}></div>
                </div>
              </div>
              <div className="timeline-start md:text-end md:pr-6">
                <div className="font-mono opacity-70">Budúcnosť</div>
                <div className="text-lg font-semibold">Ďalšie predmety</div>
                <p>Aplikácie pre viac maturitných predmetov, aby sme pokryli všetky aspekty prípravy.</p>
              </div>
            </li>
          </ul>
        </section>

        {/* Removed beta-focused FAQ for preview */}
      </main>

      <footer className="border-t">
        <div className="container mx-auto px-4 py-8 text-sm flex flex-col md:flex-row gap-2 md:gap-6 items-center justify-between">
          <div>© {new Date().getFullYear()} Matur</div>
          <div className="flex gap-4">
            <a className="link" href="mailto:podpora@matur.sk">Kontakt: podpora@matur.sk</a>
            <a className="link" href="/cookie-policy">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
}


