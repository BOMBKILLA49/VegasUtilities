# Vegas Utilities

Informational website and contractor-matching lead source for earthwork, grading, and underground
utility (sewer, water, storm drain) projects in the Las Vegas Valley, NV. Positioned as a local
resource and matching service — **not** a licensed contractor.

Static site — plain HTML/CSS/JS, no build step, no framework, no external dependencies (fonts,
images, or scripts). Deployable as-is to GitHub Pages, Netlify, or any static host.

## Pages

| Page | Purpose |
|---|---|
| `index.html` | Homepage |
| `services.html` | Project types (earthwork/grading, sewer, water, storm drain, full site prep) |
| `how-it-works.html` | 4-step matching process |
| `resources.html` | Hub linking to the 5 educational guides below |
| `earthwork-grading.html` | Guide: what site development work involves |
| `costs-timelines.html` | Guide: cost drivers & general timelines |
| `common-mistakes.html` | Guide: common developer mistakes |
| `permitting-guide.html` | Guide: Las Vegas / Clark County / NV permitting overview |
| `contractor-checklist.html` | Guide: how to vet a contractor before signing |
| `about.html` | Trust page — who we are, how we vet partners, disclaimer |
| `contact.html` | Lead form (the main conversion page) |
| `thank-you.html` | Post-submission confirmation |

## Before going live

1. **Wire up the lead form.** `contact.html` posts to Formspree (works on static hosting with no
   backend). Sign up free at [formspree.io](https://formspree.io), create a form, and replace
   `YOUR_FORM_ID` in the form's `action` attribute with your real form ID. Then delete the setup
   comment above the `<form>` tag.
2. **Replace placeholder contact info.** `info@vegasutilities.com` and the footer address appear
   on every page — swap in your real inbox and (if you want one listed) a phone number.
3. **Point the domain.** `CNAME` is already set to `vegasutilities.com` for GitHub Pages custom
   domain hosting. Update your DNS (A/ALIAS records to GitHub Pages, or CNAME to
   `<username>.github.io`) and enable Pages in the repo settings.
4. **Set up your contractor partner agreements** (written referral/finder's-fee agreements) before
   sending real leads to any partner — see `about.html` for the vetting criteria the copy commits
   to publicly, and make sure your actual process matches it.
5. **Review the legal disclaimer language** in the footer of every page and the About page with
   your own judgment (or an attorney) before launch — it states Vegas Utilities is a matching
   service, not a contractor, and is not a party to any contract.

## Local preview

No build step needed — open `index.html` directly in a browser, or serve the folder locally:

```
cd VegasUtilities
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.
