import React from "react";

export default function MuscleGambit() {
  const handleRedirect = (url) => {
    window.location.href = url;
  };

  return (
    <div className="bg-[#f2f3f7] text-[#111] font-sans min-h-screen flex flex-col">
      <header className="text-center py-12 bg-white shadow-md">
        <h1 className="text-5xl font-extrabold text-[#0d1a4b]">PLANY TRENINGOWE</h1>
        <p className="mt-3 italic text-[#444] max-w-xl mx-auto">
          "Siłownia to nie tylko trening siłowy ale przede wszystkim mentalny."
        </p>
      </header>

      <main className="max-w-6xl mx-auto p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 flex-grow">
        {/* Plan 1 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center transition-transform hover:scale-105">
          <img
            src="dybala.jpg"
            alt="Plan Gambit Tanka"
            className="w-48 h-auto mb-6"
          />
          <h2 className="text-2xl font-semibold text-center text-[#0d1a4b]">
            (Pełny Plan Treningowy) Gambit Tanka – Full Body Workout
          </h2>
          <p className="text-sm text-gray-500 mt-2 uppercase tracking-wide">MUSCLEGAMBIT</p>
          <p className="mt-4 font-bold text-2xl text-[#e63946]">14.99 zł</p>
          <button
            onClick={() => handleRedirect("https://buy.stripe.com/cNi9AUduc7ykaEq00A08g02")}
            className="mt-6 bg-[#0d1a4b] text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-[#1a2a73] transition"
          >
            Kup teraz
          </button>
        </div>

        {/* Plan 2 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center transition-transform hover:scale-105">
          <img
            src="rolando.jpg"
            alt="Plan Hetmański Sznyt"
            className="w-48 h-auto mb-6"
          />
          <h2 className="text-2xl font-semibold text-center text-[#0d1a4b]">
            (Pełny Plan Treningowy) Hetmański Sznyt – 2x Push Pull Legs
          </h2>
          <p className="text-sm text-gray-500 mt-2 uppercase tracking-wide">MUSCLEGAMBIT</p>
          <p className="mt-4 font-bold text-2xl text-[#e63946]">24,99 zł</p>
          <button
            onClick={() => handleRedirect("https://buy.stripe.com/eVq7sMfCk2e0dQCbJi08g03")}
            className="mt-6 bg-[#0d1a4b] text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-[#1a2a73] transition"
          >
            Kup teraz
          </button>
        </div>

        {/* Pusta karta */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center text-gray-400 italic text-lg">
          <p>Wkrótce nowy plan!</p>
        </div>
      </main>

      <footer className="text-center py-10 bg-white text-sm text-gray-600 mt-10">
        <p className="max-w-xl mx-auto px-4">
          MuscleGambit to projekt stworzony przez pasjonatów treningu i strategii. Wierzymy, że forma to wynik przemyślanego planu – jak w szachach.
        </p>
        <p className="mt-6">
          Skontaktuj się z nami<br />
          Masz pytania? Napisz na: <a href="MuscleGambit33@gmail.com" className="text-[#0d1a4b] underline">MuscleGambit@gmail.com>
        </p>
      </footer>
    </div>
  );
}
