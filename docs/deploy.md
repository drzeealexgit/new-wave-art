# Деплой

Сайт статичний — жодної збірки не потрібно.

## GitHub Pages
1. Створіть репозиторій (наприклад, `mattilda-portfolio`) і завантажте вміст цієї теки.
   ```bash
   git init && git add . && git commit -m "new portfolio site"
   git branch -M main
   git remote add origin https://github.com/<user>/mattilda-portfolio.git
   git push -u origin main
   ```
2. Settings → Pages → Source: `main`, папка `/ (root)` → Save.
3. Через 1–2 хвилини сайт живий: `https://<user>.github.io/mattilda-portfolio/`.
4. Власний домен: Settings → Pages → Custom domain (CNAME-запис).

## Netlify (альтернатива)
1. netlify.com → «Add new site» → «Deploy manually».
2. Перетягніть теку репозиторію — сайт онлайн за секунди.

## Оновлення контенту
* Через адмін-панель: «Налаштування → Експорт даних (JSON)» → покладіть файл
  у `data/site-data.json` (завантажені зображення — у `assets/images/`) → commit/push.
* Нова робота без панелі: зображення в `assets/images/`, запис у `data/site-data.json`
  у масив `works` потрібного розділу.
