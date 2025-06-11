
export default function MuscleGambit() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      <header className="p-6 bg-black shadow-lg flex justify-between items-center">
        <h1 className="text-3xl font-bold">MuscleGambit</h1>
        <nav className="space-x-4">
          <a href="#plans" className="hover:underline">Plany</a>
          <a href="#about" className="hover:underline">O nas</a>
          <a href="#contact" className="hover:underline">Kontakt</a>
        </nav>
      </header>
<main className="flex flex-col items-center justify-center p-10">
  <h2 className="text-2xl font-semibold mb-4">Plan treningowy FBW</h2>
  <p className="mb-6 text-center max-w-md">
    Kompletny plan Full Body Workout. Idealny na start, dla spalania tłuszczu i budowy siły.
  </p>
  <a
    href="https://buy.stripe.com/cNi4gAgGog4Q6oa14E08g0"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-xl shadow-lg transition">
      Kup plan treningowy
    </button>
  </a>
</main>
      <section className="text-center py-20 px-4">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6">Trening to strategia. Zagraj o formę.</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Sprawdź plany treningowe, które łączą siłę z inteligencją. MuscleGambit – Twoje podejście strategiczne do budowy formy.
        </p>
        <a href="#plans" className="bg-white text-black px-6 py-3 font-bold rounded-xl shadow hover:bg-gray-200">Zobacz Plany</a>
      </section>

      <section id="plans" className="bg-gray-900 py-16 px-6">
        <h3 className="text-3xl font-bold text-center mb-12">Nasze Plany Treningowe</h3>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-xl text-center">
            <h4 className="text-2xl font-bold mb-4">Gambit Początkującego</h4>
            <p className="mb-4">4-tygodniowy plan na start. PDF do pobrania.</p>
            <button className="bg-white text-black font-bold px-4 py-2 rounded-xl hover:bg-gray-300">Kup za 49 zł</button>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-xl text-center">
            <h4 className="text-2xl font-bold mb-4">Roszada Siłowa</h4>
            <p className="mb-4">Plan na masę z podziałem tygodniowym.</p>
            <button className="bg-white text-black font-bold px-4 py-2 rounded-xl hover:bg-gray-300">Kup za 69 zł</button>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-xl text-center">
            <h4 className="text-2xl font-bold mb-4">Królowa Formy</h4>
            <p className="mb-4">Zaawansowany plan progresji siłowej.</p>
            <button className="bg-white text-black font-bold px-4 py-2 rounded-xl hover:bg-gray-300">Kup za 79 zł</button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 text-center">
        <h3 className="text-3xl font-bold mb-4">Kim jesteśmy?</h3>
        <p className="max-w-2xl mx-auto text-lg">
          MuscleGambit to projekt stworzony przez pasjonatów treningu i strategii. Wierzymy, że forma to wynik przemyślanego planu – jak w szachach.
        </p>
      </section>

      <section id="contact" className="bg-gray-900 py-20 px-6 text-center">
        <h3 className="text-3xl font-bold mb-4">Skontaktuj się z nami</h3>
        <p className="mb-4">Masz pytania? Napisz na <a className="underline" href="mailto:kontakt@musclegambit.pl">kontakt@musclegambit.pl</a></p>
      </section>

      <footer className="p-6 text-center bg-black text-sm text-gray-400">
        &copy; {new Date().getFullYear()} MuscleGambit. Wszelkie prawa zastrzeżone.
      </footer>
    </div>
  );
}
