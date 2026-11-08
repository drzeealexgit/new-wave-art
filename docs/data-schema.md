# Схема даних

Усі дані сайту — один JSON-об'єкт (`data/site-data.json`). Кожен текстовий елемент
записано двома мовами як `{"en": "...", "uk": "..."}`.

```json
{
  "version": 1,
  "defaultLang": "en",
  "ui":            { "en": {…}, "uk": {…} },
  "site": {
    "brand":     { "en": "Mattilda Zvolinska", "uk": "Матильда Зволінська" },
    "hero":      { "name": {en,uk}, "role": {…}, "about": {…}, "pull": {…}, "image": "mediaId" },
    "statement": [ { "en": "…", "uk": "…" } ],
    "cards":     [ { "image": "mediaId", "title": {en,uk}, "desc": {en,uk}, "section": "paint" } ],
    "archive":   { "photos": ["mediaId", "…"] }
  },
  "sections": [
    {
      "slug": "paint",
      "label": {en,uk}, "subtitle": {en,uk}, "lead": {en,uk},
      "cover": "mediaId",
      "intro": [ {en,uk} ],
      "blocks": [
        { "kind": "works",  "title": {en,uk},
          "works": [ { "image": "mediaId", "title": {en,uk},
                       "technique": {en,uk}, "year": "2022",
                       "description": {en,uk} } ] },
        { "kind": "photos", "title": {en,uk}, "photos": ["mediaId"] },
        { "kind": "text",   "title": {en,uk}, "paras": [ {en,uk} ] },
        { "kind": "links",  "title": {en,uk},
          "items": [ { "label": {en,uk}, "url": "https://…" } ] }
      ]
    }
  ],
  "cv": {
    "name": {en,uk},
    "groups": [ { "title": {en,uk},
                  "items": [ { "year": "2022", "place": {en,uk},
                              "what": {en,uk}, "detail": {en,uk} } ] } ]
  },
  "contacts": { "city": {en,uk}, "email": "…", "instagram": "…", "instagramUrl": "…" }
}
```

* `mediaId` — ім'я файлу з `assets/images/` (у демо-версії — вбудований data-URI).
* Порожнє `image` + `"reserved": true` — зарезервована плита («The Diamond»).
* Розділи виводяться у порядку масиву; меню формується з нього ж.
