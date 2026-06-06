# AGENTS.md

## Project Overview

MA Garage Doors is a professional marketing website for a residential and commercial garage door service company.

Primary goal:

* Generate phone calls
* Generate estimate requests
* Build trust with homeowners and commercial property managers

Secondary goals:

* Local SEO
* Showcase completed projects
* Highlight technical expertise

---

## Tech Stack

* Next.js 15
* React 19
* TypeScript
* Tailwind CSS v4
* Framer Motion
* App Router

---

## Project Structure

src/

* app/
* components/
* data/
* lib/

Do not create unnecessary folders.

Keep components focused and reusable.

---

## Design Guidelines

Primary Color:

#0F2D52

Accent Color:

#F97316

Background:

#FFFFFF

Light Background:

#F8FAFC

Text:

#1E293B

---

## UI Principles

The website should feel:

* Professional
* Trustworthy
* Technical
* Modern
* Clean

Avoid:

* Overly flashy animations
* Excessive gradients
* Marketing buzzwords
* Generic AI-style copy

Prefer:

* Practical language
* Real service descriptions
* Clear CTAs

---

## Animation Rules

Use Framer Motion.

Animations should be subtle.

Preferred animations:

* fade up
* fade left
* fade right

Duration:

0.5s to 0.8s

Avoid:

* bounce effects
* spinning elements
* excessive motion

---

## SEO Rules

All pages should include:

* semantic HTML
* descriptive headings
* alt text on images

Prefer:

* h1 only once per page
* h2 for sections
* h3 for cards

Use metadata API when possible.

---

## Component Rules

Each component should:

* have a single responsibility
* be responsive
* use TypeScript
* use semantic HTML

Avoid components longer than 250 lines.

---

## Copywriting Rules

Tone:

* Professional
* Skilled
* Reliable

Avoid:

* "best company"
* "industry leading"
* "world class"

Prefer:

* practical expertise
* safety
* reliability
* fast response

---

## Contact Forms

When forms are added:

Preferred providers:

1. Resend
2. Formspree

Validate inputs.

Never trust client-side validation alone.

---

## Images

Use Next.js Image component.

Store images inside:

public/images

Use meaningful filenames.

---

## Accessibility

All buttons must have accessible labels.

Maintain strong color contrast.

Support keyboard navigation.

---

## Code Style

Prefer:

* named exports for utilities
* default exports for page sections

Use:

* const
* arrow functions

Avoid unnecessary comments.

Code should be self-explanatory.
