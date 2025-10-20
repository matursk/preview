import React from "react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [showConfirmReject, setShowConfirmReject] = React.useState(false);

  React.useEffect(() => {
    try {
      const stored = localStorage.getItem("cookieConsent");
      if (stored !== "accepted") {
        setIsVisible(true);
      }
    } catch (_e) {
      // If localStorage is unavailable, still show banner to be safe
      setIsVisible(true);
    }
  }, []);

  function handleAccept() {
    try {
      localStorage.setItem("cookieConsent", "accepted");
    } catch (_e) {
      // ignore write failures
    }
    setIsVisible(false);
  }

  function handleReject() {
    setShowConfirmReject(true);
  }

  function handleEssentialOnly() {
    setShowConfirmReject(true);
  }

  function handleCancelReject() {
    setShowConfirmReject(false);
  }

  function handleConfirmReject() {
    try {
      localStorage.setItem("cookieConsent", "rejected");
    } catch (_e) {
      // ignore write failures
    }
    // Redirect user away from the site since consent is required
    window.location.replace("about:blank");
  }

  if (!isVisible) return null;

  return (
    <div className="fixed left-4 bottom-4 z-50">
      <div className="max-w-sm bg-base-200 text-base-content border border-base-300 shadow rounded-xl p-3 sm:p-4">
        <div className="flex items-start gap-3">
          <div className="flex-1 text-sm leading-5">
            <div className="font-medium mb-1">Používame cookies</div>
            <p className="opacity-80">
              Na zlepšenie služieb používame súbory cookies (iba analytika). Viac nájdete v
              <a className="link ml-1" href="/cookie-policy">Zásadách používania cookies</a>.
            </p>
          </div>
          <button
            type="button"
            aria-label="Zavrieť oznámenie o cookies"
            className="btn btn-ghost btn-xs"
            onClick={handleAccept}
          >
            ✕
          </button>
        </div>
        <div className="mt-3 flex gap-2">
          <button type="button" className="btn btn-primary btn-sm" onClick={handleAccept}>
            Súhlasím
          </button>
          <button type="button" className="btn btn-outline btn-sm" onClick={handleReject}>
            Nesúhlasím
          </button>
          <button type="button" className="btn btn-ghost btn-sm" onClick={handleEssentialOnly}>
            Len nevyhnutné
          </button>
        </div>
      </div>

      {showConfirmReject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" aria-hidden="true" onClick={handleCancelReject}></div>
          <div className="relative bg-base-200 text-base-content border border-base-300 shadow-xl rounded-xl p-5 w-full max-w-md mx-4">
            <h3 className="text-lg font-semibold mb-2">Bez súhlasu nemôžeme pokračovať</h3>
            <p className="text-sm opacity-90">
              Táto stránka používa výhradne analytické cookies potrebné na prevádzku a zlepšovanie služby počas bety.
              Nie je možné vypnúť analytiku iba pre jednotlivca, keďže využívame externého poskytovateľa.
              Ak nesúhlasíte, budete presmerovaní mimo náš web.
            </p>
            <div className="mt-4 flex gap-2 justify-end">
              <button type="button" className="btn btn-ghost btn-sm" onClick={handleCancelReject}>
                Zostať na stránke
              </button>
              <button type="button" className="btn btn-error btn-sm" onClick={handleConfirmReject}>
                Nesúhlasím a odísť
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


