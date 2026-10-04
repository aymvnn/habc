"use client";

import { useState } from "react";
import type { LocalField } from "@/lib/forms";
import { Arrow } from "./Arrow";

/**
 * The search of a listing (the company directory, the published requests). Nothing is published yet, so a search
 * shows the source's own text for "no results" — the page never pretends there are entries.
 */
export function ListingSearch({ id, fields, label, empty, choose }: { id: string; fields: LocalField[]; label: string; empty: string; choose: string }) {
  const [searched, setSearched] = useState(false);
  return (
    <>
      <form
        className="ls-search"
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          setSearched(true);
        }}
      >
        <div className="fm-grid">
          {fields.map((f) => (
            <div className="field" key={f.name}>
              <label htmlFor={`${id}-${f.name}`}>{f.label}</label>
              {/* Muntregister a4-5: the same lined field and bordeaux focus line as the forms */}
              <span className={f.type === "select" ? "ctl is-select" : "ctl"}>
                {f.type === "select" ? (
                  <select id={`${id}-${f.name}`} name={f.name} defaultValue="">
                    <option value="">{choose}</option>
                    {(f.options ?? []).map((o, i) => <option key={i}>{o}</option>)}
                  </select>
                ) : (
                  <input id={`${id}-${f.name}`} name={f.name} type="search" enterKeyHint="search" />
                )}
              </span>
            </div>
          ))}
        </div>
        <button className="btn" type="submit">{label} <Arrow /></button>
      </form>
      <p className={`ls-empty${searched ? " on" : ""}`} role="status" hidden={!searched}>{empty}</p>
    </>
  );
}
