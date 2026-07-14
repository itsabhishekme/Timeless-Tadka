import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Timeless Tadka. Share your recipes, stories, collaborations, feedback, and inquiries.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-700 via-orange-600 to-amber-600 text-white py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-orange-100">
            Contact Us
          </p>

          <h1 className="mt-4 text-5xl font-bold">
            We'd Love to Hear Your Story
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-orange-100">
            Whether you have a treasured family recipe, a collaboration idea,
            feedback, or simply want to say hello, we're always happy to
            connect. Every story helps preserve India's culinary heritage.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900">
              Send a Message
            </h2>

            <p className="mt-3 text-gray-600">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>

            <form className="mt-8 space-y-6">
              <div>
                <label className="mb-2 block font-medium">Full Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-orange-600"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-orange-600"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">Subject</label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-orange-600"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">Message</label>
                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-orange-600"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-orange-700 px-6 py-3 font-semibold text-white transition hover:bg-orange-800"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900">
                Get in Touch
              </h2>

              <p className="mt-4 text-gray-600">
                We'd love to hear from food lovers, home chefs, culinary
                historians, photographers, storytellers, and anyone passionate
                about preserving India's food traditions.
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="font-semibold text-orange-700">Email</h3>
                  <p className="text-gray-600">
                    hello@timelesstadka.com
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-orange-700">Collaborations</h3>
                  <p className="text-gray-600">
                    collaborate@timelesstadka.com
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-orange-700">
                    Recipe Submissions
                  </h3>
                  <p className="text-gray-600">
                    recipes@timelesstadka.com
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-orange-700">
                    Documentary & Media
                  </h3>
                  <p className="text-gray-600">
                    media@timelesstadka.com
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-orange-700 p-8 text-white">
              <h2 className="text-2xl font-bold">
                Share Your Family Recipe
              </h2>

              <p className="mt-4 leading-7 text-orange-100">
                Do you have a traditional recipe passed down through generations?
                We'd love to feature it on Timeless Tadka along with the story
                behind it, helping preserve India's culinary heritage for future
                generations.
              </p>

              <button className="mt-6 rounded-lg bg-white px-6 py-3 font-semibold text-orange-700 transition hover:bg-orange-100">
                Submit Your Recipe
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}