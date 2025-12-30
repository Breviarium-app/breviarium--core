<h1 align="center">
  <a href="https://github.com/breviarium-app/breviarium--core">
    Breviarium 🙏🏼
  </a>
</h1>

<p align="center">
  Open source Liturgy of the Hours, collaborate to build the best Divine Office library!<br><br>
  Generates liturgical content and calendars of the Roman Rite of the Roman Catholic Church.<br>
  Supports Node v18+, Modern Browsers (desktop and mobile).
</p>

<p align="center">
<a href="LICENSE">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-blue?color=blue&style=flat">
</a>
<a href="https://www.npmjs.com/package/breviarium/v/latest" target="_blank" rel="noopener noreferrer">
    <img alt="npm breviarium version" src="https://img.shields.io/npm/v/breviarium/latest?style=flat&logo=npm&color=35d401">
</a>
<a href="https://www.npmjs.com/package/breviarium/v/latest" target="_blank" rel="noopener noreferrer">
    <img alt="latest" src="https://img.shields.io/npm/dm/breviarium?label=downloads&logo=npm">
</a>
<a href="https://www.jsdelivr.com/package/npm/breviarium" target="_blank" rel="noopener noreferrer">
    <img alt="latest" src="https://data.jsdelivr.com/v1/package/npm/breviarium/badge?style=rounded">
</a>
<a href="https://bundlephobia.com/result?p=breviarium" target="_blank" rel="noopener noreferrer">
    <img alt="minzipped size" src="https://badgen.net/bundlephobia/minzip/breviarium">
</a>
</p>

## Quickstart setup

1. Install with your prefered package manager
```shell [npm]
npm install breviarium
```
```shell [pnpm]
pnpm install breviarium
```
```shell [yarn]
yarn add breviarium
```

2. Import and use the library to retrieve the desired data (ex: Laudes)
Usage:
```ts
const breviarium = new Breviarium(useDateStore().getCurrentDate);

// get laudes for today
await breviarium.getLaudes().then((data) => { console.log("laudes data:", data) })
```

```ts
const breviarium = new Breviarium(useDateStore().getCurrentDate);

// get laudes for a given date (example for 2025-7-30)
await breviarium.getLaudes(new Date(2025, 6, 30)).then((data) => { console.log("laudes data:", data) })
```

## Function Documentation

Liturgy of the hours: functions to retrieve the information of the library:

| Function              | Parameters    | Description                                               | Example Call                                   |
|-----------------------|---------------|-----------------------------------------------------------|------------------------------------------------|
| `getLaudes`           | `date?: Date` | Returns array (1)\: Laudes prayer for a given date.       | `prayers.getLaudes();`                         |
| `getVesperae`         | `date?: Date` | Returns array (1)\: the Vesperae prayer for a given date. | `prayers.getVesperae(new Date(2025, 1, 17));`  |
| `getOfficium`         | `date?: Date` | Returns the Officium prayer for a given date.             | `prayers.getOfficium();`                       |
| `getTertia`           | `date?: Date` | Returns the Tertia prayer for a given date.               | `prayers.getTertia();`                         |
| `getSexta`            | `date?: Date` | Returns the Sexta prayer for a given date.                | `prayers.getSexta(new Date());`                |
| `getNona`             | `date?: Date` | Returns the Nona prayer for a given date.                 | `prayers.getNona();`                           |
| `getCompletorium`     | `date?: Date` | Returns the Completorium prayer for a given date.         | `prayers.getCompletorium();`                   |
| `getLectures`         | `date?: Date` | Returns the Mass readings for a given date.               | `prayers.getLectures();`                       |
| `getEvangelium`       | `date?: Date` | Returns the Gospel text for a given date.                 | `prayers.getEvangelium(new Date(2025, 5, 1));` |

_(1)_: Some liturgical days, contains different options to pray: memory (example: a saint), and ferial (ordinary time). The Library displays both options and user can choose what version use.

## Test

To run the test suite (with [vitest](https://vitest.dev/)), execute:

To run the app:

```shell
# linux and mac users:
make test
# for windows users:
npm run test
```

## Changelog

See [Changelog.md](./CHANGELOG.md) for breaking changes.

## Debug 

> You can debug or see the libraries responses in: https://escribano.breviarium.es/debug select a day, the hour or prayer and display the JSON response

## API Reference — Breviarium

Below is a comprehensive reference for the public API. Each function lists parameters, return type, and a compact output sample. All methods that accept a `date?: Date` will use the instance’s current date when omitted.

### Construction & Date Utilities

- `new Breviarium(selectedDate?: Date)`
  - Parameters:
    - `selectedDate?: Date` — if omitted, today is used.
  - Returns: `Breviarium`

- `setDate(date: Date): void`
  - Parameters: `date: Date`
  - Returns: `void`

- `getCurrentDate(): Date`
  - Parameters: none
  - Returns: `Date`

Usage:

```ts
const breviarium = new Breviarium();
breviarium.setDate(new Date(2025, 6, 30));
console.log(breviarium.getCurrentDate());
```

### Liturgy of the Hours — Core Retrieval Methods

- `getInvitatorium(date?: Date): Promise<InvitatoriumSchemaOutput | undefined>`
  - Returns: one Invitatorium entry or `undefined` if not available.
  - Output sample:
    ```json
    {
      "id": "invitatorium_2025_07_30",
      "val": "Antiphon and invitatory text..."
    }
    ```

- `getLaudes(date?: Date): Promise<LaudesSchemaOutput[] | undefined>`
  - Returns: array of Laudes options (some days have multiple options) or `undefined`.
  - Output sample:
    ```json
    [{
      "id": "laudes_2025_07_30",
      "cycle": "ANY",
      "himno": "Hymn text...",
      "primer_salmo_cita": "Ps 63",
      "primer_salmo_antifona": "Ant. ...",
      "primer_salmo_texto": "Psalm text...",
      "segundo_salmo_cita": "Cantico",
      "segundo_salmo_antifona": "Ant. ...",
      "segundo_salmo_texto": "...",
      "tercer_salmo_cita": "Ps 149",
      "tercer_salmo_antifona": "Ant. ...",
      "tercer_salmo_texto": "...",
      "lectura_biblica_cita": "1Th 5,16-18",
      "lectura_biblica": "Reading text...",
      "responsorios": ["V. ... R. ..."],
      "cantico_evangelico_antifona": "Ant. ...",
      "preces_intro": "Intro...",
      "preces_respuesta": "Resp...",
      "preces_contenido": ["Petition 1", "Petition 2"],
      "invitacion_padrenuestro": "Intro...",
      "oracion_final": "Collect text..."
    }]
    ```

- `getVesperae(date?: Date): Promise<VesperaeSchemaOutput[] | undefined>`
  - Returns: array of Vespers options or `undefined`.
  - Output sample:
    ```json
    [{
      "id": "vesperae_2025_07_30",
      "cycle": "ANY",
      "primeras_visperas": false,
      "himno": "Hymn text...",
      "primer_salmo_cita": "Ps 110",
      "primer_salmo_antifona": "Ant. ...",
      "primer_salmo_texto": "...",
      "segundo_salmo_cita": "Ps 111",
      "segundo_salmo_antifona": "Ant. ...",
      "segundo_salmo_texto": "...",
      "tercer_salmo_cita": "Cantico",
      "tercer_salmo_antifona": "Ant. ...",
      "tercer_salmo_texto": "...",
      "lectura_biblica_cita": "Eph 1,3-10",
      "lectura_biblica": "Reading text...",
      "responsorios": ["V. ... R. ..."],
      "cantico_evangelico_antifona": "Ant. ...",
      "preces_intro": "Intro...",
      "preces_respuesta": "Resp...",
      "preces_contenido": ["Petition 1"],
      "invitacion_padrenuestro": "Intro...",
      "oracion_final": "Collect text..."
    }]
    ```

- `getOfficium(date?: Date): Promise<OfficiumSchemaOutput | undefined>`
  - Returns: Office of Readings object or `undefined`.
  - Output sample:
    ```json
    {
      "id": "officium_2025_07_30",
      "cycle": "ANY",
      "himno": "Hymn text...",
      "primer_salmo_cita": "Ps ...",
      "primer_salmo_antifona": "Ant. ...",
      "primer_salmo_texto": "...",
      "segundo_salmo_cita": "Ps ...",
      "segundo_salmo_antifona": "Ant. ...",
      "segundo_salmo_texto": "...",
      "tercer_salmo_cita": "Ps ...",
      "tercer_salmo_antifona": "Ant. ...",
      "tercer_salmo_texto": "...",
      "lectura_biblica_titulo_a": "Title ...",
      "lectura_biblica_cita_a": "Ref ...",
      "lectura_biblica_texto_a": "Text ...",
      "lectura_patristica_titulo_a": "Title ...",
      "lectura_patristica_cita_a": "Ref ...",
      "lectura_patristica_texto_a": "Text ...",
      "responsorio1": ["V. ... R. ..."],
      "responsorio2_a": ["..."],
      "responsorio3_a": ["..."],
      "oracion_final": "Prayer text..."
    }
    ```

- `getTertia(date?: Date): Promise<IntermediateSchemaOutput | undefined>`
- `getSexta(date?: Date): Promise<IntermediateSchemaOutput | undefined>`
- `getNona(date?: Date): Promise<IntermediateSchemaOutput | undefined>`
  - Returns: Midday prayer object or `undefined`.
  - Output sample:
    ```json
    {
      "id": "tertia_2025_07_30",
      "cycle": "ANY",
      "himno": "Hymn text...",
      "primer_salmo_cita": "Ps ...",
      "primer_salmo_antifona": "Ant. ...",
      "primer_salmo_texto": "...",
      "segundo_salmo_cita": "Ps ...",
      "segundo_salmo_antifona": "Ant. ...",
      "segundo_salmo_texto": "...",
      "tercer_salmo_cita": "Ps ...",
      "tercer_salmo_antifona": "Ant. ...",
      "tercer_salmo_texto": "...",
      "lectura_biblica_cita": "Ref ...",
      "lectura_biblica": "Reading text...",
      "responsorios": ["V. ... R. ..."],
      "oracion_final": "Prayer text..."
    }
    ```

- `getCompletorium(date?: Date): Promise<CompletoriumSchemaOutput | undefined>`
  - Returns: Night Prayer object or `undefined`.
  - Output sample:
    ```json
    {
      "idd": 4,
      "himno": "Hymn text...",
      "primer_salmo_cita": "Ps ...",
      "primer_salmo_antifona": "Ant. ...",
      "primer_salmo_texto": "...",
      "segundo_salmo_cita": "Ps ...",
      "segundo_salmo_antifona": "Ant. ...",
      "segundo_salmo_texto": "...",
      "lectura_biblica_cita": "Ref ...",
      "lectura_biblica_texto": "Reading text...",
      "responsorio": ["..."],
      "responsorio_pascua": ["..."],
      "antifona_triduo": "...",
      "antifona_inalbis": "...",
      "cantico_evangelico_antifona": "Ant. ...",
      "final": "Prayer text..."
    }
    ```

### Mass Readings and Gospel

- `getLectures(date?: Date): Promise<LecturesSchemaOutput[] | undefined>`
  - Returns: array with the day’s readings sets or `undefined`.
  - Output sample:
    ```json
    [{
      "id": "lectures_2025_07_30",
      "cycle": "ANY",
      "lecturas": [
        { "ref": "Jer 14,17-22", "texto": "Reading text...", "type": "FIRSTLECTURE" },
        { "ref": "Ps 79", "texto": "Psalm text...", "type": "PSALM" },
        { "ref": "Mt 13,36-43", "texto": "Gospel text...", "type": "GOSPEL" }
      ]
    }]
    ```

- `getEvangelium(date?: Date): Promise<EvangeliumSchemaOutput | undefined>`
  - Returns: Gospel object (subset of lectures) or `undefined`.
  - Output sample:
    ```json
    {
      "id": "evangelium_2025_07_30",
      "cycle": "ANY",
      "evangelium_lectiones": [
        { "ref": "Mt 13,36-43", "texto": "Gospel text...", "type": "GOSPEL" }
      ]
    }
    ```

### Commons & Liturgy Info

- `getInvitatoriumPsalms(): Promise<any[]>`
  - Returns: list of invitatory psalms (Spanish content in current DB).
  - Output sample:
    ```json
    [
      { "id": "psalm94", "title": "Salmo 94: Invitación a la alabanza divina", "psalm": "<p>Venid, aclamemos...</p>" },
      { "id": "psalm99", "title": "Salmo 99: Alegría de los que entran en el templo", "psalm": "<p>Aclama al Señor...</p>" }
    ]
    ```

- `getLiturgyInformation(date?: Date): Promise<LiturgyInformationOutput>`
  - Returns: metadata about the day: psalter week, cycle, color, celebration, etc. Always returns an object (with minimal defaults when unknown).
  - Output sample:
    ```json
    {
      "psaltery_week": "I",
      "cycle": "A",
      "color": "GREEN",
      "color_hex": "#008000",
      "celebration": "Feria",
      "rank": "weekday",
      "seasons": ["ORDINARY_TIME"],
      "precedence": "weekday",
      "periods": ["ORDINARY_TIME"],
      "calendar": { "endOfLiturgycalSeason": "2025-11-29" }
    }
    ```