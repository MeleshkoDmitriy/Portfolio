import { Feedback } from "@/components/feedback/Feedback";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Feedback',
  description: "Portfolio Feedback",
}

export default function FeedbackPage () {
    return (
        <section>
            <Feedback />
        </section>
    )
}