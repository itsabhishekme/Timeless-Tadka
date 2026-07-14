import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Privacy Policy for Timeless Tadka. Learn how we collect, use, and protect your personal information while you explore authentic Indian recipes and traditions.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <header className="mb-12">
        <span className="rounded-full bg-orange-100 px-4 py-1 text-sm font-medium text-orange-700">
          Legal
        </span>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
          Privacy Policy
        </h1>

        <p className="mt-4 text-lg leading-8 text-gray-600">
          At <strong>Timeless Tadka</strong>, your privacy matters. This Privacy
          Policy explains how we collect, use, store, and safeguard your
          information when you visit our website.
        </p>

        <p className="mt-2 text-sm text-gray-500">
          Last Updated: July 2026
        </p>
      </header>

      <div className="space-y-10 text-gray-700 leading-8">
        <section>
          <h2 className="mb-3 text-2xl font-semibold">
            1. Information We Collect
          </h2>

          <p>
            We may collect certain information when you use our website,
            including:
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>Name (if you contact us)</li>
            <li>Email address</li>
            <li>Device and browser information</li>
            <li>IP address</li>
            <li>Pages visited</li>
            <li>Cookies and analytics data</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">
            2. How We Use Your Information
          </h2>

          <p>Your information may be used to:</p>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>Improve website performance.</li>
            <li>Respond to inquiries.</li>
            <li>Provide newsletters (only if subscribed).</li>
            <li>Analyze website traffic.</li>
            <li>Develop new features and services.</li>
            <li>Protect against spam and misuse.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">3. Cookies</h2>

          <p>
            Timeless Tadka uses cookies to enhance your browsing experience,
            remember preferences, and understand how visitors interact with the
            website.
          </p>

          <p className="mt-3">
            You can disable cookies through your browser settings at any time.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">
            4. Third-Party Services
          </h2>

          <p>
            We may use trusted third-party services including:
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>Google Analytics</li>
            <li>Google Search Console</li>
            <li>Cloud Hosting Providers</li>
            <li>Email Marketing Platforms</li>
            <li>Social Media Platforms</li>
          </ul>

          <p className="mt-4">
            These providers have their own privacy policies governing the data
            they collect.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">5. Data Security</h2>

          <p>
            We use industry-standard security measures to help protect your
            information. However, no internet transmission or electronic storage
            method can be guaranteed to be completely secure.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">
            6. Children's Privacy
          </h2>

          <p>
            Timeless Tadka does not knowingly collect personal information from
            children under the age of 13. If you believe a child has provided
            personal information, please contact us so we can remove it.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">7. Your Rights</h2>

          <p>You may request to:</p>

          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li>Access your personal information.</li>
            <li>Correct inaccurate information.</li>
            <li>Delete your personal data.</li>
            <li>Withdraw consent where applicable.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">8. External Links</h2>

          <p>
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices or content of those external
            sites.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">
            9. Policy Updates
          </h2>

          <p>
            This Privacy Policy may be updated from time to time. Changes become
            effective immediately after being posted on this page.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">10. Contact Us</h2>

          <p>
            If you have any questions about this Privacy Policy, please contact
            us through the Contact page on Timeless Tadka.
          </p>
        </section>

        <div className="rounded-2xl border border-orange-200 bg-orange-50 p-6">
          <h3 className="text-xl font-semibold text-orange-700">
            Timeless Tadka
          </h3>

          <p className="mt-3 text-gray-700">
            Bringing Emotional Homemade Recipes, Authentic Spices & Timeless
            Indian Traditions Back to Life.
          </p>
        </div>
      </div>
    </main>
  );
}