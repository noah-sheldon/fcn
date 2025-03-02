"use client";
import React from "react";

const PrivacyPolicy: React.FC = () => {
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg mt-20 max-w-3xl mx-auto text-gray-900">
      <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-8">
        Privacy Policy
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        <strong>Effective Date:</strong> {today}
      </p>
      <p className="mb-6 text-gray-700 leading-relaxed">
        At Faithful Connects, we respect your privacy and are committed to
        protecting it. This Privacy Policy explains how we collect, use, and
        disclose information about users of our platform. By using Faithful
        Connects, you agree to the collection and use of information as
        described in this policy.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
        1. Information We Collect
      </h2>
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>
          <strong>Personal Information:</strong> We may collect your name, email
          address, phone number, and other identifying information when you
          register for an account or interact with our platform.
        </li>
        <li>
          <strong>Non-Personal Information:</strong> This includes browser type,
          device information, IP addresses, and data on how you interact with
          the platform.
        </li>
        <li>
          <strong>User-Generated Content:</strong> Content you post, such as
          messages, photos, and other interactions with users.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
        2. How We Use Your Information
      </h2>
      <p className="mb-4 text-gray-700">
        We use the information we collect to:
      </p>
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>Provide, maintain, and improve the Faithful Connects platform.</li>
        <li>Personalize user experience based on usage and preferences.</li>
        <li>Communicate with users, including for marketing if you opt in.</li>
        <li>Ensure security and prevent fraud or abuse.</li>
        <li>Analyze platform usage to enhance features and functionality.</li>
        <li>
          Comply with legal obligations under GDPR, such as maintaining accurate
          records and ensuring data portability upon request.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
        3. Sharing Your Information
      </h2>
      <p className="mb-4 text-gray-700">
        We will not sell your personal information. However, we may share your
        information in the following situations:
      </p>
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>
          With third-party service providers who help us operate the platform,
          subject to strict data protection agreements.
        </li>
        <li>
          In response to legal requests, such as subpoenas or investigations, in
          compliance with GDPR requirements.
        </li>
        <li>
          If Faithful Connects is acquired or merged with another company,
          provided user data will be handled according to this Privacy Policy.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
        4. Cookies and Tracking
      </h2>
      <p className="mb-6 text-gray-700">
        Faithful Connects uses cookies and similar tracking technologies to
        enhance user experience. You can choose to disable cookies through your
        browser settings, but this may limit certain features of the platform.
        We comply with the EU Cookie Directive by providing clear notice and
        obtaining consent where required.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
        5. Data Retention
      </h2>
      <p className="mb-6 text-gray-700">
        We retain your personal information for as long as your account is
        active or as needed to provide services. You may request to delete your
        account and associated data by contacting us at{" "}
        <a href="mailto:data@fcn.social" className="text-blue-600">
          data@fcn.social
        </a>
        . We will process your request in accordance with GDPR requirements and
        provide confirmation of data deletion.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
        6. Your Privacy Rights
      </h2>
      <p className="mb-6 text-gray-700">
        Under GDPR, you have the following rights:
      </p>
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>The right to access your personal data.</li>
        <li>The right to rectify inaccuracies in your personal data.</li>
        <li>
          The right to request erasure of your data (&quot;right to be
          forgotten&quot;).
        </li>
        <li>The right to data portability.</li>
        <li>The right to object to certain processing activities.</li>
      </ul>
      <p className="mb-6 text-gray-700">
        To exercise these rights, please contact us at{" "}
        <a href="mailto:data@fcn.social" className="text-blue-600">
          data@fcn.social
        </a>
        .
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
        7. Changes to This Privacy Policy
      </h2>
      <p className="mb-6 text-gray-700">
        We may update this Privacy Policy from time to time. We will notify
        users of any significant changes by posting a notice on the platform or
        sending an email. Continued use of the platform constitutes acceptance
        of the updated policy.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
        8. Contact Us
      </h2>
      <p className="mb-6 text-gray-700">
        If you have any questions about this Privacy Policy or wish to exercise
        your data rights, please contact us at{" "}
        <a href="mailto:info@fcn.social" className="text-blue-600">
          info@fcn.social
        </a>
        .
      </p>
    </div>
  );
};

export default PrivacyPolicy;
