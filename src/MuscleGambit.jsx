import React from "react";

export default function MuscleGambit() {
  const handleRedirect = (url) => {
    window.location.href = url;
  };

  return (
    <div className="bg-[#111] text-gray-100 font-sans min-h-screen">
      <header className="text-center py-8 bg-[#1a1a1a]">
        <div className="text-3xl font-bold text-red-600">MuscleGambit</div>
        <p className="mt-4 text-lg italic text-gray-400">
          "Każdy ruch ma znaczenie – nie tylko na szachownicy, ale i na siłowni."
        </p>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        <h1 className="text-center text-4xl font-bold text-white mb-10">PLANY TRENINGOWE</h1>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Karta 1 */}
          <div className="bg-[#1f1f1f] p-6 rounded-xl shadow-lg text-center flex flex-col items-center">
            <h2 className="text-red-600 text-2xl font-semibold mb-1">Gambit Tanka</h2>
            <p className="italic text-gray-400 mb-2">Full Body Workout</p>
            <img
              src="/images/gambit-tanka.jpg"
              alt="Plan Gambit Tanka"
              className="w-40 h-auto mb-4 rounded-md"
            />
            <p className="text-gray-300 mb-2">
              Plan skonstruowany jak otwarcie gambitowe – szybki, mocny i z myślą o dominacji. Trening całego ciała trzy razy w tygodniu. Idealny dla początkujących i średnio zaawansowanych.
            </p>
            <p className="text-xl font-bold text-white mb-4">99,99 zł</p>
            <img
              src="/images/kup-stripe-1.png"
              alt="Kup teraz"
              className="w-40 cursor-pointer hover:opacity-80 transition-opacity duration-300"
              onClick={() => handleRedirect("https://buy.stripe.com/test_gambitTanka")}
            />
          </div>

          {/* Karta 2 */}
          <div className="bg-[#1f1f1f] p-6 rounded-xl shadow-lg text-center flex flex-col items-center">
            <h2 className="text-red-600 text-2xl font-semibold mb-1">Hetmański Sznyt</h2>
            <p className="italic text-gray-400 mb-2">2x Push Pull Legs</p>
            <img
              src="/images/hetmanski-sznyt.jpg"
              alt="Plan Hetmański Sznyt"
              className="w-40 h-auto mb-4 rounded-md"
            />
            <p className="text-gray-300 mb-2">
              Dla zaawansowanych graczy – taktyka i kontrola. Ten sześciodniowy split pozwala precyzyjnie rozwijać każdą grupę mięśniową. Maksymalna objętość i intensywność bez chaosu.
            </p>
            <p className="text-xl font-bold text-white mb-4">129,99 zł</p>
            <img
              src="/images/kup-stripe-2.png"
              alt="Kup teraz"
              className="w-40 cursor-pointer hover:opacity-80 transition-opacity duration-300"
              onClick={() => handleRedirect("https://buy.stripe.com/test_hetmanskiSznyt")}
            />
          </div>
        </div>
      </main>

      <footer className="text-center py-10 bg-[#1a1a1a] text-gray-400 text-sm mt-16">
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
