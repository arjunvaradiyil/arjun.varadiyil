import { SITE_FAQ, ZERO_CLICK_SUMMARY } from '../lib/zeroClickSeo';
import { NEU } from './ui/neuTheme';

export default function ZeroClickFaq() {
  return (
    <section
      className={`${NEU.section} ${NEU.sectionPad} border-t-2 border-gray-900/10 dark:border-white/10`}
      aria-labelledby="zero-click-faq-heading"
    >
      <div className="relative z-10 mx-auto max-w-3xl">
        <p className={`text-center ${NEU.eyebrow}`}>Quick answers</p>
        <h2
          id="zero-click-faq-heading"
          className={`mt-3 text-center ${NEU.display} text-3xl sm:text-4xl`}
        >
          Frequently asked questions
        </h2>

        <p className={`zero-click-summary mt-6 text-center text-lg leading-relaxed ${NEU.bodyText}`}>
          {ZERO_CLICK_SUMMARY}
        </p>

        <dl className="mt-10 space-y-3">
          {SITE_FAQ.map((item) => (
            <div key={item.question} className={`${NEU.cardStatic} overflow-hidden`}>
              <dt className="border-b-2 border-gray-900/10 px-5 py-4 font-syne text-lg font-bold text-gray-900 dark:border-white/10 dark:text-white">
                {item.question}
              </dt>
              <dd className={`zero-click-faq-answer px-5 py-4 text-base leading-relaxed ${NEU.bodyText}`}>
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
