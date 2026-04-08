# Praktyki-Solve – Git Poradnik

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

---

## Szybki start

Najczęściej używana sekwencja – wpisuj to za każdym razem gdy kończysz pracę:

```
git status
git add .
git commit -m "opis tego co zrobiłem"
git push
```

---

## Przydatne skróty VS Code

| Skrót | Działanie |
|---|---|
| `Ctrl + Shift + V` | Otwiera podgląd Markdown |
| `Ctrl + Shift + G` | Otwiera panel Git (Source Control) |
| `Ctrl + J` | Otwiera terminal |
| `Ctrl + Shift + P` | Paleta komend |

---

## Co robi dana komenda

### git status
```
git status
```
Pokazuje aktualny stan repozytorium – które pliki zostały zmienione, które są gotowe do commita (staged), a które są nowe i jeszcze nieśledzone (untracked). Dobry nawyk to uruchamiać go przed każdym `add` i `commit`.

---

### git add
```
git add .                  # dodaje wszystkie zmiany w projekcie
git add plik.py            # dodaje konkretny plik
git add folder/            # dodaje cały folder
```
Przenosi zmiany do obszaru przygotowanego (staging area). To jak pakowanie rzeczy do pudełka przed wysyłką – dopiero `commit` "zamyka" to pudełko.

---

### git commit
```
git commit -m "krótki, opisowy komunikat zmian"
```
Zapisuje przygotowane zmiany lokalnie jako punkt w historii projektu. Komunikat powinien opisywać **co** zostało zrobione, np. `"dodaj formularz logowania"`, `"napraw błąd w kalkulacji VAT"`.

---

### git push
```
git push                   # wysyła zmiany na zdalny branch
git push origin main       # jawne wskazanie brancha
git push -u origin main    # pierwsze wypchnięcie (ustawia tracking)
```
Wysyła lokalne commity na GitHub. Bez `push` zmiany istnieją tylko na Twoim komputerze. Przy pierwszym razie użyj `-u origin main`, później wystarczy samo `git push`.

---

### git pull / git fetch
```
git pull                   # pobiera zmiany i od razu łączy (fetch + merge)
git fetch --all            # tylko sprawdza co jest na serwerze, nic nie zmienia
```
`git pull` – pobiera najnowsze zmiany z GitHuba i od razu wgrywa je do Twojego projektu. Używaj przed rozpoczęciem pracy, żeby mieć aktualną wersję.

`git fetch` – tylko "zagląda" co jest na serwerze, ale nic nie zmienia lokalnie. Bezpieczniejsze gdy chcesz najpierw sprawdzić co się zmieniło.

---

### git branch / git checkout
```
git branch                 # lista wszystkich lokalnych branchy (* = aktualny)
git branch nazwa-brancha   # tworzy nowy branch
git checkout nazwa-brancha # przełącza się na wybrany branch
git checkout -b nazwa      # tworzy nowy branch i od razu się na niego przełącza
git branch -d nazwa        # usuwa branch (po scaleniu)
```
Branch to oddzielna "linia" pracy w projekcie – możesz wprowadzać zmiany nie ruszając głównego kodu na `main`. Używaj branchy do każdego nowego zadania czy funkcji, np. `P-8-test`.

Typowy przepływ pracy z branchami:
```
git branch P-8-moja-funkcja    # utwórz branch dla zadania
git checkout P-8-moja-funkcja  # przejdź na niego
# ... pracuj, rób commity ...
git checkout main              # wróć na main gdy skończysz
``` 
