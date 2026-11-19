## Changelog

Breviarium major changes through versions.

### v3.2
* feat: texts are now an injectable **Dataset**. `new Breviarium(date, {dataset})` / `setDataset(dataset)` read the texts from a dataset you provide (e.g. one downloaded over the air); with no dataset the one bundled in the package is used, so existing code keeps working.
* feat: `loadDataset(reader)`, `loadBundledDataset()`, `DATASET_FILE_PATHS` and `DATASET_SCHEMA_VERSION` exported for building/verifying/publishing datasets.
* change: bundled JSON is now loaded with dynamic imports (separate chunks) instead of being inlined in the main entry.

### v3.0
* feat: **getVesperae()** returns an array of elements to pray instead of just one. Merge memorial with ferial if needed.
* fix: Officium lectiones if memorial in same day. Merge content of ferial and memory

### v2
* feat: **getLaudes()** returns an array of elements to pray instead of just one

### v1

* All functionality of liturgy of the hours