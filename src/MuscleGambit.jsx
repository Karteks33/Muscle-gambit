export default function MuscleGambit() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      <header className="p-6 bg-black shadow-lg text-center">
        <h1 className="text-4xl font-extrabold tracking-wide">MuscleGambit</h1>
      </header>

      <section className="text-center py-20 px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Trening to strategia. Zagraj o formę.</h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
          Sprawdź plan, który łączy siłę z inteligencją. Standardowy Gambit – strategiczne podejście do budowy formy.
        </p>
      </section>

      <main className="flex flex-col items-center justify-center px-4">
        <h3 className="text-3xl font-semibold mb-4">Standardowy Gambit</h3>
        <img
          src="https://images.unsplash.com/photo-1583454110551-dc0e8beabe0c?auto=format&fit=crop&w=1000&q=80"
          alt="Plan treningowy"
          className="rounded-xl shadow-lg max-w-md w-full mb-6"
        />
        <a
          href="https://buy.stripe.com/cNi4gAgGog4Q6oa14E08g0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-xl shadow-xl transition">
            Kup plan treningowy – 49 zł
          </button>
        </a>
      </main>

      <footer className="p-6 text-center bg-black text-sm text-gray-400 mt-20">
        &copy; {new Date().getFullYear()} MuscleGambit. Wszelkie prawa zastrzeżone.
      </footer>
    </div>
  );
}