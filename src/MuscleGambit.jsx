import React, { useState } from "react";

export default function MuscleGambit() {
  const [openModal, setOpenModal] = useState(null);

  const handleRedirect = (url) => {
    window.location.href = url;
  };

  const plans = [
    {
      title: "Gambit Tanka – Full Body Workout",
      price: "14,99 zł",
      img: "dybala.jpg",
      link: "https://buy.stripe.com/cNi9AUduc7ykaEq00A08g02",
      description: `Plan Treningowy FBW – Muscle Gambit

Chcesz trenować efektywnie i kompleksowo? Nasz plan FBW (Full Body Workout) to idealne rozwiązanie dla każdego, kto chce rozwijać siłę, wytrzymałość i sylwetkę, trenując całe ciało podczas jednej sesji. Plan jest dopasowany zarówno dla początkujących, jak i bardziej zaawansowanych – dzięki temu zyskujesz maksymalne efekty bez zbędnego tracenia czasu!

Co zyskujesz?

Kompletny program treningowy na każdy tydzień

Przemyślane ćwiczenia angażujące wszystkie partie mięśniowe

Jasne wskazówki dotyczące serii, powtórzeń i przerw.

Po zakupie natychmiast otrzymujesz dostęp do planu w formacie PDF, który automatycznie wyświetli się na ekranie Twojego urządzenia. Możesz go pobrać i mieć zawsze pod ręką – na telefonie, tablecie czy komputerze.

Zacznij trenować z Muscle Gambit już dziś i zobacz różnicę!`,
    },
    {
      title: "Hetmański Sznyt – 2x Push Pull Legs",
      price: "24,99 zł",
      img: "rolando.jpg",
      link: "https://buy.stripe.com/eVq7sMfCk2e0dQCbJi08g03",
      description: `Plan Treningowy 2x Push Pull Legs – Muscle Gambit

Szukasz skutecznego i dobrze zorganizowanego planu treningowego? Nasz plan 2x Push Pull Legs to sprawdzona metoda, która pozwala trenować każdą grupę mięśniową dwa razy w tygodniu, zapewniając szybkie postępy i odpowiednią regenerację.

Co znajdziesz w planie?

Podział na dni Push (mięśnie pchające), Pull (mięśnie ciągnące) oraz Legs (nogi)

Dwukrotne treningi każdej grupy mięśniowej w tygodniu

Dokładne instrukcje dotyczące ćwiczeń, serii, powtórzeń i przerw.

Po zakupie natychmiast wyświetli się link do pobrania planu w formacie PDF, dzięki czemu możesz zacząć ćwiczyć od razu i mieć plan zawsze pod ręką – na telefonie, tablecie lub komputerze.

Trenuj mądrze z Muscle Gambit i osiągaj swoje cele szybciej!`,
    },
    {
      title: "Plan Indywidualny",
      price: "39,99 zł",
      img: "teves.png",
      link: "https://buy.stripe.com/eVq6oIcq8cSE6oadRq08g04", // 
      description: `Plan Indywidualny – Muscle Gambit

Szukasz planu skrojonego pod Twoje cele, możliwości i styl życia? Plan indywidualny to propozycja dla osób, które oczekują maksimum personalizacji. Po zakupie skontaktuj się z nami drogą mailową abyśmy poznali twoje preferencje,stopień zaawansowania,wagę,wiek i możliwości sprzętowe.
Co otrzymujesz?

✅ Spersonalizowany plan w formacie PDF  
✅ Analiza Twojego celu i możliwości  
✅ Komunikacja z trenerem drogą mailową  
✅ opis każdego ćwiczenia

Zainwestuj w swój rozwój i trenuj z planem, który jest tylko Twój!`,
    },
  ];

  return (
    <div className="bg-[#f2f3f7] text-[#111] font-sans min-h-screen flex flex-col">
      {/* Logo + Nagłówek */}
      <header className="flex items-center justify-between py-6 px-8 bg-white shadow-md">
        <img src="/lewandowski.jpg" alt="Logo" className="h-12 w-auto" />
        <div className="text-center flex-1">
          <h1 className="text-4xl font-extrabold text-[#0d1a4b]">PLANY TRENINGOWE</h1>
          <p className="mt-2 italic text-[#444] max-w-xl mx-auto">
            „Nie musisz być najlepszy, żeby zacząć — ale musisz zacząć, żeby stać się najlepszym.”
          </p>
        </div>
      </header>

      {/* Główna sekcja */}
      <main className="max-w-6xl mx-auto p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 flex-grow">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center transition-transform hover:scale-105"
          >
            <img src={plan.img} alt={plan.title} className="w-48 h-auto mb-6" />
            <h2 className="text-2xl font-semibold text-center text-[#0d1a4b]">{plan.title}</h2>
            <p className="text-sm text-gray-500 mt-2 uppercase tracking-wide">MUSCLEGAMBIT</p>
            <p className="mt-4 font-bold text-2xl text-[#e63946]">{plan.price}</p>

            <button
              onClick={() => handleRedirect(plan.link)}
              className="mt-4 bg-[#0d1a4b] text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-[#1a2a73] transition"
            >
              Kup teraz
            </button>

            <button
              onClick={() => setOpenModal(index)}
              className="mt-3 text-[#0d1a4b] border border-[#0d1a4b] font-semibold py-2 px-6 rounded-full hover:bg-[#0d1a4b] hover:text-white transition"
            >
              Opis planu
            </button>

            {openModal === index && (
              <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
                <div className="bg-white text-black max-w-md p-6 rounded-xl relative shadow-lg">
                  <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                  <p className="mb-4" style={{ whiteSpace: "pre-line" }}>
                    {plan.description}
                  </p>
                  <button
                    onClick={() => setOpenModal(null)}
                    className="absolute top-2 right-4 text-2xl font-bold text-gray-600 hover:text-black"
                  >
                    &times;
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </main>

      {/* Stopka */}
      <footer className="text-center py-10 bg-white text-sm text-gray-600 mt-10 px-4">
        <p className="max-w-xl mx-auto">
          MuscleGambit to projekt stworzony przez pasjonatów treningu i strategii. Wierzymy, że forma to wynik przemyślanego planu – jak w szachach.
        </p>
        <p className="mt-6">
          Skontaktuj się z nami
          <br />
          Masz pytania? Napisz na:{" "}
          <a href="mailto:MuscleGambit33@gmail.com" className="text-[#0d1a4b] underline">
            MuscleGambit@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
}