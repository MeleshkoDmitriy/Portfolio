import { About } from "@/components/about/About";
import { Feedback } from "@/components/feedback/Feedback";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacts',
  description: "Contact links and address",
}

export default function ContactsPage () {
    return (
        <>
            <About />
            <Feedback />
        </>
    )
}