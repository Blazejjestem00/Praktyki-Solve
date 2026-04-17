# Praktyki-Solve – Git Poradnik

> Prosty przewodnik po najważniejszych komendach Git. Wróć tu gdy zapomnisz co wpisać.

---

## Spis treści

- [Szybki start](#szybki-start)
- [Przydatne skróty VS Code](#przydatne-skróty-vs-code)
- [Co robi dana komenda](#co-robi-dana-komenda)
  - [git status](#git-status)
  - [git add](#git-add)
  - [git commit](#git-commit)
  - [git push](#git-push)
  - [git pull / git fetch](#git-pull--git-fetch)
  - [git branch / git checkout](#git-branch--git-checkout)
  - [Praca na branchu – pełny przepływ](#praca-na-branchu--pełny-przepływ)

---

## Szybki start

Najczęściej używana sekwencja – wpisuj to **za każdym razem** gdy kończysz pracę:

```bash
git status
git add .
git commit -m "opis tego co zrobiłem"
git push
```

---

## Przydatne skróty VS Code

| Skrót              | Działanie                          |
| :----------------- | :--------------------------------- |
| `Ctrl + Shift + V` | Otwiera podgląd Markdown           |
| `Ctrl + Shift + G` | Otwiera panel Git (Source Control) |
| `Ctrl + J`         | Otwiera terminal                   |
| `Ctrl + Shift + P` | Paleta komend                      |

---

## Co robi dana komenda

### git status

```bash
git status
```

> Pokazuje aktualny stan repozytorium – które pliki zostały zmienione, które są gotowe do commita (staged), a które są nowe i jeszcze nieśledzone (untracked).

Dobry nawyk: uruchamiaj przed każdym `add` i `commit`.

---

### git add

```bash
git add .                  # dodaje wszystkie zmiany w projekcie
git add plik.py            # dodaje konkretny plik
git add folder/            # dodaje cały folder
```

Przenosi zmiany do obszaru przygotowanego (staging area). To jak pakowanie rzeczy do pudełka przed wysyłką – dopiero `commit` "zamyka" to pudełko.

---

### git commit

```bash
git commit -m "krótki, opisowy komunikat zmian"
```

Zapisuje przygotowane zmiany lokalnie jako punkt w historii projektu. Komunikat powinien opisywać **co** zostało zrobione, np.:

- `"dodaj formularz logowania"`
- `"napraw błąd w kalkulacji VAT"`

---

### git push

```bash
git push                              # wysyła zmiany na zdalny branch
git push origin main                  # jawne wskazanie brancha
git push --set-upstream origin main   # pierwsze wypchnięcie (ustawia tracking)
```

Wysyła lokalne commity na GitHub. Bez `push` zmiany istnieją tylko na Twoim komputerze.

> Przy pierwszym pushu na nowym branchu użyj `--set-upstream origin nazwa-brancha`, później wystarczy samo `git push`.

---

### git pull / git fetch

```bash
git pull                   # pobiera zmiany z aktualnego brancha
git pull origin main       # pobiera zmiany z main (np. żeby mieć aktualną wersję)
git fetch --all            # tylko sprawdza co jest na serwerze, nic nie zmienia
```

- **`git pull`** – pobiera zmiany z brancha na którym jesteś.
- **`git pull origin main`** – pobiera zmiany z `main` na twój aktualny branch. Używaj tego gdy jesteś na swoim branchu i chcesz mieć najnowsze zmiany z main u siebie.
- **`git fetch`** – tylko "zagląda" co jest na serwerze, ale nic nie zmienia lokalnie.

---

### git branch / git checkout

```bash
git branch                 # lista wszystkich lokalnych branchy (* = aktualny)
git branch nazwa-brancha   # tworzy nowy branch
git checkout nazwa-brancha # przełącza się na wybrany branch
git checkout -b nazwa      # tworzy nowy branch i od razu się na niego przełącza
git branch -d nazwa        # usuwa branch (po scaleniu)
```

Branch to oddzielna "linia" pracy – możesz wprowadzać zmiany nie ruszając głównego kodu na `main`. Używaj branchy do każdego nowego zadania, np. `P-8-test`.

---

### Praca na branchu – pełny przepływ

Tak wygląda cała praca na branchu od początku do końca:

```bash
# 1. Pobierz najnowsze zmiany z main zanim zaczniesz
git checkout main
git pull origin main

# 2. Utwórz swój branch i przejdź na niego
git checkout -b P-8-moja-funkcja

# 3. Pracuj... wprowadzaj zmiany w plikach, a potem:
git status
git add .
git commit -m "opis co zrobiłem"

# 4. Jeśli w między czasie ktoś coś dodał do main – pobierz to:
git pull origin main

# 5. Wyślij swój branch na GitHub (pierwszy raz)
git push --set-upstream origin P-8-moja-funkcja

# 6. Kolejne commity i push już normalnie:
git add .
git commit -m "kolejna zmiana"
git push
```
