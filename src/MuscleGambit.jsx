import React from "react";

export default function MuscleGambit() {
  const handleRedirect = (url) => {
    window.location.href = url;
  };

  return (
    <div className="bg-[#f2f3f7] text-[#111] font-sans min-h-screen">
      <header className="text-center py-10 bg-white shadow-md">
        <h1 className="text-4xl font-bold text-[#0d1a4b]">PLANY TRENINGOWE</h1>
        <p className="mt-2 italic text-[#333]">
          "Każdy ruch ma znaczenie – nie tylko na szachownicy, ale i na siłowni."
        </p>
      </header>

      <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Plan 1 */}
        <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center">
          <img
            src="/images/gambit-tanka.png"
            alt="Plan Gambit Tanka"
            className="w-48 h-auto mb-4"
          />
          <h2 className="text-xl font-semibold text-center">
            (Gotowy Ebook) Gambit Tanka – Full Body Workout
          </h2>
          <p className="text-sm text-[#666] mt-2">FATKILLER</p>
          <p className="mt-2 font-bold text-lg">99,99 zł</p>
          <img
            src="/images/kup-teraz-1.png"
            alt="Kup teraz"
            className="mt-4 cursor-pointer w-48 hover:opacity-80 transition"
            onClick={() => handleRedirect("https://buy.stripe.com/test_gambitTanka")}
          />
        </div>

        {/* Plan 2 */}
        <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center">
          <img
            src="/images/hetmanski-sznyt.png"
            alt="Plan Hetmański Sznyt"
            className="w-48 h-auto mb-4"
          />
          <h2 className="text-xl font-semibold text-center">
            (Gotowy Ebook) Hetmański Sznyt – 2x Push Pull Legs
          </h2>
          <p className="text-sm text-[#666] mt-2">FATKILLER</p>
          <p className="mt-2 font-bold text-lg">129,99 zł</p>
          <img
            src="/images/kup-teraz-2.png"
            alt="Kup teraz"
            className="mt-4 cursor-pointer w-48 hover:opacity-80 transition"
            onClick={() => handleRedirect("https://buy.stripe.com/test_hetmanskiSznyt")}
          />
        </div>

        {/* Pusta karta (opcjonalnie na przyszłość) */}
        <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center justify-center">
          <p className="text-center text-gray-400">Wkrótce nowy plan!</p>
        </div>
      </main>

      <footer className="text-center py-8 bg-white text-sm text-gray-600 mt-10">
        <p className="max-w-xl mx-auto">
          MuscleGambit to projekt stworzony przez pasjonatów treningu i strategii. Wierzymy, że forma to wynik przemyślanego planu – jak w szachach.
        </p>
        <p className="mt-4">
          Skontaktuj się z nami<br />
          Masz pytania? Napisz na{" 
