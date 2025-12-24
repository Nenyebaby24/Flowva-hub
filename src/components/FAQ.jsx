import { useState } from "react";

export default function FAQ() {
  const faqs = [
    "What is Flowvahub?",
    "Is my data secure with Flowva?",
    "How does team collaboration work?",
    "How do Smart Tool Recommendations work?",
    "Can I cancel my subscription anytime?",
    "Can I manage all my subscriptions in one place?",
    "Do you offer mobile apps?",
    "What if I need help getting started?"
  ];

  const answers = {
    "What is Flowvahub?":
      "Flowvahub is an all-in-one platform designed to help you manage workflows, track progress, and earn rewards efficiently.",
    "Is my data secure with Flowva?":
      "Yes. We use industry-standard encryption and best security practices to protect your data.",
    "How does team collaboration work?":
      "You can invite teammates, assign tasks, and collaborate in real time across shared workflows.",
    "How do Smart Tool Recommendations work?":
      "Flowva analyzes your workflow and suggests tools that best match your needs.",
    "Can I cancel my subscription anytime?":
      "Yes. You can cancel at any time without hidden fees.",
    "Can I manage all my subscriptions in one place?":
      "Absolutely. Flowva lets you manage, track, and optimize subscriptions from one dashboard.",
    "Do you offer mobile apps?":
      "Mobile apps are currently in development and coming soon.",
    "What if I need help getting started?":
      "Our onboarding guides and support team are ready to help you every step of the way."
  };

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-white py-28">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-16">
          NEED ANSWERS?
        </h2>

        {/* FAQ GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {faqs.map((q, index) => (
            <div
              key={q}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="cursor-pointer rounded-xl bg-gray-50 px-6 py-5 transition hover:bg-gray-100"
            >
              {/* Question row */}
              <div className="flex items-center gap-3">
                <span
                  className={`transition-transform ${
                    openIndex === index ? "rotate-90" : ""
                  }`}
                >
                  ▶
                </span>

                <h3 className="font-medium text-lg">{q}</h3>
              </div>

              {/* Answer */}
              {openIndex === index && (
                <p className="mt-4 pl-6 text-sm text-gray-600 leading-relaxed">
                  {answers[q]}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
