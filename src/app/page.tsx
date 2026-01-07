import DemoForm from '@/components/DemoForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold text-white mb-6">
          Never Miss Another Customer Call
        </h1>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          AI-powered voice assistant for Australian trades businesses.
          Answer every call, book jobs 24/7, and grow your business.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#demo" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold">
            Book a Demo
          </a>
          <a href="#features" className="border border-slate-500 hover:border-slate-400 text-white px-8 py-3 rounded-lg">
            Learn More
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Why Tradies Choose Us
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            title="24/7 Call Answering"
            description="Never miss a job enquiry. Our AI answers calls round the clock, even on weekends."
          />
          <FeatureCard
            title="Instant Job Booking"
            description="Customers can book directly into your calendar. No back-and-forth needed."
          />
          <FeatureCard
            title="Aussie Voice"
            description="Natural Australian accent that your customers will love. Not a robot."
          />
        </div>
      </section>

      {/* Demo Form Section */}
      <section id="demo" className="container mx-auto px-4 py-16">
        <div className="max-w-xl mx-auto bg-slate-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white text-center mb-6">
            Book Your Free Demo
          </h2>
          <DemoForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-slate-400">
        <p>&copy; 2026 emuu.io - Voice AI for Australian Trades</p>
      </footer>
    </main>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-slate-800 rounded-lg p-6">
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-slate-300">{description}</p>
    </div>
  );
}
