import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How can I use Wheebot to create websites?",
    answer: "Wheebot provides an intuitive interface for website creation..."
  },
  {
    question: "How do I setup my own Wheebot installation?",
    answer: "Setting up Wheebot is straightforward..."
  },
  {
    question: "Can I edit the site Wheebot creates?",
    answer: "Yes, you can fully customize and edit..."
  },
  {
    question: "How do I host the website?",
    answer: "Wheebot offers multiple hosting options..."
  }
];

export function FAQ() {
  return (
    <div className="w-full max-w-7xl mx-auto p-8 flex gap-16 items-center justify-center">
      <h2 className="text-5xl font-bold text-white max-w-[400px] text-center">
        Frequently
        <br />
        Asked Questions
      </h2>
      
      <div className="flex-1">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-white text-xl font-medium hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}