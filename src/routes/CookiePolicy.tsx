import React from "react";
import Navbar from "../components/Navbar";

export default function CookiePolicy() {
  const todayStr = (() => {
    const d = new Date();
    const dd = String(d.getDate()).padStart(2, "0");
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const yyyy = d.getFullYear();
    return `${dd}.${mm}.${yyyy}`;
  })();

  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />
      <div className="container mx-auto px-4 py-10 prose">
        <h1>Zásady používania súborov cookies</h1>
        <p>
          Tento dokument vysvetľuje, ako Matur (ďalej len „my") používa súbory cookies a podobné technológie
          na svojej webovej stránke. Cieľom je poskytnúť transparentné, jasné a úplné informácie o tom,
          aké cookies používame, na aký účel a ako môžete spravovať svoje preferencie.
        </p>

        <h2>1. Čo sú cookies?</h2>
        <p>
          Cookies sú malé textové súbory, ktoré sa ukladajú do vášho prehliadača alebo zariadenia, keď
          navštívite webovú stránku. Umožňujú webu rozpoznať vaše zariadenie, zapamätať si vaše voľby a
          pomáhajú nám lepšie porozumieť používaniu webu.
        </p>

        <h2>2. Aké cookies používame</h2>
        <ul>
          <li>
            <strong>Technické (nevyhnutné) cookies</strong>: slúžia na zabezpečenie základných funkcií webu,
            ako je ukladanie vášho súhlasu s cookies a bezpečná prevádzka. Tieto cookies sú potrebné a
            spracúvajú sa na základe nášho oprávneného záujmu/prevádzkovej nevyhnutnosti.
          </li>
          <li>
            <strong>Analytické cookies</strong>: používame ich výhradne na agregované meranie návštevnosti a
            na pochopenie, ako je web používaný (napr. ktoré sekcie sú navštevované). Tieto cookies nám
            pomáhajú zlepšovať obsah a používateľskú skúsenosť. Analytické cookies používame len na základe
            vášho súhlasu a nepoužívame ich na profilovanie ani personalizovanú reklamu. Počas bety sú
            analytické cookies pre fungovanie a zlepšovanie služby nevyhnutné.
          </li>
        </ul>
        <p>
          <strong>Marketingové alebo profilovacie cookies nepoužívame.</strong>
        </p>

        <h2>3. Právny základ spracúvania</h2>
        <ul>
          <li>
            Technické (nevyhnutné) cookies: oprávnený záujem/prevádzková nevyhnutnosť, aby web fungoval správne.
          </li>
          <li>
            Analytické cookies: váš <strong>súhlas</strong>, ktorý môžete kedykoľvek odvolať.
          </li>
        </ul>

        <h2>4. Doba uchovávania</h2>
        <ul>
          <li>
            Technické cookies (napr. voľba súhlasu): spravidla do 12 mesiacov.
          </li>
          <li>
            Analytické cookies: spravidla do 13 mesiacov alebo kratšie podľa nastavení nástroja.
          </li>
        </ul>

        <h2>5. Správa preferencií a odvolanie súhlasu</h2>
        <p>
          Súhlas s analytickými cookies môžete kedykoľvek odvolať odstránením cookies v nastaveniach
          prehliadača alebo zmenou vašich preferencií pre cookies. Vo väčšine prehliadačov nájdete správu
          cookies v sekcii Nastavenia → Súkromie a bezpečnosť. Upozorňujeme, že vzhľadom na použitie
          externého analytického poskytovateľa nie je technicky možné deaktivovať analytické cookies len pre
          jednotlivého používateľa. Ak nesúhlasíte s analytickými cookies, nemôžeme zabezpečiť riadnu
          funkčnosť a budete presmerovaní mimo náš web.
        </p>

        <h2>6. Poskytovatelia a prenosy do tretích krajín</h2>
        <p>
          Na analytické účely môžeme využívať externé analytické nástroje. Údaje používame v agregovanej podobe
          a nevyužívame ich na marketing ani profilovanie. Ak by došlo k prenosu údajov mimo EÚ/EHP,
          zabezpečíme primerané záruky (napr. štandardné zmluvné doložky) v súlade s GDPR.
        </p>

        <h2>7. Vaše práva</h2>
        <p>
          Máte právo na prístup k údajom, opravu, vymazanie, obmedzenie spracúvania, prenosnosť a právo namietať.
          Pri cookies založených na súhlase máte právo súhlas kedykoľvek odvolať.
        </p>

        <h2>8. Kontakt</h2>
        <p>
          Ak máte otázky k týmto zásadám alebo k používaniu cookies, kontaktujte nás na
          <a href="mailto:podpora@matur.sk"> podpora@matur.sk</a>.
        </p>

        <h2>9. Účinnosť a zmeny dokumentu</h2>
        <p>
          Tento dokument môže byť občas aktualizovaný. Aktuálne znenie je vždy dostupné na tejto stránke.
          Dátum poslednej aktualizácie: {todayStr}.
        </p>
      </div>
    </div>
  );
}


