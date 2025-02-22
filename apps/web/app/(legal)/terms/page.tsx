"use client";
import React from "react";

const TermsOfService: React.FC = () => {
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg mt-20 max-w-3xl mx-auto text-gray-900">
      <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-8">
        Terms of Service
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        <strong>Effective Date:</strong> {today}
      </p>
      <p className="mb-6 text-gray-700 leading-relaxed">
        These Terms of Service (&quot;Terms&quot;) govern your use of the
        Faithful Connects platform. By accessing or using Faithful Connects, you
        agree to comply with and be bound by these Terms. If you do not agree to
        these Terms, you should not use our services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
        1. Eligibility
      </h2>
      <p className="mb-4 text-gray-700">
        You must be at least 13 years old to use Faithful Connects. By using our
        platform, you represent and warrant that you meet this age requirement.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
        2. Account Registration
      </h2>
      <p className="mb-4 text-gray-700">
        To access certain features of Faithful Connects, you may be required to
        register for an account. You agree to provide accurate and complete
        information during registration and to keep your account information up
        to date.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
        3. User Responsibilities
      </h2>
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>
          You are responsible for maintaining the confidentiality of your
          account credentials.
        </li>
        <li>
          You agree not to use Faithful Connects for any unlawful purposes or to
          violate any applicable laws or regulations.
        </li>
        <li>
          You must not post content that is offensive, defamatory, or infringes
          on the rights of others.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
        4. Prohibited Activities
      </h2>
      <p className="mb-4 text-gray-700">
        You agree not to engage in any of the following prohibited activities:
      </p>
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>
          Using automated systems to access the platform without permission.
        </li>
        <li>
          Attempting to interfere with the proper functioning of Faithful
          Connects.
        </li>
        <li>Engaging in activities that harm or exploit other users.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
        5. Intellectual Property
      </h2>
      <p className="mb-6 text-gray-700">
        All content on Faithful Connects, including text, graphics, logos, and
        software, is the property of Faithful Connects or its licensors. You may
        not reproduce, distribute, or create derivative works without our prior
        written consent.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
        6. Termination
      </h2>
      <p className="mb-6 text-gray-700">
        We reserve the right to suspend or terminate your access to Faithful
        Connects at our discretion, without notice, if you violate these Terms
        or engage in harmful behavior.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
        7. Limitation of Liability
      </h2>
      <p className="mb-6 text-gray-700">
        Faithful Connects is provided &quot;as is&quot; without warranties of
        any kind. We do not guarantee that the platform will be error-free or
        uninterrupted. To the maximum extent permitted by law, we are not liable
        for any damages arising from your use of the platform.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
        8. Changes to These Terms
      </h2>
      <p className="mb-6 text-gray-700">
        We may update these Terms from time to time. We will notify users of any
        significant changes by posting a notice on the platform or sending an
        email. Continued use of Faithful Connects after changes are made
        constitutes acceptance of the new Terms.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
        9. User Data Deletion and Access Requests
      </h2>
      <p className="mb-6 text-gray-700">
        If you would like to delete your data or request a copy of the data we
        store about you, please send an email to&nbsp;
        <a href="mailto:data@fcn.social" className="text-blue-600">
          data@fcn.social
        </a>
        . We are happy to provide the data we store and process your request in
        accordance with applicable data protection laws, including GDPR.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
        10. Compliance with Data Protection Laws
      </h2>
      <p className="mb-6 text-gray-700">
        Faithful Connects adheres to all applicable data protection laws,
        including the General Data Protection Regulation (GDPR). We ensure that
        your personal data is collected, processed, and stored securely. For
        detailed information about how we handle your data, please refer to our
        Privacy Policy.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
        11. Contact Us
      </h2>
      <p className="mb-6 text-gray-700">
        If you have any questions about these Terms, please contact us at&nbsp;
        <a href="mailto:info@fcn.social" className="text-blue-600">
          info@fcn.social
        </a>
        .
      </p>
    </div>
  );
};

export default TermsOfService;
