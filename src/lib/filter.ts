// Filter chip & search generik. Markup yang dibutuhkan:
//   [data-filter-group] berisi button[data-filter="all" | nilai]
//   elemen [data-filter-item][data-value="nilai"][data-name="nama"]
//   (opsional) [data-filter-search] untuk input pencarian teks
//   (opsional) [data-filter-status] untuk teks jumlah hasil
// Pilihan filter disimpan di URL (?filter=Duelist) supaya bisa dibagikan.
export function setupFilters(noun: string) {
  const group = document.querySelector<HTMLElement>("[data-filter-group]");
  if (!group || group.dataset.bound) return;
  group.dataset.bound = "1";

  const buttons = [...group.querySelectorAll<HTMLButtonElement>("button[data-filter]")];
  const items = [...document.querySelectorAll<HTMLElement>("[data-filter-item]")];
  const status = document.querySelector<HTMLElement>("[data-filter-status]");
  const searchInput = document.querySelector<HTMLInputElement>("[data-filter-search]");

  let activeFilter = "all";
  let activeQuery = "";

  function apply(value: string, query: string, updateUrl = true) {
    activeFilter = value;
    activeQuery = query.toLowerCase().trim();
    let shown = 0;

    items.forEach((el) => {
      const roleMatch = activeFilter === "all" || el.dataset.value === activeFilter;
      const name = el.dataset.name || el.textContent?.toLowerCase() || "";
      const queryMatch = !activeQuery || name.includes(activeQuery);
      const match = roleMatch && queryMatch;
      el.hidden = !match;
      if (match) shown++;
    });

    buttons.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.filter === activeFilter)));

    if (status) {
      if (shown === 0) {
        status.textContent = `Tidak ada ${noun.toLowerCase()} yang ditemukan${activeQuery ? ` untuk pencarian "${activeQuery}"` : ""}${activeFilter !== "all" ? ` dengan filter "${activeFilter}"` : ""}.`;
        status.classList.add("has-empty");
      } else {
        const queryText = activeQuery ? ` cocok dengan "${activeQuery}"` : "";
        const filterText = activeFilter === "all" ? "" : ` ${activeFilter}`;
        status.textContent = activeFilter === "all" && !activeQuery ? "" : `${shown} ${noun}${filterText}${queryText}`;
        status.classList.remove("has-empty");
      }
    }

    if (updateUrl) {
      const url = new URL(location.href);
      if (activeFilter === "all") url.searchParams.delete("filter");
      else url.searchParams.set("filter", activeFilter);
      history.replaceState(history.state, "", url);
    }
  }

  buttons.forEach((b) => b.addEventListener("click", () => apply(b.dataset.filter || "all", activeQuery)));

  if (searchInput) {
    searchInput.addEventListener("input", () => apply(activeFilter, searchInput.value, false));
  }

  const initial = new URL(location.href).searchParams.get("filter");
  if (initial && buttons.some((b) => b.dataset.filter === initial)) apply(initial, "", false);
}
