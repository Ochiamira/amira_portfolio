"use client";

import { FormEvent, useState } from "react";

export function AdminLogin() {
  const [password, setPassword] = useState("");
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setMessage("");
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message || "Connexion impossible.");
      window.location.reload();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Connexion impossible.");
      setPending(false);
    }
  }

  return (
    <main className="admin-shell admin-centered">
      <form className="admin-panel admin-login" onSubmit={handleSubmit}>
        <span className="admin-eyebrow">Espace privé</span>
        <h1>Administration</h1>
        <p>Connectez-vous pour modifier les informations du portfolio.</p>
        <label>
          Mot de passe
          <input
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            autoFocus
          />
        </label>
        <button className="admin-primary" type="submit" disabled={pending}>
          {pending ? "Connexion…" : "Se connecter"}
        </button>
        {message ? <p className="admin-error" role="alert">{message}</p> : null}
      </form>
    </main>
  );
}
