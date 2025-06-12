import React from "react";

export default function MuscleGambit() {
  const handleRedirect = (url) => {
    window.location.href = url;
  };

  return (
    <div className="bg-[#111] text-white font-sans min-h-screen">
      <header className="text-center py-10 bg-[#1a1a1a]">
        <h1 className="text-4xl font-extrabold text-red-600">MuscleGambit</h1>
        <p className="mt-4 text-xl italic text-gray-400 max-w-xl mx-auto">
          "Każdy ruch ma znaczenie – nie tylko na szachownicy, ale i na siłowni."
        </p>
      </header>

      <main className="max-w-6xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Plan 1 */}
        <div className="bg-[#1f1f1f] p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold text-red-500 mb-1">Gambit Tanka</h2>
          <p className="text-gray-300 mb-2">Full Body Workout</p>
          <img
            src="/images/gambit-tanka.png"
            alt="Plan Gambit Tanka"
            className="w-40 h-auto mb-4"
          />
          <p className="text-sm text-gray-400 mb-2">
            Plan skonstruowany jak otwarcie gambitowe – szybki, mocny i z myślą o dominacji. Trening całego ciała trzy razy w tygodniu. Idealny dla początkujących i średnio zaawansowanych.
          </p>
          <p className="text-lg font-semibold text-white mb-2">99,99 zł</p>
          <img
            src="pogba.jpg"
            alt="Kup teraz"
            className="cursor-pointer w-36 hover:opacity-80 transition-opacity"
            onClick={() => handleRedirect("https://buy.stripe.com/test_gambitTanka")}
          />
        </div>

        {/* Plan 2 */}
        <div className="bg-[#1f1f1f] p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold text-red-500 mb-1">Hetmański Sznyt</h2>
          <p className="text-gray-300 mb-2">2x Push Pull Legs</p>
          <img
            src="/images/hetmanski-sznyt.png"
            alt="Plan Hetmański Sznyt"
            className="w-40 h-auto mb-4"
          />
          <p className="text-sm text-gray-400 mb-2">
            Dla zaawansowanych graczy – taktyka i kontrola. Ten sześciodniowy split pozwala precyzyjnie rozwijać każdą grupę mięśniową. Maksymalna objętość i intensywność bez chaosu.
          </p>
          <p className="text-lg font-semibold text-white mb-2">129,99 zł</p>
          <img
            src="/images/kup-teraz-2.png"
            alt="Kup teraz"
            className="cursor-pointer w-36 hover:opacity-80 transition-opacity"
            onClick={() => handleRedirect("https://buy.stripe.com/test_hetmanskiSznyt")}
          />
        </div>
      </main>

      <footer className="text-center py-10 bg-[#1a1a1a] text-gray-400 text-sm">
        <p className="mb-4 max-w-xl mx-auto">
          MuscleGambit to projekt stworzony przez pasjonatów treningu i strategii. Wierzymy, że forma to wynik przemyślanego planu – jak w szachach.
        </p>
        <p className="mb-2">
          Skontaktuj się z nami<br />
          Masz pytania? Napisz na <a href="mailto:kontakt@musclegambit.pl" className="text-red-500 underline">kontakt@musclegambit.pl</a>
        </p>
        <p>&copy; 2025 MuscleGambit. Wszelkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
}
