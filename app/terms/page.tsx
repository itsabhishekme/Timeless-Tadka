import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Read the Terms & Conditions for using Timeless Tadka, including user responsibilities, intellectual property, content usage, and legal information.",
};

export default function TermsPage() {
  const lastUpdated = "15 July 2026";

  return (
    <main className="bg-amber-50">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-3xl bg-white p-10 shadow-lg">
          <h1 className="text-4xl font-bold text-amber-900">
            Terms & Conditions
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            Last Updated: {lastUpdated}
          </p>

          <p className="mt-8 text-lg leading-8 text-gray-700">
            Welcome to <strong>Timeless Tadka</strong>. By accessing or using
            this website, you agree to comply with these Terms & Conditions.
            Please read them carefully before using our services.
          </p>

          <div className="mt-12 space-y-10">
            <section>
              <h2 className="text-2xl font-semibold text-amber-800">
                1. Acceptance of Terms
              </h2>

              <p className="mt-4 leading-8 text-gray-700">
                By using Timeless Tadka, you confirm that you have read,
                understood, and accepted these Terms. If you do not agree with
                any part of these Terms, please discontinue use of this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-amber-800">
                2. About Timeless Tadka
              </h2>

              <p className="mt-4 leading-8 text-gray-700">
                Timeless Tadka is a digital platform dedicated to preserving
                India's culinary heritage through authentic recipes, regional
                cuisines, food stories, traditional cooking methods, and
                educational culinary content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-amber-800">
                3. Intellectual Property
              </h2>

              <p className="mt-4 leading-8 text-gray-700">
                Unless otherwise stated, all articles, recipes, photographs,
                videos, graphics, branding, logos, illustrations, and website
                content are the intellectual property of Timeless Tadka and are
                protected under applicable copyright and trademark laws.
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
                <li>No unauthorized copying or redistribution.</li>
                <li>No commercial reuse without permission.</li>
                <li>Credit must be given when referencing our content.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-amber-800">
                4. Recipes & Nutritional Information
              </h2>

              <p className="mt-4 leading-8 text-gray-700">
                Recipes are shared for informational and educational purposes.
                Results may vary depending on ingredients, cooking methods,
                equipment, and individual preferences. Nutritional information,
                when available, is approximate only.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-amber-800">
                5. User Responsibilities
              </h2>

              <p className="mt-4 leading-8 text-gray-700">
                Users agree not to misuse the website or engage in activities
                that interfere with its operation.
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
                <li>Respect other users.</li>
                <li>Do not upload harmful or illegal content.</li>
                <li>Do not attempt unauthorized access.</li>
                <li>Follow all applicable laws.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-amber-800">
                6. External Links
              </h2>

              <p className="mt-4 leading-8 text-gray-700">
                Our website may contain links to third-party websites. We are
                not responsible for their content, privacy practices, or
                services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-amber-800">
                7. Limitation of Liability
              </h2>

              <p className="mt-4 leading-8 text-gray-700">
                Timeless Tadka shall not be liable for any direct, indirect,
                incidental, or consequential damages resulting from the use or
                inability to use this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-amber-800">
                8. Privacy
              </h2>

              <p className="mt-4 leading-8 text-gray-700">
                Your use of this website is also governed by our Privacy Policy,
                which explains how we collect, use, and protect your
                information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-amber-800">
                9. Changes to These Terms
              </h2>

              <p className="mt-4 leading-8 text-gray-700">
                We reserve the right to update these Terms & Conditions at any
                time. Continued use of the website after changes become
                effective constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-amber-800">
                10. Contact Us
              </h2>

              <p className="mt-4 leading-8 text-gray-700">
                If you have any questions regarding these Terms & Conditions,
                please contact us through our Contact page.
              </p>
            </section>
          </div>

          <div className="mt-16 rounded-2xl bg-amber-100 p-6">
            <h3 className="text-xl font-semibold text-amber-900">
              Thank You
            </h3>

            <p className="mt-3 leading-7 text-gray-700">
              Thank you for being part of the Timeless Tadka community. Together,
              we celebrate India's culinary heritage, preserve traditional
              recipes, and keep the stories behind every meal alive for future
              generations.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}