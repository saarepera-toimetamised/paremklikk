export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">
            Paremklikk - Maailma uudised eesti keeles
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <p className="text-gray-600 text-center">
          Tulekul: 33 rahvusvahelist väljaannet ühes kohas! 🚀
        </p>
      </main>
    </div>
  );
}