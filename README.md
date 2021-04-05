Instruktioner: NODEJS måsta installeras. ( https://nodejs.org/en/ ) Installationen av node modules och express sker via den följande kommando i terminalen: npm install express.

Installera: npm i express-session

För att köra applikationen skriv npm start i terminalen.

Kommunikation med Web-API’er
I den här inlämningen skall du skapa en hemsida som visar information hämtat ifrån ert egenbyggda API samt ifrån ett valfritt externt API. Ert egna API skall vara en Express-server byggd i NodeJS som hanterar en valfri resurs. För G skall det finnas en endpoint för att hämta samtliga entiteter ifrån er resurs (GET) samt en endpoint för att skapa en ny entitet (POST). För VG skall API:et byggas ut med endpoints för att uppdatera en entitet (PUT), ta bort en entitet (DELETE) samt hämta en specifik entitet (GET). Det skall i ert klientgränssnitt tydligt framgå att ni hämtar data ifrån ett externt valfritt API. Data som hämtas skall alltså visas upp i ert gränssnitt. 

Ni väljer sedan själva om ni vill använda en utökad utvecklings-stack i projektet, notera att detta inte är ett krav. Exempel på ramverk ni kan lägga till i er stack är: Typescript, React, Vue, Angular, mm. Låt kreativiteten flöda!

För att bli godkänd på den här uppgiften MÅSTE du använda GIT och GitHub. Inlämningen sker som vanligt via Zenit där du ska zippa ihop din projektmapp. I projektmappen ska det finnas (utöver all kod) en README.md fil som innehåller en titel, beskrivning av uppgiften och vad som krävs för att bygga och starta projektet, samt en länk till GitHub repot. Notera att om instruktioner för hur projektet byggs och startas inte finns eller om instruktionerna är felaktiga kan uppgiften komma att bli underkänd.

 

Läs noga igenom hela uppgiftsbeskrivningen innan du börjar. 

Krav för godkänt:

Skapa ett API baserat på en valfri resurs (GET & POST)
Samtliga endpoints skall kunna nås via en REST Client fil (.rest)
Datan som API:et hanterar sparas lokalt i serverfilen
Ett simpelt klient-gränssnitt skall finnas för att anropa ert API olika endpoints, samt visa upp resultatet vid GET anrop
Klienten skall hämta och visa upp data ifrån ett externt API 
Git & GitHub har använts
Projektmappen innehåller en README.md fil (läs ovan för mer info)
Uppgiften lämnas in i tid!