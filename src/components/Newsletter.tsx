
import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real application, you'd send this to your backend/API
      console.log('Subscribed email:', email);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail('');
    }
  };

  return (
    <section className="py-16 md:py-24 bg-neutral-900 text-white">
      <div className="container-custom">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-medium mb-3">Stay Informed</h2>
          <p className="text-neutral-300 mb-8">
            Subscribe to our newsletter to receive updates on new collections, exclusive events, and styling inspirations.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 bg-neutral-800 border border-neutral-700 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-white text-black px-6 py-3 text-sm uppercase tracking-wider hover:bg-neutral-200 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </form>
          
          {submitted && (
            <p className="mt-4 text-green-400 animate-fade-in">
              Thank you for subscribing!
            </p>
          )}
          
          <p className="mt-6 text-xs text-neutral-400">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
