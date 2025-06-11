import React from "react";

export default function MuscleGambit() {
  return (
    <div className="bg-[#111] text-gray-100 font-sans">
      <header className="text-center py-8 bg-[#1a1a1a]">
        <div className="text-3xl font-bold text-red-600">MuscleGambit</div>
        <p className="mt-4 text-lg italic text-gray-400">
          "Każdy ruch ma znaczenie – nie tylko na szachownicy, ale i na siłowni."
        </p>
      </header>

      <main className="max-w-3xl mx-auto p-4">
        <section className="bg-[#1f1f1f] p-6 rounded-xl shadow-lg mb-8">
          <h2 className="text-red-600 text-2xl font-semibold mb-4">
            Gambit Tanka – Full Body Workout
          </h2>
          <p className="mb-4">
            Plan skonstruowany jak otwarcie gambitowe – szybki, mocny i z myślą o dominacji. Trening całego ciała trzy razy w tygodniu. Idealny dla początkujących i średnio zaawansowanych, którzy chcą budować siłę, masę i wytrzymałość w przemyślany sposób.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded">
            Kup przez Stripe
          </button>
        </section>

        <section className="bg-[#1f1f1f] p-6 rounded-xl shadow-lg mb-8">
          <h2 className="text-red-600 text-2xl font-semibold mb-4">
            Hetmański Sznyt – 2x Push Pull Legs
          </h2>
          <p className="mb-4">
            Dla zaawansowanych graczy – taktyka i kontrola. Ten sześciodniowy split pozwala precyzyjnie rozwijać każdą grupę mięśniową, jak hetman kontrolujący szachownicę. Maksymalna objętość i intensywność bez chaosu – bo siła tkwi w strukturze.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded">
            Kup przez Stripe
          </button>
        </section>
      </main>

      <footer className="text-center py-8 bg-[#1a1a1a] text-gray-400 text-sm">
        <p>
          MuscleGambit to projekt stworzony przez pasjonatów treningu i strategii. Wierzymy, że forma to wynik przemyślanego planu – jak w szachach.
        </p>
        <p className="mt-4">
          Skontaktuj się z nami<br />
          Masz pytania? Napisz na <a href="mailto:kontakt@musclegambit.pl" className="text-red-600">kontakt@musclegambit.pl</a>
        </p>
        <p className="mt-4">&copy; 2025 MuscleGambit. Wszelkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
}
