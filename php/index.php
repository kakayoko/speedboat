<?php
declare(strict_types=1);

require_once __DIR__ . '/includes/translations.php';

$lang = (isset($_GET['lang']) && $_GET['lang'] === 'en') ? 'en' : 'id';
$t = $copy[$lang];
$first_photo = $fleet_photos[0];

function e(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}
?>
<!doctype html>
<html lang="<?= e($lang) ?>">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title><?= e($t['meta_title']) ?></title>
  <meta name="description" content="<?= e($t['meta_desc']) ?>" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="assets/css/styles.css" />
</head>
<body>
  <header class="site-header">
    <div class="container header-inner">
      <a href="#top" class="brand-wordmark">rajaampatspeedboat.com</a>
      <nav class="nav-links" aria-label="Primary Navigation">
        <a href="#fleet"><?= e($t['nav_fleet']) ?></a>
        <a href="#gallery"><?= e($t['nav_gallery']) ?></a>
        <a href="#safety"><?= e($t['nav_safety']) ?></a>
        <a href="#custom-route"><?= e($t['nav_route']) ?></a>
      </nav>
      <a href="#custom-route" class="btn btn-primary"><?= e($t['nav_cta']) ?></a>
    </div>
  </header>

  <main id="top">
    <section class="hero-section">
      <div class="container">
        <div class="hero-toolbar">
          <p class="kicker"><?= e($t['hero_kicker']) ?></p>
          <div class="lang-switch" role="group" aria-label="Language switcher">
            <a href="?lang=id" class="<?= $lang === 'id' ? 'active' : '' ?>">ID · Indonesia</a>
            <a href="?lang=en" class="<?= $lang === 'en' ? 'active' : '' ?>">EN · English</a>
          </div>
        </div>

        <div class="hero-grid">
          <div class="hero-copy">
            <h1 class="hero-headline"><?= e($t['hero_title']) ?></h1>
            <p class="hero-sub"><?= e($t['hero_sub']) ?></p>
            <div class="hero-actions">
              <a href="#custom-route" class="btn btn-primary"><?= e($t['hero_primary_cta']) ?></a>
              <a href="#gallery" class="hero-link"><?= e($t['hero_secondary_cta']) ?></a>
            </div>
          </div>

          <figure class="hero-media">
            <img src="<?= e($first_photo['src']) ?>" alt="<?= e($first_photo['title_' . $lang]) ?>" />
            <figcaption class="hero-media-caption"><?= e($t['hero_caption']) ?></figcaption>
          </figure>
        </div>

        <div class="spec-strip">
          <?php foreach ($t['specs'] as $spec): ?>
            <div class="spec-cell">
              <p class="spec-label"><?= e($spec['label']) ?></p>
              <p class="spec-value tabular-nums"><?= e($spec['value']) ?></p>
              <p class="spec-sub"><?= e($spec['sub']) ?></p>
            </div>
          <?php endforeach; ?>
        </div>
      </div>
    </section>

    <section id="gallery" class="section section-white">
      <div class="container">
        <p class="eyebrow"><?= e($t['gallery_eyebrow']) ?></p>
        <h2 class="section-title"><?= e($t['gallery_title']) ?></h2>
        <p style="margin-top:0.75rem;color:var(--text-secondary);max-width:44rem;"><?= e($t['gallery_sub']) ?></p>

        <div class="gallery-layout">
          <div>
            <div class="stage-card">
              <div class="stage-viewport">
                <img
                  id="stage-img"
                  src="<?= e($first_photo['src']) ?>"
                  alt="<?= e($first_photo['title_' . $lang]) ?>"
                  style="object-position: <?= e($first_photo['pos']) ?>;"
                />
                <div class="stage-overlay">
                  <p id="stage-meta" style="font-family:'JetBrains Mono',monospace;font-size:0.75rem;opacity:0.85;">
                    01 / 05 · <?= e($first_photo['spec_' . $lang]) ?>
                  </p>
                  <h3 id="stage-title" style="margin-top:0.25rem;font-size:1.2rem;">
                    <?= e($first_photo['title_' . $lang]) ?>
                  </h3>
                </div>
              </div>
              <p id="stage-caption" class="stage-caption"><?= e($first_photo['caption_' . $lang]) ?></p>
            </div>

            <div class="thumb-rail">
              <?php foreach ($fleet_photos as $idx => $photo): ?>
                <?php $num = '0' . ($idx + 1); ?>
                <button
                  type="button"
                  class="thumb-btn <?= $idx === 0 ? 'active' : '' ?>"
                  data-src="<?= e($photo['src']) ?>"
                  data-pos="<?= e($photo['pos']) ?>"
                  data-scale="<?= e((string)$photo['scale']) ?>"
                  data-title="<?= e($photo['title_' . $lang]) ?>"
                  data-meta="<?= e($num . ' / 05 · ' . $photo['spec_' . $lang]) ?>"
                  data-caption="<?= e($photo['caption_' . $lang]) ?>"
                >
                  <img
                    src="<?= e($photo['src']) ?>"
                    alt="<?= e($photo['title_' . $lang]) ?>"
                    style="object-position:<?= e($photo['pos']) ?>;<?= $photo['scale'] > 1 ? 'transform:scale(' . $photo['scale'] . ');' : '' ?>"
                  />
                </button>
              <?php endforeach; ?>
            </div>
          </div>

          <aside id="fleet" class="spec-aside">
            <h3 style="font-size:1.125rem;"><?= e($t['spec_table_title']) ?></h3>
            <dl class="spec-dl">
              <?php foreach ($t['spec_rows'] as $row): ?>
                <div>
                  <dt><?= e($row[0]) ?></dt>
                  <dd class="tabular-nums"><?= e($row[1]) ?></dd>
                </div>
              <?php endforeach; ?>
            </dl>
          </aside>
        </div>
      </div>
    </section>

    <section id="safety" class="section section-navy">
      <div class="container">
        <p class="eyebrow"><?= e($t['safety_eyebrow']) ?></p>
        <h2 class="section-title" style="max-width:44rem;"><?= e($t['safety_title']) ?></h2>
        <p style="margin-top:0.9rem;color:#cbd5e1;max-width:42rem;"><?= e($t['safety_sub']) ?></p>

        <div class="safety-grid">
          <?php foreach ($t['safety_items'] as $item): ?>
            <article class="safety-card">
              <div class="safety-card-head">
                <span style="color:#f87171;"><?= e($item[0]) ?>.</span>
                <span style="color:#94a3b8;"><?= e($item[1]) ?></span>
              </div>
              <h3><?= e($item[2]) ?></h3>
              <p><?= e($item[3]) ?></p>
            </article>
          <?php endforeach; ?>
        </div>
      </div>
    </section>

    <section id="custom-route" class="section">
      <div class="container">
        <p class="eyebrow"><?= e($t['form_eyebrow']) ?></p>
        <h2 class="section-title" style="max-width:46rem;"><?= e($t['form_title']) ?></h2>
        <p style="margin-top:0.85rem;color:var(--text-secondary);max-width:44rem;"><?= e($t['form_sub']) ?></p>

        <div class="form-layout">
          <div class="card-panel">
            <div style="background:var(--bg-muted);border:1px solid var(--border-hairline);border-radius:var(--radius-md);padding:1rem;margin-bottom:1.5rem;">
              <p style="font-weight:600;font-size:0.875rem;"><?= e($t['form_note_title']) ?></p>
              <p style="margin-top:0.25rem;font-size:0.875rem;color:var(--text-secondary);"><?= e($t['form_note_desc']) ?></p>
            </div>

            <form onsubmit="return false;">
              <div class="field-grid">
                <div>
                  <label class="field-label" for="guest-name"><?= e($t['label_name']) ?></label>
                  <input class="field-input" id="guest-name" type="text" placeholder="Nama / Name" />
                </div>
                <div>
                  <label class="field-label" for="depart-date"><?= e($t['label_date']) ?></label>
                  <input class="field-input" id="depart-date" type="date" />
                </div>
              </div>

              <div class="field-grid">
                <div>
                  <label class="field-label" for="trip-type"><?= e($t['label_trip']) ?></label>
                  <select class="field-input" id="trip-type">
                    <option value="day-trip"><?= $lang === 'id' ? 'Charter Sehari Penuh (Day Trip)' : 'Full-Day Private Charter' ?></option>
                    <option value="multi-day"><?= $lang === 'id' ? 'Charter Beberapa Hari (Multi-Day)' : 'Multi-Day Custom Expedition' ?></option>
                    <option value="transfer"><?= $lang === 'id' ? 'Transfer Dermaga / Antar-Resort' : 'Point-to-Point Island / Resort Transfer' ?></option>
                  </select>
                </div>
                <div>
                  <label class="field-label" for="pax-count"><?= e($t['label_pax']) ?></label>
                  <input class="field-input" id="pax-count" type="number" min="1" max="15" value="6" />
                </div>
              </div>

              <div style="margin-bottom:1.25rem;">
                <label class="field-label" for="pickup-point"><?= e($t['label_pickup']) ?></label>
                <input class="field-input" id="pickup-point" type="text" value="<?= $lang === 'id' ? 'Pelabuhan Waisai' : 'Waisai Harbour' ?>" />
              </div>

              <div>
                <span class="field-label"><?= e($t['label_chips']) ?></span>
                <div class="chip-list">
                  <?php foreach ($destination_chips as $chip): ?>
                    <?php $chip_text = $chip[$lang . '_label']; ?>
                    <button type="button" class="chip-btn" data-stop="<?= e($chip_text) ?>">
                      + <?= e($chip_text) ?>
                    </button>
                  <?php endforeach; ?>
                </div>
              </div>

              <div style="margin-bottom:1.25rem;">
                <label class="field-label" for="custom-route-notes"><?= e($t['label_route']) ?></label>
                <textarea class="field-input" id="custom-route-notes" rows="3"></textarea>
              </div>

              <div>
                <label class="field-label" for="extra-notes"><?= e($t['label_notes']) ?></label>
                <input class="field-input" id="extra-notes" type="text" />
              </div>
            </form>
          </div>

          <div class="card-panel">
            <h3 style="font-size:1rem;"><?= e($t['preview_title']) ?></h3>
            <pre id="wa-preview" class="wa-preview"></pre>
            <p style="font-size:0.875rem;font-weight:500;"><?= e($t['send_prompt']) ?></p>

            <div class="wa-btn-stack">
              <?php foreach ($whatsapp_contacts as $idx => $contact): ?>
                <a
                  href="https://wa.me/<?= e($contact['wa']) ?>"
                  data-wa-number="<?= e($contact['wa']) ?>"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="wa-link-card <?= $idx === 0 ? 'primary' : 'secondary' ?>"
                >
                  <div>
                    <div style="font-size:0.75rem;opacity:0.82;">
                      <?= e($contact['label'] . ' · ' . $contact['role_' . $lang]) ?>
                    </div>
                    <div class="tabular-nums" style="font-family:'JetBrains Mono',monospace;font-weight:600;margin-top:0.15rem;">
                      <?= e($t['wa_prefix'] . ' ' . $contact['display']) ?>
                    </div>
                  </div>
                  <span aria-hidden="true">→</span>
                </a>
              <?php endforeach; ?>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container" style="display:flex;flex-wrap:wrap;justify-content:space-between;gap:2rem;">
      <div>
        <p class="brand-wordmark">rajaampatspeedboat.com</p>
        <p style="margin-top:0.5rem;max-width:22rem;"><?= e($t['footer_tagline']) ?></p>
        <p style="margin-top:0.5rem;"><?= e($t['footer_base']) ?></p>
      </div>
      <div>
        <?php foreach ($whatsapp_contacts as $contact): ?>
          <p class="tabular-nums" style="font-family:'JetBrains Mono',monospace;font-weight:600;margin-bottom:0.35rem;">
            <a href="https://wa.me/<?= e($contact['wa']) ?>" target="_blank" rel="noopener noreferrer">
              <?= e($contact['display']) ?>
            </a>
          </p>
        <?php endforeach; ?>
      </div>
    </div>
  </footer>

  <script src="assets/js/main.js"></script>
</body>
</html>
