# Роман — портфоліо на GitHub Pages

Статичний сайт без бекенда. Розгортається безкоштовно на GitHub Pages.

## Швидкий старт
1. Створи репозиторій **username.github.io** або будь-який інший.
2. Скопіюй файли цього шаблону в репозиторій.
3. Увімкни **Settings → Pages → Deploy from a branch → main / root**.
4. Зачекай 1–2 хв — сайт відкриється за адресою **https://username.github.io/** або **/repo**.

## Редагування контенту
- **projects.json** — картки проєктів (title, description, image, tags, link/case).
- **index.html** — тексти хедера, секції, SEO‑теги, JSON‑LD.
- **assets/style.css** — стилі. **assets/script.js** — логіка (підвантаження проєктів, форма).

## Кастомний домен
- Налаштуй DNS (CNAME/ALIAS/A) на GitHub Pages і додай домен у Settings → Pages.
- Активуй **Enforce HTTPS**.

## Аналітика
- У **index.html** розкоментуй блок GA4 і встав свій ID `G-XXXX`.
- Можеш додати інші пікселі (Meta/LinkedIn) теж у `<head>`.

## Форма контактів
- Зареєструйся на Formspree, створи форму і заміни `YOUR_FORM_ID` у `assets/script.js`.

Удачі!