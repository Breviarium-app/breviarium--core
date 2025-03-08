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

![example](https://github.com/breviarium-app/breviarium--app/actions/workflows/ci-node.yml/badge.svg)

## Quickstart setup

> TODO

## Function Documentation

Liturgy of the hours: functions to retrieve the information of the library:

| Function              | Parameters    | Description                                        | Example Call                                   |
|-----------------------|---------------|----------------------------------------------------|------------------------------------------------|
| `getLaudes`           | `date?: Date` | Returns the Laudes prayer for a given date.        | `prayers.getLaudes();`                         |
| `getVesperae`         | `date?: Date` | Returns the Vesperae prayer for a given date.      | `prayers.getVesperae(new Date(2025, 1, 17));`  |
| `getOfficium`         | `date?: Date` | Returns the Officium prayer for a given date.      | `prayers.getOfficium();`                       |
| `getTertia`           | `date?: Date` | Returns the Tertia prayer for a given date.        | `prayers.getTertia();`                         |
| `getSexta`            | `date?: Date` | Returns the Sexta prayer for a given date.         | `prayers.getSexta(new Date());`                |
| `getNona`             | `date?: Date` | Returns the Nona prayer for a given date.          | `prayers.getNona();`                           |
| `getCompletorium`     | `date?: Date` | Returns the Completorium prayer for a given date.  | `prayers.getCompletorium();`                   |
| `getMissaleLectiones` | `date?: Date` | Returns the Mass readings prayer for a given date. | `prayers.getMissaleLectiones();`               |
| `getEvangelium`       | `date?: Date` | Returns the Gospel text for a given date.          | `prayers.getEvangelium(new Date(2025, 5, 1));` |

## Test

To run the test suite (with [vitest](https://vitest.dev/)), execute:

To run the app:

```shell
# linux and mac users:
make test
# for windows users:
npm run test
```