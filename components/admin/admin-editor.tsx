"use client";

import { useEffect, useRef, useState } from "react";
import type {
  PortfolioContent,
  Profile,
  SectionCopy,
  TimelineItem,
} from "@/types/portfolio";

type FieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  multiline?: boolean;
  type?: string;
  hint?: string;
};

function Field({ label, value, onChange, multiline, type = "text", hint }: FieldProps) {
  return (
    <label className="admin-field">
      <span>{label}</span>
      {multiline ? (
        <textarea value={value} onChange={(event) => onChange(event.target.value)} rows={4} />
      ) : (
        <input type={type} value={value} onChange={(event) => onChange(event.target.value)} />
      )}
      {hint ? <small>{hint}</small> : null}
    </label>
  );
}

function UploadField({
  kind,
  onUploaded,
}: {
  kind: "photo" | "project" | "cv";
  onUploaded: (url: string) => void;
}) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  async function upload(file: File) {
    setPending(true);
    setError("");
    const form = new FormData();
    form.set("kind", kind);
    form.set("file", file);
    try {
      const response = await fetch("/api/admin/upload", { method: "POST", body: form });
      const result = (await response.json()) as { url?: string; message?: string };
      if (!response.ok || !result.url) throw new Error(result.message || "Envoi impossible.");
      onUploaded(result.url);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Envoi impossible.");
    } finally {
      setPending(false);
    }
  }

  return (
    <label className="admin-upload">
      <span>{kind === "cv" ? "Importer un PDF" : "Importer une image"}</span>
      <input
        type="file"
        accept={kind === "cv" ? "application/pdf" : "image/jpeg,image/png,image/webp,image/avif"}
        disabled={pending}
        onChange={(event) => {
          const file = event.target.files?.[0];
          if (file) void upload(file);
          event.target.value = "";
        }}
      />
      <small>{pending ? "Envoi en cours…" : "3 Mo maximum. Enregistrez ensuite les modifications."}</small>
      {error ? <small className="admin-error" role="alert">{error}</small> : null}
    </label>
  );
}

function StringList({
  label,
  items,
  onChange,
  addLabel = "Ajouter",
}: {
  label: string;
  items: string[];
  onChange: (items: string[]) => void;
  addLabel?: string;
}) {
  return (
    <div className="admin-list">
      <strong>{label}</strong>
      {items.map((item, index) => (
        <div className="admin-inline" key={index}>
          <input
            aria-label={`${label} ${index + 1}`}
            value={item}
            onChange={(event) => onChange(replaceAt(items, index, event.target.value))}
          />
          <button className="admin-remove" type="button" onClick={() => onChange(items.filter((_, i) => i !== index))}>
            Retirer
          </button>
        </div>
      ))}
      <button className="admin-add" type="button" onClick={() => onChange([...items, ""])}>
        + {addLabel}
      </button>
    </div>
  );
}

function replaceAt<T>(items: T[], index: number, value: T): T[] {
  return items.map((item, i) => i === index ? value : item);
}

function TimelineEditor({
  title,
  items,
  onChange,
}: {
  title: string;
  items: TimelineItem[];
  onChange: (items: TimelineItem[]) => void;
}) {
  return (
    <section className="admin-section" id={title === "Expériences" ? "experiences" : "education"}>
      <div className="admin-section-heading">
        <h2>{title}</h2>
        <button className="admin-add" type="button" onClick={() => onChange([
          ...items,
          { period: "", title: "", organization: "", location: "", description: "", highlights: [] },
        ])}>+ Ajouter</button>
      </div>
      {items.map((item, index) => (
        <div className="admin-item" key={index}>
          <div className="admin-item-heading">
            <h3>{item.title || `Nouvel élément ${index + 1}`}</h3>
            <button className="admin-remove" type="button" onClick={() => onChange(items.filter((_, i) => i !== index))}>Retirer</button>
          </div>
          <div className="admin-grid">
            <Field label="Titre" value={item.title} onChange={(value) => onChange(replaceAt(items, index, { ...item, title: value }))} />
            <Field label="Période" value={item.period} onChange={(value) => onChange(replaceAt(items, index, { ...item, period: value }))} />
            <Field label="Organisation" value={item.organization} onChange={(value) => onChange(replaceAt(items, index, { ...item, organization: value }))} />
            <Field label="Lieu" value={item.location ?? ""} onChange={(value) => onChange(replaceAt(items, index, { ...item, location: value }))} />
          </div>
          <Field label="Description" value={item.description} multiline onChange={(value) => onChange(replaceAt(items, index, { ...item, description: value }))} />
          <StringList label="Points clés" items={item.highlights ?? []} onChange={(value) => onChange(replaceAt(items, index, { ...item, highlights: value }))} addLabel="un point clé" />
        </div>
      ))}
    </section>
  );
}

const profileFields: Array<{ key: keyof Profile; label: string; multiline?: boolean; type?: string; hint?: string }> = [
  { key: "firstName", label: "Prénom" },
  { key: "lastName", label: "Nom" },
  { key: "initials", label: "Initiales" },
  { key: "role", label: "Titre professionnel" },
  { key: "location", label: "Localisation" },
  { key: "email", label: "E-mail", type: "email" },
  { key: "phone", label: "Téléphone", type: "tel" },
  { key: "availability", label: "Disponibilité" },
  { key: "shortBio", label: "Présentation courte", multiline: true },
  { key: "longBio", label: "Présentation détaillée", multiline: true },
  { key: "objective", label: "Objectif professionnel", multiline: true },
  { key: "photo", label: "Photo", hint: "Chemin /images/… ou URL https://…" },
  { key: "cv", label: "CV", hint: "Chemin /cv/… ou URL https://…" },
];

const sectionCopyFields: Array<{ key: keyof SectionCopy; label: string; multiline?: boolean }> = [
  { key: "aboutTitle", label: "Titre À propos" },
  { key: "aboutQuote", label: "Phrase Ma façon de travailler", multiline: true },
  { key: "skillsTitle", label: "Titre Compétences" },
  { key: "skillsDescription", label: "Introduction Compétences", multiline: true },
  { key: "timelineTitle", label: "Titre Parcours" },
  { key: "timelineDescription", label: "Introduction Parcours", multiline: true },
  { key: "projectsTitle", label: "Titre Projets" },
  { key: "projectsDescription", label: "Introduction Projets", multiline: true },
  { key: "contactTitle", label: "Titre Contact" },
  { key: "contactDescription", label: "Introduction Contact", multiline: true },
  { key: "certificationsTitle", label: "Titre Certifications" },
  { key: "certificationsDescription", label: "Introduction Certifications", multiline: true },
];

export function AdminEditor({ initialContent }: { initialContent: PortfolioContent }) {
  const [content, setContent] = useState(initialContent);
  const [savedContent, setSavedContent] = useState(initialContent);
  const [dirty, setDirty] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const editVersion = useRef(0);

  useEffect(() => {
    if (!dirty) return;
    const warn = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = "";
    };
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirty]);

  function setSection<K extends keyof PortfolioContent>(key: K, value: PortfolioContent[K]) {
    editVersion.current += 1;
    setContent((current) => ({ ...current, [key]: value }));
    setDirty(true);
    setMessage("");
  }

  async function save() {
    const versionAtSave = editVersion.current;
    const snapshot = structuredClone(content);
    setSaving(true);
    setMessage("");
    setError(false);
    try {
      const response = await fetch("/api/admin/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(snapshot),
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message || "Enregistrement impossible.");
      setSavedContent(snapshot);
      if (editVersion.current === versionAtSave) {
        setDirty(false);
        setMessage("Modifications enregistrées. Le site public affiche maintenant ce contenu.");
      } else {
        setMessage("Enregistrement terminé. D'autres modifications restent à enregistrer.");
      }
    } catch (cause) {
      setError(true);
      setMessage(cause instanceof Error ? cause.message : "Enregistrement impossible.");
    } finally {
      setSaving(false);
    }
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.reload();
  }

  return (
    <main className="admin-shell">
      <header className="admin-topbar">
        <div>
          <span className="admin-eyebrow">Espace privé</span>
          <h1>Modifier le portfolio</h1>
          <p>Ajoutez, corrigez ou retirez les informations, puis enregistrez.</p>
        </div>
        <div className="admin-top-actions">
          <a className="admin-secondary" href="/" target="_blank" rel="noreferrer">Voir le site</a>
          <button className="admin-secondary" type="button" onClick={logout}>Se déconnecter</button>
        </div>
      </header>

      <nav className="admin-nav" aria-label="Sections de l'administration">
        <a href="#profil">Profil</a>
        <a href="#textes">Textes</a>
        <a href="#liens">Liens</a>
        <a href="#chiffres">Chiffres</a>
        <a href="#competences-admin">Compétences</a>
        <a href="#experiences">Expériences</a>
        <a href="#education">Formation</a>
        <a href="#projets-admin">Projets</a>
        <a href="#certifications-admin">Certifications</a>
        <a href="#langues">Langues</a>
      </nav>

      <section className="admin-section" id="profil">
        <h2>Profil</h2>
        <div className="admin-grid">
          {profileFields.map((field) => (
            <div className="admin-field-group" key={field.key}>
              <Field
                label={field.label}
                value={content.profile[field.key]}
                multiline={field.multiline}
                type={field.type}
                hint={field.hint}
                onChange={(value) => setSection("profile", { ...content.profile, [field.key]: value })}
              />
              {field.key === "photo" || field.key === "cv" ? (
                <UploadField kind={field.key} onUploaded={(url) => {
                  editVersion.current += 1;
                  setContent((current) => ({ ...current, profile: { ...current.profile, [field.key]: url } }));
                  setDirty(true);
                  setMessage("");
                }} />
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section className="admin-section" id="textes">
        <h2>Textes des sections</h2>
        <div className="admin-grid">
          {sectionCopyFields.map((field) => (
            <Field
              key={field.key}
              label={field.label}
              value={content.sectionCopy[field.key]}
              multiline={field.multiline}
              onChange={(value) => setSection("sectionCopy", { ...content.sectionCopy, [field.key]: value })}
            />
          ))}
        </div>
      </section>

      <section className="admin-section" id="liens">
        <div className="admin-section-heading">
          <h2>Liens sociaux</h2>
          <button className="admin-add" type="button" onClick={() => setSection("socialLinks", [...content.socialLinks, { label: "", href: "" }])}>+ Ajouter</button>
        </div>
        {content.socialLinks.map((link, index) => (
          <div className="admin-item admin-item-row" key={index}>
            <Field label="Nom du lien" value={link.label} onChange={(value) => setSection("socialLinks", replaceAt(content.socialLinks, index, { ...link, label: value }))} />
            <Field label="Adresse" value={link.href} onChange={(value) => setSection("socialLinks", replaceAt(content.socialLinks, index, { ...link, href: value }))} />
            <button className="admin-remove" type="button" onClick={() => setSection("socialLinks", content.socialLinks.filter((_, i) => i !== index))}>Retirer</button>
          </div>
        ))}
      </section>

      <section className="admin-section" id="chiffres">
        <div className="admin-section-heading">
          <h2>Chiffres clés</h2>
          <button className="admin-add" type="button" onClick={() => setSection("quickFacts", [...content.quickFacts, { value: "", label: "" }])}>+ Ajouter</button>
        </div>
        {content.quickFacts.map((fact, index) => (
          <div className="admin-item admin-item-row" key={index}>
            <Field label="Valeur" value={fact.value} onChange={(value) => setSection("quickFacts", replaceAt(content.quickFacts, index, { ...fact, value }))} />
            <Field label="Libellé" value={fact.label} onChange={(value) => setSection("quickFacts", replaceAt(content.quickFacts, index, { ...fact, label: value }))} />
            <button className="admin-remove" type="button" onClick={() => setSection("quickFacts", content.quickFacts.filter((_, i) => i !== index))}>Retirer</button>
          </div>
        ))}
      </section>

      <section className="admin-section" id="competences-admin">
        <div className="admin-section-heading">
          <h2>Compétences</h2>
          <button className="admin-add" type="button" onClick={() => setSection("skillGroups", [...content.skillGroups, { title: "", skills: [] }])}>+ Ajouter un groupe</button>
        </div>
        {content.skillGroups.map((group, index) => (
          <div className="admin-item" key={index}>
            <div className="admin-item-heading">
              <h3>{group.title || `Nouveau groupe ${index + 1}`}</h3>
              <button className="admin-remove" type="button" onClick={() => setSection("skillGroups", content.skillGroups.filter((_, i) => i !== index))}>Retirer</button>
            </div>
            <Field label="Nom du groupe" value={group.title} onChange={(value) => setSection("skillGroups", replaceAt(content.skillGroups, index, { ...group, title: value }))} />
            <StringList label="Compétences" items={group.skills} onChange={(value) => setSection("skillGroups", replaceAt(content.skillGroups, index, { ...group, skills: value }))} addLabel="une compétence" />
          </div>
        ))}
      </section>

      <TimelineEditor title="Expériences" items={content.experiences} onChange={(value) => setSection("experiences", value)} />
      <TimelineEditor title="Formation" items={content.education} onChange={(value) => setSection("education", value)} />

      <section className="admin-section" id="projets-admin">
        <div className="admin-section-heading">
          <h2>Projets</h2>
          <button className="admin-add" type="button" onClick={() => setSection("projects", [
            ...content.projects,
            {
              title: "", category: "", description: "", challenge: "", solution: "",
              impact: "", technologies: [], image: "", liveUrl: "", repositoryUrl: "",
              featured: false, outcomeLabel: "",
            },
          ])}>+ Ajouter un projet</button>
        </div>
        {content.projects.map((project, index) => (
          <div className="admin-item" key={index}>
            <div className="admin-item-heading">
              <h3>{project.title || `Nouveau projet ${index + 1}`}</h3>
              <button className="admin-remove" type="button" onClick={() => setSection("projects", content.projects.filter((_, i) => i !== index))}>Retirer</button>
            </div>
            <div className="admin-grid">
              <Field label="Titre" value={project.title} onChange={(value) => setSection("projects", replaceAt(content.projects, index, { ...project, title: value }))} />
              <Field label="Catégorie" value={project.category} onChange={(value) => setSection("projects", replaceAt(content.projects, index, { ...project, category: value }))} />
              <Field label="Description" value={project.description} multiline onChange={(value) => setSection("projects", replaceAt(content.projects, index, { ...project, description: value }))} />
              <Field label="Défi" value={project.challenge} multiline onChange={(value) => setSection("projects", replaceAt(content.projects, index, { ...project, challenge: value }))} />
              <Field label="Solution" value={project.solution} multiline onChange={(value) => setSection("projects", replaceAt(content.projects, index, { ...project, solution: value }))} />
              <Field label="Résultat ou avancement" value={project.impact} multiline onChange={(value) => setSection("projects", replaceAt(content.projects, index, { ...project, impact: value }))} />
              <Field label="Libellé du résultat" value={project.outcomeLabel ?? ""} onChange={(value) => setSection("projects", replaceAt(content.projects, index, { ...project, outcomeLabel: value }))} hint="Facultatif. Par défaut : Résultat." />
              <Field label="Image" value={project.image} onChange={(value) => setSection("projects", replaceAt(content.projects, index, { ...project, image: value }))} hint="Chemin /images/… ou URL https://…" />
              <UploadField kind="project" onUploaded={(url) => {
                editVersion.current += 1;
                setContent((current) => {
                  const currentProject = current.projects[index];
                  if (!currentProject || currentProject.title !== project.title) return current;
                  return { ...current, projects: replaceAt(current.projects, index, { ...currentProject, image: url }) };
                });
                setDirty(true);
                setMessage("");
              }} />
              <Field label="Lien démo" value={project.liveUrl ?? ""} onChange={(value) => setSection("projects", replaceAt(content.projects, index, { ...project, liveUrl: value }))} />
              <Field label="Lien du code" value={project.repositoryUrl ?? ""} onChange={(value) => setSection("projects", replaceAt(content.projects, index, { ...project, repositoryUrl: value }))} />
            </div>
            <label className="admin-checkbox">
              <input type="checkbox" checked={project.featured ?? false} onChange={(event) => setSection("projects", replaceAt(content.projects, index, { ...project, featured: event.target.checked }))} />
              Mettre ce projet en avant
            </label>
            <StringList label="Technologies" items={project.technologies} onChange={(value) => setSection("projects", replaceAt(content.projects, index, { ...project, technologies: value }))} addLabel="une technologie" />
          </div>
        ))}
      </section>

      <section className="admin-section" id="certifications-admin">
        <div className="admin-section-heading">
          <h2>Certifications</h2>
          <button className="admin-add" type="button" onClick={() => setSection("certifications", [...content.certifications, { title: "", issuer: "", date: "", credentialUrl: "" }])}>+ Ajouter</button>
        </div>
        {content.certifications.map((certificate, index) => (
          <div className="admin-item" key={index}>
            <div className="admin-item-heading">
              <h3>{certificate.title || `Nouvelle certification ${index + 1}`}</h3>
              <button className="admin-remove" type="button" onClick={() => setSection("certifications", content.certifications.filter((_, i) => i !== index))}>Retirer</button>
            </div>
            <div className="admin-grid">
              <Field label="Titre" value={certificate.title} onChange={(value) => setSection("certifications", replaceAt(content.certifications, index, { ...certificate, title: value }))} />
              <Field label="Organisme" value={certificate.issuer} onChange={(value) => setSection("certifications", replaceAt(content.certifications, index, { ...certificate, issuer: value }))} />
              <Field label="Date" value={certificate.date} onChange={(value) => setSection("certifications", replaceAt(content.certifications, index, { ...certificate, date: value }))} />
              <Field label="Lien du certificat" value={certificate.credentialUrl ?? ""} onChange={(value) => setSection("certifications", replaceAt(content.certifications, index, { ...certificate, credentialUrl: value }))} />
            </div>
          </div>
        ))}
      </section>

      <section className="admin-section" id="langues">
        <h2>Langues</h2>
        <StringList label="Langues affichées" items={content.languages} onChange={(value) => setSection("languages", value)} addLabel="une langue" />
      </section>

      <div className="admin-savebar">
        <div>
          <strong>{dirty ? "Modifications non enregistrées" : "Contenu enregistré"}</strong>
          {message ? <p className={error ? "admin-error" : "admin-success"} role="status">{message}</p> : null}
        </div>
        <div className="admin-save-actions">
          <button className="admin-secondary" type="button" disabled={!dirty || saving} onClick={() => {
            setContent(structuredClone(savedContent));
            setDirty(false);
            setMessage("");
          }}>Annuler</button>
          <button className="admin-primary" type="button" disabled={!dirty || saving} onClick={save}>
            {saving ? "Enregistrement…" : "Enregistrer"}
          </button>
        </div>
      </div>
    </main>
  );
}
