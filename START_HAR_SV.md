# STARTA HÄR – Skåne IT Support

1. Gör en säkerhetskopia av din tidigare `skane-it-support-private`-mapp.
2. Packa upp denna ZIP till en ny mapp. **Öppna den inre mappen** `skane-it-support-private`, som innehåller `package.json`.
3. I VS Code: **File → Open Folder** → välj den inre mappen.
4. Öppna **Terminal → New Terminal** och kör `npm install`.
5. När installationen är klar: `npm run dev`.
6. Öppna webbadressen som står efter **Local**, exempelvis `http://localhost:5173/`.
7. Testa menyn, bildgalleriet och kontaktformuläret. Skriv testuppgifter, inte privata uppgifter.
8. Öppna `PRESENTATION_IMORGON.md` för ett kort engelskt presentationsmanus.

**Observera:** `index.html` öppnas inte direkt med dubbelklick, eftersom detta är ett React/Vite-projekt. Starta med `npm run dev`.

**Integritet:** Webbplatsen visar inga hemliga projekt. Kontaktformuläret skickar inte mejl.
