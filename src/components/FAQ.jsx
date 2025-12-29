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
    "What if I need help getting started?",
    "Can I connect with other tech professionals on Flowva?",
    "What rewards can I earn with Flowva?"
  ];

  const answers = {
    "What is Flowvahub?":
      "Flowvahub is your productivity sidekick — helping you discover new tools, manage subscriptions, and earn rewards for staying productive..",
    "Is my data secure with Flowva?":
      "Absolutely. Your data is private and never sold. You decide what to share, and it’s only used to improve your experience.",
    "How does team collaboration work?":
      "Teams can share recommendations, optimize workflows together, view analytics, and manage shared subscriptions from a single dashboard. (Note: Rewards are not included for Teams.)",
    "How do Smart Tool Recommendations work?":
      "The more you use our platform, the better it understands your workflow — giving you smarter, more relevant tool suggestions over time.",
    "Can I cancel my subscription anytime?":
      "Yes. You can cancel your Pro or Team plan anytime. You’ll keep access until the end of your billing cycle, and you can always downgrade to our Free plan.",
    "Can I manage all my subscriptions in one place?":
      "Yes! Flowva tracks all your subscriptions in one place — sending renewal alerts, monitoring spending, and helping you save money.",
    "Do you offer mobile apps?":
      "Yes 😃 Our iOS and Android apps are launching soon, so you can manage subscriptions, get recommendations, earn rewards, and stay connected anywhere.",
    "What if I need help getting started?":
      "We provide onboarding guides, tutorials, and email support. Pro users get priority support, while Teams and Organizations receive dedicated onboarding and training.", // Added comma here
    "Can I connect with other tech professionals on Flowva?":
      "Yes! Flowva has an active community of tech enthusiasts, freelancers, and remote professionals. You can connect with others, discuss tools, get feedback, and collaborate with like-minded users, all while discovering new ways to optimize your workflow.",
    "What rewards can I earn with Flowva?":
      "All users earn basic rewards by using Flowva, with extra perks for Premium. Rewards come from completing simple tasks — trying recommended tools or sharing feedback — and can be redeemed for gift cards, cash, or community perks."
  }; // Removed the extra }; that was here

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-white py-28 -mt-32">
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