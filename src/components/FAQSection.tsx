interface FAQSectionProps {
  faqs: {
    question: string;
    answer: string;
  }[];
}


export default function FAQSection({
  faqs,
}: FAQSectionProps) {


  if (!faqs.length) {
    return null;
  }


  return (

    <section className="mt-12">


      <h2 className="text-2xl font-bold text-[var(--primary)]">

        Frequently Asked Questions

      </h2>



      <div className="mt-6 space-y-6">


        {faqs.map((faq, index) => (

          <div
            key={index}
            className="border rounded-xl p-5"
          >

            <h3 className="font-semibold text-lg">

              {faq.question}

            </h3>


            <p className="mt-2 text-slate-600">

              {faq.answer}

            </p>


          </div>

        ))}


      </div>


    </section>

  );
}