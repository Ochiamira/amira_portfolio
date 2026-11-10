"use client";

import { ArrowRight, CheckCircle2, LoaderCircle, Mail, MapPin } from "lucide-react";
import { FormEvent, useState } from "react";
import type { PortfolioContent } from "@/types/portfolio";
import { Reveal } from "@/components/ui/reveal";

type FormState = "idle" | "loading" | "success" | "error";

export function Contact({ profile, socialLinks, sectionCopy }: Pick<PortfolioContent, "profile" | "socialLinks" | "sectionCopy">) {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) throw new Error(result.message || "Une erreur est survenue.");
      setState("success");
      setMessage(result.message || "Merci, votre message a bien été envoyé.");
      form.reset();
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Impossible d'envoyer le message.");
    }
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <Reveal className="contact-intro">
          <span className="eyebrow">Contact</span>
          <h2>{sectionCopy.contactTitle}</h2>
          <p>
            {sectionCopy.contactDescription}
          </p>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}><Mail size={19} /><span><small>E-mail</small>{profile.email}</span></a>
            <div><MapPin size={19} /><span><small>Localisation</small>{profile.location}</span></div>
          </div>
          <div className="contact-socials">
            {socialLinks.map((link) => <a href={link.href} target="_blank" rel="noreferrer" key={link.label}>{link.label}</a>)}
          </div>
        </Reveal>

        <Reveal className="contact-form-wrap" delay={0.08}>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label>
                Votre nom
                <input type="text" name="name" placeholder="Nom et prénom" minLength={2} required />
              </label>
              <label>
                Votre e-mail
                <input type="email" name="email" placeholder="nom@entreprise.com" required />
              </label>
            </div>
            <label>
              Sujet
              <input type="text" name="subject" placeholder="Proposition, mission, question..." minLength={3} required />
            </label>
            <label>
              Message
              <textarea name="message" placeholder="Parlez-moi de votre besoin..." rows={5} minLength={10} required />
            </label>
            <input className="honeypot" type="text" name="companyWebsite" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <button className="button button--primary form-submit" type="submit" disabled={state === "loading"}>
              {state === "loading" ? <LoaderCircle className="spin" size={18} /> : null}
              {state === "loading" ? "Envoi..." : "Envoyer le message"}
              {state !== "loading" ? <ArrowRight size={18} /> : null}
            </button>
            {message ? (
              <p className={`form-message form-message--${state}`} role="status">
                {state === "success" ? <CheckCircle2 size={17} /> : null}{message}
              </p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
