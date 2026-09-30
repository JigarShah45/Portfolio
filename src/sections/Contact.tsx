"use client";

import { useForm, ValidationError } from "@formspree/react";
import { Send, Mail, ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import MagneticButton from "@/components/ui/MagneticButton";
import { socialLinks } from "@/data/social";
import { profile } from "@/data/profile";

export default function Contact() {
  const [state, handleSubmit] = useForm("mjyvywre");

  if (state.succeeded) {
    return (
      <section
        id="contact"
        className="py-24 md:py-32 bg-neutral-50/50 dark:bg-neutral-900/30"
      >
        <div className="section-container">
          <SectionHeading
            label="Contact"
            title="Thanks for reaching out!"
            description="I'll get back to you as soon as possible."
            align="center"
          />
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-neutral-50/50 dark:bg-neutral-900/30"
    >
      <div className="section-container">
        <SectionHeading
          label="Contact"
          title="Let's build something together"
          description="Have a project in mind or want to chat? Feel free to reach out."
          align="center"
        />

        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <Reveal delay={0.1} direction="left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="Your name"
                />
                <ValidationError
                  field="name"
                  errors={state.errors}
                  className="text-sm text-red-500 mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
                <ValidationError
                  field="email"
                  errors={state.errors}
                  className="text-sm text-red-500 mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
                <ValidationError
                  field="message"
                  errors={state.errors}
                  className="text-sm text-red-500 mt-1"
                />
              </div>

              <ValidationError
                errors={state.errors}
                className="text-sm text-red-500"
              />

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={state.submitting}
              >
                {state.submitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          </Reveal>

          <Reveal delay={0.2} direction="right">
            <div className="flex flex-col justify-center">
              <h3 className="font-display text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                Get in touch
              </h3>
              <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed mb-8">
                I&apos;m always open to discussing new projects, creative ideas,
                or opportunities to be part of something great.
              </p>

              <div className="space-y-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400 hover:text-orange-500 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  {profile.email}
                </a>
                <p className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  {profile.phone}
                </p>
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400 hover:text-orange-500 transition-colors"
                  >
                    <link.icon className="w-5 h-5" />
                    {link.label}
                  </a>
                ))}
              </div>

              <MagneticButton className="mt-8 self-start">
                <a href={`mailto:${profile.email}`}>
                  <Button variant="secondary" size="lg">
                    Email Me
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
